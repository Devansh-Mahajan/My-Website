---
tags:
  - class
  - itet
  - Brückenkurs_Mathematik
draft: false
publish: true
---
# Lectures
[[101_skript_symbole_terme_gleichungen.pdf]]
[[102_skript_zahlen.pdf]]
[[103_skript_lineare_gleichungssysteme.pdf]]
[[104_skript_quadratwurzeln.pdf]]
[[105_skript_quadratische_gleichungen.pdf]]
[[201_skript_potenzen_und_wurzeln.pdf]]
[[110-voll-induktion.pdf]]
## 1. Grundlagen

Die Mathematik baut auf einer präzisen formalen Sprache auf. Diese Sprache besteht aus Objekten (Zahlen) und einer Syntax (Terme und Gleichungen), die deren Beziehungen beschreibt.

### 1.1 Die Hierarchie der Zahlbereiche 

Die Entwicklung der Zahlbereiche ist eine schrittweise Erweiterung, um immer komplexere Gleichungen lösbar zu machen (z.B. $x+2=1$ erfordert $\mathbb{Z}$, $7x-3=0$ erfordert $\mathbb{Q}$, $x^2=2$ erfordert $\mathbb{R}$).

|**Symbol**|**Name**|**Definition**|**Wichtige Eigenschaften**|
|---|---|---|---|
|$\mathbb{N}$|**Natürliche Zahlen**|$\{0, 1, 2, 3, \ldots\}$|Abgeschlossen unter Addition und Multiplikation.|
|$\mathbb{Z}$|**Ganze Zahlen**|$\{\ldots, -2, -1, 0, 1, 2, \ldots\}$|Abgeschlossen unter Addition, Subtraktion, Multiplikation.|
|$\mathbb{Q}$|**Rationale Zahlen**|$\{\frac{p}{q} \mid p, q \in \mathbb{Z}, q \neq 0\}$|Abgeschlossen unter allen 4 Grundrechenarten (außer Div. durch 0).|
|$\mathbb{R}$|**Reelle Zahlen**|$\mathbb{Q} \cup \{\text{Irrationale Zahlen}\}$|Füllen die Zahlengerade lückenlos aus (Vollständigkeit).|

**Eigenschaften von $\mathbb{Q}$ (Rationale Zahlen):**

- **Dichtheit:** Zwischen zwei beliebigen, ungleichen rationalen Zahlen $x$ und $y$ liegen unendlich viele weitere rationale Zahlen (z.B. das arithmetische Mittel $\frac{x+y}{2}$).
    
- **Dezimaldarstellung:** Jede rationale Zahl hat eine Dezimaldarstellung, die entweder **abbricht** (Periode 0) oder **periodisch** wird. Dies ist eine direkte Folge des Divisionsalgorithmus: Bei der Division durch $b$ gibt es nur $b$mögliche Reste ($0, 1, \ldots, b-1$). Entweder tritt der Rest 0 auf (Abbruch) oder ein Rest muss sich wiederholen (Periode).
    

**Irrationale Zahlen ($\mathbb{R} \setminus \mathbb{Q}$):**

- Dies sind Zahlen, deren Dezimaldarstellung **nicht-abbrechend** und **nicht-periodisch** ist. Sie können nicht als Bruch $p/q$ dargestellt werden.
    
