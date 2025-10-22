[[408_skript_vektorgeometrie_grundlagen.pdf]]
[[409_skript_vektorgeometrie_geraden_und_ebenen.pdf]]
[[410_skript_vektorgeometrie_skp_normalformen.pdf]]
[[411_Skript_Vektorgeometrie _vektorprodukt.pdf]]

# 1. Grundlagen der Vektorgeometrie (Vector Geometry Basics)

Vector geometry provides tools to describe and analyze geometric objects like points, lines, and planes using vectors.

## 1.1. Skalare vs. Vektorielle Größen (Scalars vs. Vectors)

- **Skalar (Scalar):** A quantity defined by a magnitude (number) and possibly a unit (e.g., temperature, distance, speed/tempo) 111111111.
    
- **Vektoriell (Vectorial):** A quantity defined by magnitude _and_ direction (e.g., velocity, force, displacement) 2222. Represented visually by arrows3.
    

## 1.2. Vektoren: Definition und Darstellung (Vectors: Definition and Representation)

- **Definition:** A vector is the set of all arrows (directed line segments) having the same length and direction4. Any single arrow is a **representative** (Repräsentant)5. Vectors can be shifted parallelly without changing6.
    
- **Räume (Spaces):** We focus on the plane $\mathbb{R}^2$ and space $\mathbb{R}^3$7. Points are represented by coordinate tuples $(x_1, x_2)$ or $(x_1, x_2, x_3)$8.
    
- **Notation:**
    
    - Name: $\vec{v}, \vec{w}$9.
        
    - From points: $\vec{PQ}$ (from point P to point Q)10.
        
    - Coordinates (column vector): $\vec{v} = \begin{pmatrix} v_1 \\ v_2 \\ (v_3) \end{pmatrix}$ representing the displacement in each coordinate direction11111111. The parentheses indicate the third component is optional (for $\mathbb{R}^2$ vs $\mathbb{R}^3$)12.
        

## 1.3. Spezielle Vektoren und Operationen (Special Vectors and Operations)

- **Nullvektor (Zero Vector):** $\vec{0} = \begin{pmatrix} 0 \\ 0 \\ (0) \end{pmatrix}$. Represents no displacement 13. $\vec{PQ} + \vec{QP} = \vec{0}$14.
    
- **Gegenvektor (Opposite Vector):** $-\vec{v} = (-1)\vec{v} = \begin{pmatrix} -v_1 \\ -v_2 \\ (-v_3) \end{pmatrix}$. Same length, opposite direction 15.
    
- **Skalarmultiplikation (Scalar Multiplication):** $t \cdot \vec{v} = \begin{pmatrix} t v_1 \\ t v_2 \\ (t v_3) \end{pmatrix}$. Stretches ($|t|>1$) or shrinks ($|t|<1$) the vector; reverses direction if $t<0$ 16161616.
    
- Vektoraddition (Vector Addition): Geometrically corresponds to placing arrows head-to-tail (parallelogram rule)17171717. Coordinates are added component-wise 18:
    
    $$\vec{v} + \vec{w} = \begin{pmatrix} v_1 + w_1 \\ v_2 + w_2 \\ (v_3 + w_3) \end{pmatrix}$$
    
- Vektorsubtraktion (Vector Subtraction): Add the opposite vector: $\vec{v} - \vec{w} = \vec{v} + (-\vec{w})$ 19:
    
    $$\vec{v} - \vec{w} = \begin{pmatrix} v_1 - w_1 \\ v_2 - w_2 \\ (v_3 - w_3) \end{pmatrix}$$
    

## 1.4. Norm (Länge) eines Vektors (Norm/Length of a Vector)

- Definition: The norm or length $||\vec{v}||$ is calculated using the Pythagorean theorem 20202020:
    
    $$||\vec{v}|| = \sqrt{v_1^2 + v_2^2 (+ v_3^2)}$$
    
- **Properties:**
    
    - $||\vec{0}|| [cite_start]= 0$21.
        
    - $||-\vec{v}|| [cite_start]= ||\vec{v}||$ 22.
        
    - $||t \cdot \vec{v}|| = |t| [cite_start]\cdot ||\vec{v}||$ 23.
        

## 1.5. Ortsvektoren (Position Vectors)

