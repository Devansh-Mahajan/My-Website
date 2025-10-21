[[106_skript_funktionen_grundlagen.pdf]]
[[107_skript_lineare_funktionen.pdf]]
[[108_skript_quadratische_funktionen.pdf]]
[[109_skript_bijektive_funktionen_und_umkehrfunktionen.pdf]]

## 1. Grundlagen der Funktionen (Skript 106)

### 1.1 Was ist eine Funktion?

- **Alltagsbeispiele:** Die Schattenlänge eines Stabes hängt von der Tageszeit ab 1; der Preis einer Ware vom Gewicht 2; die Fallstrecke von der Fallzeit 3; die Blutgruppe von einer Person4. Eine Funktion beschreibt eine **Abhängigkeit**oder **Zuordnung** zwischen zwei Größen 55555.
    
- **Historische Entwicklung:** Das Konzept entwickelte sich über Jahrhunderte, von Eratosthenes 6666über Oresme 7bis zu Leibniz (Ende 17. Jhdt.), der den Begriff im Kontext von Kurvensteigungen prägte 8. Euler (18. Jhdt.) lieferte die erste systematische Darstellung und Definitionen, die auf analytischen Ausdrücken oder Abhängigkeiten basierten 999999999.
    
- **Formale Definition:** Eine Funktion $f$ ist eine **Zuordnung**, die jedem Element $x$ einer ersten Menge $\mathbb{D}$ (Definitionsmenge, Inputmenge) **genau ein** Element $y$ oder $f(x)$ einer zweiten Menge $\mathbb{W}$ (Wertemenge, Zielmenge, Outputmenge) zuordnet101010.
    
    - Die Zuordnung erfolgt nach einer bestimmten **Regel** oder **Formel**11.
        
    - **Eindeutigkeit:** Jedem $x \in \mathbb{D}$ wird _nur ein_ $y \in \mathbb{W}$ zugeordnet12. Mehrwertige Zuordnungen (z.B. $y = \pm \sqrt{x}$) sind _keine_ Funktionen im modernen Sinn13.
        
    - Es ist jedoch erlaubt, dass verschiedene $x$-Werte auf denselben $y$-Wert abgebildet werden (z.B. $f(x)=x^2$mit $f(2)=f(-2)=4$)14141414.
        

### 1.2 Darstellung und Notation

- **Mengendiagramme ("Wolken"):** Veranschaulichen die Zuordnung von Elementen aus $\mathbb{D}$ zu Elementen in $\mathbb{W}$ 15. Sie zeigen, dass jedem $x$ genau ein Pfeil entspringt, aber bei einem $y$ mehrere Pfeile ankommen dürfen16. Eine Zuordnung, bei der von einem $x$ mehrere Pfeile ausgehen, ist keine Funktion 17.
    
- **Funktionsmaschine:** Stellt die Funktion als Verarbeitungsprozess dar: Input $x$ wird in die "Maschine" $f$gegeben und zum Output $f(x)$ verarbeitet 181818181818181818.
    
- **Schreibweisen:**
    
    - **Funktionsgleichung:** $y = f(x)$ (z.B. $y = x^2$)19191919.
        
    - **Zuordnungsvorschrift:** $f: x \mapsto f(x)$ (z.B. $f: x \mapsto \sqrt{x}$)20.
        
    - **Mit Definitions-/Wertebereich:** $f: \mathbb{D} \to \mathbb{W}, x \mapsto f(x)$ (z.B. $f: \mathbb{R}^+ \to \mathbb{R}^+, x \mapsto \sqrt{x}$)21.
        
    - **Funktionswert:** $f(a)$ bezeichnet den Output für den Input $a$ (z.B. $f(16) = 4$ für $f(x) = \sqrt{x}$) 22.
        

### 1.3 Wichtige Begriffe (Terminologie)

- **Funktion / Abbildung:** Synonyme.
    
- **$f(x)$:** Funktionswert an der Stelle $x$; Bild von $x$ unter $f$.
    
