[[203_skript_exponentialfunktionen.pdf]]
[[204_skript_logarithmen.pdf]]

## 1. Exponentialfunktionen (Skript 203)

Exponentialfunktionen modellieren Prozesse, bei denen sich eine Größe in gleichen Schritten **multiplikativ** um denselben Faktor verändert. Dies unterscheidet sie grundlegend von linearen (additive Veränderung) oder Potenzfunktionen (variabler multiplikativer Faktor) 1111.

### 1.1 Definition

- Eine Funktion der Form $f(x) = c \cdot a^x$ heißt **Exponentialfunktion** 2.
    
    - **Basis $a$:** $a \in \mathbb{R}$, $a > 0$, $a \neq 1$.
        
    - **Koeffizient $c$:** $c \in \mathbb{R}$, $c \neq 0$.
        
    - **Definitionsbereich:** $\mathbb{D} = \mathbb{R}$.
        
- **Wichtiger Unterschied zu Potenzfunktionen:** Bei Exponentialfunktionen $a^x$ steht die Variable im Exponenten, bei Potenzfunktionen $x^p$ steht sie in der Basis 3.
    

### 1.2 Charakteristische Eigenschaft

- Multiplikative Veränderung: Wenn der Input $x$ um 1 erhöht wird, wird der Output $f(x)$ mit dem Faktor $a$ multipliziert:
    
    $$f(x+1) = c \cdot a^{x+1} = c \cdot a^x \cdot a^1 = f(x) \cdot a$$
    
    4444
    
- **Wachstum vs. Zerfall:**
    
    - $a > 1$: Der Wert wird bei $x \to x+1$ vergrößert (exponentielles **Wachstum**).
        
    - $0 < a < 1$: Der Wert wird bei $x \to x+1$ verkleinert (exponentieller **Zerfall**).
        

### 1.3 Grapheigenschaften ($f(x) = c \cdot a^x$ mit $c>0$)

- **Keine Nullstellen:** $a^x$ ist immer positiv für $a>0$, daher ist $c \cdot a^x$ nie Null5.
    
- **Positivität:** $f(x) > 0$ für alle $x$, wenn $c>0$.
    
- **y-Achsenabschnitt:** $f(0) = c \cdot a^0 = c \cdot 1 = c$. Der Graph schneidet die y-Achse bei $(0, c)$ 6.
    
- **Monotonie:**
    
    - **Streng monoton wachsend** für $a > 1$7777.
        
    - **Streng monoton fallend** für $0 < a < 1$8888.
        
- **Injektivität:** Exponentialfunktionen sind injektiv (da streng monoton).
    
- **Asymptote:** Die x-Achse ($y=0$) ist eine **horizontale Asymptote**.
    
    - Für $a > 1$: $f(x) \to 0$ für $x \to -\infty$.
        
    - Für $0 < a < 1$: $f(x) \to 0$ für $x \to +\infty$ 9.
        
- **Symmetrie:** Die Graphen von $y = a^x$ und $y = (1/a)^x = a^{-x}$ sind **achsensymmetrisch bezüglich der y-Achse** 10101010.
    
- **Einfluss von $c$:** Der Faktor $c$ bewirkt eine **Streckung/Stauchung** des Graphen von $a^x$ in y-Richtung11111111.
    

### 1.4 Exponentialfunktionen aufstellen

- **Problemstellung:** Eine Größe $y$ ver-p-facht sich, wenn $x$ um $q$ erhöht wird. Gesucht ist $f(x) = c \cdot a^x$.
    
- **Ansatz:** $f(x+q) = p \cdot f(x)$.
    
- **Herleitung der Basis $a$:**
    
    - $c \cdot a^{x+q} = p \cdot (c \cdot a^x)$
        
    - $a^x \cdot a^q = p \cdot a^x$
        
    - $a^q = p \implies a = \sqrt[q]{p} = p^{1/q}$ 12121212.
        
- **Funktionsgleichung:** $f(x) = c \cdot (\sqrt[q]{p})^x = c \cdot (p^{1/q})^x = c \cdot p^{x/q}$13.
    
    - $c$ ist der Startwert $f(0)$.
        