- Definition: The position vector (Ortsvektor) $\vec{OP}$ of a point $P(x_1, x_2, (x_3))$ is the vector from the origin $O(0,0,(0))$ to $P$ 24. Its coordinates are the same as the point's coordinates 25:
    
    $$\vec{OP} = \begin{pmatrix} x_1 \\ x_2 \\ (x_3) \end{pmatrix}$$
    
- Connecting Vector: The vector from point $P$ to point $Q$ is found by subtracting position vectors 26262626:
    
    $$\vec{PQ} = \vec{OQ} - \vec{OP} = \begin{pmatrix} x_Q - x_P \\ y_Q - y_P \\ (z_Q - z_P) \end{pmatrix}$$
    
- Mittelpunkt (Midpoint): The position vector $\vec{OM}$ of the midpoint $M$ of segment $PQ$ is the average of the endpoint position vectors 27272727:
    
    $$\vec{OM} = \vec{OP} + \frac{1}{2}\vec{PQ} = \frac{1}{2}(\vec{OP} + \vec{OQ})$$
    
- Schwerpunkt (Centroid): The position vector $\vec{OS}$ of the centroid $S$ of a triangle $PQR$ is the average of the vertex position vectors 28:
    
    $$\vec{OS} = \frac{1}{3}(\vec{OP} + \vec{OQ} + \vec{OR})$$
    

---

# 2. Geraden und Ebenen (Lines and Planes)

## 2.1. Geraden (Lines)

### Parametergleichung (Vector/Parametric Equation)

- Describes a line $g$ passing through point $P$ in the direction of vector $\vec{r}_g = \vec{PQ}$ 29.
    
- Form: For any point $X$ on the line, its position vector $\vec{x}$ is given by 30:
    
    $$g: \vec{x} = \vec{OP} + t \cdot \vec{r}_g \quad (t \in \mathbb{R})$$
    
    - $\vec{OP}$ is the **stützvektor** (position vector of a point on the line).
        
    - $\vec{r}_g$ is the **richtungsvektor** (direction vector).
        
    - $t$ is the **parameter**. Varying $t$ traces out all points on the line 31313131.
        
- This form works in $\mathbb{R}^2$ and $\mathbb{R}^3$32323232.
    

### Koordinatengleichung (Coordinate Equation) - Nur in $\mathbb{R}^2$

- **Forms:**
    
    - Linear function: $y = p x + q$ (for non-vertical lines) 33.
        
    - General form: $a x + b y + c = 0$ (works for all lines, including vertical) 34.
        
- There's no direct equivalent simple coordinate equation for a line in $\mathbb{R}^3$35.
    

### Umwandlungen (Conversions) - in $\mathbb{R}^2$

- **Coordinate to Vector:** Find two points $P, Q$ satisfying $ax+by+c=0$. Use them to form $\vec{OP}$ and $\vec{r}_g = \vec{PQ}$ 36.
    
- **Vector to Coordinate:**
    
    1. Find the slope $p$ from the direction vector $\vec{r}_g = \binom{r_1}{r_2}$ as $p = r_2 / r_1$ (if $r_1 \ne 0$) 37.
        
    2. Use the point $P$ from $\vec{OP}$ in $y = p x + q$ to find the y-intercept $q$ 38.
        
    3. Rewrite in the form $ax+by+c=0$ 39.
        

### Lagebeziehungen und spezielle Punkte (Relative Positions and Special Points)

- **Punkt auf Gerade (Point on Line):** A point $R$ lies on $g: \vec{x} = \vec{OP} + t \vec{r}_g$ if there exists a single $t \in \mathbb{R}$ such that $\vec{OR} = \vec{OP} + t \vec{r}_g$ 40. This leads to a system of equations (one for each coordinate) which must have a consistent solution for $t$ 41.
    
- **Parallele Geraden (Parallel Lines):** Two lines $g: \vec{x} = \vec{OP} + s \vec{r}_g$ and $h: \vec{x} = \vec{OQ} + t \vec{r}_h$ are parallel if their direction vectors are scalar multiples of each other: $\vec{r}_h = \lambda \vec{r}_g$ for some $\lambda \ne 0$ 42.
    
