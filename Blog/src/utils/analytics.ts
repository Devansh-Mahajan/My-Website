import { createSign } from 'node:crypto';

const GOOGLE_TOKEN_AUDIENCE = 'https://oauth2.googleapis.com/token';
const ANALYTICS_SCOPE = 'https://www.googleapis.com/auth/analytics.readonly';

interface AccessTokenResponse {
        access_token: string;
        expires_in: number;
        token_type: string;
}

const base64UrlEncode = (value: string | Record<string, unknown>) => {
        const payload = typeof value === 'string' ? value : JSON.stringify(value);
        return Buffer.from(payload).toString('base64url');
};

const requestAccessToken = async (clientEmail: string, privateKey: string): Promise<string> => {
        const now = Math.floor(Date.now() / 1000);
        const header = { alg: 'RS256', typ: 'JWT' };
        const payload = {
                iss: clientEmail,
                scope: ANALYTICS_SCOPE,
                aud: GOOGLE_TOKEN_AUDIENCE,
                exp: now + 3600,
                iat: now,
        };

        const encodedHeader = base64UrlEncode(header);
        const encodedPayload = base64UrlEncode(payload);
        const signatureInput = `${encodedHeader}.${encodedPayload}`;

        const signer = createSign('RSA-SHA256');
        signer.update(signatureInput);
        signer.end();

        const signature = signer.sign(privateKey, 'base64url');
        const assertion = `${signatureInput}.${signature}`;

        const response = await fetch(GOOGLE_TOKEN_AUDIENCE, {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                        assertion,
                }),
        });

        if (!response.ok) {
                throw new Error(`Failed to obtain access token (${response.status})`);
        }

        const json = (await response.json()) as AccessTokenResponse;
        if (!json.access_token) {
                throw new Error('Access token missing from response');
        }

        return json.access_token;
};

const readPageViews = async (
        accessToken: string,
        propertyId: string,
        pagePath: string,
): Promise<number> => {
        const response = await fetch(
                `https://analyticsdata.googleapis.com/v1beta/properties/${propertyId}:runReport`,
                {
                        method: 'POST',
                        headers: {
                                Authorization: `Bearer ${accessToken}`,
                                'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                                dateRanges: [
                                        {
                                                startDate: '2023-01-01',
                                                endDate: 'today',
                                        },
                                ],
                                dimensions: [
                                        { name: 'pagePath' },
                                ],
                                metrics: [
                                        { name: 'screenPageViews' },
                                ],
                                dimensionFilter: {
                                        filter: {
                                                fieldName: 'pagePath',
                                                stringFilter: {
                                                        matchType: 'EXACT',
                                                        value: pagePath,
                                                },
                                        },
                                },
                                limit: 1,
                        }),
                },
        );

        if (!response.ok) {
                throw new Error(`Analytics query failed (${response.status})`);
        }

        const json = (await response.json()) as {
                rows?: Array<{ metricValues?: Array<{ value?: string }> }>;
        };

        const countString = json.rows?.[0]?.metricValues?.[0]?.value;
        const parsed = countString ? Number.parseInt(countString, 10) : 0;
        return Number.isNaN(parsed) ? 0 : parsed;
};

export const getGoogleAnalyticsPageViews = async (pagePath: string): Promise<number | null> => {
        const propertyId = import.meta.env.GOOGLE_ANALYTICS_PROPERTY_ID;
        const clientEmail = import.meta.env.GOOGLE_ANALYTICS_CLIENT_EMAIL;
        const rawPrivateKey = import.meta.env.GOOGLE_ANALYTICS_PRIVATE_KEY;

        if (!propertyId || !clientEmail || !rawPrivateKey) {
                return null;
        }

        const privateKey = rawPrivateKey.replace(/\\n/g, '\n');
        const accessToken = await requestAccessToken(clientEmail, privateKey);
        return readPageViews(accessToken, propertyId, pagePath);
};
