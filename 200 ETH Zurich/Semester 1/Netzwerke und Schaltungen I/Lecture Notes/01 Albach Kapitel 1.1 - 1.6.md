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
## Course Introduction: Netzwerke und Schaltungen 1 (NuS1)

This course aims to build understanding of **both the concepts and the quantitative calculations** in electrical networks and circuits.

### Course Structure & Approach

- **Interactive Learning:** This course utilizes an interactive format rather than traditional lectures2. **Active participation is expected**.
    
- **Preparation:** You're expected to **read the relevant textbook sections _before_ each lecture**. Lectures will focus on deepening understanding, discussing examples, showing experiments, and clarifying difficulties.
    
- **Practice:** Calculation skills are trained through exercises solved at home and during tutored exercise sessions.
    
- **Support:** Additional help is available via the Study Center and Moodle forums.
    

### Resources

- **Textbook:** "Elektrotechnik", 2nd Edition by Manfred Albach, published by Pearson. Includes an access code for the MyLab online learning platform.
    
- **Exercise Book:** "Elektrotechnik Aufgabensammlung" by Albach & Fischer provides additional problems.
    

### Assessment & Bonus

- **Exam:** A 120-minute session exam (part of Basisprüfung Block A) in a hybrid format (paper and online). It includes short questions and longer problems testing both conceptual understanding and calculations.
    
- **Allowed Aids:** The paper version of the Albach "Elektrotechnik" textbook (can have handwritten notes), dictionaries, a formula sheet (max. 2 A4 pages), and specific calculators (Win7/Win8 version on computer or a simple calculator according to D-ITET guidelines). **Notes from exercises or old exams are NOT allowed**.
    
- **Notenbonus:** You can earn up to a **0.25 grade bonus**. This is achieved by completing weekly reading checks and bonus exercises on Moodle. Points accumulate throughout the semester, with the bonus scaling linearly from 0 (at 140 points) to 0.25 (at 280 points or more). Submissions are due **Sundays by 18:00**.
    

### Prerequisites

- **Math:** A strong foundation in **single-variable calculus and vector calculus** is required. The Math Bridge Course is highly recommended.
    
- **Course-Specific Math:** Concepts like **orthogonal coordinate systems** and **multi-dimensional integration (line/surface integrals)** are needed and covered in Appendices A, B, and C of the textbook and early exercises.
    

### Course Content (NuS1)

This course covers the fundamentals based on **Chapters 1-6** of the Albach textbook. Topics include electrostatic fields, stationary current fields, simple networks, conduction mechanisms, stationary magnetic fields, and time-varying electromagnetic fields. Later topics like AC analysis and transformations (Chapters 7-11) are covered in subsequent courses.

---

## Chapter 1: The Electrostatic Field ⚡️

This chapter introduces the fundamental concepts related to **stationary electric charges** and the forces they exert.

### Key Concepts & Definitions

- **Electric Charge ($Q$):**
    
    - Exists as positive (protons) and negative (electrons).
        
    - The smallest indivisible unit is the elementary charge $e \approx 1.602 \times 10^{-19}$ As.
        
    - Like charges repel, unlike charges attract.
        
    - Charge is conserved in isolated systems.
        
- **Coulomb's Law:**
    
    - Quantifies the force $\vec{F}$ between two point charges $Q_1$ and $Q_2$ separated by distance $r$:
        $$\vec{F}_{2}=\vec{e}_{r}\frac{1}{4\pi\epsilon_{0}}\frac{Q_{1}Q_{2}}{r^{2}}$$
        
        where $\vec{e}_r$ is the unit vector pointing from $Q_1$ to $Q_2$ and $\epsilon_0$ is the permittivity of free space ($\approx 8.854 \times 10^{-12}$ As/Vm).
        
    - The force magnitude is proportional to the product of charges and inversely proportional to the square of the distance.
        
