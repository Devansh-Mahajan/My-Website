[[401_skript_riemann-summen.pdf]]
[[402_skript_integral_eigenschaften.pdf]]
[[403_skript_integrationsregeln.pdf]]
[[404_skript_laengen_flaechen_volumina.pdf]]

# 1. Riemann Sums and the Definite Integral

Integral calculus fundamentally deals with accumulating quantities, often visualized as finding the area under a curve.

## 1.1. Motivation and Historical Context

- **Ancient Roots:** Archimedes (around 250 BCE) calculated the area of a parabolic segment, effectively performing an early integration 1111.
    
- **17th Century Development:** Newton and Leibniz independently developed calculus, establishing the crucial link between differentiation (tangent problem) and integration (area problem) 2222.
    
- **19th Century Rigor:** Cauchy and Weierstrass provided the formal definitions and proofs used today, including defining the derivative as a limit of the difference quotient and rigorously proving the Fundamental Theorem 3333. Bernhard Riemann formalized the concept of the integral using sums44.
    

## 1.2. The Riemann Sum

Many practical problems lead to approximating a total quantity by summing up small pieces:

- **Distance from Velocity:** Total distance is approximated by summing distances traveled in small time intervals: $s \approx \sum v(t_i) \Delta t$5.
    
- **Volume:** The volume of a solid (like a sphere) is approximated by summing volumes of thin slices (like cylinders): $V_{Kugel} \approx \sum \pi (r^2 - x_i^2) \Delta x$6.
    
- **Work:** The work done (e.g., by a pump) is approximated by summing the work done on small portions: $A \approx \sum (\pi r^2 \rho g (x_i+h) \Delta x)$7.
    

These sums all take the general form $\sum_{i=0}^{n-1} f(x_i) \Delta x$, known as a **Riemann Sum**888. The exact value is obtained by taking the limit as the width of the pieces goes to zero ($\Delta x \to 0$ or $n \to \infty$)9.

## 1.3. The Definite Integral

- Definition: The definite integral of a function $f(x)$ from $a$ to $b$ is defined as the limit of the Riemann Sum 10:
    
    $$\int_a^b f(x) dx := \lim_{\Delta x \to 0 \text{ bzw. } n \to \infty} \left( \sum_{i=0}^{n-1} f(x_i) \Delta x \right)$$
    
