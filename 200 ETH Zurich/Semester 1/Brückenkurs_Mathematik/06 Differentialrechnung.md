[[206_skript_grenzwerte.pdf]]
[[301_skript_ableitung.pdf]][[302_skript_ableitungen_skizzieren_und_berechnen.pdf]][[303_skript_graphenanalyse_und_optimierung.pdf]]
[[304_skript_differentiationsregeln_I.pdf]]
[[305_skript_differentiationsregeln_II.pdf]]
# 1. Folgen und Reihen

Dieses Kapitel behandelt die Grundlagen von Folgen und Reihen als geordnete Listen von Zahlen und deren Summen1111.

## 1.1. Folgen (Sequences)

- **Definition (Intuitiv):** Eine Folge ist eine Anordnung von Zahlen (Gliedern), die nach einer bestimmten Regel oder Formel gebildet wird2.
    
- **Definition (Formal):** Eine (reelle) Folge $a$ ist eine Funktion $a: \mathbb{N}_{>0} \rightarrow \mathbb{R}$, die jedem Index $n \in \mathbb{N}_{>0}$ eine reelle Zahl $a_n := a(n)$ zuordnet3.
    
- **Notation:** $(a_n)_{n\in\mathbb{N}>0}$ bezeichnet die Folge $a_1, a_2, a_3, ...$4.
    
- **Darstellungsformen:**
    
    - **Explizit:** Eine direkte Formel für das $n$-te Glied, z.B. $a_n = 4n + 3$5555.
        
    - **Rekursiv:** Angabe eines Startwerts (z.B. $a_1$) und einer Rekursionsformel, die $a_{n+1}$ mittels $a_n$(oder früheren Gliedern) definiert6.
        
        - Beispiel (Fakultät): $a_1 = 1$ und $a_{n+1} = (n+1) \cdot a_n$7. Dies ergibt die explizite Formel $a_n = n!$8.
            

## 1.2. Reihen (Series)

- **Definition:** Eine Reihe entsteht durch die schrittweise Addition der Glieder einer Folge9.
    
- **Partialsumme:** Die Reihe ist formal die **Folge der Partialsummen** $(s_n)$10101010.
    
- **Notation:** Die $n$-te Partialsumme ist $s_n := a_1 + a_2 + ... + a_n = \sum_{i=1}^{n} a_i$11.
    

## 1.3. Arithmetische Folgen und Reihen

- **Arithmetische Folge:** Die Differenz $d$ zwischen aufeinanderfolgenden Gliedern ist konstant: $d = a_{n+1} - a_n$12.
    
    - **Explizite Formel:** $a_n = a_1 + (n-1) \cdot d$13.
        
- Arithmetische Reihe: Die $n$-te Partialsumme ist:
    
    $$s_n = \frac{n}{2} (a_1 + a_n)$$
    
    14
    

## 1.4. Geometrische Folgen und Reihen

- **Geometrische Folge:** Der Quotient $q$ zwischen aufeinanderfolgenden Gliedern ist konstant: $q = \frac{a_{n+1}}{a_n}$15.
    
    - **Explizite Formel:** $a_n = a_1 \cdot q^{n-1}$16.
        
- Geometrische Reihe: Die $n$-te Partialsumme ist (für $q \ne 1$):
    
    $$s_n = a_1 \cdot \frac{1 - q^n}{1 - q}$$
    
    17
    

---

# 2. Grenzwerte (Limits)

Grenzwerte beschreiben das Verhalten von Folgen (und später Funktionen), wenn sich der Index $n$ (oder die Variable $x$) einem Wert annähert, oft $\infty$18.

## 2.1. Konvergenz von Folgen

- **Intuitiv:** Eine Folge konvergiert gegen einen Grenzwert $g$, wenn sich die Glieder der Folge diesem Wert $g$"beliebig nahe" annähern19.
    
- **Formale Definition:** Eine Folge $(a_n)$ hat den **Grenzwert (Limes)** $g$, wenn zu jeder (beliebig kleinen) Zahl $\epsilon > 0$ ein Index $N$ existiert, sodass für alle $n > N$ gilt: $|a_n - g| [cite_start]< \epsilon$20.
    
- **Notation:** $\lim_{n\to\infty} a_n = g$ oder $a_n \to g$ für $n \to \infty$21.
    
- **Konvergenz:** Eine Folge heißt **konvergent**, wenn eine solche reelle Zahl $g$ existiert22.
    