- **$x$:** Unabhängige Variable; Argument; Urbild von $f(x)$.
    
- **$y$ (oder $f(x)$):** Abhängige Variable 26.
    
- **$\mathbb{D}$:** Definitionsmenge / Definitionsbereich / Domain / Urbildmenge: Menge aller erlaubten Inputs.
    
- **$\mathbb{W}$:** Wertemenge / Wertebereich / Codomain / Zielmenge: Eine Menge, die alle möglichen Outputs enthält.
    
- **Bildmenge / Range:** Die Menge aller _tatsächlich_ vorkommenden Funktionswerte $\{f(x) \mid x \in \mathbb{D}\}$. Die Bildmenge ist eine Teilmenge der Zielmenge/Wertemenge.
    
    - _Beispiel:_ Für $f(x) = x^2$ mit $f: \mathbb{R} \to \mathbb{R}$ ist $\mathbb{R}$ die Zielmenge, aber $\mathbb{R}_0^+$ die Bildmenge.
        

---

## 2. Lineare Funktionen (Skript 107)

Der einfachste Funktionstyp, dessen Graph eine Gerade ist.

### 2.1 Definition

- Eine Funktion $f$ heißt **linear**, wenn ihre Funktionsgleichung die Form $f(x) = a \cdot x + b$ hat 31.
    
- $a, b \in \mathbb{R}$ sind feste Parameter, wobei $a \neq 0$ (sonst wäre es eine konstante Funktion)32.
    
- Lineare Funktionen sind **Polynomfunktionen 1. Grades**33.
    

### 2.2 Der Graph: Die Gerade

- Der Graph einer linearen Funktion ist immer eine **Gerade**34343434.
    

### 2.3 Bedeutung der Parameter $a$ und $b$

- **$b$: y-Achsenabschnitt**
    
    - $f(0) = a \cdot 0 + b = b$ 35.
        
    - Der Graph schneidet die y-Achse im Punkt $(0, b)$36363636.
        
- **$a$: Steigung**
    
    - Die Steigung ist das Verhältnis der Output-Änderung ($\Delta y$) zur Input-Änderung ($\Delta x$): $a = \frac{\Delta y}{\Delta x} = \frac{f(x_2) - f(x_1)}{x_2 - x_1}$ 37.
        
    - Sie gibt an, um wie viel sich der Output $y$ ändert, wenn der Input $x$ um 1 erhöht wird383838383838383838.
        
    - $f(x+\Delta x) = a(x+\Delta x) + b = (ax+b) + a\Delta x = f(x) + a\Delta x$. Also $\Delta y = f(x+\Delta x) - f(x) = a\Delta x$ 39. Daraus folgt $\frac{\Delta y}{\Delta x} = a$.
        
    - $a > 0$: Gerade steigt (streng monoton wachsend)41.
        
    - $a < 0$: Gerade fällt (streng monoton fallend) 42.
        
    - $a = 0$: Horizontale Gerade (konstante Funktion, nicht linear nach Definition hier)43.
        
    - Eine vertikale Gerade hat _keine_ definierte Steigung ($\Delta x = 0$) 44444444. Steigung $1$ ($100\%$) bedeutet einen $45^\circ$-Winkel 45.
        

### 2.4 Typische Aufgaben

- **Graph zeichnen:**
    
    1. Zeichne den y-Achsenabschnitt $(0, b)$ ein46.
        
    2. Gehe von $(0, b)$ aus $\Delta x$ Einheiten nach rechts und $\Delta y = a \cdot \Delta x$ Einheiten nach oben/unten (Steigungsdreieck)47.
        
    3. Verbinde die Punkte zu einer Geraden.
        
    
    - _Alternativ:_ Berechne zwei beliebige Punkte (z.B. Schnittpunkte mit Achsen) und verbinde sie 484848484848484848.
        
- **Liegt ein Punkt $P(x_p, y_p)$ auf der Geraden $y=ax+b$?**
    
    - Überprüfe, ob $y_p = a \cdot x_p + b$ eine wahre Aussage ist 49494949.
        
