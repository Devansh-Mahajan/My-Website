---
tags:
  - class
  - itet
draft: false
publish: true
---
**Material:**
[[HS25_NuS1_Kapitel_1_El_Stat_Feld_2von3 1.pdf]]
[Experiment: Faraday-Käfig](https://moodle-app2.let.ethz.ch/mod/url/view.php?id=1280824)
[Experiment: Kondensator treibt Motor](https://moodle-app2.let.ethz.ch/mod/url/view.php?id=1280825)

## Representation of Fields: Field Lines (Kap. 1.7) 📈

Electric fields are often visualized using **field lines**111. These are curves drawn such that their tangent at any point indicates the direction of the electric field vector $\vec{E}$ at that point2.

- **Properties**:
    
    - Field lines originate on positive charges and terminate on negative charges3.
        
    - In charge-free regions, field lines are continuous4.
        
    - The density of lines (lines per unit area perpendicular to the lines) can represent the magnitude of the electric field; closer lines indicate a stronger field5.
        
    - Field lines **never cross** each other, because the electric field at any point must have a unique direction6.
        
    - If the net charge in a region is zero, field lines starting on positive charges must end on negative charges within that region or extend to infinity7.
        
- **Qualitative Sketching** 8:
    
    - Very close to a point charge, the field lines are radial9.
        
    - Very far from a charge distribution, the field lines resemble those of a single point charge equal to the _net_charge, located at the charge center10.
        
    - Symmetries in the charge distribution should be reflected in the field line pattern11.
        
    - Field lines begin/end perpendicular to the surface of conductors1212.
        

---

## Electrostatic Potential ($\varphi_e$) (Kap. 1.8) ⛰️

Since the electrostatic field is conservative (a "Quellenfeld"), the work done moving a charge $Q$ between two points $P_0$ and $P_1$ against the electric field $\vec{E}$ is independent of the path taken 13131313131313131313. This work, $W_e$, increases the potential energy of the charge14.

- Definition: The electrostatic potential difference between $P_1$ and $P_0$ is the work done per unit charge151515:
    
    $$W_e = Q[\varphi_e(P_1) - \varphi_e(P_0)] = -Q \int_{P_0}^{P_1} \vec{E} \cdot d\vec{s} \quad \text{[cite: 4598, 4616, 6617]}$$
    
- Path Independence: For any closed path C, the line integral of $\vec{E}$ is zero, confirming the field is conservative16161616161616161616161616161616:
    
    $$\oint_C \vec{E} \cdot d\vec{s} = 0 \quad \text{[cite: 4611, 6620]}$$
    
- Absolute Potential: To define an absolute potential $\varphi_e(P)$ at a point P, a reference point $P_0$ (Bezugspunkt) must be chosen where $\varphi_e(P_0) = 0$1717. Common choices are infinity ($\varphi_e(\infty)=0$) 18, the Earth (ground, $\varphi_e=0$) 1919, or a specific point in a circuit ("Masse") 20202020. Then21212121:
    
    $$\varphi_e(P_1) = \frac{W_e(P_1)}{Q} = -\int_{P_0 (\varphi_e=0)}^{P_1} \vec{E} \cdot d\vec{s} \quad \text{[cite: 4624, 6711]}$$
    
    Potential is a scalar quantity measured in Volts (V)22.
    
- Potential of a Point Charge: Relative to infinity, the potential at distance $r$ from a point charge $Q$ is23:
    
    $$\varphi_e(r) = \frac{Q}{4\pi\epsilon_0 r} \quad \text{[cite: 4630]}$$
    

---

## Electric Voltage ($U$) (Kap. 1.9) 🔋

Electric voltage is the **potential difference** between two points24242424.

- Definition: The voltage $U_{12}$ between points $P_1$ and $P_2$ is25252525:
    
    $$U_{12} = \varphi_e(P_1) - \varphi_e(P_2) = \int_{P_2}^{P_1} \vec{E} \cdot d\vec{s} \quad \text{[cite: 4651, 6773]}$$
    
    Note the integration limits are reversed compared to the indices. Voltage is measured in Volts (V)2626.
    
- **Independence of Reference:** Voltage $U_{12}$ is independent of the choice of the zero potential reference point $P_0$27272727.
    

---

## Equipotential Surfaces (Kap. 1.8.2) 🗺️

These are surfaces where the electrostatic potential $\varphi_e$ is constant28. Intersections with a plane are called equipotential lines29.

- **Properties:**
    
    - No work is done moving a charge along an equipotential surface ($W_e = 0$)30.
        
    - Electric field lines ($\vec{E}$) are always **perpendicular** to equipotential surfaces3131313131313131. This follows from $W_e = -Q \int \vec{E} \cdot d\vec{s} = 0$; $\vec{E}$ can have no component parallel to $d\vec{s}$ along the surface32323232.
        
    - The surfaces of **conductors** are equipotential surfaces in electrostatics33333333333333.
        
- **Visualization:** Similar to contour lines on a map, closer lines (for equal potential steps) indicate a stronger field34.
    

---

## Electric Flux Density ($\vec{D}$) (Kap. 1.10) 💧

$\vec{D}$ is a vector field related to the _cause_ (charges) of the electric field353535. It's also called electric displacement or electric excitation ("elektrische Erregung")36.

- Definition: In vacuum (or approximately in air), it's defined as37373737:
    
    $$\vec{D} = \epsilon_0 \vec{E} \quad \text{[cite: 4660, 6889]}$$
    
    where $\epsilon_0 \approx 8.854 \times 10^{-12}$ As/Vm is the permittivity of free space38. The unit of $\vec{D}$is As/m²39.
    
- Electric Flux ($\Psi$): The electric flux through a surface $A$ is the surface integral of $\vec{D}$404040:
    
    $$\Psi = \iint_A \vec{D} \cdot d\vec{A} \quad \text{[cite: 4662, 6891]}$$
    
    where $d\vec{A}$ is the vector area element41. Flux $\Psi$ has units of Coulombs (As)42.
    

---

## Gauss's Law (Kap. 1.10) 📦

This fundamental law, also the first of Maxwell's equations 43, relates the net electric flux through a closed surface ("Gaussian surface") to the net charge enclosed within it44.

- Integral Form: For any closed surface $A$ enclosing a total charge $Q_{encl}$45454545:
    
    $$\Psi = \oint_A \vec{D} \cdot d\vec{A} = Q_{encl} \quad \text{[cite: 4669, 6901]}$$
    
- **Significance:** It reflects that charges are the sources/sinks of $\vec{D}$46. It's powerful for calculating fields in symmetric situations (spheres, cylinders, planes) by choosing a Gaussian surface where the integral simplifies47.
    

---

## Behavior of Field Quantities at a Surface Charge (Kap. 1.11) ↔️

When crossing a surface with surface charge density $\sigma$, the field components change according to boundary conditions derived from Gauss's law and the conservative nature of $\vec{E}$.

- Normal Component of $\vec{D}$: Using a small cylindrical "pillbox" Gaussian surface enclosing an area $dA$ of the charge layer, Gauss's law shows that the normal component of $\vec{D}$ jumps by $\sigma$48484848484848484848484848484848:
    
    $$D_{n2} - D_{n1} = \sigma \quad \text{[cite: 4698]}$$
    
    where $\vec{n}$ (from region 1 to 2) defines the normal direction. If $\sigma=0$, $D_n$ is continuous49.
    
- Tangential Component of $\vec{E}$: Using a small rectangular loop intersecting the surface, the fact that $\oint \vec{E} \cdot d\vec{s} = 0$ implies the tangential component of $\vec{E}$ is continuous across the boundary50505050505050505050505050505050:
    
    $$E_{t1} = E_{t2} \quad \text{[cite: 4708, 7001]}$$
    
- Other Components: Using $\vec{D} = \epsilon \vec{E}$, the behavior of $E_n$ and $D_t$ follows. If $\epsilon_1 = \epsilon_2 = \epsilon_0$ (e.g., vacuum on both sides)51:
    
    $$\epsilon_0 E_{n2} - \epsilon_0 E_{n1} = \sigma \implies E_{n2} - E_{n1} = \sigma/\epsilon_0 \quad \text{[cite: 4700]}$$
    
    $$D_{t1}/\epsilon_0 = D_{t2}/\epsilon_0 \implies D_{t1} = D_{t2} \quad \text{[cite: 4711]}$$
    

---

## Conductors in Electrostatic Fields & Influence (Kap. 1.12, 1.13) 🛡️

Conductors have mobile charges. In **electrostatic equilibrium**:

- **Field Inside:** $\vec{E}=0$ inside the conductor52525252525252. Any internal field would cause charges to move until it's cancelled5353.
    
- **Potential:** The entire conductor is an **equipotential** (constant $\varphi_e$)54545454.
    
- **Surface Charge:** Any net charge resides only on the **surface**55555555. Gauss's law applied inside confirms this.
    
- **Field at Surface:** $\vec{E}$ is **perpendicular** to the surface just outside56565656. The tangential component $E_t = 0$57. The normal component is related to the surface charge density $\sigma$: $D_n = \sigma$ and $E_n = \sigma / \epsilon_0$58585858.
    
- **Influence (Influenz):** Placing an uncharged conductor in an external field $\vec{E}_{ext}$ causes its free charges to redistribute on the surface5959595959595959. This induced surface charge creates an internal field $\vec{E}_{ind}$that exactly cancels the external field inside: $\vec{E}_{int} = \vec{E}_{ext} + \vec{E}_{ind} = 0$60606060. The induced charge density is $\sigma = D_{n,ext}$61616161.
    
- **Electrostatic Shielding (Faraday Cage):** A hollow conductor shields its interior from external static fields626262. Since $\vec{E}=0$ in the conductor material, the potential inside the cavity is constant and equal to the conductor's potential, unaffected by external charges63.