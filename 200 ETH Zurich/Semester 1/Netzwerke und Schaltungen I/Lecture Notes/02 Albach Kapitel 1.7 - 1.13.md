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

## Representation of Fields: Field Lines (Kap. 1.7) 

Electric fields can be visualized using **field lines**. These are imaginary lines or curves drawn such that their tangent at any point gives the direction of the electric field vector $\vec{E}$ at that point.

- **Properties**:
    
    - Field lines originate on positive charges and terminate on negative charges. In charge-free regions, they are continuous.
        
    - The density of lines (lines per unit area perpendicular to the lines) can represent the magnitude of the electric field; closer lines indicate a stronger field.
        
    - Field lines **never cross** each other, because the electric field at any point must have a unique direction.
        
    - If the net charge in a region is zero, field lines starting on positive charges must end on negative charges within that region (or extend to infinity if considering only one type of charge locally).
        
- **Qualitative Sketching**:
    
    - Very close to a point charge, the field lines are radial, as if the single charge dominated.
        
    - Very far from a charge distribution, the field lines resemble those of a single point charge equal to the net charge, located at the charge center.
        
    - Symmetries in the charge distribution should be reflected in the field line pattern.
        
    - Field lines begin/end perpendicular to the surface of conductors (see Equipotential Surfaces).
        

---

## Electrostatic Potential ($\varphi_e$) (Kap. 1.8) 

Because the electrostatic force is conservative, the work done moving a charge $Q$ between two points $P_0$ and $P_1$against the electric field is independent of the path taken. This work increases the potential energy $W_e$ of the charge.

- Definition: The electrostatic potential difference between $P_1$ and $P_0$ is defined as the work done per unit charge:
    
    $$W_e = Q[\varphi_e(P_1) - \varphi_e(P_0)] = -Q \int_{P_0}^{P_1} \vec{E} \cdot d\vec{s} \quad \text{[cite: 4071, 5783]}$$
    
- **Path Independence:** For any closed path C, $\oint_C \vec{E} \cdot d\vec{s} = 0$, confirming the field is conservative (a source field, or Quellenfeld).
    
- Absolute Potential: To define an absolute potential $\varphi_e(P)$ at a point P, a reference point $P_0$ must be chosen where the potential is defined as zero ($\varphi_e(P_0) = 0$). Common choices are infinity for isolated charges, the Earth (ground), or a specific point in a circuit (often denoted as ground or Masse).
    
    $$\varphi_e(P_1) = \frac{W_e(P_1)}{Q} = -\int_{P_0 (\varphi_e=0)}^{P_1} \vec{E} \cdot d\vec{s} \quad \text{[cite: 5877, 4078, 4081]}$$
    
    The potential is a scalar quantity, measured in Volts (V).
    
- Potential of a Point Charge: Relative to infinity ($\varphi_e(\infty)=0$), the potential at a distance $r$ from a point charge $Q$ is:
    
    $$\varphi_e(r) = \frac{Q}{4\pi\epsilon_0 r} \quad \text{[cite: 4085]}$$
    

---

## Electric Voltage ($U$) (Kap. 1.9) 

Electric voltage is simply the **potential difference** between two points.

- Definition: The voltage $U_{12}$ between points $P_1$ and $P_2$ is:
    
    $$U_{12} = \varphi_e(P_1) - \varphi_e(P_2) = \int_{P_2}^{P_1} \vec{E} \cdot d\vec{s} \quad \text{[cite: 5939, 4106]}$$
    
    Note the order of integration limits relative to the indices of U. Voltage is also measured in Volts (V).
    
- **Independence of Reference:** The voltage between two points is independent of the choice of the zero potential reference point.
    

---

## Equipotential Surfaces (Kap. 1.8.2) 

These are surfaces in space where the electrostatic potential $\varphi_e$ is constant.