- **Beweis der Irrationalität von $\sqrt{2}$ (Skript 102):**
    
    1. **Vorbemerkung:** Jede Quadratzahl ($m^2$) besitzt in ihrer Primfaktorzerlegung jeden Primfaktor in **gerader**Anzahl (da die Exponenten der Primfaktoren von $m$ verdoppelt werden).
        
    2. **Annahme (Widerspruch):** $\sqrt{2}$ sei rational, d.h. $\sqrt{2} = \frac{m}{n}$ für $m, n \in \mathbb{N}$.
        
    3. **Umformung:** $2 = \frac{m^2}{n^2} \implies 2n^2 = m^2$.
        
    4. **Widerspruch:**
        
        - Die rechte Seite ($m^2$) ist eine Quadratzahl. Der Primfaktor 2 kommt dort in _gerader_ Anzahl vor (0, 2, 4, ...).
            
        - Die linke Seite ($2n^2$) besteht aus einer Quadratzahl ($n^2$, die 2 in _gerader_ Anzahl enthält) multipliziert mit 2. Der Primfaktor 2 kommt dort also in _ungerader_ Anzahl vor (1, 3, 5, ...).
            
    5. **Schlussfolgerung:** Da $2n^2 = m^2$ gelten müsste, die Primfaktorzerlegung aber eindeutig ist, führt die Annahme zu einem Widerspruch. $\sqrt{2}$ muss irrational sein.
        

### 1.2 Die Grammatik: Terme, Gleichungen und Linearität (Skript 101)

>[!question] Was ist ein Term?
>Unter einem Term versteht man eine sinnvolle Aneinanderreihung von mathematischen Symbolen, in der aber kein Relationszeichen ($=,<,>,\geq,\le\mathbf\dots$) vorkommt.

Beispiele von Termen: 
$$17 + 5 - 3,$$
 $$(3x - (6 - 7x)) - (8 - 2x),$$ $$(a + b)^2,$$
 $$\frac{\pi}{3} - \left(\frac{2}{5}\right)^2,$$
 $$\sqrt{2 - \sqrt{2 - \sqrt{2}}}.$$
Aus dieser definition lässt sich herleiten das jede Zahl/Buchtabe ein Term sein muss!
Sobald ein Relationszeichen vorkommt spricht man von **Formeln**.

>[!question] Woher kommen Gleichungen?
>Wenn man an Schulen von Gleichungen spricht, so meint man meist Gleichungen der Art
>$2x - 5 = 17 - 3x$.
>Welche Zahlenmenge $X$ aus einer bestimmten Grundmenge zugelassener Zahlen hat die Eigenschaft, dass man denselben Wert erhält, wenn man für eine Zahl  die in $X$ enthalten ist, $2x - 5$ rechnet und wenn man $17 - 3x$ rechnet? Aus irgendeinem Grund sind die Terme $2x - 5$ und $17 - 3x$ es ist wichtig, herauszufinden, wann sie gleich sind.
>Dann meistens auch die Frage wichtig, wie die Gleichung gelöst werden kann.
>$$ \begin{array}{rcl|l} 2x - 5 &=& 17 - 3x & | +3x \\ 5x - 5 &=& 17 & | +5 \\ 5x &=& 22 & | :5 \\ x &=& 4.4 \end{array} $$

- **Symbol:** Ein eindeutig definiertes Zeichen (z.B. $+, \pi, x, \in$).
    
- **Term:** Eine sinnvolle Aneinanderreihung von Symbolen, die einen Wert repräsentiert, aber **kein Relationszeichen**($=, <, \ne, \ldots$) enthält. (z.B. $3x - (a+b)^2$).
    
- **Aussage vs. Aussageform:**
    
    - **Aussage:** Ein Ausdruck mit eindeutigem Wahrheitswert (wahr/falsch). (z.B. $3+5=8$ (w)).
        
    - **Aussageform:** Ein Ausdruck mit Variablen, dessen Wahrheitswert von der Belegung abhängt. (z.B. $2x-5=17$).
        
- **Klassifikation von Gleichungen ($LS = RS$):**
    
    - **Bestimmungsgleichung:** Enthält Unbekannte (Variablen). Ziel ist das Finden der Lösungsmenge $L$, die die Aussageform zu einer wahren Aussage macht.
        
    - **Identität:** Ist für _jede_ Belegung der Variablen wahr (z.B. $a^2-b^2 = (a-b)(a+b)$).
        
    - **Axiom:** Eine unbewiesene, als wahr angenommene Grundgleichung (z.B. $a+b=b+a$).
        
    - **Definitionsgleichung:** Weist einem neuen Symbol einen Wert zu (z.B. $\pi := U/d$).
        