- Terminology 11:
    
    - $a, b$: **Integration limits** (lower and upper).
        
    - $\int$: **Integral sign** (originating from Leibniz's notation 12).
        
    - $f(x)$: **Integrand**.
        
    - $dx$: Indicates the **integration variable**.
        
- **Result:** A definite integral is always a **number**13.
    

## 1.4. Geometric Interpretation: Area

- If $f(x) \ge 0$ on $[a, b]$, the Riemann sum approximates the area under the curve using rectangles (Untersumme/Obersumme) 14141414.
    
- In this case, the definite integral $\int_a^b f(x) dx$ gives the **exact area** under the graph of $f(x)$ from $x=a$ to $x=b$ 15151515.
    
- **Important:** If $f(x)$ takes negative values, the integral represents a **net area**, where areas below the x-axis are counted negatively 16.
    
    - If $f(x) < 0$ on $[a,b]$, then $\int_a^b f(x) dx = -I$ (negative of the geometric area) 17171717.
        

## 1.5. Direct Calculation (via Definition)

Calculating integrals directly from the Riemann sum definition is possible but often tedious, involving sums and limits 18.

- **Example: $\int_0^5 x dx$**
    
    - Geometrically, this is the area of a triangle: $\frac{1}{2} \cdot 5 \cdot 5 = 12.5$ 19.
        
    - Via definition: $\Delta x = 5/n$, $x_i = i \cdot (5/n)$20.
        
    - $\int_0^5 x dx = \lim_{n\to\infty} \sum_{i=0}^{n-1} (i \frac{5}{n}) \frac{5}{n} = \lim_{n\to\infty} (\frac{5}{n})^2 \sum_{i=0}^{n-1} i$ 21.
        
    - Using $\sum_{i=0}^{n-1} i = \frac{(n-1)n}{2}$ gives $\lim_{n\to\infty} \frac{25}{n^2} \frac{n(n-1)}{2} = \lim_{n\to\infty} 12.5 \frac{n^2-n}{n^2} = 12.5$ 22.
        

---

# 2. Properties and the Fundamental Theorem of Calculus

## 2.1. Basic Definitions and Properties

- Definitions 23:
    
    - $\int_a^a f(x) dx := 0$
        
    - $\int_b^a f(x) dx := - \int_a^b f(x) dx$
        
- Linearity 24:
    
    - $\int_a^b k \cdot f(x) dx = k \cdot \int_a^b f(x) dx$ (Factor rule)
        
    - $\int_a^b (f(x) \pm g(x)) dx = \int_a^b f(x) dx \pm \int_a^b g(x) dx$ (Sum rule)
        
- Interval Additivity 25: For $a \le b \le c$:
    
    - $\int_a^b f(x) dx + \int_b^c f(x) dx = \int_a^c f(x) dx$
        
- Mean Value Theorem for Integrals 26: If $f$ is continuous on $[a, b]$, there exists a $c \in [a, b]$ such that:
    
    - $\int_a^b f(x) dx = f(c) \cdot (b-a)$.
        
    - Geometrically: The area under the curve equals the area of a rectangle with width $(b-a)$ and some height $f(c)$ attained within the interval 27.
        

## 2.2. Antiderivatives (Stammfunktionen)

- **Definition:** A function $F(x)$ is called an **antiderivative** (Stammfunktion) of $f(x)$ if $F'(x) = f(x)$28.
    
- If $F(x)$ is one antiderivative, then any other antiderivative must be of the form $F(x) + c$ for some constant $c$29.
    
- **Indefinite Integral:** The **indefinite integral** $\int f(x) dx$ represents the _set of all_ antiderivatives of $f(x)$ 30.
    
    - Example: $\int x^3 dx = \frac{1}{4}x^4 + c$ 31.
        

## 2.3. The Fundamental Theorem of Calculus (Hauptsatz)

This theorem provides the crucial link between differentiation and integration, enabling the efficient calculation of definite integrals32323232.

### Part 1 (1. Fassung)

- Defines the integral function $F(\xi)$ with a variable upper limit33:
    
    $$F(\xi) := \int_0^\xi f(x) dx$$
    
    (Lower limit could be any constant $a$).
    
- Statement: The derivative of this integral function with respect to its upper limit is the original function evaluated at that limit 34:
    
    $$\frac{dF}{d\xi} = \frac{d}{d\xi} \left( \int_0^\xi f(x) dx \right) = f(\xi)$$
    
- **Interpretation:** Integration (as building the integral function) is the inverse operation of differentiation35. The rate of change of the accumulated area up to $\xi$ is precisely the value of the function at $\xi$ 36.
    

### Part 2 (2. Fassung) - The Evaluation Theorem

- Statement: If $F(x)$ is any antiderivative of $f(x)$ (i.e., $F'(x) = f(x)$), then the definite integral can be calculated by evaluating $F$ at the limits 37:
    
    $$\int_a^b f(x) dx = F(b) - F(a)$$
    
- **Notation:** $F(b) - F(a)$ is often abbreviated as $F(x)|_a^b$ 38.
    
- Algorithm for Calculation 39393939:
    
    1. Find an antiderivative $F(x)$ for the integrand $f(x)$.
        
    2. Calculate $F(b) - F(a)$.
        
- **Example:** $\int_1^7 x^2 dx$
    
    1. An antiderivative of $x^2$ is $F(x) = \frac{1}{3}x^3$40.
        
    2. $\int_1^7 x^2 dx = F(7) - F(1) = \frac{1}{3}(7^3) - \frac{1}{3}(1^3) = \frac{343}{3} - \frac{1}{3} = \frac{342}{3} = 114$ 41.
        

---

# 3. Integration Rules and Techniques

Finding antiderivatives is the key challenge. Basic rules come from reversing differentiation rules. More complex functions require specific techniques.

## 3.1. Basic Integration Rules (Reversing Differentiation)

Based on known derivatives 42:

- **Linearity:** $\int (f \pm g) dx = \int f dx \pm \int g dx$ and $\int k f dx = k \int f dx$ 43.
    
- **Power Rule:** $\int x^k dx = \frac{1}{k+1} x^{k+1} + c$ (for $k \ne -1$) 44.
    
- **Special Case $k=-1$:** $\int \frac{1}{x} dx = \ln|x| + [cite_start]c$ (Note: Original text states $x>0$ for $\ln(x)$, but $\ln|x|$ is more general) 45.
    
- **Trigonometric:** $\int \sin(x) dx = -\cos(x) + c$ and $\int \cos(x) dx = \sin(x) + c$ (for $x$ in radians) 46.
    
- **Exponential:** $\int e^x dx = e^x + c$ and $\int a^x dx = \frac{1}{\ln(a)} a^x + c$ (for $a>0, a\ne 1$) 47.
    

## 3.2. Integration by Parts (Partielle Integration)

This technique comes from reversing the product rule for differentiation48484848.

- **Product Rule:** $(u \cdot v)' = u'v + uv'$49.
    
- Integrating both sides gives $u \cdot v = \int u'v dx + \int uv' dx$ 50.
    
- Rule (Indefinite):
    
    $$\int u'(x) v(x) dx = u(x)v(x) - \int u(x)v'(x) dx + c$$
    
    51
    
- Rule (Definite):
    
    $$\int_a^b u'(x) v(x) dx = [u(x)v(x)]_a^b - \int_a^b u(x)v'(x) dx$$
    
    52
    
- **Strategy:** The goal is to choose $u'$ and $v$ such that the new integral $\int uv' dx$ is _easier_ to solve than the original $\int u'v dx$ 53.
    
- **Example: $\int x \cos(x) dx$**
    
    - **Choice 1:** $u'=x, v=\cos(x) \implies u=\frac{1}{2}x^2, v'=-\sin(x)$. Integral becomes $\int \frac{1}{2}x^2 (-\sin x) dx$, which is harder 54.
        
    - **Choice 2:** $u'=\cos(x), v=x \implies u=\sin(x), v'=1$. Rule gives:
        
        - $\int x \cos(x) dx = \sin(x) \cdot x - \int \sin(x) \cdot 1 dx$ 55.
            
        - $= x \sin(x) - (-\cos(x)) + c = x \sin(x) + \cos(x) + c$56.
            

## 3.3. Integration by Substitution

This technique comes from reversing the chain rule and is useful for integrals involving composite functions57. It often applies when the integrand contains a function $g(x)$ and its derivative $g'(x)$ as a factor 58585858.

- **Chain Rule:** $(F(g(x)))' = F'(g(x)) \cdot g'(x)$59. Let $f = F'$.
    
- Integrating gives $\int f(g(x)) g'(x) dx = F(g(x)) + c$. Since $F$ is an antiderivative of $f$, $F(y) = \int f(y) dy$.
    
- Rule (Indefinite):
    
    $$\int f(g(x)) g'(x) dx = \int f(y) dy \Big|_{y=g(x)}$$
    
    60
    
- Rule (Definite): The integration limits must also be transformed:
    
    $$\int_a^b f(g(x)) g'(x) dx = \int_{g(a)}^{g(b)} f(y) dy$$
    
    61
    
- **Practical Use ("u-Substitution"):**
    
    1. Identify an inner function $u = g(x)$ such that its derivative $g'(x)$ (or a constant multiple) is also present.
        
    2. Find $du = g'(x) dx$.
        
    3. Substitute $u$ and $du$ into the integral, converting it entirely in terms of $u$.
        
    4. Change integration limits to $g(a)$ and $g(b)$ (for definite integrals).
        
    5. Integrate with respect to $u$.
        
    6. Substitute back $u=g(x)$ (for indefinite integrals).
        
- **Example: $\int \tan(x) dx = \int \frac{\sin(x)}{\cos(x)} dx$**
    
    1. Let $u = \cos(x)$62626262.
        
    2. $du = -\sin(x) dx$63.
        
    3. Substitute: $\int \frac{-du}{u} = -\int \frac{1}{u} du$ 64.
        
    4. Integrate: $-\ln|u| + [cite_start]c$ 65.
        
    5. Substitute back: $-\ln|\cos(x)| + c = \ln|\sec(x)| + [cite_start]c$ 66.
        

## 3.4. Non-Elementarily Integrable Functions

- Not every elementary function has an antiderivative that can be expressed using elementary functions (polynomials, roots, trig, exp, log)67676767. Such functions are **not closed (or elementarily) integrable** 68.
    
- **Examples:** $e^{-x^2}$, $\frac{\sin(x)}{x}$, $\frac{e^x}{x}$, $\sqrt{1+x^4}$ 69.
    
- **Risch Algorithm:** A complex (semi-)algorithm exists to determine if a function _has_ an elementary antiderivative and find it if it does 70. It's implemented in computer algebra systems71.
    

---

# 4. Applications: Lengths, Areas, and Volumes

Definite integrals provide a powerful tool for geometric calculations.

## 4.1. Area Calculation

- **Area between graph and x-axis:** If $f(x) \ge 0$ on $[a,b]$, Area = $\int_a^b f(x) dx$. If $f(x) \le 0$, Area = $-\int_a^b f(x) dx = |\int_a^b f(x) dx|$ 72. If $f(x)$ changes sign, integrate positive and negative parts separately and add the absolute values.
    
- Area between two curves: If $f(x) \ge g(x)$ on $[a,b]$, the area between the curves is:
    
    $$A = \int_a^b (f(x) - g(x)) dx$$
    
    - First find intersection points $a, b$ by solving $f(x)=g(x)$ 73.
        
    - Example: Area between $f(x)=-x^2+5$ and $g(x)=0.5x+2$. Intersections at $x=-2, x=1.5$. Area = $\int_{-2}^{1.5} ((-x^2+5) - (0.5x+2)) dx = \int_{-2}^{1.5} (-x^2 - 0.5x + 3) dx = \frac{343}{48}$74.
        

## 4.2. Arc Length

- The length $\Lambda$ of a curve $y=f(x)$ from $x=a$ to $x=b$ is found by integrating the length element $ds = \sqrt{dx^2 + dy^2} = \sqrt{1 + (f'(x))^2} dx$.
    
- Formula:
    
    $$\Lambda = \int_a^b \sqrt{1 + (f'(x))^2} dx$$
    
    75(Derived by approximating the curve with small line segments and taking the limit 76).
    

## 4.3. Volume of Revolution

- If a region bounded by $y=f(x)$, the x-axis, $x=a$, and $x=b$ is rotated around the x-axis, it generates a **solid of revolution**77.
    
- The volume is calculated using the **disk method**: Sum the volumes of infinitesimally thin disks with radius $f(x_i)$and thickness $\Delta x$. Volume of disk $\approx \pi [f(x_i)]^2 \Delta x$ 78.
    
- Formula (Rotation around x-axis):
    
    $$V = \pi \int_a^b [f(x)]^2 dx$$
    
    79
    
- **Examples:**
    
    - **Cone:** Generated by rotating $f(x) = \frac{r}{h}x$ from $0$ to $h$. $V = \pi \int_0^h (\frac{r}{h}x)^2 dx = \pi \frac{r^2}{h^2} [\frac{1}{3}x^3]_0^h = \frac{1}{3}\pi r^2 h$ 80.
        
    - **Sphere:** Generated by rotating $f(x) = \sqrt{r^2-x^2}$ from $-r$ to $r$. $V = \pi \int_{-r}^r (r^2-x^2) dx = \pi [r^2x - \frac{1}{3}x^3]_{-r}^r = \frac{4}{3}\pi r^3$ 81.
        
    - **Gabriel's Horn:** Rotate $y=1/x$ from $x=1$ to $\infty$. This uses an **improper integral**:
        
        - $V = \lim_{b\to\infty} \pi \int_1^b (\frac{1}{x})^2 dx = \lim_{b\to\infty} \pi [-\frac{1}{x}]_1^b = \lim_{b\to\infty} \pi (-\frac{1}{b} - (-\frac{1}{1})) = \pi(0+1) = \pi$ 82828282.
            
        - Paradoxically, this infinite horn has a finite volume ($\pi$) but an infinite surface area 83.