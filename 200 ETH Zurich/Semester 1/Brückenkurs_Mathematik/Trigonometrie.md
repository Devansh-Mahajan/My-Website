[[202_skript_trigonometrie.pdf]]

## 1. Einführung und Motivation (Skript 202)

### 1.1 Bedeutung

- Trigonometrische Funktionen sind essentiell zur Beschreibung von **Wellen** und **Schwingungen** 1, die in vielen Bereichen auftreten: Akustik (Schall), Optik (Licht), Mechanik (Pendel, Federn), Elektrotechnik (Wechselstrom), Astronomie 222222222.
    

### 1.2 Winkelmaße: Gradmaß vs. Bogenmaß (Radiant)

- **Gradmaß ($^\circ$):** Historisch, teilt den Vollkreis willkürlich in $360^\circ$ 3. Unpraktisch für höhere Mathematik4.
    
- **Bogenmaß (Radiant, rad):** Definiert den Winkel $\alpha$ über die **Länge des Kreisbogens** $\text{arc}(\alpha)$ im **Einheitskreis** (Radius $r=1$) 5. Dies ist das natürliche Maß in der Analysis.
    
    - **Einheit:** rad (oft weggelassen).
        
- Umrechnung: Da $360^\circ$ dem Umfang $2\pi r = 2\pi$ im Einheitskreis entsprechen6, gilt:
    
    $$\alpha_{\text{[rad]}} = \alpha_{\text{[deg]}} \cdot \frac{\pi}{180^\circ}$$
    
    $$\alpha_{\text{[deg]}} = \alpha_{\text{[rad]}} \cdot \frac{180^\circ}{\pi}$$
    
    7
    
- **Wichtige Werte:**
    
    - $0^\circ = 0$ rad
        
    - $90^\circ = \pi/2$ rad
        
    - $180^\circ = \pi$ rad
        
    - $360^\circ = 2\pi$ rad
        

---

## 2. Definition der Trigonometrischen Funktionen (Skript 202)

Die Definition erfolgt am **Einheitskreis** (Kreis mit Radius 1 um den Ursprung).

- Ein Punkt $P(x, y)$ bewegt sich auf dem Einheitskreis.
    
- Der Winkel $\alpha$ wird von der positiven x-Achse aus **gegen den Uhrzeigersinn** (mathematisch positiv) gemessen8888. Winkel $> 2\pi$ oder negative Winkel (im Uhrzeigersinn) sind möglich 9.
    

**Definitionen:** Für einen Winkel $\alpha$, sei $P(x, y)$ der zugehörige Punkt auf dem Einheitskreis. Dann ist 10:

- **Sinus:** $\sin(\alpha) := y$ (Die y-Koordinate des Punktes P).
    
- **Cosinus:** $\cos(\alpha) := x$ (Die x-Koordinate des Punktes P).
    
- **Tangens:** $\tan(\alpha) := \frac{y}{x} = \frac{\sin(\alpha)}{\cos(\alpha)}$
    
    - _Definitionslücken:_ $\alpha \neq \frac{\pi}{2} + k\pi$, $k \in \mathbb{Z}$ (weil $x=\cos(\alpha)=0$ wäre).
        
- **Cotangens:** $\cot(\alpha) := \frac{x}{y} = \frac{\cos(\alpha)}{\sin(\alpha)}$
    
    - _Definitionslücken:_ $\alpha \neq k\pi$, $k \in \mathbb{Z}$ (weil $y=\sin(\alpha)=0$ wäre).
        

---

## 3. Graphen und Eigenschaften (Skript 202)

### 3.1 Sinus- und Cosinusfunktion

- **Graph:** Beide Funktionen erzeugen die bekannte **Sinuskurve** (Sinusoid).
    
    - $\sin(x)$ startet bei $(0,0)$.
        
    - $\cos(x)$ startet bei $(0,1)$. Der Cosinusgraph ist gegenüber dem Sinusgraphen um $\pi/2$ nach links verschoben ($\cos(\alpha) = \sin(\alpha + \pi/2)$).
        
- **Wertebereich:** $[-1, 1]$ für beide11.
    
- **Periodizität:** Beide sind periodisch mit der **Periode $P = 2\pi$**12. D.h. $\sin(\alpha + 2\pi) = \sin(\alpha)$ und $\cos(\alpha + 2\pi) = \cos(\alpha)$.
    