### 1.3 Linearität (Skript 101)

Linearität beschreibt den einfachsten algebraischen Bauplan.

Ein linearer Term ist ein Term, der (nach Vereinfachung) als Summe von Vielfachen von Variablen der ersten Potenz und einer Konstante geschrieben werden kann.

- 1 Variable: $a \cdot x + b$
    
- 2 Variablen: $a \cdot x + b \cdot y + c$
    
- $n$ Variablen: $a_1 x_1 + a_2 x_2 + \ldots + a_n x_n + k$
    

Eine **lineare Gleichung** ist die Gleichsetzung zweier linearer Terme.

---

## 2. Potenzen und Wurzeln: Die Erweiterung der Operatoren (Skript 201, 104)

Die Potenzgesetze sind fundamental für die Algebra. Ihre Definition wird systematisch erweitert, um die Gültigkeit der Gesetze auf größere Zahlbereiche auszudehnen.

### 2.1 Axiome der Algebra (Skript 201)

Die Potenzgesetze basieren auf den fundamentalen Axiomen der reellen Zahlen:

- **Kommutativität:** $a+b=b+a$ und $a \cdot b = b \cdot a$
    
- **Assoziativität:** $a+(b+c)=(a+b)+c$ und $a \cdot (b \cdot c) = (a \cdot b) \cdot c$
    
- **Distributivität:** $a \cdot (b \pm c) = a \cdot b \pm a \cdot c$
    

### 2.2 Die Potenzgesetze (PG)

(PG1) $a^x \cdot a^y = a^{x+y}$

(PG2) $a^x \cdot b^x = (a \cdot b)^x$

(PG3) $(a^x)^y = a^{x \cdot y}$

(PG4) $(\frac{a}{b})^x = \frac{a^x}{b^x}$

(PG5) $\frac{a^x}{a^y} = a^{x-y}$

### 2.3 Die systematische Erweiterung der Exponenten

Die Definitionen für nicht-natürliche Exponenten werden exakt so gewählt, dass die obigen Potenzgesetze (insbesondere PG1, PG3, PG5) gültig bleiben.

1. **Start: $n \in \mathbb{N}_{>0}$ (Skript 201)**
    
    - Definition: $a^n = a \cdot a \cdot \ldots \cdot a$ ($n$ Faktoren).
        
    - Hier werden (P1)-(P5) bewiesen (z.B. $a^n \cdot a^m = (a \cdot \ldots \cdot a) \cdot (a \cdot \ldots \cdot a) = a^{n+m}$).
        
2. **Erweiterung auf $n=0$ (Skript 201)**
    
    - Motivation durch (PG5): Wir _wollen_, dass $a^{n-n} = \frac{a^n}{a^n}$ gilt.
        
    - Definition: $a^0 := 1$ (für $a \ne 0$).
        
3. **Erweiterung auf $n \in \mathbb{Z}$ (negative Exponenten) (Skript 201)**
    
    - Motivation durch (PG5): Wir _wollen_, dass $a^{3-7} = \frac{a^3}{a^7}$ gilt.
        
    - Definition: $a^{-n} := \frac{1}{a^n}$ (für $a \ne 0$).
        
    - Die Potenzgesetze (P1)'-(P5)' werden für diese neue Definition bewiesen.
        
4. **Erweiterung auf $x \in \mathbb{Q}$ (rationale Exponenten) (Skript 201)**
    
    - Motivation durch (PG3): Wir _wollen_, dass $(a^{1/n})^n = a^{(1/n) \cdot n} = a^1$ gilt.
        
    - Die Zahl, deren $n$-te Potenz $a$ ergibt, ist per Definition die $n$-te Wurzel.
        
    - Definition: $a^{1/n} := \sqrt[n]{a}$ (für $a \ge 0$).
        
    - Definition: $a^{m/n} := \sqrt[n]{a^m}$.
        
    - Auch hier wird bewiesen, dass (PG1)-(PG5) für alle Exponenten in $\mathbb{Q}$ gelten.
        