- **Beispiele:**
    
    - **Bakterien (Verdopplung alle 20 min):** $q=20$, $p=2$. Basis $a = \sqrt[20]{2}$. Funktion $B(t) = B_0 \cdot (\sqrt[20]{2})^t = B_0 \cdot 2^{t/20}$ ($t$ in Minuten) 141414141414141414141414141414141414141414141414141414141414141414141414.
        
    - **Radioaktiver Zerfall (Halbierung alle 8 Tage):** $q=8$, $p=0.5$. Basis $a = \sqrt[8]{0.5}$. Funktion $I(t) = I_0 \cdot (\sqrt[8]{0.5})^t = I_0 \cdot (0.5)^{t/8}$ ($t$ in Tagen) 151515151515151515.
        

### 1.5 Die Eulersche Zahl $e$ und die natürliche Exponentialfunktion $\exp(x)$

- **Motivation 1: Stetige Verzinsung:** Der Wert $(1 + \frac{1}{n})^n$ (Kapital nach 1 Jahr bei 100% Zins, $n$-maliger unterjähriger Zinsgutschrift) nähert sich für $n \to \infty$ einem Grenzwert 16161616.
    
- **Motivation 2: Wachstum proportional zum Bestand:** Die Suche nach der Basis $a$, für die die Funktion $f(x)=a^x$ an jeder Stelle $x$ die Steigung $f'(x) = f(x)$ hat, führt ebenfalls auf den Grenzwert von $(1 + \frac{1}{n})^n$ 171717171717171717.
    
- Definition: Die Eulersche Zahl $e$ ist dieser Grenzwert:
    
    $$e = \lim_{n\to\infty} \left(1 + \frac{1}{n}\right)^n \approx 2.7182818284...$$
    
    18181818
    
- **Natürliche Exponentialfunktion:** $\exp(x) := e^x$.
    
- **Eigenschaften von $e$:**
    
    - **Irrational:** $e$ kann nicht als Bruch $p/q$ geschrieben werden 19191919.
        
    - **Transzendent:** $e$ ist keine Lösung einer Polynomgleichung mit ganzzahligen Koeffizienten 20202020.
        
- **Wachstumsvergleich:** $e^x$ wächst für $x \to \infty$ schneller als jede Potenzfunktion $x^p$ (für festes $p$) 21212121. Formal: $\lim_{x\to\infty} \frac{e^x}{x^p} = \infty$ 22.
    

### 1.6 Die Form $f(x) = c \cdot e^{rx}$

- **Äquivalenz:** Jede Exponentialfunktion $f(x) = c \cdot a^x$ kann auch als $f(x) = c \cdot e^{rx}$ geschrieben werden (und umgekehrt), wobei $a = e^r$ bzw. $r = \ln(a)$ 23.
    
- **Vorteil:** Der Parameter $r$ repräsentiert die **relative Wachstumsrate**. Wenn $f'(x)$ die momentane Änderungsrate (Steigung) ist, dann gilt für $f(x)=c \cdot e^{rx}$: $f'(x) = r \cdot f(x)$ 24242424. $r$ gibt an, welcher Bruchteil des aktuellen Bestands pro Zeiteinheit hinzukommt (bei $r>0$) oder wegfällt (bei $r<0$).
    
- **Anwendungen in Naturwissenschaften:** Diese Form wird oft bevorzugt, wenn Wachstums- oder Zerfallsraten im Vordergrund stehen25252525. Beispiele:
    
    - Radioaktiver Zerfall: $N(t) = N_0 e^{-\lambda t}$ ($\lambda$ ist die Zerfallskonstante) 26.
        
    - Kondensatorentladung: $U(t) = U_0 e^{-t/(RC)}$ 27.
        
    - Barometrische Höhenformel: $p(h) = p_0 e^{-(\rho_0 g / p_0) h}$ 28.
        
    - Strahlungsabsorption: $I(d) = I_0 e^{-\mu d}$ ($\mu$ ist der Absorptionskoeffizient) 29.
        

---

## 2. Logarithmen (Skript 204)

Logarithmen sind die Umkehroperation zur Exponentiation und wurden historisch eingeführt, um Berechnungen zu vereinfachen.

### 2.1 Motivation: Napier und Briggs

- **Idee:** Multiplikation/Division durch Addition/Subtraktion ersetzen 30.
    
- **Grundlage:** Potenzgesetz $B^x \cdot B^y = B^{x+y}$ 31.
    
- **Logarithmus:** Der Exponent $x$, zu dem eine Basis $B$ potenziert werden muss, um eine Zahl $a$ zu erhalten ($a = B^x$)32323232.
    