- **Schnittpunkt (Intersection Point):** Find $s, t$ such that $\vec{OP} + s \vec{r}_g = \vec{OQ} + t \vec{r}_h$ 43. This is a system of linear equations for $s$ and $t$44.
    
    - In $\mathbb{R}^2$: Unique solution if not parallel. No solution if parallel and distinct. Infinite solutions if identical.
        
    - In $\mathbb{R}^3$: Unique solution if they intersect. No solution if parallel and distinct OR **windschief (skew)** (non-parallel, non-intersecting) 45454545. Infinite solutions if identical.
        
- **Spurpunkte (Trace Points) in $\mathbb{R}^3$:** Intersection points with the coordinate planes ($x_1x_2$-plane where $x_3=0$, $x_1x_3$-plane where $x_2=0$, $x_2x_3$-plane where $x_1=0$) 46. Find the parameter $t$ by setting the corresponding coordinate in the vector equation to zero 47.
    

## 2.2. Ebenen (Planes) - Nur in $\mathbb{R}^3$

### Parametergleichung (Vector/Parametric Equation)

- Describes a plane $E$ passing through point $P$ and spanned by two non-collinear direction vectors $\vec{u} = \vec{PQ}$ and $\vec{v} = \vec{PR}$48484848.
    
- Any vector $\vec{PX}$ in the plane can be written as a unique linear combination $\vec{PX} = s\vec{u} + t\vec{v}$ 49.
    
- Form: For any point $X$ on the plane, its position vector $\vec{x}$ is given by 50:
    
    $$E: \vec{x} = \vec{OP} + s \cdot \vec{u} + t \cdot \vec{v} \quad (s, t \in \mathbb{R})$$
    
    - $\vec{OP}$ is the **stützvektor**.
        
    - $\vec{u}, \vec{v}$ are the **richtungsvektoren** (direction/spanning vectors).
        
    - $s, t$ are the **parameters**.
        

### Koordinatengleichung (Coordinate Equation)

- Form: A single linear equation represents a plane in $\mathbb{R}^3$ 51515151:
    
    $$E: a x_1 + b x_2 + c x_3 + d = 0$$
    
- **Special Cases:**
    
    - If $d=0$, the plane contains the origin52.
        
    - If e.g. $a=0$, the plane is parallel to the $x_1$-axis (or contains it if $d=0$) 53.
        
    - If e.g. $a=b=0$ (and $c \ne 0$), the plane is $c x_3 + d = 0$ or $x_3 = -d/c$, parallel to the $x_1x_2$-plane.
        

### Umwandlungen (Conversions)

- **Coordinate to Vector:** Find three non-collinear points $P, Q, R$ satisfying the coordinate equation. Use them to form $\vec{OP}$, $\vec{u} = \vec{PQ}$, $\vec{v} = \vec{PR}$54.
    
- **Vector to Coordinate:** Eliminate the parameters $s, t$ from the system of three component equations 55555555.
    
    - $x_1 = p_1 + s u_1 + t v_1$
        
    - $x_2 = p_2 + s u_2 + t v_2$
        
    - $x_3 = p_3 + s u_3 + t v_3$
        

### Lagebeziehungen und spezielle Punkte (Relative Positions and Special Points)

- **Punkt auf Ebene (Point on Plane):**
    
    - Coordinate Eq.: Check if the point's coordinates satisfy the equation56.
        
    - Vector Eq.: Check if there exist $s, t$ such that $\vec{OU} = \vec{OP} + s\vec{u} + t\vec{v}$ 57.
        
- **Spurpunkte (Trace Points):** Intersection points with the coordinate axes58. Find by setting two coordinates to zero in the coordinate equation 59. E.g., for $S_1$ on the $x_1$-axis, set $x_2=x_3=0$ and solve for $x_1$.
    
    - **Achsenabschnittsform (Intercept Form):** If intercepts are $A, B, C$, the equation is $\frac{x_1}{A} + \frac{x_2}{B} + \frac{x_3}{C} = 1$ 60.
        
- **Schnitt Gerade-Ebene (Line-Plane Intersection):** Substitute the line's parametric component equations ($x_1=p_1+u r_1$, etc.) into the plane's coordinate equation and solve for the line parameter $u$ 61. Substitute $u$back into the line equation to get the point62. (Alternatively, equate vector forms and solve the $3 \times 3$ system for $s, t, u$ 63).
    
    - Possible outcomes: Unique intersection point, line lies within the plane (infinite solutions), line is parallel to the plane (no solution).
        
