---
tags:
  - class
  - itet
  - NuS1
  - "#Elektrische_Feldlinien"
  - "#Äquipotentialflächen"
  - "#Potential_und_Spannung"
  - "#Elektrische_Flussdichte"
  - "#Influenz"
  - "#Elektrostatisches_Feld"
  - "#Kräfte_Ladungen"
draft: false
publish: true
---
**Material:**
[[HS25_NuS1_Kapitel_1_El_Stat_Feld_2von3.pdf]]
[Experiment: Elektrische Feldlinien](https://moodle-app2.let.ethz.ch/mod/url/view.php?id=1266950)
[Experiment: Ladung trennen](https://moodle-app2.let.ethz.ch/mod/url/view.php?id=1266951)

**Schlüsselkonzepte:**

- Konzept des "Feldes" und deren Darstellung als "Feldlinien" und "Äquipotentialflächen" (Kap. 1.7 (S. 33-35) und Kap 1.8.2)
- Potential und Spannung (Kap 1.8 (S. 37-40) und Kap 1.9)
- Elektrische Flussdichte (Kap. 1.10)
- Influenz (Kap. 1.13, S. 53-57)

**Lernziele:**

- das elektrostatische Feld für einfache Ladungsanordnungen berechnen
- die zum elektrostatischen Feld gehörigen Äquipotentialflächen und Feldlinien darstellen
- die elektrische Spannung aus den Feldgrössen bestimmen

## Representation of Fields: Field Lines (Kap. 1.7) 📈

Electric fields can be visualized using **field lines**1111. These are imaginary lines or curves drawn such that their tangent at any point gives the direction of the electric field vector $\vec{E}$ at that point2222.

- **Properties**33333333333:
    
    - Field lines originate on positive charges and terminate on negative charges4. In charge-free regions, they are continuous5.
        
    - The density of lines (lines per unit area perpendicular to the lines) can represent the magnitude of the electric field; closer lines indicate a stronger field6.
        
    - Field lines **never cross** each other, because the electric field at any point must have a unique direction7777.
        
    - If the net charge in a region is zero, field lines starting on positive charges must end on negative charges within that region (or extend to infinity if considering only one type of charge locally)88.
        
- **Qualitative Sketching** 9999:
    
    - Very close to a point charge, the field lines are radial, as if the single charge dominated10101010.
        
    - Very far from a charge distribution, the field lines resemble those of a single point charge equal to the _net_charge, located at the charge center11111111.
        
    - Symmetries in the charge distribution should be reflected in the field line pattern12121212.
        
    - Field lines begin/end perpendicular to the surface of conductors (see Equipotential Surfaces).
        

---

## Electrostatic Potential ($\varphi_e$) (Kap. 1.8) ⛰️

Because the electrostatic force is conservative, the work done moving a charge $Q$ between two points $P_0$ and $P_1$against the electric field is independent of the path taken13131313131313. This work increases the potential energy $W_e$ of the charge141414.

- Definition: The electrostatic potential difference between $P_1$ and $P_0$ is defined as the work done per unit charge151515:
    
    $$W_e = Q[\varphi_e(P_1) - \varphi_e(P_0)] = -Q \int_{P_0}^{P_1} \vec{E} \cdot d\vec{s} \quad \text{[cite: 4071, 5783]}$$
    
- **Path Independence:** For any closed path C, $\oint_C \vec{E} \cdot d\vec{s} = 0$, confirming the field is conservative (a source field, or Quellenfeld)16161616.
    
- Absolute Potential: To define an absolute potential $\varphi_e(P)$ at a point P, a reference point $P_0$ must be chosen where the potential is defined as zero ($\varphi_e(P_0) = 0$)17171717171717171717. Common choices are infinity for isolated charges, the Earth (ground), or a specific point in a circuit (often denoted as ground or Masse)18181818181818181818181818181818.
    
    $$\varphi_e(P_1) = \frac{W_e(P_1)}{Q} = -\int_{P_0 (\varphi_e=0)}^{P_1} \vec{E} \cdot d\vec{s} \quad \text{[cite: 5877, 4078, 4081]}$$
    
    The potential is a scalar quantity, measured in Volts (V)19.
    
- Potential of a Point Charge: Relative to infinity ($\varphi_e(\infty)=0$), the potential at a distance $r$ from a point charge $Q$ is20:
    
    $$\varphi_e(r) = \frac{Q}{4\pi\epsilon_0 r} \quad \text{[cite: 4085]}$$
    

---

## Electric Voltage ($U$) (Kap. 1.9) 🔋

Electric voltage is simply the **potential difference** between two points212121212121212121.

- Definition: The voltage $U_{12}$ between points $P_1$ and $P_2$ is222222:
    
    $$U_{12} = \varphi_e(P_1) - \varphi_e(P_2) = \int_{P_2}^{P_1} \vec{E} \cdot d\vec{s} \quad \text{[cite: 5939, 4106]}$$
    
    Note the order of integration limits relative to the indices of U. Voltage is also measured in Volts (V)23.
    
- **Independence of Reference:** The voltage between two points is independent of the choice of the zero potential reference point242424242424242424.
    

---

## Equipotential Surfaces (Kap. 1.8.2) 🗺️

These are surfaces in space where the electrostatic potential $\varphi_e$ is constant252525.

- **Properties:**
    
    - No work is done moving a charge along an equipotential surface, since $\Delta \varphi_e = 0$26.
        
    - Electric field lines ($\vec{E}$) are always **perpendicular** to equipotential surfaces272727. This follows from $W_e = -Q \int \vec{E} \cdot d\vec{s} = 0$ along the surface; if $\vec{E}$ had a component parallel to $d\vec{s}$ (along the surface), work would be done28.
        
    - The surfaces of **conductors** are equipotential surfaces in electrostatics29292929.
        
- **Visualization:** Equipotential lines (intersections of equipotential surfaces with a plane) are analogous to contour lines on a topographical map, which connect points of equal gravitational potential (altitude)303030. Where equipotential lines are closer together (for equal potential steps), the electric field is stronger31.
    

---

## Electric Flux Density ($\vec{D}$) (Kap. 1.10) 💧

This is another vector field used to describe electric fields, related to the _cause_ (charges) rather than the _effect_ (force).

- Definition: In vacuum (or air, approximately), it's defined as32323232:
    
    $$\vec{D} = \epsilon_0 \vec{E} \quad \text{[cite: 6055, 4115]}$$
    
    where $\epsilon_0$ is the permittivity of free space33. The unit of $\vec{D}$ is Coulombs per square meter (As/m²)34. $\vec{D}$ is also called electric displacement or electric excitation ("elektrische Erregung")35353535.
    
- Electric Flux ($\Psi$): The electric flux through a surface $A$ is the surface integral of the electric flux density363636:
    
    $$\Psi = \iint_A \vec{D} \cdot d\vec{A} \quad \text{[cite: 6057, 4116]}$$
    
    where $d\vec{A}$ is the vector area element (magnitude $dA$, direction normal to the surface)37. Flux has units of Coulombs (As)38.
    

---

## Gauss's Law (Kap. 1.10) 📦

This fundamental law relates the electric flux through a closed surface to the net charge enclosed within that surface. It's also considered the first of Maxwell's equations39393939.

- Integral Form: The total electric flux $\Psi$ out of any closed surface $A$ (a "Gaussian surface") is equal to the total electric charge $Q_{encl}$ enclosed within that surface40404040:
    
    $$\Psi = \oint_A \vec{D} \cdot d\vec{A} = Q_{encl} \quad \text{[cite: 6067, 4124]}$$
    
- **Significance:** Gauss's law reflects that electric field lines originate and terminate on charges (charges are the sources/sinks of $\vec{D}$). It's extremely useful for calculating electric fields in situations with high symmetry (like spheres, cylinders, infinite planes) by choosing an appropriate Gaussian surface where the integral simplifies41.
    

---

## Conductors in Electrostatic Fields & Influence (Kap. 1.12, 1.13) 🛡️

Conductors contain mobile charges (usually electrons)42. In **electrostatic equilibrium** (when charges are stationary):

- **E-Field Inside:** The electric field inside the conductor material is **zero** ($\vec{E}=0$)43434343. If there were a field, charges would move until the field was neutralized.
    
- **Potential:** The entire conductor is at a **constant potential** (it's an equipotential volume)44444444.
    
- **Surface Charge:** Any net charge resides entirely on the **surface** of the conductor45.
    
- **E-Field at Surface:** The electric field just outside the conductor surface is **perpendicular** to the surface46464646. The magnitude is related to the surface charge density $\sigma$ by $E_n = \sigma / \epsilon_0$ (or $D_n = \sigma$)47.
    
- **Influence (Influenz):** When an uncharged conductor is placed in an external electric field, the mobile charges within it redistribute themselves48484848. They arrange on the surface in such a way that their own field perfectly cancels the external field inside the conductor49494949. This charge separation is called **influence** or electrostatic induction50505050. The induced surface charge density at any point is $\sigma = D_n$, where $D_n$ is the normal component of the external flux density that _would_ exist there without the conductor51515151.
    
- **Electrostatic Shielding (Faraday Cage):** A hollow conductor shields its interior from external static electric fields52. Because $\vec{E}=0$ inside the conductor material, and $\oint \vec{E} \cdot d\vec{s} = 0$, the potential inside the cavity must be constant and equal to the potential of the conductor, regardless of external fields or charges (as long as no charge is inside the cavity)53.
    

---