- **Verfahren (Multiplikation $a \cdot b$):**
    
    1. Finde $x = \log_{10}(a)$ und $y = \log_{10}(b)$ (aus Tabellen 33).
        
    2. Addiere die Logarithmen: $z = x+y$.
        
    3. Finde die Zahl (Numerus), deren Logarithmus $z$ ist: $10^z$. Das ist das Ergebnis $a \cdot b$ 34343434.
        

### 2.2 Definition

- **Logarithmus von $a$ zur Basis $B$:** $x = \log_B(a)$ ist diejenige reelle Zahl $x$, für die $a = B^x$ gilt 35353535.
    
    - **Bedingungen:** $a > 0$ (Argument), $B > 0$, $B \neq 1$ (Basis)36363636.
        
- **Spezielle Notationen:**
    
    - **Zehnerlogarithmus:** $\log(a)$ oder $\lg(a) = \log_{10}(a)$37373737.
        
    - **Natürlicher Logarithmus:** $\ln(a) = \log_e(a)$38383838.
        
    - **Binärlogarithmus:** $\text{lb}(a) = \log_2(a)$39393939.
        
- **Wichtiger Wert:** $\log_B(1) = 0$ für jede Basis $B$, da $B^0 = 1$40404040.
    

### 2.3 Triviale Identitäten

Diese folgen direkt aus der Definition $a=B^x \iff x=\log_B(a)$:

- **Identität I:** $B^{\log_B(a)} = a$41414141.
    
- **Identität II:** $\log_B(B^x) = x$42424242.
    

### 2.4 Logarithmusgesetze

Diese sind direkte "Übersetzungen" der Potenzgesetze in die Sprache der Logarithmen (Exponenten). Für $a, b > 0$, $B>0, B\neq 1$:

- **(L1) Produktregel:** $\log_B(a \cdot b) = \log_B(a) + \log_B(b)$ 43.
    
    - _Herleitung:_ Aus $a=B^x, b=B^y \implies a \cdot b = B^{x+y}$. Logarithmieren beider Seiten ergibt $\log_B(a \cdot b) = x+y = \log_B(a) + \log_B(b)$ 44.
        
- **(L2) Quotientenregel:** $\log_B(\frac{a}{b}) = \log_B(a) - \log_B(b)$ 45.
    
    - _Herleitung:_ Aus $a/b = B^x / B^y = B^{x-y}$.
        
- **(L3) Potenzregel:** $\log_B(a^r) = r \cdot \log_B(a)$ (für $r \in \mathbb{R}$) 46.
    
    - _Herleitung:_ Aus $a=B^x \implies a^r = (B^x)^r = B^{x \cdot r}$. Logarithmieren ergibt $\log_B(a^r) = x \cdot r = r \cdot \log_B(a)$ 47.
        
- **Spezialfälle von L3:**
    
    - $\log_B(\frac{1}{a}) = \log_B(a^{-1}) = -1 \cdot \log_B(a) = -\log_B(a)$48484848.
        
    - $\log_B(\sqrt[n]{a}) = \log_B(a^{1/n}) = \frac{1}{n} \cdot \log_B(a)$49494949.
        

### 2.5 Lösen von Exponentialgleichungen

Logarithmusgesetz L3 ist der "Nussknacker" 50505050.

- **Strategie:** Logarithmiere beide Seiten der Gleichung (zu einer beliebigen, passenden Basis). Das Gesetz L3 erlaubt es, die Variable aus dem Exponenten "herunterzuholen".
    
- **Beispiel 1:** $2^x = 3$.
    
    - $\log(2^x) = \log(3)$
        
    - $x \cdot \log(2) = \log(3)$
        
    - $x = \frac{\log(3)}{\log(2)}$ 51515151.
        
- **Beispiel 2:** $2^{x-1} = 0.51^{3x}$.
    
    - $\text{lb}(2^{x-1}) = \text{lb}(0.51^{3x})$ (Basis 2 gewählt)52.
        
    - $(x-1) \cdot \underbrace{\text{lb}(2)}_{=1} = 3x \cdot \text{lb}(0.51)$ 53.
        
    - $x-1 = 3x \cdot \text{lb}(0.51)$.
        
    - Dies ist eine lineare Gleichung für $x$, die gelöst werden kann 54.
        