- **Beispiele:**
    
    - $\lim_{n\to\infty} \frac{1}{n} = 0$23.
        
    - $\lim_{n\to\infty} \frac{n}{n+1} = 1$24.
        
    - $\lim_{n\to\infty} q^n = 0$, falls $0 < |q| [cite_start]< 1$25252525.
        

## 2.2. Grenzwertsätze (Limit Laws)

Wenn $a_n \to g$ und $b_n \to h$ konvergente Folgen sind, gilt 26:

- **Summe:** $\lim_{n\to\infty} (a_n + b_n) = g + h$27.
    
- **Allgemein:** Der Limes respektiert alle vier Grundrechenarten (Addition, Subtraktion, Multiplikation, Division)28282828.
    
- **Vorsicht bei Division:** Für $\lim \frac{a_n}{b_n} = \frac{g}{h}$ muss zusätzlich $b_n \ne 0$ und $h \ne 0$gelten29.
    
- **Trick:** Bei Brüchen von Polynomen in $n$ wird oft mit der höchsten Potenz des Nenners gekürzt/erweitert30.
    
    - Beispiel: $\lim_{n\to\infty} \frac{3n^2 - 7n}{22 - 2n^2} = \lim_{n\to\infty} \frac{3 - 7/n}{22/n^2 - 2} = \frac{3-0}{0-2} = -1.5$313131313131313131.
        

## 2.3. Grenzwerte von Reihen

- **Arithmetische Reihe:** Konvergiert nur im trivialen Fall, dass $a_1=0$ und $d=0$32.
    
- Geometrische Reihe: Konvergiert, falls $|q| [cite_start]< 1$33. Die unendliche Summe ist:
    
    $$\lim_{n\to\infty} s_n = \sum_{i=1}^{\infty} a_i = \frac{a_1}{1-q}$$
    
    34
    
- **Beispiel (Zenons Paradox):** Achilles holt die Schildkröte ein, weil die unendliche Summe der Vorsprünge $s_0 + q s_0 + q^2 s_0 + ...$ eine konvergente geometrische Reihe ist35353535. Die Gesamtstrecke ist endlich: $s_{total} = \frac{s_0}{1-q}$36.
    

---

# 3. Die Ableitung (The Derivative)

Die Differentialrechnung ist das Werkzeug, um die "Geschwindigkeit" oder momentane Änderungsrate einer Funktion zu bestimmen37373737.

## 3.1. Konzept: Von der Sekante zur Tangente

- Die zentrale Idee ist, die **momentane Änderungsrate** (z.B. Momentangeschwindigkeit) zu finden383838.
    
- Dies wird erreicht, indem man die **durchschnittliche Änderungsrate** (z.B. Durchschnittsgeschwindigkeit) über ein immer kleiner werdendes Intervall $\Delta x$ betrachtet39393939.
    
- **Geometrisch:** Die Steigung der **Sekante** (Linie durch zwei Punkte $P$ und $Q$) nähert sich der Steigung der **Tangente** (Linie, die den Graphen an einem Punkt $P$ berührt), wenn der Punkt $Q$ auf $P$"zuwandert"40404040.
    

## 3.2. Der Differenzenquotient

- Der **Differenzenquotient** ist der formale Ausdruck für die durchschnittliche Änderungsrate41414141.
    
- Er ist die Steigung der Sekante durch die Punkte $(x_0, f(x_0))$ und $(x_1, f(x_1))$42.
    
- **Formeln:**
    
    - $\frac{\Delta y}{\Delta x} = \frac{f(x_1) - f(x_0)}{x_1 - x_0}$ 43
        
    - $\frac{f(x_0 + h) - f(x_0)}{h}$ (wobei $h = \Delta x = x_1 - x_0$) 44
        

## 3.3. Formale Definition der Ableitung

- Die **Ableitung** (auch Differentialquotient genannt) ist der **Grenzwert** des Differenzenquotienten, wenn das Intervall gegen Null geht 45.
    
- Definition:
    
    $$f'(x_0) = \lim_{x_1 \to x_0} \frac{f(x_1) - f(x_0)}{x_1 - x_0} = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$$
    
    46
    
- **Bedeutung:** $f'(x_0)$ ist die **momentane Änderungsrate** von $f$ an der Stelle $x_0$ bzw. die **Steigung der Tangente** an den Graphen im Punkt $(x_0, f(x_0))$47.
    