- **Electric Field ($\vec{E}$):**
    
    - A concept introduced to explain forces acting at a distance. Charges create an electric field in the surrounding space.
        
    - Defined as the force per unit positive test charge: $\vec{E} = \vec{F}/Q_{test}$. It is a property of the source charge(s) and space. Unit: V/m.
        
    - Field of a point charge $Q_1$: $\vec{E}_{1}=\vec{e}_{r}\frac{Q_{1}}{4\pi\epsilon_{0}r^{2}}$.
        
    - The force on a charge $Q$ in an electric field is $\vec{F} = Q\vec{E}$.
        
- **Superposition Principle:**
    
    - The total electric field (or force) from multiple charges is the **vector sum** of the fields (or forces) created by each charge individually.
        
- **Charge Densities:**
    
    - For continuous distributions: Line charge $\lambda$ (As/m), Surface charge $\sigma$ (As/m²), Volume charge $\rho$ (As/m³).
        
- **Field Representation:**
    
    - **Field Lines:** Originate on positive charges, terminate on negative charges43. Tangent gives $\vec{E}$ direction. Density can indicate strength. Cannot cross.
        
    - **Equipotential Surfaces:** Surfaces where the electric potential is constant. $\vec{E}$ is always perpendicular to equipotential surfaces. Conductors in electrostatics form equipotential regions.
        
- **Electric Potential ($\varphi_e$) & Voltage ($U$):**
    
    - Electrostatic field is conservative: $\oint_C \vec{E}\cdot d\vec{s} = 0$.
        
    - Allows definition of a scalar potential $\varphi_e$ (Unit: V). Potential difference (Voltage) is related to the work done moving a charge: $W_e = Q(\varphi_{e}(P_1) - \varphi_{e}(P_0))$.
        
    - Voltage between two points: $U_{12} = \varphi_{e}(P_1) - \varphi_{e}(P_2) = \int_{P_2}^{P_1} \vec{E}\cdot d\vec{s}$.
        
- **Electric Flux Density ($\vec{D}$):**
    
    - Defined as $\vec{D} = \epsilon \vec{E} = \epsilon_0 \epsilon_r \vec{E}$. Unit: As/m².
        
    - **Gauss's Law:** Total electric flux $\Psi$ out of a closed surface equals the enclosed charge $Q$: $\Psi=\oint_{A}\vec{D}\cdot d\vec{A}=Q$.
        
- **Conductors & Insulators in Electrostatic Fields:**
    
    - **Conductors:** Contain free charges. In electrostatics, $\vec{E}=0$ inside. They form equipotential regions58. Excess charge resides on the surface. $\vec{E}$ is perpendicular to the surface just outside. **Influence (Influenz):** Charge redistribution on a conductor due to an external field. **Shielding (Faraday Cage):** A conductive enclosure blocks external static fields from the interior.
        
    - **Dielectrics (Insulators):** Charges are bound. An external field causes **polarization** (alignment/creation of electric dipoles). Described by relative permittivity $\epsilon_r$ (or dielectric constant). $\vec{D} = \epsilon_0 \epsilon_r \vec{E}$.
        
- **Capacitance ($C$):**
    
    - Measure of a system's ability to store electric charge and energy. Defined as $C=Q/U$. Unit: Farad (F).
        
    - Parallel Plate: $C=\frac{\epsilon A}{d}$.
        
    - Capacitors in parallel add: $C_{ges}=\sum C_{k}$.
        
    - Reciprocals add for capacitors in series: $1/C_{ges}=\sum 1/C_{k}$.
        
- **Electric Energy Storage:**
    
    - Energy stored in a capacitor: $W_e = \frac{1}{2}CU^2$.
        
    - Energy density in the field: $w_e = \frac{1}{2}\vec{E}\cdot\vec{D}$.
        

### Lernziele (Week 1 / Chapter 1 Part 1)

- Calculate forces on charges using Coulomb's Law.
    
- Understand and explain the concept of the electric field.
![](https://www.youtube.com/watch?v=x1-SibwIPM4)