- **Schnitt Ebene-Ebene (Plane-Plane Intersection):** Solve the system of two coordinate equations 64.
    
    - If planes are not parallel, the solution set is a line (the **Schnittgerade**). Find two points that satisfy both equations (e.g., by setting $x_1=0$ and solving for $x_2, x_3$, then setting $x_1=1$ and solving again) to define the line 65656565.
        
    - If planes are parallel and distinct, no solution.
        
    - If planes are identical, infinite solutions (the plane itself).
        

---

# 3. Das Skalarprodukt (Scalar Product / Dot Product)

A way to "multiply" two vectors resulting in a scalar.

## 3.1. Definitionen

1. Geometrisch: Based on the angle $\alpha$ between the vectors ($0 \le \alpha \le 180^\circ$) 666666666666666666:
    
    $$\vec{v} \cdot \vec{w} = ||\vec{v}|| \cdot ||\vec{w}|| \cdot \cos(\alpha)$$
    
    - If either vector is $\vec{0}$, the dot product is 067676767.
        
2. Algebraisch: Based on components 68686868:
    
    $$\vec{v} \cdot \vec{w} = v_1 w_1 + v_2 w_2 (+ v_3 w_3)$$
    

## 3.2. Eigenschaften und Gesetze (Properties and Laws)

- The result is a **scalar** (a number), not a vector69.
    
- **Kommutativgesetz (Commutative):** $\vec{v} \cdot \vec{w} = \vec{w} \cdot \vec{v}$ 70.
    
- **Distributivgesetz (Distributive):** $\vec{u} \cdot (\vec{v} + \vec{w}) = \vec{u} \cdot \vec{v} + \vec{u} \cdot \vec{w}$ 71.
    
- **Scalar Multiplication:** $(\lambda \vec{v}) \cdot (\mu \vec{w}) = \lambda \mu (\vec{v} \cdot \vec{w})$ 72.
    
- **Relation to Norm:** $\vec{v} \cdot \vec{v} = ||\vec{v}||^2$73.
    

## 3.3. Geometrische Bedeutung und Anwendungen

- **Vorzeichen (Sign):**
    
    - $\vec{v} \cdot \vec{w} > 0 \iff \alpha$ is acute ($<90^\circ$)74.
        
    - $\vec{v} \cdot \vec{w} < 0 \iff \alpha$ is obtuse ($>90^\circ$)75.
        
    - $\vec{v} \cdot \vec{w} = 0 \iff \alpha = 90^\circ$ (orthogonal) or one vector is $\vec{0}$ 76.
        
- **Orthogonalitätstest (Orthogonality Test):** Non-zero vectors $\vec{v}$ and $\vec{w}$ are perpendicular if and only if $\vec{v} \cdot \vec{w} = 0$ 77777777.
    
- Winkelberechnung (Angle Calculation): The angle $\alpha$ between non-zero vectors $\vec{v}$ and $\vec{w}$ is given by 787878787878787878:
    
    $$\cos(\alpha) = \frac{\vec{v} \cdot \vec{w}}{||\vec{v}|| \cdot ||\vec{w}||}$$
    