- **Differenzierbarkeit:** Eine Funktion heißt an der Stelle $x_0$ **differenzierbar**, wenn dieser Grenzwert existiert48.
    
    - **Gegenbeispiel:** $f(x) = |x|$ ist an $x_0 = 0$ nicht differenzierbar, da der linksseitige Grenzwert (-1) und der rechtsseitige Grenzwert (+1) nicht übereinstimmen49494949.
        

## 3.4. Die Ableitungsfunktion und höhere Ableitungen

- 1. Ableitung ($f'$): Die Funktion $f'$, die jeder Stelle $x$ ihre Ableitung $f'(x)$ zuordnet, heißt **Ableitungsfunktion**50505050.
    
- **2. Ableitung ($f''$):** Da $f'$ selbst eine Funktion ist, kann sie erneut abgeleitet werden. Dies ergibt die 2. Ableitung, $f'' = (f')'$51. Notation: $f''(x)$ oder $\frac{d^2f}{dx^2}$52.
    
- **n-te Ableitung ($f^{(n)}$):** Notation: $f^{(n)}$ oder $\frac{d^nf}{dx^n}$53535353.
    

---

# 4. Graphen und Berechnung von Ableitungen

## 4.1. Die Ableitung skizzieren ($f \leftrightarrow f'$)

Der Graph von $f'$ kann qualitativ aus dem Graphen von $f$ hergeleitet werden54545454.

- **Nullstellen von $f'$:** Wo $f$ ein **(lokales) Minimum oder Maximum** hat (horizontale Tangente), hat $f'$ eine Nullstelle55555555.
    
- **Vorzeichen von $f'$ (Positiv/Negativ):**
    
    - Wo $f$ **steigt** (monoton wachsend), ist $f'$ **positiv** (über der x-Achse)56565656.
        
    - Wo $f$ **fällt** (monoton fallend), ist $f'$ **negativ** (unter der x-Achse)57575757.
        
- **Extrema von $f'$:**
    
    - Wo $f$ am **steilsten** fällt (maximales Gefälle), hat $f'$ ein **lokales Minimum**585858.
        
    - Wo $f$ am **steilsten** steigt (maximaler Anstieg), hat $f'$ ein **lokales Maximum**59.
        
    - Diese Stellen (steilste Steigung/Gefälle bei $f$) sind die **Wendepunkte** von $f$.
        

## 4.2. Die Ableitung berechnen (via Limes)

Um die Ableitungs_funktion_ zu finden, ersetzt man die feste Stelle $x_0$ durch eine Variable $x$60.

- **Prozess:**
    
    1. Stelle den Differenzenquotienten $\frac{f(x+h) - f(x)}{h}$ auf61616161.
        
    2. Forme den Zähler algebraisch so um, dass $h$ gekürzt werden kann62626262.
        
    3. Führe den Grenzwertprozess $h \to 0$ durch63636363.
        
- **Beispiel: $f(x) = 0.25x^2$**
    
    - $f'(x) = \lim_{h \to 0} \frac{0.25(x+h)^2 - 0.25x^2}{h}$ 6464
        
    - $= \lim_{h \to 0} \frac{0.25(x^2 + 2xh + h^2 - x^2)}{h}$ 6565
        
    - $= \lim_{h \to 0} \frac{0.25(2xh + h^2)}{h}$ 6666
        
    - $= \lim_{h \to 0} 0.25(2x + h)$ 6767
        
    - $= 0.25(2x + 0) = 0.5x$68686868.
        

---

# 5. Differentiationsregeln

Da die Berechnung über den Limes mühsam ist, verwendet man Standardregeln69696969.

## 5.1. Grundregeln

1. Konstante Funktion: $(a)' = 0$
    
    * 70
    
2. Faktorregel (Homogenität): $(c \cdot g(x))' = c \cdot g'(x)$
    
    * 717171
    
3. Summenregel (Additivität): $(f(x) \pm g(x))' = f'(x) \pm g'(x)$
    
    * 72727272
    

- (Diese Regeln bedeuten: Differenzieren ist eine **lineare Operation** 73).
    

## 5.2. Potenz-, Exponential- und Trigonometrische Funktionen

4. **Potenzregel (Power Rule):** $(x^k)' = k \cdot x^{k-1}$
    
    - Dies gilt für $k \in \mathbb{N}$ 74, aber auch für negative, rationale und reelle Exponenten75757575.
        
    - Beispiele: $(x^2)' = 2x$76. $(x^7)' = 7x^6$77.
        
5. **Exponentialfunktion (Basis $e$):** $(e^x)' = e^x$
    
    - Die $e$-Funktion ist ihre eigene Ableitung; ihr Funktionswert ist an jeder Stelle gleich ihrer Steigung78787878.
        
