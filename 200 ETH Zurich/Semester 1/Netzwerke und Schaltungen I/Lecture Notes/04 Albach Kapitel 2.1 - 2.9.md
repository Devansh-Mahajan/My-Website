---
tags:
  - class
  - itet
draft: false
publish: true
---
**Material:**
[[HS25_NuS1_Kapitel_2_Das stationäre elektrische Strömungsfeld.pdf]]
[Experiment: Stahldraht verdampfen](https://moodle-app2.let.ethz.ch/mod/url/view.php?id=1280831)
[Experiment: Stahldraht verdampfen HighSpeed Aufnahme 1 File](https://moodle-app2.let.ethz.ch/mod/resource/view.php?id=1280832)
[Experiment: Stahldraht verdampfen HighSpeed Aufnahme 2 File](https://moodle-app2.let.ethz.ch/mod/resource/view.php?id=1280833)

**Schlüsselkonzepte:**

- Der elektrische Strom (Kap. 2.1)
- Spezifische Leitfähigkeit (inkl. Temperaturabhängigkeit) (Kap. 2.5)
- Das Ohm‘sche Gesetz (Kap. 2.6)
- Energie und Leistung (Kap. 2.9)

**Lernziele:**

- Die Stromdichteverteilung in einfachen Anordnungen zu berechnen 
- Den ohmschen Widerstand von einfachen Leiteranordnungen zu berechnen 
- Die Temperaturabhängigkeit der ohmschen Widerstände anzugeben  
- Das Ohm‘sche Gesetz in differentieller und integraler Form anzuwenden
- Das Verhalten der Stromdichte an Materialsprungstellen mit unterschiedlichen Leitfähigkeiten zu bestimmen 
- Energie und Leistung im stationären Strömungsfeld zu berechnen

## 2.1 The Electric Current ($I$) ⚡

**Electric current** is the directed movement of electric charge carriers, such as electrons in a wire or ions in a fluid1111111.

- **Cause:** A current flows when a potential difference (voltage) is applied across a conductive material, creating an electric field $\vec{E}$ that exerts a force on the charge carriers 2.
    
- **Technical Direction:** By convention, the "technical" direction of current is defined as the direction positive charges would flow, i.e., from a higher potential to a lower potential3.
    
- **Electron Flow:** Since electrons are negatively charged, their physical movement (drift) is _opposite_ to the conventional technical current direction4444.
    
- Formula: Current $I$ is a scalar quantity 555representing the total charge $\Delta Q$ that passes through a cross-section per unit time $\Delta t$6666:
    
    $$I = \frac{\Delta Q}{\Delta t}$$
    
    For time-varying currents, this becomes $I(t) = dQ/dt$7.
    
- **Unit:** The base SI unit for electric current is the **Ampere (A)**8888. As of 2019, the Ampere is defined by fixing the numerical value of the elementary charge $e$ to $1.602... \times 10^{-19}$ C (or As)999. One Ampere corresponds to $1/e$ (approx. $6.24 \times 10^{18}$) elementary charges passing per second10.
    

---

## 2.2 The Current Density ($\vec{J}$)

While current $I$ is a scalar, **current density $\vec{J}$** is a **vector** field that describes the direction and density of current flow at a specific point in space 11111111111111.

- Microscopic View: Current density is the product of the volume charge density $\rho$ of the mobile carriers and their average drift velocity $\vec{v}$12:
    
    $$\vec{J} = \rho \vec{v}$$
    
- Relationship to Current: The total current $I$ flowing through a surface $A$ is the flux (surface integral) of the current density vector $\vec{J}$ through that surface13. This is calculated using a scalar product14:
    
    $$I = \iint_A \vec{J} \cdot d\vec{A} \quad \text{[cite: 7476]}$$
    
    For a uniform current density perpendicular to a flat area $A$, this simplifies to $J = I/A$.
    

---

## 2.3 The Stationary Current Field

A current field is "stationary" (or DC) if the current density $\vec{J}$ is constant in time at every point15.

- Continuity Equation: In a stationary field, charge cannot "pile up" or be depleted from any point. This means the total current flux out of any closed surface $A$ must be zero16:
    
    $$\oint_A \vec{J} \cdot d\vec{A} = 0$$
    

---

## 2.4 & 2.5 Specific Conductivity ($\kappa$) and Resistivity ($\rho_R$)

These are material properties that link the electric field $\vec{E}$ to the resulting current density $\vec{J}$.

- **Drift Velocity:** In a conductor, free electrons move randomly17171717. An applied $\vec{E}$-field causes them to "drift" with an average velocity $\vec{v}_e$181818181818181818. This drift velocity is proportional to the field: $\vec{v}_e = -\mu_e \vec{E}$, where $\mu_e$ is the electron mobility19.
    
- Specific Conductivity ($\kappa$): Combining the microscopic view $\vec{J} = \rho \vec{v}_e = (-ne)\vec{v}_e$ (where $n$ is the density of free electrons) with the drift velocity gives:
    
    $$\vec{J} = (-ne)(-\mu_e \vec{E}) = (ne\mu_e) \vec{E} \quad \text{[cite: 5229-5230, 7298]}$$
    
    The material-dependent term $\kappa = ne\mu_e$ is the **specific conductivity** 20202020. Its unit is $1/(\Omega \text{m})$21. Good conductors like silver and copper have high $\kappa$ values22222222.
    
- **Specific Resistivity ($\rho_R$):** This is the reciprocal of conductivity: $\rho_R = 1/\kappa$23.
    
- Temperature Dependence: For most metals, resistivity increases with temperature24. This is because higher thermal vibrations of the atoms cause more frequent collisions, reducing electron mobility $\mu_e$25. The relationship is approximately linear 26:
    
    $$\rho_R(T) = \rho_{R,20^{\circ}C} \cdot [1 + \alpha(T-20^{\circ}C)] \quad \text{[cite: 7333]}$$
    
    Here, $\alpha$ is the temperature coefficient27272727.
    

---

## 2.6 Ohm's Law

Ohm's Law describes the relationship between voltage, current, and resistance. It has two forms:

- Differential Form: This is the fundamental local relationship:
    
    $$\vec{J} = \kappa \vec{E} \quad \text{[cite: 5246, 7534]}$$
    
    This implies that, unlike in electrostatics, a non-zero $\vec{E}$-field **must** exist inside a conductor that is carrying a current28282828.
    
- Integral Form (Resistance $R$): For a component, the ohmic resistance $R$ is defined as the ratio of the total voltage $U$ across it to the total current $I$ through it29:
    
    $$R = \frac{U}{I} = \frac{\int \vec{E} \cdot d\vec{s}}{\iint \kappa \vec{E} \cdot d\vec{A}} \quad \text{[cite: 7548]}$$
    
    For a simple wire with length $l$ and uniform cross-sectional area $A$, this simplifies to:
    
    $$R = \frac{\rho_R l}{A} = \frac{l}{\kappa A} \quad \text{[cite: 5257, 7375]}$$
    
    This shows resistance increases with length $l$ 30and decreases with area $A$ (which is proportional to the diameter squared, $A \sim d^2$)31. The familiar integral form is $U = R \cdot I$32.
    

---

## 2.7 Practical Resistors

Resistors are components built to provide a specific resistance3333.

- **Fixed Resistors:** Their values are standardized in **E-series** (e.g., E6, E12, E24), which define the set of values and their tolerance (e.g., ±20%, ±10%, ±5%) 3434343434343434. Values are often marked with a **color code** 35353535.
    
- **Types:** Include **layer resistors** and **wire-wound resistors**3636363636363636. Wire-wound resistors can have "bifilar" or "low-inductance" windings to minimize parasitic magnetic field effects 37373737.
    
- **Variable Resistors:** These include potentiometers (adjustable) 38383838, varistors (voltage-dependent), LDRs (light-dependent), and thermistors (NTC/PTC, temperature-dependent) 39393939.
    

---

## 2.8 Field Behavior at Interfaces

When current flows across a boundary between two materials with different conductivities ($\kappa_1, \kappa_2$), the field vectors must obey boundary conditions40404040.

- Normal Component $J_n$: The current density component perpendicular to the boundary is continuous:
    
    $$J_{n1} = J_{n2} \quad \text{[cite: 5237, 7718]}$$
    
- Tangential Component $E_t$: The electric field component parallel to the boundary is continuous:
    
    $$E_{t1} = E_{t2} \quad \text{[cite: 5239, 7726]}$$
    
- **Consequences:** Using $\vec{J} = \kappa \vec{E}$, this means the other components jump:
    
    - $J_{t2} = (\kappa_2 / \kappa_1) J_{t1}$ 41
        
    - $E_{n2} = (\kappa_1 / \kappa_2) E_{n1}$
        
- **Extreme Cases:**
    
    - **Conductor to Insulator ($\kappa_2 = 0$):** $J_{n2}=0$, so $J_{n1}=0$. Current must flow parallel to the surface42424242.
        
    - **Conductor to Perfect Conductor ($\kappa_2 \to \infty$):** $E_{t2}=0$, so $E_{t1}=0$. The $\vec{E}$ and $\vec{J}$ fields must enter a perfect conductor perpendicularly 43434343.
        

---

## 2.9 Energy and Power 🔥

- Electric Power ($P$): The rate at which energy is converted. It is defined as:
    
    $$P = U \cdot I \quad \text{[cite: 5268, 7784]}$$
    
    Its unit is the **Watt (W)**444444.
    
- Electric Energy ($W_e$): The total energy converted over a time $\Delta t$.
    
    $$W_e = P \cdot \Delta t \quad \text{[cite: 5268, 7786]}$$
    
    Its unit is the Joule (J) or Watt-second (Ws). A common billing unit is the kilowatt-hour (kWh) 454545.
    
- Joule Heating: In an ohmic resistor, this power is dissipated as heat46. The power can be expressed as:
    
    $$P = I^2 R = \frac{U^2}{R} \quad \text{[cite: 5268, 7876]}$$
    
- Power Density ($p_v$): The dissipated power per unit volume (W/m³). This is the differential form of Joule's Law:
    
    $$p_v = \vec{E} \cdot \vec{J} = \kappa E^2 = \frac{J^2}{\kappa} \quad \text{[cite: 5269]}$$