- Projektion (Projection): The vector projection $\vec{v}'$ of $\vec{w}$ onto the direction of $\vec{v}$ is 79:
    
    $$\vec{v}' = \left( \frac{\vec{w} \cdot \vec{v}}{||\vec{v}||^2} \right) \vec{v}$$
    
    The scalar projection (length of $\vec{v}'$ with sign) is $||\vec{w}|| \cos(\alpha) = \frac{\vec{w} \cdot \vec{v}}{||\vec{v}||}$.
    
- **Arbeit (Work):** Physical work $A$ done by a force $\vec{w}$ over a displacement $\vec{v}$ is $A = \vec{w} \cdot \vec{v}$ (if force is constant)808080808080808080.
    

---

# 4. Normalenvektoren und Hesse-Normalform (Normal Vectors and Hesse Normal Form)

## 4.1. Normalenvektor (Normal Vector)

- **Definition:** A vector $\vec{n}$ that is perpendicular (orthogonal) to a given line (in $\mathbb{R}^2$) or plane (in $\mathbb{R}^3$) 81. It is not unique; any scalar multiple $\lambda \vec{n}$ ($\lambda \ne 0$) is also a normal vector82.
    
- **From Coordinate Equation:**
    
    - For a line $g: ax + by + c = 0$ in $\mathbb{R}^2$, $\vec{n}_g = \binom{a}{b}$ is a normal vector 83838383.
        
    - For a plane $E: ax + by + cz + d = 0$ in $\mathbb{R}^3$, $\vec{n}_E = \begin{pmatrix} a \\ b \\ c \end{pmatrix}$ is a normal vector 84848484.
        
- **Verification:** Show that $\vec{n} \cdot \vec{PQ} = 0$ for any two points $P, Q$ on the line/plane 85858585.
    

## 4.2. Anwendungen von Normalenvektoren

- **Finding orthogonal line/plane:** The normal vector of the given object becomes the direction vector of the orthogonal object 86.
    
- **Reflections:** To reflect a point $O$ across a plane $E$, find the line through $O$ normal to $E$. Find the intersection $S$ of the line and plane. The reflection $P'$ satisfies $\vec{OP'} = 2 \vec{OS}$ 87.
    
- **Angle between Planes:** The angle between two planes $E$ and $F$ is equal to the angle (or its supplement $180^\circ - \alpha$) between their normal vectors $\vec{n}_E$ and $\vec{n}_F$ 88. Calculate using the dot product formula for $\cos(\alpha)$.
    

## 4.3. Abstand Punkt-Ebene / Punkt-Gerade (Distance Point-Plane / Point-Line)

- The distance $D$ from a point $P(x_P, y_P, z_P)$ to a plane $E: ax+by+cz+d=0$ is the length of the projection of $\vec{BP}$ onto the normal vector $\vec{n}_E$, where $B$ is any point on the plane 89898989.
    
- **Formula ($\mathbb{R}^3$):** 90
    
    $$D = \left| \frac{a x_P + b y_P + c z_P + d}{||\vec{n}_E||} \right| = \left| \frac{a x_P + b y_P + c z_P + d}{\sqrt{a^2+b^2+c^2}} \right|$$
    
- Formula ($\mathbb{R}^2$): For distance from $P(x_P, y_P)$ to line $g: ax+by+c=0$ 91:
    
    $$D = \left| \frac{a x_P + b y_P + c}{||\vec{n}_g||} \right| = \left| \frac{a x_P + b y_P + c}{\sqrt{a^2+b^2}} \right|$$
    
- **Interpretation of Sign:** The sign of the expression inside the absolute value indicates on which side of the plane/line the point $P$ lies, relative to the direction of the normal vector $\vec{n}$ 92929292.
    

## 4.4. Hesse-Normalform (Hesse Normal Form - HNF)

- A normalized version of the coordinate equation, obtained by dividing by the norm of the normal vector, $||\vec{n}||$93.
    
- **Form (Plane):** 94
    
    $$\frac{a x + b y + c z + d}{\sqrt{a^2+b^2+c^2}} = 0$$
    
- **Form (Line):** 95
    
    $$\frac{a x + b y + c}{\sqrt{a^2+b^2}} = 0$$
    
- **Advantage:** Plugging a point $P$'s coordinates into the left side of the HNF _directly_ gives the signed distance from the point to the plane/line96. The absolute value is the geometric distance $D$. The constant term in the HNF gives the signed distance from the origin97.
    

---

# 5. Das Vektorprodukt (Vector Product / Cross Product)

A way to multiply two vectors in $\mathbb{R}^3$ resulting in another vector in $\mathbb{R}^3$. Does not exist in $\mathbb{R}^2$.

## 5.1. Motivation

- **Physics:** Lorentz force $\vec{F}_L = q (\vec{v} \times \vec{B})$ acts perpendicular to both velocity $\vec{v}$ and magnetic field $\vec{B}$ 98989898.
    
- **Geometry:** Need an operation to find a vector orthogonal to two given vectors (e.g., normal to a plane) 99.
    

## 5.2. Geometrische Definition (Geometric Definition)

The vector product $\vec{c} = \vec{v} \times \vec{w}$ is uniquely defined by three properties 100:

1. **Orthogonalität (Orthogonality):** $\vec{c}$ is perpendicular to both $\vec{v}$ and $\vec{w}$ (and thus perpendicular to the plane they span).
    
2. **Betrag/Norm (Magnitude/Norm):** $||\vec{c}|| = ||\vec{v}|| \cdot ||\vec{w}|| \cdot \sin(\alpha)$, where $\alpha$ is the angle between $\vec{v}$ and $\vec{w}$. This magnitude equals the **area of the parallelogram** spanned by $\vec{v}$ and $\vec{w}$ 101101101101.
    
3. **Orientierung (Orientation):** The triplet $(\vec{v}, \vec{w}, \vec{c})$ forms a **right-handed system**(Rechtssystem), following the right-hand rule 102.
    

- **Special Case:** If $\vec{v}$ and $\vec{w}$ are collinear (parallel or anti-parallel, $\alpha=0^\circ$ or $180^\circ$), then $\vec{v} \times \vec{w} = \vec{0}$103.
    

## 5.3. Algebraische Berechnung (Algebraic Calculation)

- The coordinates of $\vec{x} = \vec{v} \times \vec{w}$ are given by104104104104104104104104104:
    
    $$\vec{v} \times \vec{w} = \begin{pmatrix} v_2 w_3 - v_3 w_2 \\ v_3 w_1 - v_1 w_3 \\ v_1 w_2 - v_2 w_1 \end{pmatrix}$$
    
- This formula ensures all three geometric properties are met 105105105105.
    
- Mnemonic using Determinants: The components can be remembered as $2 \times 2$ determinants 106:
    
    $$x_1 = \det \begin{pmatrix} v_2 & w_2 \\ v_3 & w_3 \end{pmatrix}, \quad x_2 = \det \begin{pmatrix} v_3 & w_3 \\ v_1 & w_1 \end{pmatrix}, \quad x_3 = \det \begin{pmatrix} v_1 & w_1 \\ v_2 & w_2 \end{pmatrix}$$
    
    (Note the cyclic permutation of indices 1, 2, 3 in the rows).
    

## 5.4. Eigenschaften (Properties)

- **Nicht-kommutativ (Anti-commutative):** $\vec{w} \times \vec{v} = -(\vec{v} \times \vec{w})$ 107.
    
- **Nicht-assoziativ (Not associative):** $(\vec{u} \times \vec{v}) \times \vec{w} \ne \vec{u} \times (\vec{v} \times \vec{w})$ generally 108.
    
- **Distributive:** $\vec{u} \times (\vec{v} + \vec{w}) = (\vec{u} \times \vec{v}) + (\vec{u} \times \vec{w})$.
    
- **Scalar Multiplication:** $(\lambda \vec{v}) \times \vec{w} = \vec{v} \times (\lambda \vec{w}) = \lambda (\vec{v} \times \vec{w})$.
    

## 5.5. Geometrische Anwendungen (Geometric Applications)

- **Normalenvektor einer Ebene (Plane Normal Vector):** Given three non-collinear points $A, B, C$, the vector $\vec{n}_E = \vec{AB} \times \vec{AC}$ is normal to the plane containing them 109. This allows easy derivation of the plane's coordinate equation $n_1 x + n_2 y + n_3 z + d = 0$ 110.
    
- **Flächeninhalt (Area):**
    
    - Area of parallelogram spanned by $\vec{v}, \vec{w}$: $A_{para} = ||\vec{v} \times \vec{w}||$111111111111.
        
    - Area of triangle $ABC$: $A_{\triangle} = \frac{1}{2} ||\vec{AB} \times \vec{AC}||$ 112112112112.
        
- Abstand Punkt-Gerade in $\mathbb{R}^3$ (Distance Point-Line in $\mathbb{R}^3$): The distance $x$ from a point $P$ to a line $g$ (given by point $Q$ and direction $\vec{r}_g$) is the height of the parallelogram spanned by $\vec{QP}$ and $\vec{r}_g$ 113113113113.
    
    $$x = \frac{\text{Area of Parallelogram}}{\text{Base Length}} = \frac{||\vec{QP} \times \vec{r}_g||}{||\vec{r}_g||}$$
    
    114