6. Exponentialfunktion (Allg. Basis): $(a^x)' = \ln(a) \cdot a^x$
    
    * 79
    
7. **Trigonometrische Funktionen:** (Winkel im Bogenmaß/Radians!) 80
    
    - $(\sin(x))' = \cos(x)$ 81
        
    - $(\cos(x))' = -\sin(x)$ 82
        
    - $(\tan(x))' = \frac{1}{\cos^2(x)}$ 83
        
    - $(\cot(x))' = -\frac{1}{\sin^2(x)}$ 84
        

## 5.3. Produkt- und Quotientenregel

8. **Produktregel:** $(f(x) \cdot g(x))' = f'(x)g(x) + f(x)g'(x)$
    
    - **Achtung:** Die Ableitung eines Produkts ist _nicht_ das Produkt der Ableitungen85858585.
        
9. Quotientenregel: $\left( \frac{f(x)}{g(x)} \right)' = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}$
    
    * 86
    

## 5.4. Die Kettenregel (Chain Rule)

Wird für **verschachtelte (verkettete) Funktionen** $k(x) = g(f(x))$ benötigt87878787.

- $g$ ist die **äußere Funktion**, $f$ ist die **innere Funktion**88.
    
- **Regel ("Außen mal Innen"):** $k'(x) = g'(f(x)) \cdot f'(x)$
    
    - Ableitung der äußeren Funktion (ausgewertet an der inneren Funktion) _mal_ der Ableitung der inneren Funktion89898989.
        
- **Beispiel 1:** $k(x) = \sin(x^2)$
    
    - Äußere: $\sin(u) \to \cos(u)$
        
    - Innere: $x^2 \to 2x$
        
    - $k'(x) = \cos(x^2) \cdot (2x)$90.
        
- **Beispiel 2:** $k(x) = e^{-0.5x}$
    
    - Äußere: $e^u \to e^u$
        
    - Innere: $-0.5x \to -0.5$
        
    - $k'(x) = e^{-0.5x} \cdot (-0.5)$91.
        

## 5.5. Die Umkehrregel und ihre Anwendungen

Wird zur Ableitung von Umkehrfunktionen ($f^{-1}$) verwendet92.

10. Umkehrregel: Wenn $g = f^{-1}$, dann $f'(x) = \frac{1}{g'(f(x))}$
    
    * 93
    
    - Der Beweis folgt aus $g(f(x)) = x$ und beidseitigem Ableiten mit der Kettenregel: $g'(f(x)) \cdot f'(x) = 1$ 94.
        

- **Anwendungen:**
    
    - **Logarithmus:** $f(x) = \ln(x)$. Inverse ist $g(x) = e^x$.
        
        - $(\ln(x))' = \frac{1}{e^{\ln(x)}} = \frac{1}{x}$95.
            
        - **Satz:** $(\ln(x))' = \frac{1}{x}$ und $(\log_B(x))' = \frac{1}{\ln(B) \cdot x}$96.
            
    - **Wurzelfunktion:** $f(x) = x^{1/n}$. Inverse ist $g(x) = x^n$.
        
        - $(x^{1/n})' = \frac{1}{n(x^{1/n})^{n-1}} = \frac{1}{n} x^{\frac{1}{n}-1}$97.
            
    - **Arkusfunktionen:** $f(x) = \arcsin(x)$. Inverse ist $g(x) = \sin(x)$.
        
        - $(\arcsin(x))' = \frac{1}{\cos(\arcsin(x))} = \frac{1}{\sqrt{1-x^2}}$98989898.
            
        - **Satz:** $(\arctan(x))' = \frac{1}{1+x^2}$99.
            

---

# 6. Anwendungen der Differentialrechnung

Ableitungen dienen als "Diagnoseinstrument" zur Analyse von Funktionen und zur Lösung von Optimierungsproblemen100.

## 6.1. Graphenanalyse (Kurvendiskussion)

Analyse der Kurvenform einer Funktion $f$ mittels $f'$, $f''$ und $f'''$101.

