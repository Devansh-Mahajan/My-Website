---
title: Elektrostatische Kraft Richtung und Stärke, das Coulomb'sche Gesetz
description: NuS1 Week 1 Lecture
tags:
  - class
  - itet
  - "#NuS1"
  - "#Elektrostatische_Kraft"
  - "#Coulombsche_Gesetz"
date: 2025-10-15
draft: false
publish: true
---
**Topic:** #NuS1
**Topics:** #Elektrostatische_Kraft #Coulombsche_Gesetz 
# Prerequisite:
- Brückenkurs Mathematik Lernpfade "Integralrechnung" und "Vektorgeometrie"
	- [Brückenkurs Mathematik](http://pontifex.ethz.ch/site1/) 
- Linien- und Flächenintegrale (Anhang C, Lernvideos #03 und #04 von EE4ETH)  
	- [Lernvideo EE4ETH - Vereinfachung Wegintegrale](https://moodle-app2.let.ethz.ch/mod/url/view.php?id=1266932) 
	- [Lernvideo EE4ETH - Vereinfachung Oberflächenintegrale](https://moodle-app2.let.ethz.ch/mod/url/view.php?id=1266933)

# Schlüsselkonzepte:

- Linien- und Flächenintegrale (Anhang C, Lernvideos #03 und #04 von EE4ETH)
- elektrostatische Kraft: Richtung und Stärke (Kap. 1.3)
- das Coulomb'sche Gesetz (Kap 1.2)

# Lernziele:

- mithilfe des Coulomb'schen Gesetzes Kräfte auf Ladungen berechnen
- den Begriff des "elektrischen Feldes" verstehen und erklären

# Albach Kapitel 1.1 - 1.6 (S.25 - 34)

## Kapitel 1.1 Die elektrische Ladung
![[Pasted image 20251013145519.png]]
### Atommodell von Niels Bohr
Nach diesem vereinfachten *Atommodell von Niels Bohr* besteht ein Atom aus:
- einem Kern: Protonen *(positive Ladungsträger)* und Neutronen werden als *Nukleonen* bezeichnet ihre Masse ist um den Faktor *1836* grösser als die Masse der Elektronen der *Atomkern* besitzt einen Durchmesser in der Grössenordnung *von $10^{-14}$ m*,  während der Durchmesser der Elektronenumlaufbahnen etwa um den Faktor *10 000* größer ist.
- Elektronen *(negative Ladungsträger)* die den Kern auf bestimmten Bahnen umkreisen, mehrere Bahnen zusammen bilden eine *Schale*.
	- die Summe aller im Kern umkreisenden Elektronen bezeichnet man als *Elektronenhülle*
- Anzahl Protonen bzw. Elektronen in einem Atom wird als *Ordnungszahl* bezeichnet. 
	- (Ex. Wasserstoff (H) 1 und Kupfer (Cu) 29)
### Ladung
Durch Experimente (z.B. Reibung von Glas- oder Kunststoffstäben) stellt man fest, dass es zwei Arten von Ladungen geben muss, da sowohl Anziehung als auch Abstoßung auftritt: positive und negative Ladungen.
Die kleinste Ladung also die Ladung der Protonen (+$e$) und Ladung der Elektronen (-$e$) welche entgegengesetzt gleich gross sind beträgt $e = 1,6021892⋅10^{−19} As$ und heisst *Elementarladung e*.
Der Wert von $e$ ist *konstant*, er ist insbesondere *unabhängig vom Bewegungszustand (Geschwindigkeit) des Teilchens*. Im Gegensatz dazu ist die *Teilchenmasse abhängig von der Geschwindigkeit*.
Für das entstehen von wirksamen Kräften braucht es einen *Elektronenmangel* und *Elektronenüberschuss*.

> [!Important]
> - Ladungen sind stets ein Vielfaches der Elementarladung.
> - In einem abgeschlossenen System ist die Summe der Ladungen stets konstant. 
>   Diese Aussage gilt unabhängig von dem Bewegungszustand des Beobachters.
> - Ladungen gleichen Vorzeichens stoßen sich gegenseitig   ab, Ladungen unterschiedlichen Vorzeichens ziehen sich gegenseitig an.

### Kapitel 1.2 Das Coulomb'sche Gesetz
Charles Augustin de Coulomb (1736–1806) hat durch Messungen die grundlegenden Abhängigkeiten der Kraft $F$ zwischen zwei elektrischen Ladungen $Q_1$ und $Q_2$ festgestellt

![[Pasted image 20251013164038.png]]
- Die Kraft $F$ ist **betragsmäßig proportional zu jeder der beiden Ladungen** ($Q_1$ und $Q_2$)
	1. **Direkte Abhängigkeit:** Es besteht eine **direkte und lineare Beziehung** zwischen dem Betrag der Kraft ($|F|$) und der Menge (dem Betrag) jeder einzelnen Ladung.

	2. **Proportional zum Produkt:** Da die Kraft von _beiden_ Ladungen abhängt, ist der Betrag der Kraft $F$ proportional zum **Produkt der Beträge** der beiden Ladungen ($|F| \sim |Q_1| \cdot |Q_2|$).

	3. **Konsequenzen für die Kraftstärke:**

	    ◦ Wenn die Ladungsmenge $Q_1$ (oder $Q_2$) verdoppelt wird, während alle anderen Faktoren (die andere Ladung und der Abstand) konstant bleiben, **verdoppelt sich auch der Betrag der Kraft $F$**.

	    ◦ Wenn beispielsweise $Q_1$ verdoppelt und $Q_2$ verdreifacht wird, wird die Gesamtkraft um den Faktor $2 \times 3 = 6$ erhöht.
- Die Kraft $F$ ist **umgekehrt proportional zum Quadrat des Abstandes $r$** zwischen den Ladungen ($Q_1$ und $Q_2$)
	1. **Umgekehrte Proportionalität:**
	
	    ◦ Die Kraft $F$ nimmt ab, wenn der Abstand $r$ zwischen den beiden Ladungen $Q_1$ und $Q_2$ zunimmt.
	
	2. **Quadratische Abhängigkeit ($1/r^2$):**
	
	    ◦ Die Abnahme der Kraft erfolgt nicht linear, sondern proportional zum **Quadrat** des Abstands. Mathematisch wird dies ausgedrückt als $F \sim 1/r^2$.
	
	    ◦ Daher spricht man von einem **quadratischen Abstandsgesetz**.
	
	Konsequenzen der quadratischen Abhängigkeit
	
	Die Konsequenz dieser quadratischen Abhängigkeit ist, dass die Kraftwirkung **sehr schnell** mit zunehmendem Abstand nachlässt:
	
	• **Verdopplung des Abstands:** Wird der Abstand $r$ zwischen den Ladungen verdoppelt (Faktor 2), so sinkt die Kraft auf ein Viertel ($1/2^2 = 1/4$) des ursprünglichen Wertes.
	
	• **Reduzierung des Abstands:** Wird der Abstand $r$ auf ein Zehntel ($1/10$) reduziert, so erhöht sich die Kraft um den Faktor 100 ($1/(1/10)^2 = 100$).
	
	Bezug zum Elektrostatischen Feld
	
	Dieses Prinzip ist fundamental für die gesamte Elektrostatik, da die aus der Kraft abgeleitete **elektrische Feldstärke** ($E$) die gleiche Abstandsabhängigkeit aufweist.
	
	Eine positive Punktladung ruft im homogenen Raum eine radial nach außen gerichtete elektrische Feldstärke hervor, deren Betrag **mit dem Quadrat des Abstandes** von der Punktladung **abnimmt**.
	
	Daraus folgt auch, wie das Feld bildlich dargestellt wird: Die mit zunehmendem Abstand von einer Punktladung geringer werdende elektrische Feldstärke drückt sich dadurch aus, dass der Abstand zwischen den Feldlinien größer wird. Die Feldstärke (und damit die Feldliniendichte) ist umgekehrt proportional zum Quadrat des Abstands ($E \sim 1/r^2$).
Der Faktor $ε_0$ wird als elektrische Feldkonstante *(Dielektrizitätskonstante des Vakuums)* bezeichnet. 
Durch die Festlegung der Basiseinheit 1A (vgl. Kapitel 5.4) ist $ε_0$ nicht mehr frei wählbar. Messungen ergeben einen auf vier Stellen gerundeten Wert von $ε0 = 8,854⋅10^{−12} \dfrac {As}{Vm}$.

Gleichung mit Kraft als vektorielle Grösse:
![[Pasted image 20251013165952.png]]

Haben beide Ladungen gleiche Vorzeichen, dann wird die Ladung Q2 von der Ladung Q1 abgestoßen, haben sie entgegengesetzte Vorzeichen, dann wirkt die Kraft in Richtung − er und die Ladung Q2 wird von Q1 angezogen.

![[Pasted image 20251013170141.png]]
### Kapitel 1.3 Die elektrische Feldstärke

Diese Zusammenfassung behandelt detailliert die Grundlagen des **elektrostatischen Feldes** gemäß den Kapiteln 1.1 bis 1.6 des Lehrbuchs **"Elektrotechnik, 2. aktualisierte Auflage"** und ist so aufbereitet, dass sie als **selbsterklärende Darstellung** verwendet werden kann.

***

# Grundlagen des elektrostatischen Feldes (Kapitel 1.1 bis 1.6)

Das **elektrostatische Feld** ist der Ausgangspunkt der Elektrotechnik und befasst sich mit Phänomenen, die durch **ruhende Ladungen** (Ladungsverteilungen) verursacht werden.

## 1.1 Die elektrische Ladung

Die **elektrische Ladung** ist die fundamentale Ursache für alle elektromagnetischen Erscheinungen [C]. Das zugrunde liegende Konzept basiert auf dem **vereinfachten Atommodell von Niels Bohr** [C].

*   **Atomaufbau:** Atome bestehen aus einem Kern (mit positiv geladenen **Protonen** und neutralen **Neutronen**) und einer Hülle, die negativ geladene **Elektronen** enthält [C].
*   **Quantisierung:** Ladungen sind stets ein **Vielfaches der Elementarladung** [28, Merke].
*   **Ladungserhaltung:** Die **Summe der Ladungen** ist in einem abgeschlossenen System **stets konstant** [28, Merke].
*   **Wechselwirkung:** Ladungen **gleichen Vorzeichens stoßen sich gegenseitig ab**, während Ladungen **unterschiedlichen Vorzeichens sich gegenseitig anziehen** [28, Merke].

## 1.2 Das Coulomb'sche Gesetz

Das Gesetz beschreibt die Kraft $\mathbf{F}$ zwischen zwei ruhenden Ladungen $Q_1$ und $Q_2$. Charles Augustin de Coulomb (1736–1806) stellte durch Messungen fest, dass die Kraft $F$ [C]:

1.  **Betragsmäßig proportional zu jeder der beiden Ladungen** ($Q_1$ und $Q_2$) ist [C].
2.  **Umgekehrt proportional zum Quadrat des Abstandes $r$** zwischen den Ladungen ist [C].

Daraus ergibt sich die Betragsbeziehung (Gleichung (1.1) des Lehrbuchs):
$$F = \frac{1}{4\pi\epsilon_0} \cdot \frac{|Q_1 Q_2|}{r^2}$$

*   **Punktladungen:** Diese Gleichung gilt unter der Annahme, dass die geometrische Ausdehnung der einzelnen Ladungen **sehr viel kleiner** ist als der Abstand $r$ (Kraft zwischen **Punktladungen**).
*   **Elektrische Feldkonstante $\epsilon_0$:** Die **Proportionalitätskonstante $1/(4\pi\epsilon_0)$** [C] enthält die **elektrische Feldkonstante $\epsilon_0$** (Dielektrizitätskonstante im Vakuum), deren auf vier Stellen gerundeter Wert **$\epsilon_0 = 8,854\cdot10^{-12} \text{ As/Vm}$** beträgt.
*   **Vektorielle Kraft:** Die Kraft auf die Ladung $Q_2$ wird vektoriell beschrieben durch $\mathbf{F} = \frac{1}{4\pi\epsilon_0} \cdot \frac{Q_1 Q_2}{r^2} \mathbf{e}_{\mathbf{r}}$, wobei $\mathbf{e}_{\mathbf{r}}$ den Einheitsvektor in Richtung der Verbindungslinie von $Q_1$ nach $Q_2$ darstellt.

## 1.3 Die elektrische Feldstärke

Zur Beschreibung der Kraftwirkungen wird der **Begriff des elektrischen Feldes** eingeführt.

*   **Definition:** Die **elektrische Feldstärke $\mathbf{E}$** ist definiert als der Quotient aus der auf eine Testladung $Q$ wirkenden Kraft $\mathbf{F}$ und dieser Ladung: $\mathbf{E} = \mathbf{F}/Q$ [C].
*   **Vektorielle Größe:** $\mathbf{E}$ ist eine **vektorielle Raumzustandsgröße**, die die Gesamtheit aller Feldvektoren in allen Raumpunkten kennzeichnet [43, Merke].
*   **Richtung:** Die Richtung von $\mathbf{E}$ zeigt definitionsgemäß in Richtung der Kraft, die auf eine **positive Ladung** wirkt [C].
*   **Feldstärke einer Punktladung:** Die Feldstärke $\mathbf{E}$ einer Punktladung $Q$ im Abstand $r$ ist gegeben durch:
    $$\mathbf{E} = \frac{1}{4\pi\epsilon_0} \cdot \frac{Q}{r^2} \mathbf{e}_{\mathbf{r}}$$

## 1.4 Überlagerung von Feldern

Die Feldstärken gehorchen dem **Superpositionsprinzip** [C].

*   **Gesamtfeldstärke:** Die **Gesamtfeldstärke** $\mathbf{E}_{\text{ges}}$ in einem Punkt, hervorgerufen durch mehrere Ladungen, ist die **vektorielle Addition** (lineare Überlagerung) der Feldstärke-Beiträge der Einzelladungen [C, 44, 46, Merke].
*   **Kraftberechnung:** Die auf eine Ladung $Q_4$ wirkende Gesamtkraft $\mathbf{F}$ wird berechnet aus dem Produkt von $Q_4$ und der Feldstärke, die **infolge aller anderen Ladungen** an diesem Punkt herrscht. Die Punktladung übt **auf sich selber keine Kraft aus** [29, Fußnote 1].
*   **Kräftebilanz:** Die vektorielle Summe aller Kräfte auf alle Punktladungen in einer Anordnung verschwindet.

## 1.5 Kräfte zwischen Ladungsverteilungen

Dieser Abschnitt betrachtet die komplizierte Berechnung der Gesamtkraft in Anordnungen, in denen Ladungen nicht als diskrete Punkte, sondern **ortsfest in Körpern** vorliegen. In der makroskopischen Betrachtung wird zur Vereinfachung der Ansatz über die **Ladungsdichten** gewählt.

## 1.6 Ladungsdichten

Für technische Probleme, bei denen Ladungen kontinuierlich verteilt sind, wird die **makroskopische Betrachtungsweise** verwendet [C]. Hierbei wird die Verteilung als **kontinuierlich** angenommen.

| Ladungsdichte | Beschreibung (Dimension) | Formel zur Gesamtladung $Q$ |
| :--- | :--- | :--- |
| **Linienladungsdichte $\lambda$** | Eindimensionale Verteilung (**$\text{As/m}$**) | $Q = \int \lambda \text{d}l$ |
| **Flächenladungsdichte $\sigma$** | Zweidimensionale Verteilung (**$\text{As/m}^2$**) [40, impliziert] | $Q = \iint \sigma \text{d}A$ [40, impliziert] |
| **Raumladungsdichte $\rho$** | Dreidimensionale Verteilung (**$\text{As/m}^3$**) | $Q = \iiint \rho \text{d}V$ [31, Eq. 1.16] |
## 1.1 Die elektrische Ladung

Stellt euch vor, die Welt ist aus winzigen Bausteinen gemacht, wie Legosteine, die sich anziehen oder abstoßen. Das ist die elektrische Ladung – die unsichtbare Kraft hinter allem Elektrischen. Es gibt zwei Arten: positive und negative Ladungen. Positive sind wie Protonen im Atomkern, negative wie Elektronen, die drumherum kreisen. Feynman würde sagen: "Denkt an zwei Freunde, die sich mögen (unterschiedliche Ladungen ziehen sich an), oder zwei Streithähne, die sich meiden (gleiche Ladungen stoßen sich ab)."

Im Buch starten wir mit einem einfachen Experiment: Reibt einen Glasstab mit Wolle, und er lädt sich positiv auf (Elektronen wandern zur Wolle). Ein Kunststoffstab lädt sich negativ. Keine Ladung wird erzeugt – sie werden nur getrennt! Die kleinste Ladung ist die Elementarladung e ≈ 1,6 × 10⁻¹⁹ As, wie ein unteilbarer Baustein. Atome sind normal neutral, weil Protonen und Elektronen ausgeglichen sind. Aber reibt man, entsteht ein Ungleichgewicht, und plötzlich spürt man Kräfte. Tiefes Verständnis: Ladung ist konserviert, wie Energie – sie verschwindet nie, wandert nur. Ohne Physik-Hintergrund: Stellt euch vor, Ladungen sind wie unsichtbare Magnete in allem Materiellen, die die Welt zusammenhalten oder auseinandertreiben.

## 1.2 Das Coulomb'sche Gesetz

Jetzt kommt die Regel, die das alles regiert: Das Coulomb-Gesetz. Es ist wie Newtons Gravitation, aber für Ladungen. Zwei Punktladungen Q₁ und Q₂ in einem Abstand r üben eine Kraft F aus: F = (1/(4πε₀)) × (Q₁Q₂ / r²), wo ε₀ die Feldkonstante des Vakuums ist (ca. 8,85 × 10⁻¹² As/Vm). Feynman würde es so erklären: "Stellt euch zwei Kinder vor, die an einem Seil ziehen. Je stärker die Kinder (größere Ladungen), desto stärker der Zug. Je länger das Seil (größerer Abstand), desto schwächer – und zwar quadratisch schwächer, weil die Kraft sich wie eine Kugelwelle ausbreitet."

Die Richtung? Gleiche Vorzeichen stoßen ab, Gegensätze ziehen an – das ergibt sich aus dem Produkt Q₁Q₂. Vektorform: Die Kraft ist gerichtet, wie ein Pfeil von einer Ladung zur anderen. Tiefes Verständnis für Anfänger: Das Gesetz zeigt, warum Blitze einschlagen oder warum euer Haar bei Reibung absteht. Es ist die Grundlage für alle Felder – ohne es gäbe es keine Elektrizität. Experimentiert gedanklich: Verdoppelt r, die Kraft viertelt sich. Das macht es intuitiv: Nähe verstärkt alles Dramatisches!

## 1.3 Die elektrische Feldstärke

Ladungen allein sind langweilig – sie erzeugen Felder! Die elektrische Feldstärke E ist die "Stärke" des Feldes an einem Punkt: E = F/Q, in V/m. Feynman: "Stellt euch das Feld vor wie eine unsichtbare Atmosphäre um eine Ladung herum. Es ist da, auch wenn nichts es spürt. Bringt eine Testladung rein, und sie fühlt die Kraft – wie Wind, der einen Ballon treibt."

Für eine Punktladung: E = (1/(4πε₀)) × (Q / r²), radial nach außen bei positiver Q. Das Feld existiert unabhängig von der Testladung – es ist eine Raum-Eigenschaft. Analogie: Wie Gravitation um die Erde, nur elektrostatisch. Tiefes Verständnis: Felder lösen das Rätsel der "Fernwirkung" – keine Magie, sondern der Raum selbst ist "verändert". Für Physik-Neulinge: Denkt an ein unsichtbares Kraftnetz, das Ladungen antreibt. Warum wichtig? Es erklärt, warum Elektronen in Atomen kreisen oder warum Kondensatoren Energie speichern.

## 1.4 Überlagerung von Feldern

Felder addieren sich! Das Prinzip der Superposition: Das Gesamtfeld ist die Vektorsumme der Felder jeder Ladung. Feynman würde lachen: "Stellt euch vor, ihr habt mehrere Windquellen – der totale Wind ist einfach die Summe. Kein Chaos, nur Vektoren addieren!"

Für mehrere Punktladungen: E_ges = Σ E_i. Beispiel: Zwei positive Ladungen – Felder stoßen in der Mitte ab, schaffen einen Nullpunkt. Tiefes Verständnis: Das erklärt komplexe Systeme, wie in Molekülen oder Schaltkreisen. Analogie: Wie Wellen auf einem Teich, die sich überlagern. Für Anfänger: Keine Angst vor vielen Ladungen – rechne jedes Feld einzeln, dann addiere. Das macht die Elektrostatik berechenbar, auch für große Anordnungen.

## 1.5 Kräfte zwischen Ladungsverteilungen

Nicht nur Punkte – Ladungen verteilen sich! Die Kraft zwischen zwei Ladungsgruppen (z.B. in Körpern) ist die Summe aller Paar-Kräfte. Feynman: "Stellt euch eine Party vor: Jeder Gast (Ladung) interagiert mit jedem anderen. Die totale 'Stimmung' (Kraft) ist die Summe aller Interaktionen."

Beispiel im Buch: Trennt Elektronen von Protonen in 1 mm³ Kupfer um 10 km – die Anziehung ist gigantisch (1427 Tonnen Gewicht äquivalent)! Tiefes Verständnis: Zeigt, warum reale Kräfte klein sind – meist sind Ladungen ausgeglichen. Analogie: Wie ein neutraler Magnetstab, der erst bei Trennung wirkt. Für Physik-Neulinge: Das erklärt statische Elektrizität im Alltag, wie beim Teppichlaufen. Wichtig: In der Summe aller Kräfte in einem geschlossenen System ist F_ges = 0 – Aktion = Reaktion.

## 1.6 Ladungsdichten

Ladungen sind nicht punktförmig – sie verteilen sich als Dichten! Linienladungsdichte λ = Q/l (As/m), Flächen- σ = Q/A (As/m²), Raum- ρ = Q/V (As/m³). Feynman: "Stellt euch Ladung vor wie Farbe, die ihr auf eine Linie, Fläche oder Volumen streicht. Die Dichte sagt, wie dick die Schicht ist."

Für ungleichmäßige Verteilungen: Differentialquotient, z.B. λ = dQ/dl. Integration gibt die Gesamt-Q. Tiefes Verständnis: Das erlaubt kontinuierliche Modelle statt diskreter Elektronen – makroskopisch, wie Dichte in der Mechanik. Analogie: Wie Wasserdichte in einem Schwamm. Für Anfänger: Vergesst die Atome – denkt an smeary Ladung, um reale Objekte wie Drähte oder Platten zu berechnen. Das ist der Übergang zu praktischen Anwendungen, wie Kondensatoren.