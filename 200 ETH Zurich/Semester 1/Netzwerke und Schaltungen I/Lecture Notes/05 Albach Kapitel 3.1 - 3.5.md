---
tags:
  - class
  - itet
draft: false
publish: true
---
**Material:**
[[HS25_NuS1_Kapitel_3_Einfache_elektrische_Netzwerke_Woche_5.pdf]]
![[Belasteter Spannungsteiler_2_sweep_R.asc]]
![[Belasteter Spannungsteiler_sweep_R.asc]]
![[Belasteter Spannungsteiler.asc]]
![[Unbelasteter Spannungsteiler.asc]]

## 3.1 Counting Arrows (Zählpfeile)

To analyze networks, we must define the direction for current and voltage. **Counting arrows** are used for this purpose2.

- **Current ($I$):** The arrow indicates the direction of positive current flow. This is a scalar quantity33333333.
    
- **Voltage ($U$):** The arrow indicates the direction of potential drop, pointing from higher potential to lower potential 4. $U_{12} = \varphi_e(P_1) - \varphi_e(P_2)$5.
    

---

## 3.2 Voltage and Current Sources (Spannungs- und Stromquellen)

Sources are the active elements in a network.

- **Ideal Voltage Source:** Maintains a constant voltage $U_q$ regardless of the current $I$ flowing through it. An ideal voltage source **cannot be short-circuited**, as this would imply infinite current666666666666666.
    
- **Ideal Current Source:** Maintains a constant current $I_q$ regardless of the voltage $U$ across it. An ideal current source **cannot be left in an open circuit**, as this would imply infinite voltage777777777.
    

---

## 3.3 Counting Arrow Systems (Zählpfeilsysteme)

The relationship between the $U$ and $I$ arrows defines how power is calculated:

- **Consumer System (Verbraucherzählpfeilsystem):** $U$ and $I$ arrows point in the **same direction**. This is used for passive components like resistors. Power $P = U \cdot I$ is consumed8.
    
- **Generator System (Erzeugerzählpfeilsystem):** $U$ and $I$ arrows point in **opposite directions**. This is used for active components (sources) that deliver power9.
    

---

## 3.4 Kirchhoff's Laws (Die Kirchhoff'schen Gleichungen)

These two fundamental laws govern all DC networks and are derived from the properties of stationary fields101010101010101010.

### 1. Node Rule (Knotenregel) - KCL

This law is based on the conservation of charge ($\oint \vec{J} \cdot d\vec{A} = 0$) 1111111111.

- **Concept:** At any node (junction point), the sum of all currents flowing _in_ must equal the sum of all currents flowing _out_12121212.
    
- **Formula:** $\sum_{v} I_{v} = 0$13.
    
- **Application:** In a simple series circuit, the current is the same through every component14141414.
    

### 2. Mesh Rule (Maschenregel) - KVL

This law is based on the conservative nature of the $\vec{E}$-field ($\oint \vec{E} \cdot d\vec{s} = 0$)1515151515.

- **Concept:** The sum of all voltage drops around any closed loop (mesh) must be zero 161616.
    
- **Formula:** $\sum_{v} U_{v} = 0$17.
    
- **Sign Convention:** When tracing a loop, voltages are added if their arrow matches the loop direction and subtracted if they oppose it181818181818181818.
    

---

## 3.5 Simple Resistor Networks (Einfache Widerstandsnetzwerke)

### Series and Parallel Combinations

- **Series (Reihenschaltung):** Resistors are connected end-to-end.
    
    - Current $I$ is the same through all resistors19.
        
    - Total resistance is the sum: $R_{ges} = R_1 + R_2 + ... + R_n$20.
        
- **Parallel (Parallelschaltung):** Resistors are connected across the same two nodes.
    
    - Voltage $U$ is the same across all resistors 21212121.
        
    - The total conductance $G_{ges}$ (where $G=1/R$) is the sum: $G_{ges} = G_1 + G_2 + ... + G_n$22222222.
        
    - For resistance: $1/R_{ges} = 1/R_1 + 1/R_2 + ... + 1/R_n$23232323.
        
    - For two resistors: $R_{ges} = (R_1 \cdot R_2) / (R_1 + R_2)$24242424.
        
    - For $n$ identical resistors: $R_{ges} = R/n$25252525.
        

### 3.5.1 Voltage Divider (Spannungsteiler)

This is a series circuit used to "tap" a fraction of the total voltage262626262626262626.

- **Rule:** The voltage drops across series resistors are proportional to their resistance.
    
- Formula: For two resistors $R_1$ and $R_2$ in series, the voltage across $R_2$ is:
    
    $$U_2 = U_{ges} \cdot \frac{R_2}{R_1 + R_2} \quad \text{[cite: 6606]}$$
    

### 3.5.2 Loaded Voltage Divider (Belasteter Spannungsteiler)

When a load (like a voltmeter or another circuit) $R_V$ is connected to the output of a voltage divider, this load is _in parallel_ with $R_2$ 27272727.

- **Effect:** The load $R_V$ draws current, changing the total resistance of the lower part to $R_{par} = (R_2 \cdot R_V) / (R_2 + R_V)$28.
    
- **Result:** The output voltage _drops_ to $U_{out} = U_{ges} \cdot R_{par} / (R_1 + R_{par})$29. The loading effect is minimal if the load resistance is very high ($R_V \gg R_2$)30.
    

### 3.5.3 Voltmeter Range Extension (Messbereichserweiterung)

To measure a voltage $U$ that is higher than a voltmeter's maximum $U_{max}$, a **series resistor** (Vorwiderstand) $R_S$ is added31313131. The meter and $R_S$ form a voltage divider, with $R_S$ chosen to absorb the excess voltage 32323232.

### 3.5.4 Current Divider (Stromteiler)

This is a parallel circuit where the total current $I_{ges}$ splits between the branches33.

- **Rule:** The current splits _inversely_ proportional to the branch resistances (or proportionally to the conductances).
    
- Formula: For two resistors $R_1$ and $R_2$ in parallel, the current through $R_2$ is:
    
    $$I_2 = I_{ges} \cdot \frac{R_1}{R_1 + R_2} \quad \text{[cite: 6611]}$$
    

### 3.5.6 Resistance Measurement (Widerstandsmessung)

Measuring resistance $R$ with a voltmeter (internal resistance $R_V$) and an ammeter (internal resistance $R_A$) involves two main setups, each with a potential error source34343434.

1. **"Correct Voltage" Setup (Spannungsrichtige Schaltung):** The voltmeter is directly across $R$. The ammeter measures $I_A = I_R + I_V$ (current for $R$ + current for $V$).
    
    - **Calculation:** $R = U_V / I_R = U_V / (I_A - I_V)$3535.
        
    - **Error:** The ammeter reads high. This setup is accurate for **small $R$** (when $R \ll R_V$, so $I_V$ is negligible) 36363636.
        
2. **"Correct Current" Setup (Stromrichtige Schaltung):** The ammeter is directly in series with $R$. The voltmeter measures $U_V = U_R + U_A$ (voltage for $R$ + voltage for $A$).
    
    - **Calculation:** $R = U_R / I_A = (U_V - U_A) / I_A$3737.
        
    - **Error:** The voltmeter reads high. This setup is accurate for **large $R$** (when $R \gg R_A$, so $U_A$ is negligible) 38383838.