- **Funktionsgleichung aus zwei Punkten $P(x_1, y_1)$ und $Q(x_2, y_2)$ finden:**
    
    1. Berechne die Steigung: $a = \frac{y_2 - y_1}{x_2 - x_1}$ 505050505050505050.
        
    2. Setze $a$ und die Koordinaten eines Punktes (z.B. $P$) in $y = ax + b$ ein und löse nach $b$ auf: $b = y_1 - a x_1$ 515151515151515151.
        
    
    - _Alternativ (Punkt-Steigungs-Form):_ $y = a(x - x_1) + y_1$52525252.
        
- **Relative Lage zweier Geraden $f_1(x)=a_1 x+b_1$ und $f_2(x)=a_2 x+b_2$:**
    
    - **Identisch:** $a_1 = a_2$ und $b_1 = b_2$53535353.
        
    - **Parallel (echt):** $a_1 = a_2$ aber $b_1 \neq b_2$54545454.
        
    - **Schneidend:** $a_1 \neq a_2$. Den Schnittpunkt $(x_S, y_S)$ findet man durch Gleichsetzen: $a_1 x_S + b_1 = a_2 x_S + b_2$. Löse nach $x_S$, dann $y_S = f_1(x_S)$ (oder $f_2(x_S)$) berechnen55555555555555555555555555555555555555555555555555.
        
    - **Orthogonal (senkrecht):** $a_1 \cdot a_2 = -1$ oder $a_2 = -1/a_1$ (Steigungen sind negativ reziprok)56565656.
        

---

## 3. Quadratische Funktionen (Skript 108)

Polynomfunktionen 2. Grades, deren Graphen Parabeln sind.

### 3.1 Definition und Polynomfunktionen

- Eine Funktion $f$ heißt **quadratisch**, wenn ihre Funktionsgleichung die Form $f(x) = a x^2 + b x + c$ hat 57.
    
- $a, b, c \in \mathbb{R}$ sind feste Koeffizienten, wobei $a \neq 0$ (sonst wäre sie linear) 58.
    
- **Polynomfunktionen:** Funktionen der Form $f(x) = a_n x^n + a_{n-1} x^{n-1} + \ldots + a_1 x + a_0$ 59.
    
    - Lineare Funktionen sind Polynomfunktionen 1. Grades 60.
        
    - Quadratische Funktionen sind Polynomfunktionen 2. Grades 61616161.
        

### 3.2 Der Graph: Die Parabel

- Der Graph einer quadratischen Funktion ist immer eine **Parabel**62.
    
- **Normalparabel:** Der Graph von $f(x)=x^2$ (hier ist $a=1, b=0, c=0$)63. Sie ist achsensymmetrisch zur y-Achse und hat ihren tiefsten Punkt im Ursprung64.
    

### 3.3 Scheitelpunkt und Symmetrieachse

Jede Parabel $f(x) = ax^2 + bx + c$ besitzt einen **Scheitelpunkt** $S(x_S, y_S)$, der entweder der tiefste (Minimum bei $a>0$) oder der höchste Punkt (Maximum bei $a<0$) ist 65656565656565656565656565656565.

- Herleitung via quadratisches Ergänzen: Man formt den Funktionsterm um 66:
    
    $$f(x) = a \left( x + \frac{b}{2a} \right)^2 + \left( c - \frac{b^2}{4a} \right)$$
    
    Der quadrierte Term $(x + \frac{b}{2a})^2$ ist immer $\ge 0$ und minimal (gleich 0) für $x = -\frac{b}{2a}$ 67. An dieser Stelle erreicht $f(x)$ seinen Extremwert.
    
- Scheitelpunktkoordinaten:
    
    $$x_S = -\frac{b}{2a}$$
    
    $$y_S = f(x_S) = c - \frac{b^2}{4a}$$
    
    68
    
- **Symmetrieachse:** Die Parabel ist achsensymmetrisch zur vertikalen Geraden $x = x_S = -\frac{b}{2a}$696969696969696969. Dies folgt aus $f(x_S - \epsilon) = f(x_S + \epsilon)$ für beliebiges $\epsilon$707070707070707070.
    