- **Verhalten für kleine Winkel $\alpha$ (im Bogenmaß):**
    
    - $\sin(\alpha) \approx \alpha$ (aber $\sin(\alpha) < \alpha$ für $\alpha>0$)13.
        
- **Symmetrie:**
    
    - Sinus ist **ungerade** (punktsymmetrisch zum Ursprung): $\sin(-\alpha) = -\sin(\alpha)$14.
        
    - Cosinus ist **gerade** (achsensymmetrisch zur y-Achse): $\cos(-\alpha) = \cos(\alpha)$15.
        

### 3.2 Tangens- und Cotangensfunktion

- **Graph (Tangens):**
    
    - Nullstellen bei $k\pi$, $k \in \mathbb{Z}$.
        
    - **Vertikale Asymptoten** bei $\frac{\pi}{2} + k\pi$, $k \in \mathbb{Z}$16.
        
- **Wertebereich:** $\mathbb{R}$ für beide.
    
- **Periodizität:** Beide sind periodisch mit der **Periode $P = \pi$**17. D.h. $\tan(\alpha + \pi) = \tan(\alpha)$ und $\cot(\alpha + \pi) = \cot(\alpha)$.
    
- **Verhalten für kleine Winkel $\alpha$ (im Bogenmaß):**
    
    - $\tan(\alpha) \approx \alpha$ (aber $\tan(\alpha) > \alpha$ für $\alpha>0$)18.
        
- **Symmetrie:**
    
    - Tangens ist **ungerade:** $\tan(-\alpha) = -\tan(\alpha)$19.
        
    - Cotangens ist **ungerade:** $\cot(-\alpha) = -\cot(\alpha)$20.
        

### 3.3 Einige spezielle Funktionswerte

Herleitbar durch elementare Geometrie am Einheitskreis (z.B. für $30^\circ, 45^\circ, 60^\circ$).

|**Winkel (α)**|**0∘(0)**|**30∘(π/6)**|**45∘(π/4)**|**60∘(π/3)**|**90∘(π/2)**|
|---|---|---|---|---|---|
|$\sin(\alpha)$|0|$1/2$|$\sqrt{2}/2$|$\sqrt{3}/2$|1|
|$\cos(\alpha)$|1|$\sqrt{3}/2$|$\sqrt{2}/2$|$1/2$|0|
|$\tan(\alpha)$|0|$\sqrt{3}/3$|1|$\sqrt{3}$|undef.|
|$\cot(\alpha)$|undef.|$\sqrt{3}$|1|$\sqrt{3}/3$|0|
|21212121212121212121212121212121||||||

---

## 4. Umkehrfunktionen (Arcus-Funktionen) (Skript 109, 202)

Da die trigonometrischen Funktionen periodisch und somit nicht bijektiv (nicht injektiv) sind 22, muss ihr Definitionsbereich eingeschränkt werden, um eine eindeutige Umkehrfunktion definieren zu können23.

- **Arcussinus ($\arcsin$ oder $\sin^{-1}$):**
    
    - Einschränkung von $\sin$ auf $[-\pi/2, \pi/2]$24.
        
    - $\arcsin: [-1, 1] \to [-\pi/2, \pi/2]$.
        
    - $\arcsin(y)$ ist der _eindeutige_ Winkel $\alpha \in [-\pi/2, \pi/2]$, für den $\sin(\alpha) = y$ gilt25.
        
- **Arcuscosinus ($\arccos$ oder $\cos^{-1}$):**
    
    - Einschränkung von $\cos$ auf $[0, \pi]$26.
        
    - $\arccos: [-1, 1] \to [0, \pi]$.
        
    - $\arccos(x)$ ist der _eindeutige_ Winkel $\alpha \in [0, \pi]$, für den $\cos(\alpha) = x$ gilt27.
        
