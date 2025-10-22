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

## Dielectric Polarization (Kap. 1.14)

When an insulating material, or **dielectric**, is placed in an electric field, its charges are not free to move like in a conductor. Instead, the atoms and molecules **polarize**.

- **Mechanisms:** This happens in two main ways:
    
    1. **Displacement Polarization (Verschiebungspolarisation):** The atom's negative electron cloud shifts slightly in the opposite direction of the $\vec{E}$-field, while the positive nucleus shifts with it. This creates a tiny electric dipole.
        
    2. **Orientation Polarization (Orientierungspolarisation):** Molecules that are already permanent dipoles (like water) align themselves with the external $\vec{E}$-field.
        
- **Effect:** This alignment of dipoles creates **polarization charges** on the surface of the dielectric. These charges produce an internal electric field that _opposes_ the external field, thus _reducing_ the total $\vec{E}$-field inside the material.
    
- **Permittivity:** This material property is described by the **relative permittivity** (or dielectric constant), $\epsilon_r$. It's a unitless value indicating how much the field is weakened. For a vacuum, $\epsilon_r = 1$. For air, it's very close to 1. For materials like water or ceramics, it can be much higher ($\epsilon_r > 1$).
    
- Flux Density in Dielectrics: The electric flux density $\vec{D}$ is modified to account for the material:
    
    $$\vec{D} = \epsilon \vec{E} = \epsilon_r \epsilon_0 \vec{E}$$
    
    Here, $\epsilon = \epsilon_r \epsilon_0$ is the permittivity of the material.
    

---

## Field Behavior at Interfaces (Kap. 1.16)

When an electric field crosses the boundary between two different materials (e.g., from vacuum, $\epsilon_1 = \epsilon_0$, to a dielectric, $\epsilon_2 = \epsilon_r \epsilon_0$), the field vectors must obey specific **boundary conditions**. Assuming there is no free charge $\sigma$ on the boundary itself:

- **Tangential $\vec{E}$-Field ($E_t$):** The tangential component of the electric field $\vec{E}$ is **continuous** (it's the same on both sides). This is a consequence of the conservative nature of the $\vec{E}$-field ($\oint \vec{E} \cdot d\vec{s} = 0$).
    
- **Normal $\vec{D}$-Field ($D_n$):** The normal component of the electric flux density $\vec{D}$ is **continuous** (it's the same on both sides). This is a consequence of Gauss's Law ($\oint \vec{D} \cdot d\vec{A} = 0$ when no free charge is enclosed).
    
- **Implications:** Because $\vec{D} = \epsilon \vec{E}$, these two rules mean the other components must _jump_ (be discontinuous):
    
    - $D_{t1} \neq D_{t2}$ (Tangential $\vec{D}$ jumps)
        
    - $E_{n1} \neq E_{n2}$ (Normal $\vec{E}$ jumps)
        

This leads to a "refraction" of the field lines as they cross the boundary.

---

## Capacitance (Kap. 1.17)

Capacitance ($C$) is the property of a conductor arrangement to store electric charge and energy. It is defined as the ratio of the stored charge $Q$ on one conductor to the voltage $U$ (potential difference) between the conductors.

- **Formula:** $C = Q/U$
    
- **Unit:** The unit is the **Farad (F)**, where $1 \text{ Farad} = 1 \text{ Coulomb} / 1 \text{ Volt}$ ($1 \text{ As/V}$).
    
- **Calculation:** Capacitance depends only on the **geometry** of the conductors and the **permittivity ($\epsilon$)** of the dielectric material between them.
    
    - Parallel-Plate Capacitor: For two plates of area $A$ separated by a distance $d$:
        
        $$C = \epsilon_r \epsilon_0 \frac{A}{d} \quad \text{}$$
        
    - Spherical Capacitor: For concentric spheres with radii $r_a$ (outer) and $r_i$ (inner):
        
        $$C = 4\pi\epsilon_r\epsilon_0 \frac{r_i r_a}{r_a - r_i} \quad \text{}$$
        
    - Coaxial Cable (Cylindrical Capacitor): The capacitance per unit length ($C/l$) for cylinders with radii $r_a$ (outer) and $r_i$ (inner) is:
        
        [cite_start]
        
        $$C/l = \frac{2\pi\epsilon_r\epsilon_0}{\ln(r_a/r_i)} \quad \text{[cite: 3418]}$$
        

---

## Capacitor Networks (Kap. 1.18)

Capacitors can be combined in simple networks:

- **Parallel Connection:**
    
    - The voltage $U$ across each capacitor is the same.
        
    - The total charge stored is the sum $Q_{ges} = Q_1 + Q_2 + ...$.
        
    - The total capacitance is the sum of the individual capacitances:
        
        $$C_{ges} = C_1 + C_2 + ... + C_n$$
        
- **Series Connection:**
    
    - The charge $Q$ on each capacitor is the same (due to influence).
        
    - The total voltage is the sum $U_{ges} = U_1 + U_2 + ...$.
        
    - The reciprocals of the capacitances add up:
        
        $$\frac{1}{C_{ges}} = \frac{1}{C_1} + \frac{1}{C_2} + ... + \frac{1}{C_n}$$
        

---

## Energy in the Electrostatic Field (Kap. 1.21) ⚡

The work done to charge a capacitor is stored as potential energy $W_e$ in the electric field.

- Energy in a Capacitor: This stored energy can be expressed in three equivalent ways:
    
    $$W_e = \frac{1}{2} C U^2 = \frac{1}{2} Q U = \frac{1}{2} \frac{Q^2}{C}$$
    
- Energy Density: The energy is not located on the plates but is distributed throughout the volume $V$ of the electric field. The energy density $w_e$ (energy per unit volume, in J/m³) at any point is:
    
    $$w_e = \frac{1}{2} \vec{E} \cdot \vec{D} \quad \text{}$$
    
- Total Energy: The total energy $W_e$ is the integral of this density over the entire volume where the field exists:
    
    $$W_e = \iiint_V w_e dV$$