### 3.4 Einfluss der Parameter $a, b, c$

- **$a$: Öffnungsfaktor und -richtung**
    
    - $|a| > [cite_start]1$: Parabel ist **gestreckter** (schmaler) als die Normalparabel71.
        
    - $0 < |a| [cite_start]< 1$: Parabel ist **gestauchter** (breiter) als die Normalparabel72.
        
    - $a > 0$: Parabel ist **nach oben geöffnet** (hat ein Minimum)7373737373737373737373.
        
    - $a < 0$: Parabel ist **nach unten geöffnet** (hat ein Maximum)74747474747474747474747474747474.
        
- **$c$: y-Achsenabschnitt**
    
    - $f(0) = a \cdot 0^2 + b \cdot 0 + c = c$.
        
    - Die Parabel schneidet die y-Achse im Punkt $(0, c)$ 75.
        
- **$b$: Beeinflusst die Lage des Scheitelpunkts (und damit die horizontale Verschiebung)**
    
    - Wirkt sich über $x_S = -b/(2a)$ aus. Eine Änderung von $b$ verschiebt die Parabel horizontal und vertikal entlang einer anderen Parabel76767676.
        

### 3.5 Nullstellen und Diskriminante $D$

- Die **Nullstellen** (Schnittpunkte mit der x-Achse) sind die Lösungen der quadratischen Gleichung $ax^2 + bx + c = 0$ 77.
    
- Die **Diskriminante** $D = b^2 - 4ac$ bestimmt die Anzahl der (reellen) Nullstellen 78:
    
    - **$D > 0$:** Zwei verschiedene Nullstellen (Parabel schneidet die x-Achse zweimal)79.
        
    - **$D = 0$:** Genau eine Nullstelle (der Scheitelpunkt liegt auf der x-Achse)80.
        
    - **$D < 0$:** Keine Nullstelle (Parabel schneidet die x-Achse nicht)81.
        

### 3.6 Scheitelpunktform

- Die durch quadratisches Ergänzen erhaltene Form $f(x) = a(x - x_S)^2 + y_S$ (hier $x_S = -b/(2a)$, $y_S = c-b^2/(4a)$) heißt **Scheitelpunktform**.
    
- Sie ist nützlich, um die Gleichung einer Parabel zu finden, wenn der Scheitelpunkt $(x_S, y_S)$ und ein weiterer Punkt $(x_p, y_p)$ gegeben sind:
    
    1. Setze $x_S$ und $y_S$ in die Scheitelpunktform ein82.
        
    2. Setze die Koordinaten $(x_p, y_p)$ ein und löse die Gleichung $y_p = a(x_p - x_S)^2 + y_S$ nach $a$ auf 83.
        

### 3.7 Anwendungsbeispiele

- **Physik:** Flugbahnen (Wurfparabel) 84, Bewegung Energie $E_{kin} = \frac{1}{2}mv^2$ 85, senkrechter Wurf $h(t) = v_0 t - \frac{1}{2}gt^2$ 86868686. Die Scheitelpunktformel liefert direkt die maximale Höhe und die Zeit bis dahin 87878787.
    
- **Geometrie:** Kreisfläche $A = \pi r^2$88.
    
- **Kombinatorik:** Anzahl Diagonalen im n-Eck $\frac{n(n-3)}{2}$89. Summe der ersten $n$ Zahlen $\frac{n(n+1)}{2}$90.
    
- **Technik:** Parabolantennen, Reflektoren91.
    
- **Wirtschaft:** Gewinnmaximierung (wenn Preis und Kosten quadratisch abhängen) $G(x) = \text{Erlös}(x) - \text{Kosten}(x)$ 92. Der Scheitelpunkt der (nach unten geöffneten) Gewinnfunktion gibt die optimale Produktionsmenge und den maximalen Gewinn an 93.
    

---

## 4. Bijektivität und Umkehrfunktionen (Skript 109)

