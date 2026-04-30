import { Octokit } from '@octokit/rest'

const OWNER = process.env.GITHUB_REPO_OWNER!
const REPO = process.env.GITHUB_REPO_NAME!

function client() {
  return new Octokit({ auth: process.env.GITHUB_PAT })
}

export async function getTree() {
  const { data } = await client().git.getTree({
    owner: OWNER,
    repo: REPO,
    tree_sha: 'main',
    recursive: '1',
  })
  return data.tree
}

export async function readBinary(path: string) {
  const { data } = await client().repos.getContent({
    owner: OWNER,
    repo: REPO,
    path,
    ref: 'main',
  })
  if (Array.isArray(data) || data.type !== 'file') throw new Error('Not a file')
  return {
    buffer: Buffer.from(data.content.replace(/\n/g, ''), 'base64'),
    sha: data.sha,
  }
}

export async function readFile(path: string) {
  const { data } = await client().repos.getContent({
    owner: OWNER,
    repo: REPO,
    path,
    ref: 'main',
  })
  if (Array.isArray(data) || data.type !== 'file') throw new Error('Not a file')
  return {
    content: Buffer.from(data.content, 'base64').toString('utf-8'),
    sha: data.sha,
  }
}

export async function writeFile(
  path: string,
  content: string,
  message: string,
  sha?: string,
) {
  await client().repos.createOrUpdateFileContents({
    owner: OWNER,
    repo: REPO,
    path,
    message,
    content: Buffer.from(content, 'utf-8').toString('base64'),
    sha,
    branch: 'main',
  })
}

export async function deleteFile(path: string, sha: string, message: string) {
  await client().repos.deleteFile({
    owner: OWNER,
    repo: REPO,
    path,
    message,
    sha,
    branch: 'main',
  })
}

export async function uploadBinary(
  path: string,
  data: Buffer,
  message: string,
  sha?: string,
) {
  await client().repos.createOrUpdateFileContents({
    owner: OWNER,
    repo: REPO,
    path,
    message,
    content: data.toString('base64'),
    sha,
    branch: 'main',
  })
}
