[[205_skript_folgen_und_reihen.pdf]]
# Folgen und Reihen

## 1. Folgen (Sequences)

### 1.1. Was ist eine Folge?

Rätselfragen wie "Welche Zahl kommt als nächstes?" 3333sind oft Einführungen in das Konzept der Folgen4.

- **Umgangssprachliche Definition:** Eine Folge ist eine Anordnung von Zahlen (genannt Glieder), die nach einer bestimmten Regel oder Formel gebildet wird5. Es gibt ein erstes, zweites, drittes, ... Glied6.
    
- **Notation:** $(a_n)_{n\in\mathbb{N}>0}$. Dies beschreibt eine Folge $a$ mit den Gliedern $a_1, a_2, a_3, ...$. Das $n$-te Glied wird mit $a_n$ bezeichnet, wobei $n$ der Index ist9.
    
- **Formale Definition:** Eine (reelle) Folge $a$ ist eine Funktion $a: \mathbb{N}_{>0} \rightarrow \mathbb{R}$10. Jedem Index $n \in \mathbb{N}_{>0}$ wird eine reelle Zahl $a_n := a(n) \in \mathbb{R}$ zugeordnet11.
    

### 1.2. Folgen als Funktionen

Eine Folge ist eine spezielle Funktion12.

- Der Definitionsbereich (Input) einer Funktion $f(x)$ ist oft $\mathbb{R}$, während der Definitionsbereich einer Folge $a_n$ nur die natürlichen Zahlen $\mathbb{N}_{>0}$ (also 1, 2, 3, ...) sind13.
    
- Der Graph einer Folge besteht daher nur aus einzelnen Punkten14. Diese Punkte liegen auf dem Graphen der entsprechenden reellen Funktion15. Man kann sagen, die Folge "tastet" die Funktion ab16.
    

**Beispiele:**

1. **Lineare Funktion (Bsp. g):**
    
    - Folge: $a_n = 4n + 3$ 17
        
    - Funktion: $f(x) = 4x + 3$ 18
        
2. **Exponentialfunktion (Bsp. f):**
    
    - Folge: $a_n = 2^{n-1}$ (oder $a_n = 0.5 \cdot 2^n$) 191919
        
    - Funktion: $f(x) = 0.5 \cdot 2^x$ 20
        
    - Dieses Beispiel ist bekannt durch die **Schachbrett-Sage** (Reiskörner auf einem Schachbrett), die das enorme Wachstum von Exponentialfunktionen demonstriert21212121.
        

### 1.3. Angabe von Folgen

Es gibt verschiedene Arten, eine Folge zu definieren:

#### 1.3.1. Explizite Angabe

Man gibt eine direkte Formel für das $n$-te Glied an: $a_n = \text{Formel in } n$22.

- **Beispiele:**
    
    - $a_n = 2^{n-1}$ 23
        
    - $a_n = 4n + 3$ 24
        
    - $a_n = \begin{cases} 1 & \text{falls } n \text{ ungerade} \\ \frac{n}{n+1} & \text{falls } n \text{ gerade} \end{cases}$ 25
        

#### 1.3.2. Rekursive Angabe

Man gibt an, wie man von einem Glied zum nächsten kommt26.

- Dies erfordert:
    
    1. Einen **Anfangswert** (z.B. $a_1$)27.
        
    2. Eine **Rekursionsformel**, die $a_{n+1}$ mittels $a_n$ (oder vorherigen Gliedern) ausdrückt28.
        
- Der Name "rekursiv" kommt vom lateinischen "recurrere" (zurückrennen), da man z.B. für $a_{999}$ auf $a_{998}$ zurückgreifen muss, und so weiter, bis zum Anfang $a_1$29292929.
    

**Beispiele für Rekursion:**

1. **Fakultät (n!):**
    
    - Rekursiv: $a_1 = 1$ und $a_{n+1} = (n+1) \cdot a_n$ für $n \ge 1$30.
        
    - Die ersten Glieder sind $a_1=1$, $a_2=2 \cdot 1$, $a_3=3 \cdot 2 \cdot 1$31.
        
    - Explizit: $a_n = n!$32.
        
2. **"Hopse"-Spiel:**
    
    - Sei $H_n$ die Anzahl der Möglichkeiten, in $n$ Hüpfern ein Ziel zu erreichen33.
        
    - Rekursiv: $H_n = 0$ für gerades $n$34343434. $H_1 = 1$35. $H_n = 2 \cdot H_{n-2}$ für ungerades $n \ge 3$36363636.
        
    - Explizit: $H_n = 0$ (gerade) 37, $H_n = 2^{(n-1)/2}$ (ungerade)38383838.
        
3. **Lucas-Lehmer-Test:**
    
    - Wird verwendet, um zu testen, ob Zahlen der Form $M_p = 2^p - 1$ (Mersenne-Zahlen) prim sind, wobei $p$prim ist39393939.
        
    - Satz: $2^p - 1$ ist prim $\Leftrightarrow (2^p - 1) | [cite_start]S_{p-1}$40.
        
    - Die Folge $(S_n)$ ist rekursiv definiert durch: $S_1 = 4$ und $S_{n+1} = S_n^2 - 2$41.
        