### 4.1 Motivation und Definition der Umkehrfunktion

- **Motivation:** Wenn eine Funktion $f$ einem Input $x$ einen Output $y$ zuordnet (z.B. Fahrenheit zu Celsius), möchte man manchmal den Prozess umkehren: Zu einem gegebenen Output $y$ den ursprünglichen Input $x$finden (z.B. Celsius zu Fahrenheit) 94949494.
    
- **Definition:** Eine Funktion $g: \mathbb{W} \to \mathbb{D}$ heißt **Umkehrfunktion** (oder Inverse) von $f: \mathbb{D} \to \mathbb{W}$, wenn gilt 95:
    
    - $g(f(x)) = x$ für alle $x \in \mathbb{D}$ 96 (erst $f$, dann $g$ anwenden führt zurück zu $x$)
        
    - $f(g(y)) = y$ für alle $y \in \mathbb{W}$ 97 (erst $g$, dann $f$ anwenden führt zurück zu $y$)
        
- **Notation:** Die Umkehrfunktion wird mit $f^{-1}$ bezeichnet98.
    
    - **Achtung:** $f^{-1}$ bedeutet **nicht** $1/f$99999999. Es bezeichnet die Umkehrung bezüglich der Funktionskomposition ($f^{-1} \circ f = \text{id}$, wobei $\text{id}(x)=x$ die Identitätsfunktion ist)100100100100100100100100100.
        

### 4.2 Bedingungen für die Umkehrbarkeit: Bijektivität

Nicht jede Funktion besitzt eine Umkehrfunktion.

- **Problem 1 (Nicht-Injektivität):** Wenn verschiedene Inputs zum selben Output führen (z.B. $f(x)=x^2$ mit $f(2)=f(-2)=4$), kann man vom Output (4) nicht eindeutig auf den Input zurückschließen 101.
    
- **Problem 2 (Nicht-Surjektivität):** Wenn die Zielmenge $\mathbb{W}$ Elemente enthält, die gar keine Funktionswerte (Bilder) sind, dann ist die Umkehrfunktion für diese Elemente nicht definiert 102.
    

Definitionen 103: Sei $f: \mathbb{D} \to \mathbb{W}$.

- $f$ heißt **injektiv**, wenn für alle $x_1, x_2 \in \mathbb{D}$ gilt: $x_1 \neq x_2 \implies f(x_1) \neq f(x_2)$(Verschiedene Inputs haben verschiedene Outputs).
    
- $f$ heißt **surjektiv**, wenn die Bildmenge gleich der Zielmenge $\mathbb{W}$ ist (Jedes Element in $\mathbb{W}$wird mindestens einmal getroffen).
    
- $f$ heißt **bijektiv**, wenn sie sowohl injektiv als auch surjektiv ist.
    

**Satz:** Eine Funktion $f: \mathbb{D} \to \mathbb{W}$ besitzt genau dann eine Umkehrfunktion $f^{-1}: \mathbb{W} \to \mathbb{D}$, wenn $f$ **bijektiv** ist 104.

- **Graphische Tests:**
    
    - **Vertikaler Linientest:** Eine Kurve ist Graph einer Funktion, wenn jede vertikale Linie sie höchstens einmal schneidet (Eindeutigkeit der Zuordnung $x \mapsto y$)105.
        
    - **Horizontaler Linientest:** Eine Funktion ist injektiv, wenn jede horizontale Linie ihren Graphen höchstens einmal schneidet106. Eine Funktion ist bijektiv, wenn sie beide Tests besteht (jede horizontale Linie schneidet genau einmal, falls $y$ in der Bildmenge liegt).
        

### 4.3 Finden der Umkehrfunktion

