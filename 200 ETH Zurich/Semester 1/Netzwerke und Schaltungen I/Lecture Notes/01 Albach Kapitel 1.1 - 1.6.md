---
tags:
  - class
  - itet
  - "#Linienintegrale"
  - "#Flächenintegrale"
  - "#elektrostatische_Kraft"
  - "#Coulombsche_Gesetz"
  - "#Kräfte_Ladungen"
  - "#NuS1"
draft: false
publish: true
---
[[07 Integral­rechnung]]
[[08 Vektor­geometrie]]
Für das Lösen der Bonusaufgabe ist es hilfreich, Appendix A, B und C aus dem Lehrbuch von Albach durchzugehen.

**Material:**
[[HS24_NuS1_Kapitel_0_Intro.pdf]], [[HS25_NuS1_Kapitel_1_El_Stat_Feld_1von3.pdf]]
[Lernvideo EE4ETH - Vereinfachung Wegintegrale URL](https://moodle-app2.let.ethz.ch/mod/url/view.php?id=1266932)
[Lernvideo EE4ETH - Vereinfachung Oberflächenintegrale](https://moodle-app2.let.ethz.ch/mod/url/view.php?id=1266933)
[[Serie_01_MuLö.pdf]]

**Schlüsselkonzepte:**

- Linien- und Flächenintegrale (Anhang C, Lernvideos #03 und #04 von EE4ETH)
    
- elektrostatische Kraft: Richtung und Stärke (Kap. 1.3)
    
- das Coulomb'sche Gesetz (Kap 1.2)
    

**Lernziele:**

- mithilfe des Coulomb'schen Gesetzes Kräfte auf Ladungen berechnen
    
- den Begriff des "elektrischen Feldes" verstehen und erklären
    

> [!info]
> 
> Ich habe die legendären [Vorlesungen von Walter Lewin](https://www.youtube.com/watch?v=rtlJoXxlSFE&list=PLyQSN7X0ro2314mKyUiOILaOC2hk6Pc3j&index=1) als Ergänzung in diesem Kurs verwendet.

## Kurseinführung: Netzwerke und Schaltungen 1 (NuS1)

Dieser Kurs zielt darauf ab, ein Verständnis **sowohl der Konzepte als auch der quantitativen Berechnungen** in elektrischen Netzwerken und Schaltungen aufzubauen.

### Kursstruktur & Ansatz

- **Interaktives Lernen:** Dieser Kurs verwendet ein interaktives Format anstelle von traditionellen Vorlesungen2. **Aktive Teilnahme wird erwartet**.
    
- **Vorbereitung:** Es wird erwartet, dass Sie **die relevanten Lehrbuchabschnitte _vor_ jeder Vorlesung lesen**. Die Vorlesungen konzentrieren sich auf die Vertiefung des Verständnisses, die Diskussion von Beispielen, das Zeigen von Experimenten und die Klärung von Schwierigkeiten.
    
- **Übung:** Rechenfähigkeiten werden durch Übungen trainiert, die zu Hause und während betreuter Übungsstunden gelöst werden.
    
- **Unterstützung:** Zusätzliche Hilfe ist über das Study Center und die Moodle-Foren verfügbar.
    

### Ressourcen

- **Lehrbuch:** "Elektrotechnik", 2. Auflage von Manfred Albach, erschienen bei Pearson. Enthält einen Zugangscode für die Online-Lernplattform MyLab.
    
- **Übungsbuch:** "Elektrotechnik Aufgabensammlung" von Albach & Fischer bietet zusätzliche Aufgaben.
    

### Bewertung & Bonus

- **Prüfung:** Eine 120-minütige Sessionsprüfung (Teil der Basisprüfung Block A) in einem hybriden Format (Papier und online). Sie umfasst kurze Fragen und längere Probleme, die sowohl das konzeptionelle Verständnis als auch Berechnungen testen.
    
- **Erlaubte Hilfsmittel:** Die Papierversion des Albach "Elektrotechnik" Lehrbuchs (darf handschriftliche Notizen enthalten), Wörterbücher, ein Formelblatt (max. 2 A4-Seiten) und spezifische Taschenrechner (Win7/Win8-Version auf dem Computer oder ein einfacher Taschenrechner gemäß D-ITET-Richtlinien). **Notizen aus Übungen oder alten Prüfungen sind NICHT erlaubt**.
    
- **Notenbonus:** Sie können bis zu einen **0.25 Notenbonus** verdienen. Dieser wird durch das Absolvieren wöchentlicher Lesetests und Bonusübungen auf Moodle erreicht. Punkte sammeln sich über das Semester an, wobei der Bonus linear von 0 (bei 140 Punkten) bis 0.25 (bei 280 Punkten oder mehr) skaliert. Abgaben sind **Sonntags bis 18:00 Uhr** fällig.
    

### Voraussetzungen

- **Mathematik:** Eine solide Grundlage in **Analysis einer Variablen und Vektorrechnung** ist erforderlich. Der Mathe-Brückenkurs wird dringend empfohlen.
    
- **Kursspezifische Mathematik:** Konzepte wie **orthogonale Koordinatensysteme** und **mehrdimensionale Integration (Linien-/Oberflächenintegrale)** werden benötigt und in den Anhängen A, B und C des Lehrbuchs sowie in frühen Übungen behandelt.
    

### Kursinhalt (NuS1)

Dieser Kurs behandelt die Grundlagen basierend auf den **Kapiteln 1-6** des Albach-Lehrbuchs. Zu den Themen gehören elektrostatische Felder, stationäre Strömungsfelder, einfache Netzwerke, Leitungsmechanismen, stationäre Magnetfelder und zeitlich veränderliche elektromagnetische Felder. Spätere Themen wie Wechselstromanalyse und Transformationen (Kapitel 7-11) werden in nachfolgenden Kursen behandelt.

---

## Kapitel 1: Das elektrostatische Feld

Dieses Kapitel führt die grundlegenden Konzepte im Zusammenhang mit **stationären elektrischen Ladungen** und den von ihnen ausgeübten Kräften ein.

![](https://www.youtube.com/watch?v=x1-SibwIPM4&list=PLyQSN7X0ro2314mKyUiOILaOC2hk6Pc3j&index=2)
### Schlüsselkonzepte & Definitionen

Um elektrische Ladungen zu verstehen, müssen wir zuerst das Atommodell verstehen:

![[Pasted image 20251023095612.png]]
**Wichtige Eigenschaften:**
	- Atomkern: bestehend aus Protonen($e^+$) und Neutronen($n$) auch *Nukleonen* gennant.
		- Im Verhältnis zur Atomgrösse sehr klein $10^{-14}m$,  während der Durchmesser der Elektronenumlaufbahnen etwa um den Faktor 10 000 grösser ist.
		- Masse der Protonen und Neutronen ist gleich und sie machen den grössten Teil der Atommasse aus $m_p$ $\approx$  $m_n$ $\approx$ $1.7 * 10^{-27}kg$
	- Elektronenwolke oder im Niels Bohr Model die *Elektronenhülle* des Atoms ist gegen aussen neutral das heisst die Anzahl Protonen($e^+$), positive Ladungsträger, und Elektronen($e^{-}$), negative Ladungsträger, ist gleich.
	- Entfernt man ein Elektron($e^{-}$) erhält man ein positives Ion (*Elektronenmangel*) fügt man eins hinzu dan ein negatives Ion (*Elektronenüberschuss*).
	- Da der Atomkern gegen aussen neutral ist und die Anzahl Elektronen($e^{-}$) und Protonen($e^+$) gleich muss die Ladung der Elektronen($e^{-}$) und Protonen($e^+$) entgegengesetzt gleich gross sein. Die kleinste, d.h. nicht weiter unterteilbare Ladungsmenge heißt *Elementarladung $e$*. Ihr experimentell bestimmter Wert beträgt $e = 1,6021892⋅10^{−19} As$.
	
>[!important]
 >- Ladungen sind stets ein Vielfaches der Elementarladung.
>- In einem abgeschlossenen System ist die Summe der Ladungen stets       konstant.
>- Diese Aussage gilt unabhängig von dem Bewegungszustand des Beobachters.
>- Ladungen gleichen Vorzeichens stossen sich gegenseitig ab, Ladungen unterschiedlichen Vorzeichens ziehen sich gegenseitig an.

- **Elektrische Ladung ($Q$):**
    
    - Existiert als positive (Protonen) und negative (Elektronen).
        
    - Die kleinste unteilbare Einheit ist die Elementarladung $e \approx 1.602 \times 10^{-19}$ As.
        
    - Gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an.
        
    - Ladung bleibt in isolierten Systemen erhalten.
        
- **Coulomb'sches Gesetz:**
	- Nehmen wir 2 Punktladungen $Q_1$ und $Q_2$ mit einem Abstand von $r$
	- Mit der Festlegung eines Einheitsvektors $\vec{e}_{r}$, der gemäß Abb. 1.2 in Richtung der Verbindungslinie von der Punktladung Q1 zur Punktladung Q2 zeigt
	- Wenn die Ladungen beide das gleiche Vorzeichen haben stossen sie sich ab darum haben wir den Kraftvektor $\vec{F}_{2}$ (Drittes Newtonsches Gesetz, Kraft gleich Gegenkraft, hätten wir auch einen Kraftvektor  $\vec{F}_{1}$ an $Q_1$ in die entgegengesetzte Richtung, aber in der Abbildung 1.2 wurde auf diesen verzichtet)
	- Couloumb fand heraus das die Kraft zwischen zwei Ladungen $Q_1$ und $Q_2$ proportional zum Produkt der beiden Ladungen und umgekehrt proportional zum Quadrat des Abstandes r zwischen den Ladungen ist. Mit der Proportionalitätskonstante $\displaystyle \frac{1}{4\pi\epsilon_0}$ folgt daraus die Beziehung:
$$
F \sim \frac{Q_1 Q_2}{r^2} \quad \rightarrow \quad F = \frac{1}{4\pi\epsilon_0} \frac{Q_1 Q_2}{r^2}.
$$
    ![[Pasted image 20251023111458.png]]
    - Quantifiziert die Kraft $\vec{F}_{2}$ zwischen zwei Punktladungen $Q_1$ und $Q_2$ im Abstand $r$ mit der Richtung vom Einheitsvektor $\vec{e}_{r}$:
    $$\vec{F}_{2}=\vec{e}_{r}\frac{1}{4\pi\epsilon_{0}}\frac{Q_{1}Q_{2}}{r^{2}}$$
	- Der Faktor $ε_0$ wird als *elektrische Feldkonstante (Dielektrizitätskonstante des Vakuums)* bezeichnet. Durch die Festlegung der Basiseinheit 1A (vgl. Kapitel 5.4) ist $ε_0$ nicht mehr frei wählbar. Messungen ergeben einen auf vier Stellen gerundeten Wert von $ε_0 = 8,854⋅10^{−12} As/Vm$.
	- Die Formel ist Vorzeichenempfindlich weil wenn $Q_1$ und $Q_2$ beide negative oder positive sind ist $\vec{F}_{2}$ in der Richting von $\vec{e}_{r}$ ist das Vorzeichen der Ladungen $Q_1$ und $Q_2$ jedoch unterschiedlich dann ist die Richtung entgegengesetzt von $\vec{e}_{r}$. Was intuitive Sinn macht denn gleiche Ladungen stossen sich ab und ungleiche ziehen sich an.
	- Proportionalitätskonstante $\displaystyle \frac{1}{4\pi\epsilon_0} = 9 * 10^9  \frac{Nm^2}{C^2}$ 
	- Die Ladung $Q$ wird in der Einheit $C$ (Couloumb) angegeben wichtig zu wissen $1C$ ist eine sehr sehr grosse Ladung meistens arbeiten wir mit mikro Couloumb ($µC$) oder weniger.
		- Die Ladung von einem Proton welches gleich ist wie die Ladung eines Elektrons beträgt $Q_{e^+} = Q_{e^-} \approx 1.6 * 10^{-19}C$
	
>[!important]
> - wobei $\vec{e}_r$ der Einheitsvektor ist, der von $Q_1$ nach $Q_2$ zeigt, und $\epsilon_0$ die elektrische Feldkonstante (Dielektrizitätskonstante des Vakuums) ist ($\approx 8.854 \times 10^{-12}$ As/Vm).
>  - Die Kraftgröße ist proportional zum Produkt der Ladungen und umgekehrt proportional zum Quadrat des Abstands.

- **Vergleich Elektrische Ladung vs. Schwerkraft**
	- nehmen wir an wir haben 2 Protonen($e^+$) mit einem Abstand $d$ gemäss Coloumb
        
- **Elektrisches Feld ($\vec{E}$):**
    
    - Ein Konzept, das eingeführt wurde, um Kräfte zu erklären, die auf Distanz wirken. Ladungen erzeugen ein elektrisches Feld im umgebenden Raum.
        
    - Definiert als die Kraft pro positiver Einheits-Testladung: $\vec{E} = \vec{F}/Q_{test}$. Es ist eine Eigenschaft der Quellladung(en) und des Raums. Einheit: V/m.
        
    - Feld einer Punktladung $Q_1$: $\vec{E}_{1}=\vec{e}_{r}\frac{Q_{1}}{4\pi\epsilon_{0}r^{2}}$.
        
    - Die Kraft auf eine Ladung $Q$ in einem elektrischen Feld ist $\vec{F} = Q\vec{E}$.
        
- **Superpositionsprinzip:**
    
    - Das gesamte elektrische Feld (oder die Kraft) von mehreren Ladungen ist die **Vektorsumme** der Felder (oder Kräfte), die von jeder Ladung einzeln erzeugt werden.
        
- **Ladungsdichten:**
    
    - Für kontinuierliche Verteilungen: Linienladung $\lambda$ (As/m), Flächenladung $\sigma$ (As/m²), Volumenladung $\rho$ (As/m³).
        
- **Felddarstellung:**
    
    - **Feldlinien:** Beginnen auf positiven Ladungen, enden auf negativen Ladungen43. Die Tangente gibt die $\vec{E}$-Richtung an. Die Dichte kann die Stärke anzeigen. Können sich nicht kreuzen.
        
    - **Äquipotentialflächen:** Flächen, auf denen das elektrische Potential konstant ist. $\vec{E}$ steht immer senkrecht auf Äquipotentialflächen. Leiter bilden in der Elektrostatik Äquipotentialbereiche.
        
- **Elektrisches Potential ($\varphi_e$) & Spannung ($U$):**
    
    - Das elektrostatische Feld ist konservativ: $\oint_C \vec{E}\cdot d\vec{s} = 0$.
        
    - Ermöglicht die Definition eines skalaren Potentials $\varphi_e$ (Einheit: V). Potentialdifferenz (Spannung) hängt mit der Arbeit zusammen, die beim Bewegen einer Ladung verrichtet wird: $W_e = Q(\varphi_{e}(P_1) - \varphi_{e}(P_0))$.
        
    - Spannung zwischen zwei Punkten: $U_{12} = \varphi_{e}(P_1) - \varphi_{e}(P_2) = \int_{P_2}^{P_1} \vec{E}\cdot d\vec{s}$.
        
- **Elektrische Flussdichte ($\vec{D}$):**
    
    - Definiert als $\vec{D} = \epsilon \vec{E} = \epsilon_0 \epsilon_r \vec{E}$. Einheit: As/m².
        
    - **Gauß'sches Gesetz:** Der gesamte elektrische Fluss $\Psi$ aus einer geschlossenen Oberfläche entspricht der eingeschlossenen Ladung $Q$: $\Psi=\oint_{A}\vec{D}\cdot d\vec{A}=Q$.
        
- **Leiter & Isolatoren in elektrostatischen Feldern:**
    
    - **Leiter:** Enthalten freie Ladungen. In der Elektrostatik ist $\vec{E}=0$ im Inneren. Sie bilden Äquipotentialbereiche58. Überschüssige Ladung befindet sich auf der Oberfläche. $\vec{E}$ steht direkt außen senkrecht zur Oberfläche. **Influenz:** Ladungsumverteilung auf einem Leiter aufgrund eines externen Feldes. **Abschirmung (Faraday'scher Käfig):** Ein leitfähiges Gehäuse blockiert externe statische Felder vom Inneren.
        
    - **Dielektrika (Isolatoren):** Ladungen sind gebunden. Ein externes Feld verursacht **Polarisation**(Ausrichtung/Erzeugung von elektrischen Dipolen). Beschrieben durch die relative Permittivität $\epsilon_r$(oder Dielektrizitätskonstante). $\vec{D} = \epsilon_0 \epsilon_r \vec{E}$.
        
- **Kapazität ($C$):**
    
    - Maß für die Fähigkeit eines Systems, elektrische Ladung und Energie zu speichern. Definiert als $C=Q/U$. Einheit: Farad (F).
        
    - Plattenkondensator: $C=\frac{\epsilon A}{d}$.
        
    - Kondensatoren in Parallelschaltung addieren sich: $C_{ges}=\sum C_{k}$.
        
    - Bei Kondensatoren in Serienschaltung addieren sich die Kehrwerte: $1/C_{ges}=\sum 1/C_{k}$.
        
- **Speicherung elektrischer Energie:**
    
    - In einem Kondensator gespeicherte Energie: $W_e = \frac{1}{2}CU^2$.
        
    - Energiedichte im Feld: $w_e = \frac{1}{2}\vec{E}\cdot\vec{D}$.
        