5. **Erweiterung auf $x \in \mathbb{R}$ (Irrationale Exponenten) (Skript 201)**
    
    - Ein Term wie $2^\pi$ wird über rationale Approximationen (Annäherungen) des Exponenten definiert (z.B. $2^{3.14} = \sqrt[100]{2^{314}}$).
        

### 2.4 Wurzeln und das Heron-Verfahren (Skript 104)

- **Definition Quadratwurzel:** $\sqrt{a}$ (mit $a \ge 0$) ist diejenige **nicht-negative** reelle Zahl $x$, für die $x^2 = a$ gilt.
    
- **Wurzelgesetze (Spezialfall von PG2/PG4):**
    
    - $\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b}$ (für $a, b \ge 0$)
        
    - $\sqrt{\frac{a}{b}} = \frac{\sqrt{a}}{\sqrt{b}}$ (für $a \ge 0, b > 0$)
        
- **WICHTIG (Skript 104):** $\sqrt{a+b} \neq \sqrt{a} + \sqrt{b}$
    
- **WICHTIG (Skript 104):** $\sqrt{a^2} = |a|$ (für alle $a \in \mathbb{R}$), aber $(\sqrt{a})^2 = a$ (nur für $a \ge 0$).
    
- Heron-Verfahren (zur Berechnung von $\sqrt{a}$):
    
    Ein iteratives Näherungsverfahren mit Startwert $x_0$.
    
    $$x_{n+1} = \frac{1}{2} \left( x_n + \frac{a}{x_n} \right)$$
    
    Die Formel berechnet den Mittelwert aus einer (potenziell) zu kleinen Näherung ($x_n$) und einer (potenziell) zu großen Näherung ($a/x_n$). Das Verfahren weist quadratische Konvergenz auf, d.h. die Anzahl der korrekten Stellen verdoppelt sich etwa bei jedem Schritt, was es extrem effizient macht.
    

---

## 3. Lineare Gleichungen und Systeme (Skript 101, 103)

Die systematische Lösung linearer Gleichungen ist die Grundlage der linearen Algebra.

### 3.1 Die 1D-Lineare Gleichung (Skript 101)

- **Form:** $a \cdot x + b = c \cdot x + d$.
    
- **Lösung:** Mittels **Äquivalenzumformungen** (Addition/Subtraktion von Termen, Multiplikation/Division mit Zahlen $k \ne 0$) wird die Gleichung auf die Form $A \cdot x = B$ gebracht.
    
- **Lösungsfälle:**
    
    1. **Genau eine Lösung ($A \ne 0$):** $x = B/A$. (Regulärer Fall)
        
    2. **Keine Lösung ($A=0, B \ne 0$):** $0 \cdot x = B \implies L = \{\}$. (Singulärer Fall)
        
    3. **Unendlich viele Lösungen ($A=0, B = 0$):** $0 \cdot x = 0 \implies L = \mathbb{R}$. (Singulärer Fall)
        
- **Parameter:** Werden Buchstaben (z.B. $v_0, g$) in der Gleichung wie bekannte Zahlen behandelt, um eine allgemeine Lösungsformel (abhängig von den Parametern) zu finden.
    

### 3.2 Lineare Gleichungssysteme (LGS) (Skript 103)

Ein $m \times n$-LGS ist eine Menge von $m$ linearen Gleichungen mit $n$ Unbekannten ($x_1, \ldots, x_n$).

Eine Lösung ist ein $n$-Tupel $(a_1, \ldots, a_n)$, das alle $m$ Gleichungen simultan erfüllt.