- **Arcustangens ($\arctan$ oder $\tan^{-1}$):**
    
    - Einschränkung von $\tan$ auf $]-\pi/2, \pi/2[$28.
        
    - $\arctan: \mathbb{R} \to ]-\pi/2, \pi/2[$.
        
    - $\arctan(y)$ ist der _eindeutige_ Winkel $\alpha \in ]-\pi/2, \pi/2[$, für den $\tan(\alpha) = y$ gilt29.
        

### 4.1 Lösen trigonometrischer Gleichungen (z.B. $\sin(x) = c$)

1. **Finde eine Lösung $x_1$:** Mit der passenden Arcus-Funktion (z.B. $x_1 = \arcsin(c)$) 30. Dies liefert die Lösung im Hauptintervall.
    
2. **Finde ggf. eine zweite Lösung $x_2$ im Basisintervall $[0, 2\pi[$:** Nutze Symmetrien am Einheitskreis oder Graphen 31.
    
    - Für $\sin(x)=c$: $x_2 = \pi - x_1$.
        
    - Für $\cos(x)=c$: $x_2 = 2\pi - x_1$ (oder $-\alpha$).
        
    - Für $\tan(x)=c$: Keine zweite Lösung im Intervall der Länge $\pi$.
        
3. **Addiere alle Vielfachen der Periode:** Um _alle_ Lösungen zu erhalten, addiere $k \cdot P$ (wobei $P$ die Periode ist) zu den Basislösungen 32.
    
    - Für $\sin(x)=c$: $L = \{x_1 + 2k\pi, x_2 + 2k\pi \mid k \in \mathbb{Z}\}$ 33.
        
    - Für $\cos(x)=c$: $L = \{\pm x_1 + 2k\pi \mid k \in \mathbb{Z}\}$.
        
    - Für $\tan(x)=c$: $L = \{x_1 + k\pi \mid k \in \mathbb{Z}\}$.
        

---

## 5. Fundamentale Beziehungen und Formeln (Skript 202)

Viele Beziehungen ergeben sich direkt aus der Definition am Einheitskreis.

### 5.1 Trigonometrischer Pythagoras

Aus $x^2 + y^2 = 1$ (Gleichung des Einheitskreises) und $x = \cos(\alpha)$, $y = \sin(\alpha)$ folgt:

$$\sin^2(\alpha) + \cos^2(\alpha) = 1$$

34

Notation: $\sin^2(\alpha)$ bedeutet $(\sin(\alpha))^2$.

### 5.2 Quotient- und Kehrwertbeziehungen

$$ \tan(\alpha) = \frac{\sin(\alpha)}{\cos(\alpha)} \quad \text{35}$$

$$ \cot(\alpha) = \frac{\cos(\alpha)}{\sin(\alpha)} \quad \text{36}$$

$$ \tan(\alpha) \cdot \cot(\alpha) = 1 \quad \text{37}$$

$$ 1 + \tan^2(\alpha) = \frac{1}{\cos^2(\alpha)} \quad \text{38}$$

$$ 1 + \cot^2(\alpha) = \frac{1}{\sin^2(\alpha)} \quad \text{39}$$

### 5.3 Symmetrien und Verschiebungen

Diese folgen direkt aus der Betrachtung entsprechender Winkel am Einheitskreis:

- **Negative Winkel:** $\sin(-\alpha)=-\sin(\alpha)$, $\cos(-\alpha)=\cos(\alpha)$, $\tan(-\alpha)=-\tan(\alpha)$40.
    
- **Phasenverschiebung um $\pi/2$:** $\sin(\alpha+\pi/2)=\cos(\alpha)$, $\cos(\alpha+\pi/2)=-\sin(\alpha)$ 41.
    
- **Supplementärwinkel:** $\sin(\alpha)=\sin(\pi-\alpha)$, $\cos(\alpha)=-\cos(\pi-\alpha)$42.
    

### 5.4 Additionstheoreme

Ermöglichen die Berechnung von Funktionswerten für Summen/Differenzen von Winkeln 43.

$$\sin(\alpha \pm \beta) = \sin(\alpha)\cos(\beta) \pm \cos(\alpha)\sin(\beta)$$

$$\cos(\alpha \pm \beta) = \cos(\alpha)\cos(\beta) \mp \sin(\alpha)\sin(\beta)$$

$$\tan(\alpha \pm \beta) = \frac{\tan(\alpha) \pm \tan(\beta)}{1 \mp \tan(\alpha)\tan(\beta)}$$

44

### 5.5 Doppel-, Halbe- und Dreifachwinkelformeln

Folgen aus den Additionstheoremen (z.B. $\sin(2\alpha) = \sin(\alpha+\alpha) = \ldots$)45454545.

- $\sin(2\alpha) = 2 \sin(\alpha)\cos(\alpha)$ 46
    
- $\cos(2\alpha) = \cos^2(\alpha) - \sin^2(\alpha)$ 47
    
- $\sin^2(\frac{\alpha}{2}) = \frac{1-\cos(\alpha)}{2}$ 48
    
- $\cos^2(\frac{\alpha}{2}) = \frac{1+\cos(\alpha)}{2}$ 49
    

---

## 6. Trigonometrie im Dreieck (Skript 202)

Die Verbindung zwischen den am Einheitskreis definierten Funktionen und der Geometrie von Dreiecken.

### 6.1 Rechtwinkliges Dreieck

Sei $\alpha$ einer der spitzen Winkel.

- **Hypotenuse (HYP):** Seite gegenüber dem rechten Winkel.
    
- **Ankathete (AK):** Kathete, die am Winkel $\alpha$ anliegt.
    
- **Gegenkathete (GK):** Kathete, die dem Winkel $\alpha$ gegenüberliegt.
    

Durch Ähnlichkeit des Dreiecks zum entsprechenden Dreieck im Einheitskreis ergeben sich die fundamentalen Beziehungen 50505050:

$$\sin(\alpha) = \frac{\text{GK}}{\text{HYP}}$$

$$\cos(\alpha) = \frac{\text{AK}}{\text{HYP}}$$

$$\tan(\alpha) = \frac{\text{GK}}{\text{AK}}$$

$$\cot(\alpha) = \frac{\text{AK}}{\text{GK}}$$

51

### 6.2 Allgemeines Dreieck

Für beliebige Dreiecke gelten Sinus- und Cosinussatz. Sie erweitern die Berechnungen auf nicht-rechtwinklige Fälle.

- Sinussatz: Stellt eine Beziehung zwischen Seiten und den Sinuswerten der gegenüberliegenden Winkel her 52525252.
    
    $$\frac{a}{\sin(\alpha)} = \frac{b}{\sin(\beta)} = \frac{c}{\sin(\gamma)}$$
    
    oder äquivalent:
    
    $$\frac{\sin(\alpha)}{a} = \frac{\sin(\beta)}{b} = \frac{\sin(\gamma)}{c}$$
    
    Anwendung: Bei gegebenen Winkel-Gegenseite-Paaren (WSW, SsW).
    
- Cosinussatz: Verallgemeinert den Satz des Pythagoras 535353535353535353.
    
    $$c^2 = a^2 + b^2 - 2ab \cos(\gamma)$$
    
    $$b^2 = a^2 + c^2 - 2ac \cos(\beta)$$
    
    $$a^2 = b^2 + c^2 - 2bc \cos(\alpha)$$
    
    54Der Korrekturterm $-2ab \cos(\gamma)$ wird 0, wenn $\gamma = 90^\circ$ ($\cos(90^\circ)=0$), womit man den Pythagoras erhält 55.
    
    Anwendung: Bei gegebenen drei Seiten (SSS) oder zwei Seiten und dem eingeschlossenen Winkel (SWS) 56.
    

---

## 7. Harmonische Schwingungen (Skript 202)

Modellierung realer Schwingungsprozesse durch Modifikation der Basis-Sinus/Cosinus-Funktion.

Allgemeine Form:

$$f(t) = A \cdot \sin(\omega t + \varphi)$$

57

oder alternativ $f(t) = A \cdot \cos(\omega t + \varphi)$.

- **$A$: Amplitude**
    
    - Maximaler Ausschlag der Schwingung aus der Ruhelage 58.
        
    - $A$ beeinflusst die Lautstärke eines Tons59.
        
- **$\omega$: Kreisfrequenz (Winkelgeschwindigkeit)**
    
    - Gibt an, welcher Winkel pro Zeiteinheit im Einheitskreis überstrichen wird 60. $\omega > 0$.
        
    - Beziehung zur Periode $T$: $\omega = \frac{2\pi}{T}$61.
        
    - Großes $\omega \implies$ schnelle Schwingung, kleine Periode. $\omega$ beeinflusst die Tonhöhe62.
        
- **$T$: Periode (Schwingungsdauer)**
    
    - Zeit für einen vollständigen Schwingungsdurchlauf 63. $T = \frac{2\pi}{\omega}$64.
        
- **$F$: Frequenz**
    
    - Anzahl der Schwingungen pro Zeiteinheit65.
        
    - $F = \frac{1}{T} = \frac{\omega}{2\pi}$66666666. Einheit: Hertz (Hz = $1/s$).
        
- **$\varphi$: Phasenverschiebung (Nullphasenwinkel)**
    
    - Bestimmt den Startpunkt der Schwingung bei $t=0$ 67.
        
    - $f(t) = \sin(t + \varphi)$ verschiebt den Graphen horizontal.
        
    - **$\varphi > 0$: Verschiebung nach links** 68686868.
        
    - **$\varphi < 0$: Verschiebung nach rechts**69.