- **Anwendung Dopingkontrolle:** $C(t) = C_0 \cdot (0.5)^{t/T_{1/2}}$. Gesucht $t$ für $C(t) = C_{Grenze}$.
    
    - $C_0 \cdot (0.5)^{t/T_{1/2}} = C_{Grenze}$
        
    - $(0.5)^{t/T_{1/2}} = C_{Grenze} / C_0$
        
    - $\log((0.5)^{t/T_{1/2}}) = \log(C_{Grenze} / C_0)$
        
    - $\frac{t}{T_{1/2}} \cdot \log(0.5) = \log(C_{Grenze}) - \log(C_0)$
        
    - $t = T_{1/2} \cdot \frac{\log(C_{Grenze}) - \log(C_0)}{\log(0.5)}$ 55.
        

### 2.6 Basisumrechnung

Um $\log_U(a)$ (unbequeme Basis $U$) mit einer bequemen Basis $B$ (z.B. 10, e, 2) zu berechnen:

- Formel:
    
    $$\log_U(a) = \frac{\log_B(a)}{\log_B(U)}$$
    
    56565656
    
- **Herleitung:**
    
    - Sei $x = \log_U(a)$. Dann ist $U^x = a$.
        
    - Logarithmiere beide Seiten zur Basis $B$: $\log_B(U^x) = \log_B(a)$.
        
    - Wende L3 an: $x \cdot \log_B(U) = \log_B(a)$.
        
    - Löse nach $x$ auf: $x = \frac{\log_B(a)}{\log_B(U)}$ 57.
        

### 2.7 Graph der Logarithmusfunktion $y = \log_B(x)$

- **Definitionsbereich:** $\mathbb{D} = \mathbb{R}_{>0}$ (nur positive Zahlen haben Logarithmen).
    
- **Nullstelle:** Bei $x=1$, da $\log_B(1)=0$.
    
- **Vertikale Asymptote:** Die y-Achse ($x=0$).
    
- **Monotonie:**
    
    - **Streng monoton wachsend** für $B > 1$.
        
    - **Streng monoton fallend** für $0 < B < 1$.
        
- **Verlauf:** Geht durch $(B^{-1}, -1)$, $(1, 0)$, $(B, 1)$, $(B^2, 2)$, etc. 58.
    
- **Einfluss der Basis $B$ ($B>1$):** Je **größer** die Basis $B$, desto **flacher** verläuft der Graph für $x>1$ und desto **steiler** für $0<x<1$ 59595959.
    

---

## 3. Exponential- und Logarithmusfunktionen als Inverse (Skript 204)

### 3.1 Bijektivität

- Logarithmusfunktionen $\log_B: \mathbb{R}_{>0} \to \mathbb{R}$ sind **bijektiv** 60:
    
    - **Injektiv:** Da streng monoton 61.
        
    - **Surjektiv:** Jede reelle Zahl $y$ wird als Funktionswert angenommen (nämlich für $x=B^y$) 62.
        
- Exponentialfunktionen $\exp_B: \mathbb{R} \to \mathbb{R}_{>0}$ sind ebenfalls **bijektiv**.
    

### 3.2 Die Umkehrbeziehung

- Die Logarithmusfunktion zur Basis $B$, $\log_B(x)$, ist die **Umkehrfunktion** der Exponentialfunktion zur Basis $B$, $\exp_B(x) = B^x$, und umgekehrt 63636363.
    
- Dies drückt sich in den "trivialen Identitäten" aus:
    
    - $f^{-1}(f(x)) = x \implies \log_B(B^x) = x$.
        
    - $f(f^{-1}(y)) = y \implies B^{\log_B(y)} = y$.
        

### 3.3 Graphische Symmetrie

- Die Graphen einer Funktion $f$ und ihrer Umkehrfunktion $f^{-1}$ sind **spiegelsymmetrisch bezüglich der Winkelhalbierenden des 1. und 3. Quadranten** (der Geraden $y=x$) 64.
    
- Dies gilt insbesondere für $y=B^x$ und $y=\log_B(x)$65656565. Wenn $(x_0, y_0)$ auf dem Graphen von $B^x$liegt ($y_0 = B^{x_0}$), dann liegt $(y_0, x_0)$ auf dem Graphen von $\log_B(x)$ (weil $x_0 = \log_B(y_0)$).