---

## 2. Reihen (Series)

### 2.1. Was ist eine Reihe?

Eine Reihe entsteht, wenn man die Glieder einer Folge schrittweise aufaddiert42.

- **Beispiel:**
    
    - Folge $(a_n)$: $1, 3, 5, 7, ...$ 43
        
    - Zugehörige Reihe $(s_n)$:
        
        - $s_1 = 1$ 44
            
        - $s_2 = 1 + 3 = 4$ 45
            
        - $s_3 = 1 + 3 + 5 = 9$ 46
            
        - $s_4 = 1 + 3 + 5 + 7 = 16$ 47
            

### 2.2. Formale Definition

Sei $(a_n)_{n\in\mathbb{N}_{>0}}$ eine beliebige Folge4848.

- Die zugehörige **Reihe** ist die Folge der **Partialsummen** $(s_n)$.
    
- Die $n$-te Partialsumme $s_n$ ist definiert als:
    
    $$s_n := a_1 + a_2 + ... + a_n = \sum_{i=1}^{n} a_i$$
    
    50
    

---

## 3. Spezielle Folgen und Reihen

### 3.1. Arithmetische Folgen und Reihen

- Definition (Folge): Eine Folge heißt arithmetisch, wenn die Differenz $d$ zweier aufeinanderfolgender Glieder konstant ist515151.
    
    $$d = a_{n+1} - a_n = \text{konstant}$$
    
    52
    
- Jedes Glied ist das **arithmetische Mittel** seiner Nachbarn: $a_n = \frac{a_{n-1} + a_{n+1}}{2}$53535353.
    
- Explizite Formel (Folge):
    
    $$a_n = a_1 + (n-1) \cdot d$$
    
    54545454
    
- Formel (Reihe / $n$-te Partialsumme):
    
    $$s_n = \frac{n}{2} (a_1 + a_n)$$
    
    55555555
    
- **Beispiel (Satz von Green-Tao):** Die Folge der Primzahlen enthält beliebig lange arithmetische Teilfolgen56. Zum Beispiel (Länge 3, $d=2$): 3, 5, 757. Die längste bekannte solche Folge besteht aus 26 Primzahlen58.
    

### 3.2. Geometrische Folgen und Reihen

- Definition (Folge): Eine Folge heißt geometrisch, wenn der Quotient $q$ zweier aufeinanderfolgender Glieder konstant ist59595959.
    
    $$q = \frac{a_{n+1}}{a_n} = \text{konstant}$$
    
    60
    
- Jedes Glied ist das **geometrische Mittel** seiner Nachbarn: $a_n = \sqrt{a_{n-1} \cdot a_{n+1}}$61.
    
- Explizite Formel (Folge):
    
    $$a_n = a_1 \cdot q^{n-1}$$
    
    62626262
    
- Formel (Reihe / $n$-te Partialsumme): (für $q \ne 1$)
    
    $$s_n = a_1 \cdot \frac{1 - q^n}{1 - q}$$
    
    636363636363636363
    
- **Beispiele:**
    
    - **Witwen-Testament:** Eine Witwe erhält im ersten Jahr 1 Goldstück, in jedem folgenden Jahr verdoppelt sich die Summe ($a_1=1, q=2$)64646464. Die Gesamtsumme nach 69 Jahren wäre $s_{69} = 2^{69} - 1$ Goldstücke, eine unbezahlbare Summe65.
        
    - **Lichtdurchlässigkeit:** Ein Lichtstrahl verliert beim Durchgang durch eine Glasplatte 12% seiner Stärke66. Der Quotient ist $q = 0.88$67. Die Lichtstärke nach $n$ Platten ist $L_n = L_0 \cdot 0.88^n$68. (Beachte: Exponent ist $n$, nicht $n-1$, da $L_0$ der Startwert ist) 69.
        

---

## 4. Grenzwertüberlegungen

Das Dokument schließt mit einem Ausblick auf Grenzwerte.

- **Beispiel:** Ein Quadrat mit Fläche 1 wird schrittweise zur Hälfte gefüllt70.
    
    - Die Folge der _hinzugefügten_ Flächen ist geometrisch: $(g_n)$ mit $g_1 = 0.5$ und $q = 0.5$71.
        
    - Die $n$-te Hinzufügung ist $g_n = 0.5^n$72.
        
    - Die _Gesamtfläche_ nach $n$ Schritten ist die Partialsumme $s_n = 0.5 \cdot \frac{1 - 0.5^n}{1 - 0.5} = 1 - 0.5^n$73.
        
- **Erkenntnis:**
    
    - Diese Partialsumme $s_n$ ist immer kleiner als 174.
        
    - Wenn $n$ jedoch immer größer wird, strebt $s_n$ gegen 17575.
        
    - Umgangssprachlich: Addiert man _unendlich viele_ Glieder dieser Folge auf, erhält man exakt 176767676.
        
    - $$\sum_{i=1}^{\infty} 0.5^i = 0.5 + 0.5^2 + 0.5^3 + ... = 1$$
        
        77
        
- Dies leitet über zum Thema der **Grenzwerte**78.