|**Eigenschaft von f**|**Bedingung**|
|---|---|
|**Monotonie**||
|Streng monoton wachsend||$f'(x) > 0$ 102102102102|
|Streng monoton fallend||$f'(x) < 0$ 103103|
|**Krümmung (Konkavität)**||
|Linksgekrümmt (konkav hoch)||$f''(x) > 0$ (da $f'$ wächst) 104104104104|
|Rechtsgekrümmt (konkav runter)||$f''(x) < 0$ (da $f'$ fällt) 105105|
|**Extremstellen (Min/Max)**||
|Notwendige Bedingung||$f'(x_0) = 0$ 106|
|Hinreichend: **Lokales Minimum**||$f'(x_0) = 0$ **und** $f''(x_0) > 0$ 107107107107|
|Hinreichend: **Lokales Maximum**||$f'(x_0) = 0$ **und** $f''(x_0) < 0$ 108108|
|**Wendepunkt (Krümmungswechsel)**||
|Notwendige Bedingung||$f''(x_0) = 0$ 109|
|Hinreichende Bedingung||$f''(x_0) = 0$ **und** $f'''(x_0) \ne 0$ 110110|
|**Sattelpunkt (Terrassenpunkt)**||
|Definition|Wendepunkt mit horizontaler Tangente 111|
|Hinreichende Bedingung||$f'(x_0) = 0$, $f''(x_0) = 0$ **und** $f'''(x_0) \ne 0$112112112112|

### Checkliste Graphenanalyse

1. Definitionsmenge und Symmetrien bestimmen113.
    
2. Achsenschnittpunkte: Nullstellen ($f(x)=0$) und $y$-Achsenabschnitt ($f(0)$)114.
    
3. Ableitungen $f', f'', f'''$ berechnen115.
    
4. Extremstellen finden ($f'=0$, mit $f''$ testen)116.
    
5. Wendepunkte finden ($f''=0$, mit $f'''$ testen)117.
    
6. Verhalten im Unendlichen ($x \to \pm\infty$) und an Polstellen (Asymptoten)118.
    
7. Graph skizzieren119.
    

## 6.2. Extremwertprobleme (Optimierung)

Ziel ist es, eine **Zielgrösse** (z.B. Fläche, Distanz) unter bestimmten **Nebenbedingungen** (Einschränkungen) zu maximieren oder zu minimieren120120120120120120120120120.

### Vorgehensweise

1. **Zielgrösse** als Funktion aufstellen (oft mit mehreren Variablen), z.B. $D(x,y) = x^2 + (y-1)^2$121121121.
    
2. **Nebenbedingung(en)** als Gleichung(en) formulieren, z.B. $y = x^2$122122122.
    
3. Nebenbedingungen in die Zielgrösse einsetzen, um eine Funktion in **einer Variablen** zu erhalten, z.B. $D(x) = x^2 + (x^2-1)^2 = x^4 - x^2 + 1$123123123.
    
4. Extremstellen dieser Funktion finden:
    
    a. Ableitung bilden: $D'(x) = 4x^3 - 2x$124124124.
    
    b. Nullstellen der Ableitung finden: $D'(x) = 0 \Rightarrow x=0, x=\pm\frac{\sqrt{2}}{2}$125.
    
    c. Art des Extremums mittels 2. Ableitung ($D''$) bestimmen (oder über Vorzeichenwechsel von $D'$)126.
    
5. Antwort formulieren (z.B. die minimale Distanz oder die x/y-Werte)127.
    

### Beispiel: Minimaler Abstand (Komet)

- **Problem:** Finde den Punkt auf der Parabel $y=x^2$, der dem Punkt (Planeten) $P(0,1)$ am nächsten ist128.
    
- **Zielgrösse (quadr. Distanz):** $D(x,y) = x^2 + (y-1)^2$129.
    
- **Nebenbedingung:** $y=x^2$130.
    
- **Zielfunktion (in einer Var.):** $D(x) = x^2 + (x^2-1)^2 = x^4 - x^2 + 1$131.
    
- **Ableitungen:**
    
    - $D'(x) = 4x^3 - 2x$132.
        
    - $D''(x) = 12x^2 - 2$133.
        
- **Analyse:**
    
    - $D'(x) = 0 \Rightarrow x \in \{0, -\frac{\sqrt{2}}{2}, +\frac{\sqrt{2}}{2}\}$134.
        
    - $D''(0) = -2 < 0 \Rightarrow$ Lokales **Maximum** (!)135.
        
    - $D''(\pm \frac{\sqrt{2}}{2}) = 4 > 0 \Rightarrow$ (Absolutes) **Minimum**136.
        
- **Lösung:** Die dem Planeten am nächsten gelegenen Punkte sind $x = \pm \frac{\sqrt{2}}{2}$ (und $y = x^2 = 0.5$)137. Der Scheitelpunkt ($x=0$) ist ein lokales _Maximum_ der Distanz138.