- **Geometrische Interpretation:**
    
    - $2 \times 2$-LGS: Schnittpunkt zweier Geraden im $\mathbb{R}^2$.
        
    - $3 \times 3$-LGS: Schnittpunkt dreier Ebenen im $\mathbb{R}^3$.
        
- **Lösungsfälle (allgemein):**
    
    1. **Regulär:** Genau eine Lösung (z.B. Geraden/Ebenen schneiden sich in einem Punkt).
        
    2. **Singulär (Keine Lösung):** $L = \{\}$ (z.B. parallele Geraden/Ebenen).
        
    3. **Singulär ($\infty$ Lösungen):** (z.B. identische Geraden, Schnittgerade von Ebenen).
        
- **System-Typen:**
    
    - $m=n$ (Quadratisch): Normalfall.
        
    - $m < n$ (Unterbestimmt): Tendenz zu $\infty$ Lösungen (weniger Bedingungen als Variablen).
        
    - $m > n$ (Überbestimmt): Tendenz zu 0 Lösungen (mehr Bedingungen als Variablen).
        

### 3.3 Der Gauss-Eliminationsalgorithmus (Skript 103)

Der effizienteste Weg zur Lösung von LGS.

1. Matrix-Notation: Das LGS wird in die erweiterte Koeffizienten-Matrix überführt, nachdem es in Normalform gebracht wurde (alle Variablen links, sortiert; Konstanten rechts).
    
    $$\begin{pmatrix} 2 & -1 & 1 & 7 \\ 1 & 3 & 2 & 1 \\ -1 & -2 & 1 & 6 \end{pmatrix}$$
    
2. **Elementare Zeilenoperationen (EZOs):** Umformungen, die die Lösungsmenge $L$ nicht verändern:
    
    - (I) Vertauschen zweier Zeilen.
        
    - (II) Multiplikation einer Zeile mit $k \ne 0$.
        
    - (III) Addition des Vielfachen einer Zeile zu einer anderen.
        
3. Ziel 1: Treppenform (REF): Mittels EZOs werden Nullen unterhalb der Hauptdiagonalen erzeugt ("einkochen").
    
    $$\begin{pmatrix} 2 & -1 & 1 & 7 \\ 0 & -7 & -3 & 5 \\ 0 & 0 & 1 & 3 \end{pmatrix}$$
    
    Die Lösung kann nun durch Rückwärtseinsetzen (von unten nach oben) gefunden werden.
    
4. Ziel 2: Reduzierte Zeilenstufenform (RREF): (Optional, aber vollständig) Mittels EZOs werden auch Nullen oberhalb der Pivots (Diagonal-Elemente) erzeugt und die Pivots auf 1 normiert.
    
    $$\begin{pmatrix} 1 & 0 & 0 & 1 \\ 0 & 1 & 0 & -2 \\ 0 & 0 & 1 & 3 \end{pmatrix} \implies L = \{(1, -2, 3)\}$$
    
    Die Lösung ist direkt ablesbar.
    
5. **Analyse singulärer Fälle (Entartete Treppen):**
    
    - **Keine Lösung:** Entsteht eine Zeile der Form `[ 0 0 ... 0 | c ]` mit $c \ne 0$. (Widerspruch $0 = c$).
        
    - **$\infty$ Lösungen:** Entsteht eine **Nullzeile** `[ 0 0 ... 0 | 0 ]`. (Gleichung $0=0$, keine Information, System ist unterbestimmt, freie Parameter $t$ müssen eingeführt werden).
        

- **Effizienz:** Der Algorithmus benötigt für ein $n \times n$-System ca. $\frac{1}{3}n^3$ Multiplikationen. Dies ist für Computer schnell, skaliert aber kubisch.
    

---

## 4. Quadratische Gleichungen (Skript 105)

### 4.1 Normalform und Koeffizienten

Jede quadratische Gleichung lässt sich in die Normalform $a \cdot x^2 + b \cdot x + c = 0$ (mit $a \ne 0$) bringen.