- **Properties:**
    
    - No work is done moving a charge along an equipotential surface, since $\Delta \varphi_e = 0$.
        
    - Electric field lines ($\vec{E}$) are always **perpendicular** to equipotential surfaces. This follows from $W_e = -Q \int \vec{E} \cdot d\vec{s} = 0$ along the surface; if $\vec{E}$ had a component parallel to $d\vec{s}$ (along the surface), work would be done.
        
    - The surfaces of **conductors** are equipotential surfaces in electrostatics.
        
- **Visualization:** Equipotential lines (intersections of equipotential surfaces with a plane) are analogous to contour lines on a topographical map, which connect points of equal gravitational potential (altitude). Where equipotential lines are closer together (for equal potential steps), the electric field is stronger.
    

---

## Electric Flux Density ($\vec{D}$) (Kap. 1.10) 

This is another vector field used to describe electric fields, related to the _cause_ (charges) rather than the _effect_ (force).

- Definition: In vacuum (or air, approximately), it's defined as:
    
    $$\vec{D} = \epsilon_0 \vec{E} \quad \text{[cite: 6055, 4115]}$$
    
    where $\epsilon_0$ is the permittivity of free space. The unit of $\vec{D}$ is Coulombs per square meter (As/m²). $\vec{D}$ is also called electric displacement or electric excitation ("elektrische Erregung").
    
- Electric Flux ($\Psi$): The electric flux through a surface $A$ is the surface integral of the electric flux density:
    
    $$\Psi = \iint_A \vec{D} \cdot d\vec{A} \quad \text{[cite: 6057, 4116]}$$
    
    where $d\vec{A}$ is the vector area element (magnitude $dA$, direction normal to the surface). Flux has units of Coulombs (As).
    

---

## Gauss's Law (Kap. 1.10) 

This fundamental law relates the electric flux through a closed surface to the net charge enclosed within that surface. It's also considered the first of Maxwell's equations.

- Integral Form: The total electric flux $\Psi$ out of any closed surface $A$ (a "Gaussian surface") is equal to the total electric charge $Q_{encl}$ enclosed within that surface:
    
    $$\Psi = \oint_A \vec{D} \cdot d\vec{A} = Q_{encl} \quad \text{[cite: 6067, 4124]}$$
    
- **Significance:** Gauss's law reflects that electric field lines originate and terminate on charges (charges are the sources/sinks of $\vec{D}$). It's extremely useful for calculating electric fields in situations with high symmetry (like spheres, cylinders, infinite planes) by choosing an appropriate Gaussian surface where the integral simplifies.
    

---

## Conductors in Electrostatic Fields & Influence (Kap. 1.12, 1.13) 

Conductors contain mobile charges (usually electrons). In **electrostatic equilibrium** (when charges are stationary):

- **E-Field Inside:** The electric field inside the conductor material is **zero** ($\vec{E}=0$). If there were a field, charges would move until the field was neutralized.
    
- **Potential:** The entire conductor is at a **constant potential** (it's an equipotential volume).
    
- **Surface Charge:** Any net charge resides entirely on the **surface** of the conductor.
    
- **E-Field at Surface:** The electric field just outside the conductor surface is **perpendicular** to the surface. The magnitude is related to the surface charge density $\sigma$ by $E_n = \sigma / \epsilon_0$ (or $D_n = \sigma$).
    
- **Influence (Influenz):** When an uncharged conductor is placed in an external electric field, the mobile charges within it redistribute themselves. They arrange on the surface in such a way that their own field perfectly cancels the external field inside the conductor. This charge separation is called **influence** or electrostatic induction. The induced surface charge density at any point is $\sigma = D_n$, where $D_n$ is the normal component of the external flux density that _would_ exist there without the conductor.
    
- **Electrostatic Shielding (Faraday Cage):** A hollow conductor shields its interior from external static electric fields52. Because $\vec{E}=0$ inside the conductor material, and $\oint \vec{E} \cdot d\vec{s} = 0$, the potential inside the cavity must be constant and equal to the potential of the conductor, regardless of external fields or charges (as long as no charge is inside the cavity).
    

---