1. **Algebraisch (Auflösen):**
    
    - Schreibe die Funktionsgleichung als $y = f(x)$.
        
    - Löse diese Gleichung nach $x$ auf, um $x = g(y)$ zu erhalten107.
        
    - Die Umkehrfunktion ist dann $f^{-1}(x) = g(x)$ (man benennt die Variable üblicherweise wieder in $x$ um) 108.
        
    - _Beispiel:_ $f(x) = y = \frac{2x-5}{4} \implies 4y = 2x-5 \implies 2x = 4y+5 \implies x = \frac{4y+5}{2}$. Also $f^{-1}(x) = \frac{4x+5}{2}$ 109109109109109109109109109.
        
2. **Operationsumkehr ("Entkleiden"):**
    
    - Analysiere die Reihenfolge der Operationen in $f(x)$.
        
    - Kehre die Operationen in umgekehrter Reihenfolge um 110110110110110110110110110.
        
    - _Beispiel:_ $f(x) = \sqrt{3x+1}$.
        
        - $f$: 1. $\times 3$, 2. $+ 1$, 3. $\sqrt{\cdot}$ 111.
            
        - $f^{-1}$: 1. $(\cdot)^2$, 2. $- 1$, 3. $/ 3$ 112.
            
        - Also $f^{-1}(x) = \frac{x^2 - 1}{3}$ 113.
            

### 4.4 Definitions- und Wertebereiche von $f$ und $f^{-1}$

- Wenn $f: \mathbb{D} \to \mathbb{W}$ bijektiv ist, dann gilt für die Umkehrfunktion $f^{-1}: \mathbb{W} \to \mathbb{D}$ 114.
    
- Der Definitionsbereich von $f$ ist der Wertebereich (Bildmenge) von $f^{-1}$.
    
- Der Wertebereich (Bildmenge) von $f$ ist der Definitionsbereich von $f^{-1}$115115115115.
    
- _Beispiel:_ $f(x) = \sqrt{3x+1}$.
    
    - $\mathbb{D}_f = [-1/3, \infty[$, $\mathbb{W}_f = \text{Bildmenge}(f) = [0, \infty[ = \mathbb{R}_0^+$ 116.
        
    - $f^{-1}(x) = \frac{x^2-1}{3}$.
        
    - $\mathbb{D}_{f^{-1}} = \mathbb{W}_f = [0, \infty[$, $\mathbb{W}_{f^{-1}} = \text{Bildmenge}(f^{-1}) = \mathbb{D}_f = [-1/3, \infty[$ 117.
        

### 4.5 Umgang mit nicht-bijektiven Funktionen

- Funktionen, die nicht bijektiv sind (wie $f(x)=x^2$), können oft durch **Einschränkung des Definitionsbereichs**bijektiv gemacht werden118118118118118118118118118.
    
- _Beispiel:_ $f(x) = x^2 - 4x + 5 = (x-2)^2 + 1$ ist nicht bijektiv 119.
    
    - **Ast 1:** $f_1: [2, \infty[ \to [1, \infty[$, $f_1(x) = (x-2)^2 + 1$ ist bijektiv 120. Umkehrfunktion $f_1^{-1}(x) = 2 + \sqrt{x-1}$ 121121121121.
        
    - **Ast 2:** $f_2: ]-\infty, 2] \to [1, \infty[$, $f_2(x) = (x-2)^2 + 1$ ist bijektiv 122. Umkehrfunktion $f_2^{-1}(x) = 2 - \sqrt{x-1}$ 123123123123.
        

### 4.6 Graphische Beziehung zwischen $f$ und $f^{-1}$

- Wenn der Punkt $(x_0, y_0)$ auf dem Graphen von $f$ liegt (d.h. $y_0 = f(x_0)$), dann liegt der Punkt $(y_0, x_0)$ auf dem Graphen von $f^{-1}$ (da $x_0 = f^{-1}(y_0)$) 124124124124124124124124124.
    
- Die Punkte $(x_0, y_0)$ und $(y_0, x_0)$ liegen **spiegelsymmetrisch** bezüglich der **Winkelhalbierenden des 1. und 3. Quadranten** (der Geraden $y=x$)125125125125.
    
- **Folgerung:** Der Graph von $f^{-1}$ ist das Spiegelbild des Graphen von $f$ an der Geraden $y=x$126126126126.