### 4.2 Spezialfälle (Lösung ohne Lösungsformel)

1. Fall 1: $b=0, c=0$ (Reinquadratisch)
    
    $a \cdot x^2 = 0 \implies x=0$.
    
2. Fall 2: $b=0, c \ne 0$ (Reinquadratisch)
    
    $a \cdot x^2 + c = 0 \implies x^2 = -c/a$.
    
    - Lösungen $x = \pm \sqrt{-c/a}$ falls $-c/a > 0$.
        
    - Keine reelle Lösung falls $-c/a < 0$.
        
3. Fall 3: $c=0, b \ne 0$
    
    $a \cdot x^2 + b \cdot x = 0 \implies x(a \cdot x + b) = 0$.
    
    - Lösungen $x_1 = 0$ und $x_2 = -b/a$.
        

### 4.3 Allgemeine Lösungsmethoden

1. Faktorisierung (Satz vom Nullprodukt):
    
    Wenn der Term als Produkt von Linearfaktoren geschrieben werden kann, (z.B. $x^2+4x-21 = (x+7)(x-3)$), sind die Lösungen die Nullstellen der Faktoren. $(x+7)(x-3)=0 \implies L = \{-7, 3\}$.
    
2. Quadratisches Ergänzen (Methode von al-Chwarizmi):
    
    Die Methode, die zur Lösungsformel führt. Der Term wird so umgeformt, dass ein Binom entsteht.
    
    Beispiel: $x^2 + 6x = 40$
    
    - $x^2 + 2 \cdot x \cdot 3 = 40$
        
    - $x^2 + 6x + 3^2 = 40 + 3^2$ (Ergänzung)
        
    - $(x+3)^2 = 49$
        
    - $x+3 = \pm 7 \implies x = -3 \pm 7 \implies L = \{4, -10\}$
        

### 4.4 Die Allgemeine Lösungsformel (Mitternachtsformel)

Wendet man das quadratische Ergänzen auf die Normalform $ax^2+bx+c=0$ an, erhält man die allgemeine Lösungsformel:

$$x_{1,2} = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

Diskriminante $D := b^2 - 4ac$:

Der Term unter der Wurzel (Diskriminante) bestimmt die Anzahl der reellen Lösungen:

- **$D > 0$:** Zwei verschiedene reelle Lösungen.
    
- **$D = 0$:** Eine reelle Doppellösung ($x = -b/2a$).
    
- **$D < 0$:** Keine reelle Lösung (Wurzel aus negativer Zahl).
    

### 4.5 Satz von Vieta (Skript 105)

Für eine normierte quadratische Gleichung $x^2 + px + q = 0$ (oder $a=1, b=p, c=q$) besteht ein direkter Zusammenhang zwischen den Lösungen $x_1, x_2$ und den Koeffizienten $p, q$:

- $p = -(x_1 + x_2)$
    
- $q = x_1 \cdot x_2$
    

Dies ermöglicht die Rekonstruktion einer Gleichung aus ihren Lösungen oder das schnelle Finden ganzzahliger Lösungen (z.B. $x^2-20x+51=0 \implies$ Suche zwei Zahlen, deren Produkt 51 und Summe 20 ist $\implies 3, 17$).

### 4.6 Reduzierbare Gleichungstypen (Skript 105)

Manche Gleichungen sind nicht quadratisch, können aber durch Umformung oder Substitution auf eine quadratische Gleichung zurückgeführt werden.

1. **Bruchgleichungen:** Multiplikation mit dem Hauptnenner, um die Brüche zu eliminieren. (Achtung: Definitionsbereich $\mathbb{R} \setminus \{\text{Nennernullstellen}\}$ beachten, Scheinlösungen prüfen).
    
2. **Biquadratische Gleichungen:** Form $ax^4 + cx^2 + e = 0$.
    
    - **Substitution:** $z := x^2$.
        
    - Löse die quadratische Gleichung $az^2 + cz + e = 0 \to z_1, z_2$.
        
    - **Rücksubstitution:** $x^2 = z_1$ und $x^2 = z_2$. (Dies kann 0, 2 oder 4 reelle Lösungen für $x$ ergeben, je nachdem ob $z_1, z_2$ positiv, null oder negativ sind).
        
3. **Wurzelgleichungen:** Gleichungen mit $\sqrt{\ldots}$.
    
    - Wurzel isolieren und beide Seiten quadrieren.
        
    - **Achtung:** Quadrieren ist **keine Äquivalenzumformung**. Es können **Scheinlösungen** entstehen.
        
    - **Pflicht:** Jede gefundene Lösung muss in der _Ursprungsgleichung_ getestet werden.
        

---

## 5. Beweismethodik: Vollständige Induktion (Skript 110)

Die vollständige Induktion ist ein fundamentales, axiomatisches Beweisverfahren, um eine Aussage $A(n)$ für _alle_natürlichen Zahlen $n \ge n_0$ zu beweisen.

### 5.1 Logik und Analogie (Domino-Effekt)

- **Deduktion:** Schluss vom Allgemeinen aufs Spezielle (z.B. Satz $\to$ Beispiel).
    
- **Induktion (unvollständig):** Schluss vom Speziellen aufs Allgemeine (z.B. 5 Beispiele $\to$ Satz). _Dies ist kein gültiger Beweis._
    
- **Vollständige Induktion:** Ein deduktives Verfahren, das die unendliche Kette von Schlussfolgerungen formalisiert.
    

Axiom: $[A(1) \land \forall n(A(n) \to A(n+1))] \to \forall n A(n)$

(Wenn der erste Stein fällt UND wenn jeder fallende Stein seinen Nachfolger umstößt, DANN fallen alle Steine).

### 5.2 Das Beweisverfahren

Eine Behauptung $A(n)$ wird in zwei Schritten bewiesen:

1. **Induktionsstart (Start / Verankerung): $n=1$**
    
    - Zeige, dass $A(1)$ wahr ist (oder für die kleinste sinnvolle Zahl, $n_0$).
        
    - _Dieser Schritt ist zwingend erforderlich._
        
2. **Induktionsschritt (Schritt): $n \to n+1$**
    
    - **Induktionsvoraussetzung (IV):** Nimm an, dass $A(n)$ für ein _beliebiges, aber festes_ $n$ wahr ist.
        
    - **Induktionsbehauptung:** Zeige, dass _unter dieser Voraussetzung_ auch $A(n+1)$ wahr sein muss.
        
    - Dazu formt man den Term für $A(n+1)$ solange um, bis man $A(n)$ (die IV) einsetzen kann.
        

**Beispiel: Bernoulli-Ungleichung $(1+x)^n \ge 1+nx$ für $x > -1$ (Skript 110)**

- Start ($n=1$):
    
    $(1+x)^1 \ge 1 + 1 \cdot x \implies 1+x \ge 1+x$. (Wahr).
    
- **Schritt ($n \to n+1$):**
    
    - (IV) Es gelte: $(1+x)^n \ge 1+nx$.
        
    - (Zu zeigen) $A(n+1)$: $(1+x)^{n+1} \ge 1+(n+1)x$.
        
    - Beweis:
        
        $$\begin{aligned} (1+x)^{n+1} &= (1+x)^n \cdot (1+x) \\ &\ge (1+nx) \cdot (1+x) \quad \text{(IV eingesetzt; $(1+x) > 0$ da $x > -1$)} \\ &= 1 + x + nx + nx^2 \\ &= 1 + (n+1)x + \underbrace{nx^2}_{\ge 0} \\ &\ge 1 + (n+1)x \quad \text{(da $nx^2$ nicht-negativ ist)} \end{aligned}$$
        
    - Somit ist $A(n+1)$ wahr. Der Beweis ist abgeschlossen.
# Assignments

# Anki
