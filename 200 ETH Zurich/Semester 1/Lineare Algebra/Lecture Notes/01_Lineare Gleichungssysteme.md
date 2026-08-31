# 1.1 Motivation, Vektoren, Matrizen

## What are vectors?
well in highschool you obviously heard about functions (linear functions, non linear functions, and so on ) and so on functions where introduced to us in the beginning as a way to graphically represent data. The example usually was if Person1 sells 1,2,3,4,5 apples at a fixed price per apple what would his totall earnings be? and then we represented that as a linear function where we could read the x-Amounts of apples for the y-Amount of profit. And as everyone knows these functions pretty quickly turned into a headache with function analysis linear functions non linear functions continous functions non continous functions first order derivatives second order derivatives and so on... But the core of the problem which was our first introduction to functions was a way to **better represent data**  since tables didnt really give us that much information.


Well linking that to vectors the core problems vectors solve for us is a **representation of data with a fixed direction** there are many examples but the first one that comes to my mind are Force vectors how to represent a force that is pu


# 1.2 Gauss-Elimination
# 1.3 Operationen mit Matrizen
# 1.4 Inverse einer Matrix
# 1.5 Ausrechnen der Inverse
# 1.6 LU-Zerlegung
# 1.7 Orthogonale Matrizen
# 1.8 QR-Zerlegung via orthogonale Transformationen



# Kapitel 1 — Lineare Gleichungssysteme

> [!abstract] The whole chapter in one breath
> Everything here is one idea repeated: **a matrix times a vector is a linear combination of the matrix's columns**. Solving $A\mathbf{x} = \mathbf{b}$ means asking "which mix of the columns of $A$ gives me $\mathbf{b}$?" Gauss elimination answers that question; LU and QR are just bookkeeping so you don't have to answer it again for a new $\mathbf{b}$.

## Vocabulary (German ↔ English)

| Deutsch | English | plain words |
|---|---|---|
| Lineares Gleichungssystem (LGS) | linear system | several equations, all true at once |
| Koeffizientenmatrix | coefficient matrix | the numbers in front of the unknowns |
| rechte Seite | right-hand side | the $\mathbf{b}$ you're trying to hit |
| Lineare Kombination | linear combination | stretch some vectors, add them up |
| Zeilenstufenform (ZSF) | row echelon form | staircase of zeros below the pivots |
| Pivot | pivot | first non-zero in a row after elimination |
| Rang $r$ | rank | how many pivots you end up with |
| freie Variable | free variable | a column with no pivot → you may pick it |
| Kompatibilitätsbedingung (KB) | compatibility condition | a `0 = something` row; decides "solvable or not" |
| Rücksubstitution | back-substitution | solve bottom row, plug upward |
| regulär / singulär | regular (invertible) / singular | full rank / not full rank |
| Protokollmatrix | bookkeeping matrix | records the multipliers → becomes $L$ |
| Zerlegung | decomposition / factorisation | writing $A$ as a product |

---

## 1.1 Motivation, Vektoren, Matrizen — *pp. 5–14*

### The build-up

A vector in $\mathbb{R}^2$ is a list of coordinates, and it's automatically a **linear combination** of the standard basis:

$$\mathbf{x}=\begin{bmatrix}x_1\\\\x_2\end{bmatrix}=x_1\begin{bmatrix}1\\\\0\end{bmatrix}+x_2\begin{bmatrix}0\\\\1\end{bmatrix}=x_1\mathbf{e}_1+x_2\mathbf{e}_2$$

Same in $\mathbb{R}^3$, same in $\mathbb{R}^n$, same over $\mathbb{C}$ instead of $\mathbb{R}$.

> [!note] Def. 1.1.0.1 — Lineare Kombination
> A sum of scaled vectors: $\lambda_1\mathbf{v}_1+\dots+\lambda_n\mathbf{v}_n$ with scalars $\lambda_i$.
> *Plain words:* stretch or squash each arrow, then lay them head to tail.

> [!note] Def. 1.1.0.2 — Standardbasis (kanonische Basis)
> $\mathbf{e}_1,\dots,\mathbf{e}_n$: each has a single $1$, rest zeros. They lie on the coordinate axes.

### From linear combination to matrix

Take three column vectors $\mathbf{a}_1,\mathbf{a}_2,\mathbf{a}_3$ and combine them: $\mathbf{b}=x_1\mathbf{a}_1+x_2\mathbf{a}_2+x_3\mathbf{a}_3$. Write it out and you get a system of equations. Pack the columns side by side and you have invented the matrix:

$$\underbrace{\begin{bmatrix}a_{11}&a_{12}&a_{13}\\\\a_{21}&a_{22}&a_{23}\\\\a_{31}&a_{32}&a_{33}\end{bmatrix}}_{A}\begin{bmatrix}x_1\\\\x_2\\\\x_3\end{bmatrix}=\begin{bmatrix}b_1\\\\b_2\\\\b_3\end{bmatrix}\qquad\Longleftrightarrow\qquad A\mathbf{x}=\mathbf{b}$$

> [!note] Def. 1.1.0.4 / 1.1.0.6 — LGS und Matrix·Vektor
> $A\mathbf{x}=\mathbf{b}$ with $A$ the **Koeffizientenmatrix**, $\mathbf{x}$ the unknown, $\mathbf{b}$ the right-hand side.
> **$A\mathbf{x}$ is the linear combination of the *columns* of $A$ with the coefficients from $\mathbf{x}$:**
> $$A\mathbf{x}=x_1\mathbf{a}_1+x_2\mathbf{a}_2+\dots+x_n\mathbf{a}_n$$
> Only possible when $A$ has exactly as many **columns** as $\mathbf{x}$ has entries.

> [!tip] Why the "weird" definition of matrix×vector
> It isn't arbitrary. It is exactly what falls out of writing a linear combination compactly. This is also why every physical theory with a superposition principle ends up using matrices (Bem. 1.1.0.5).

### Row view vs column view

Same product, two readings — you need both:

- **Column view:** $A\mathbf{x}$ = mix of columns. → answers *"is $\mathbf{b}$ reachable?"*
- **Row view:** entry $b_i = \sum_j a_{ij}x_j$ = row $i$ dotted with $\mathbf{x}$. → the handy scheme for computing by hand.

---

### Examples — §1.1

> [!example] LAVG Bsp. 1.1.0.7 — Elimination reveals the inverse
> $$A=\begin{bmatrix}1&0&0\\\\-1&1&0\\\\0&1&1\end{bmatrix},\qquad A\mathbf{x}=\mathbf{b}$$
> Eliminate with symbolic $\mathbf{b}$ (add row 1 to row 2, then subtract row 2 from row 3):
> $$\begin{bmatrix}1&0&0\\\\0&1&0\\\\0&0&1\end{bmatrix}\mathbf{x}=\begin{bmatrix}b_1\\\\b_1+b_2\\\\-b_1-b_2+b_3\end{bmatrix}\;\Longrightarrow\;\mathbf{x}=\underbrace{\begin{bmatrix}1&0&0\\\\1&1&0\\\\-1&-1&1\end{bmatrix}}_{A^{-1}}\mathbf{b}$$
> The matrix that appears **is** $A^{-1}$: $A\mathbf{x}=\mathbf{b}\iff\mathbf{x}=A^{-1}\mathbf{b}$.
> With $\mathbf{b}=(1,1,1)^\top$: $\mathbf{x}=A^{-1}\mathbf{b}=(1,\,\,-1)^\top$.
> Two questions answered without proof (for now): *always a solution?* yes, for **this** $A$. *does every $A$ have an inverse?* **No.**

> [!example] LAVG Bsp. 1.1.0.8 — Dependent columns → 0 or ∞ solutions
> Three forces $\mathbf{c}_1=\mathbf{a}_1$, $\mathbf{c}_2=\mathbf{a}_2$, $\mathbf{c}_3=\mathbf{a}_1+\mathbf{a}_2$. The third is already a combination of the first two, so all three lie in **one plane**.
> $$A=\begin{bmatrix}1&0&1\\\\-1&1&0\\\\0&1&1\end{bmatrix}\;\xrightarrow{\text{elimination}}\;\begin{bmatrix}1&0&1\\\\0&1&1\\\\0&0&0\end{bmatrix}\mathbf{x}=\begin{bmatrix}b_1\\\\b_1+b_2\\\\-b_1-b_2+b_3\end{bmatrix}$$
> Last row reads $0=-b_1-b_2+b_3$. That is the **Kompatibilitätsbedingung**:
> - $-b_1-b_2+b_3\neq0$ → **no solution** ($\mathbf{b}$ is off the plane)
> - $-b_1-b_2+b_3=0$ → **infinitely many**, $x_3$ free, $x_2=b_1+b_2-x_3$, $x_1=b_1-x_3$
>
> *Geometric read:* the KB describes a 2D plane inside 3D space. $\mathbf{b}$ must lie in it.

> [!example] LAVG Bsp. 1.1.0.10 — KB with actual numbers
> Same $A$. With $\mathbf{b}=(-1,-1,1)^\top$: KB gives $-(-1)-(-1)+1$ … evaluate the condition $-b_1-b_2+b_3$: for $\mathbf{b}=(1,1,1)^\top$ it is $-1-1+1=-1\neq0$ → **no solution**.
> For $\mathbf{b}'=(1,1,2)^\top$: $-1-1+2=0$ → **satisfied**, so infinitely many solutions
> $$x_1=1-x_3,\qquad x_2=2-x_3,\qquad x_3\ \text{beliebig}$$

> [!example] Zardini Bsp. 1 & 2 — the two notations
> Explicit: $x_1+x_2=0$, $2x_1-3x_2=2$. Matrix form: $A=\begin{bmatrix}1&1\\\\2&-3\end{bmatrix}$, $\mathbf{b}=\begin{bmatrix}0\\\\2\end{bmatrix}$.
> *Zardini's remark:* in Linear Algebra we care about the **matrix form**, because that's what lets us solve.

> [!warning] Bem. 1.1.0.9 — the thing everyone forgets
> Elimination only ever forms **linear combinations of rows**. So if you end up with a row `0 = 0`, that original equation was a linear combination of the others — it carried no new information and could have been dropped from the start. But you may **not** drop it if the right-hand side isn't 0, because then it tells you there is *no* solution.

---

## 1.2 Gauss-Elimination — *pp. 15–27*

### Goal

Turn $A\mathbf{x}=\mathbf{b}$ into $U\mathbf{x}=\mathbf{c}$ where $U$ has only zeros below the main diagonal, then read off the answer by **Rücksubstitution** (bottom row first, substitute upward).

### Allowed row operations (PVK §3.2)

1. Swap two rows.
2. Multiply a row by a non-zero scalar.
3. Add a multiple of one row to another row.

These **never change the solution set**.

### The algorithm with Protokollmatrix (LAVG §1.2)

For each column $j = 1,2,\dots,n$:

1. Look at $a_{jj}$.
2. If $a_{jj}=0$:
	- all entries below are also 0 → mark column $j$ as a **free variable**, move to next column;
	- some $a_{ij}\neq0$ below → **swap** rows $j$ and $i$. Now $a_{jj}\neq0$ is the **Pivot**.
3. For each row $i$ below, add $-\dfrac{a_{ij}}{a_{jj}}$ times row $j$. Entries below the pivot become 0.
4. Recurse on the smaller remaining system.

Alongside, carry a **Protokollmatrix** starting as $I$. At position $(i,j)$ you write $+\dfrac{a_{ij}}{a_{jj}}$ — i.e. the multiplier **with flipped sign**. It ends up as $L$, a lower triangular matrix with 1s on the diagonal.

> [!warning] Sign trap
> You *subtract* $\frac{a_{ij}}{a_{jj}}\times$(pivot row); you *store* $+\frac{a_{ij}}{a_{jj}}$ in $L$. Zardini forces this by writing every step as `II − 3·I` and never `II + (−3)·I` — do the same and you will never lose a sign.

### The four matrix shapes (Def. 1.2.0.1–1.2.0.4)

| Name | Shape | Symbol |
|---|---|---|
| Obere Dreiecksmatrix | zeros **below** the diagonal | $U$ (upper) or $R$ (rechts) |
| Untere Dreiecksmatrix | zeros **above** the diagonal | $L$ (lower / links) |
| Diagonalmatrix | only the diagonal | $D$; special case $I$ |
| Tridiagonalmatrix | diagonal + the two neighbouring diagonals | — |

### Zeilenstufenform, Rang, and the counting rule

After elimination an $m\times n$ matrix looks like a staircase. Let $r$ = number of pivots.

> [!note] Def. 1.2.0.6 — Rang
> $\mathrm{Rang}(A)=r$ = number of pivots after Gauss elimination.

Then, always:

| Count | How many | Meaning |
|---|---|---|
| Pivot columns | $r$ | the "essential" columns |
| Free variables | $n-r$ | columns without a pivot |
| Compatibility conditions | $m-r$ | zero rows: $0=c_{r+1},\dots=c_m$ |

And $r\le m$, $r\le n$, so $r\le\min\{m,n\}$ (Bem. 1.2.0.10).

> [!tip] What the rank really means (Bem. 1.2.0.7–1.2.0.13)
> - Rows belonging to KBs are linear combinations of the other $r$ rows.
> - Non-pivot columns are linear combinations of the earlier pivot columns.
> - Therefore $r$ is a property of **the whole matrix**, not of rows or columns separately.

### Decision table — does it have solutions? (Bem. 1.2.0.18–19, Satz 1.2.0.20)

| Situation | KBs? | Free vars? | Result |
|---|---|---|---|
| $r=m=n$ | none | none | **exactly one** solution, for every $\mathbf{b}$ |
| $r=m<n$ | none | $n-r$ | **infinitely many**, for every $\mathbf{b}$ |
| $r<m$, KBs satisfied, $r=n$ | yes ✓ | none | **exactly one** |
| $r<m$, KBs satisfied, $r<n$ | yes ✓ | $n-r$ | **infinitely many** |
| $r<m$, KBs violated | yes ✗ | — | **no solution** |

> [!note] Satz 1.2.0.20
> If a solution exists, it is **unique** $\iff r=n$.

*(PVK §3.4 draws exactly this as a flowchart: LGS in ZSF → is $r=n$ or $r<n$? → check KBs → four leaves: eindeutig / keine / unendlich viele / keine.)*

### Homogeneous systems (Def. 1.2.0.21, Bem. 1.2.0.22)

$A\mathbf{x}=\mathbf{0}$. Always has the **trivial solution** $\mathbf{x}=\mathbf{0}$.
Non-trivial solutions exist $\iff r<n$ (because then there are free variables).

### Äquivalenzschema quadratischer Matrizen (Bem. 1.2.0.23) — memorise this

| $A\in\mathbb{R}^{n\times n}$ **regulär** (voller Rang) | $A\in\mathbb{R}^{n\times n}$ **singulär** |
|---|---|
| $\mathrm{Rang}(A)=n$ | $\mathrm{Rang}(A)<n$ |
| for every $\mathbf{b}$: at least one solution | for some $\mathbf{b}$: no solution |
| for every $\mathbf{b}$: exactly one solution | for no $\mathbf{b}$: a unique solution |
| $A\mathbf{x}=\mathbf{0}$ has only $\mathbf{x}=\mathbf{0}$ | $A\mathbf{x}=\mathbf{0}$ has non-trivial solutions |

---

### Examples — §1.2

> [!example] LAVG intro example (p. 15) — the full Protokollmatrix run
> $$A=\begin{bmatrix}1&1&0\\\\2&1&-1\\\\3&-1&-1\end{bmatrix},\quad \mathbf{b}=\begin{bmatrix}4\\\\1\\\\-3\end{bmatrix}$$
> `II − 2·I`, `III − 3·I`, then `III − 4·II`:
> $$L=\begin{bmatrix}1&0&0\\\\2&1&0\\\\3&4&1\end{bmatrix},\qquad U=\begin{bmatrix}1&1&0\\\\0&-1&-1\\\\0&0&3\end{bmatrix},\qquad \mathbf{c}=\begin{bmatrix}4\\\\-7\\\\13\end{bmatrix}$$
> Back-substitution: $x_3=\frac{13}{3},\; x_2=\frac{8}{3},\; x_1=\frac{4}{3}$.
> Note $L$ has 1s on the diagonal and zeros above — the multipliers $2,3,4$ sit exactly where the zeros were created.

> [!example] LAVG Bsp. 1.2.0.14 — rank 2, one KB
> $$A=\begin{bmatrix}1&2&-1\\\\2&-1&3\\\\-3&-1&-2\end{bmatrix}\xrightarrow{\text{II}-2\text{I},\ \text{III}+3\text{I},\ \text{III}+\text{II}}U=\begin{bmatrix}1&2&-1\\\\0&-5&5\\\\0&0&0\end{bmatrix},\quad L=\begin{bmatrix}1&0&0\\\\2&1&0\\\\-3&-1&1\end{bmatrix}$$
> $r=2$, pivots $1$ and $-5$. Free variable $x_3$. **KB:** $b_1+b_2+b_3=0$.
> Row 3 of the original is a combination of rows 1–2; column 3 is a combination of columns 1–2.

> [!example] LAVG Bsp. 1.2.0.15 — a free variable *in the middle*, and where $l_{32}$ goes
> $$A=\begin{bmatrix}2&-1&2\\\\4&-2&2\\\\8&-4&6\end{bmatrix}\xrightarrow{\ }U=\begin{bmatrix}2&-1&2\\\\0&0&-2\\\\0&0&0\end{bmatrix},\quad L=\begin{bmatrix}1&0&0\\\\2&1&0\\\\4&1&1\end{bmatrix}$$
> $r=2$, pivots $2$ and $-2$, **free variable is $x_2$** (column 2 has no pivot), **KB:** $-2b_1-b_2+b_3=0$.
> ⚠️ The multiplier $l_{32}=a^{(1)}_{33}/a^{(1)}_{23}=1$ still goes into **column 2** of $L$ — the column index follows the *elimination step number*, not the pivot's column. This is the single most common bookkeeping mistake in the chapter.
> Also: column 2 of $A$ is exactly $-0.5\times$ column 1.

> [!example] LAVG Bsp. 1.2.0.16 — $5\times5$ with a parameter $s$ and a row swap
> Start (augmented, bar = right-hand side):
> $$\left[\begin{array}{ccccc\vert c}2&-1&3&-1&1&-2\\\\2&-1&3&0&-1&-3\\\\-4&2&-4&5&-5&3\\\\0&0&-2&2&-7&-5+s\\\\-2&1&-1&0&4&5\end{array}\right]\longrightarrow U=\left[\begin{array}{ccccc\vert c}2&-1&3&-1&1&-2\\\\0&0&2&3&-3&-1\\\\0&0&0&1&-2&-1\\\\0&0&0&0&0&-1+s\\\\0&0&0&0&0&0\end{array}\right]$$
> $r=3$, pivots $2,2,1$; free variables $x_2$ and $x_5$; two KBs (rows 4 & 5), one of which is $0=-1+s$.
> - $s\neq1$ → **no solution**
> - $s=1$ → **infinitely many**, with $x_2,x_5$ free:
> $$x_1=-3+\tfrac{1}{2}x_2+\tfrac{11}{2}x_5,\quad x_2\ \text{frei},\quad x_3=1-\tfrac{3}{2}x_5,\quad x_4=-1+2x_5,\quad x_5\ \text{frei}$$
> A **row swap** was needed (rows 2↔3, to get a pivot into position (2,3)); the same swap must be done in $L$ — everything **except** the diagonal.

> [!example] LAVG Bsp. 1.2.0.17 — $7\times9$, reading the structure off $U$
> After elimination:
> $$U=\begin{bmatrix}1&0&5&0&4&0&0&1&0\\\\0&5&4&3&2&1&0&0&0\\\\0&0&0&5&0&4&3&0&2\\\\0&0&0&0&0&5&3&2&1\\\\0&0&0&0&0&0&1&0&0\\\\0&0&0&0&0&0&0&0&0\\\\0&0&0&0&0&0&0&0&0\end{bmatrix}$$
> $r=5$; pivots in columns **1, 2, 4, 6, 7**; $m-r=2$ KBs; $n-r=4$ free variables in columns **3, 5, 8, 9**.
> Reading off: col. 3 is a combination of cols. 1–2; col. 5 of cols. 1, 2, 4; the last two of cols. 1, 2, 4, 6, 7. The last two rows of the original are combinations of the first five.
> *(The script runs this one out step by step with three row swaps, chosen to keep the numbers small — worth doing once by hand.)*

> [!example] Zardini Bsp. 3 — eindeutige Lösung
> $$\left[\begin{array}{ccc\vert c}1&-1&2&0\\\\-2&1&-6&0\\\\1&0&-2&3\end{array}\right]\xrightarrow{\text{II}+2\text{I},\ \text{III}-\text{I}}\left[\begin{array}{ccc\vert c}1&-1&2&0\\\\0&-1&-2&0\\\\0&1&-4&3\end{array}\right]\xrightarrow{\text{III}+\text{II}}\left[\begin{array}{ccc\vert c}1&-1&2&0\\\\0&-1&-2&0\\\\0&0&-6&3\end{array}\right]$$
> $$x_3=-\tfrac12,\qquad x_2=1,\qquad x_1=2$$

> [!example] Zardini Bsp. 4 — unendlich viele Lösungen
> $$A=\begin{bmatrix}1&2&1\\\\2&5&4\\\\2&6&6\end{bmatrix},\ \mathbf{b}=\begin{bmatrix}0\\\\1\\\\2\end{bmatrix}\ \longrightarrow\ \left[\begin{array}{ccc\vert c}1&2&1&0\\\\0&1&2&1\\\\0&0&0&0\end{array}\right]$$
> Introduce a parameter $x_3=t$: $\;x_2=1-2t,\;x_1=3t-2$.

> [!example] Zardini Bsp. 9 — unsolvable
> $\left[\begin{array}{ccc\vert c}1&2&3&7\\\\0&4&5&8\\\\0&0&0&9\end{array}\right]$ — last row says $0\cdot x_3=9$. Never true → **unlösbar**.

> [!example] Zardini Bsp. 10 — Gauss for **dimensional analysis** (nice applied one)
> $[n]=\mathrm{cm}^{-3}$, $[\rho]=\mathrm{g\cdot cm^{-3}}$, $[N_A]=\mathrm{mol}^{-1}$, $[M]=\mathrm{g\cdot mol^{-1}}$, ansatz $n=\rho^{a}M^{b}N_A^{c}$.
> Matching exponents gives the LGS $\left[\begin{array}{ccc\vert c}0&1&1&0\\\\1&1&0&0\\\\0&0&-1&-1\end{array}\right]$ → $a=1,\ b=-1,\ c=1$, i.e. $n=\dfrac{\rho N_A}{M}$.
> *(Zardini's note: this trick shows up again in Fluiddynamik I.)*

> [!example] Zardini Bsp. 11 — **Fallunterscheidung** with a parameter (classic exam type)
> $$\begin{bmatrix}1&a&a^2\\\\a&1&a^2\\\\a^2&a&1\end{bmatrix}\mathbf{x}=\begin{bmatrix}2\\\\2\\\\2\end{bmatrix}\ \longrightarrow\ \left[\begin{array}{ccc\vert c}1&a&a^{2}&2\\\\0&1-a^{2}&a^{2}(1-a)&2(1-a)\\\\0&0&1-a^{3}&2(1-a)\end{array}\right]$$
> - $a=0$: $\mathbf{x}=(2,2,2)^\top$
> - $a=1$: two free parameters, $\mathbf{x}=(2-t-u,\ u,\ t)^\top$
> - $a=-1$: one free parameter, $\mathbf{x}=(s,\,s,\)^\top$ *(after back-substitution with $x_3=2$)*
> - $a\notin\{-1,1\}$: unique, $x_1=x_2=x_3=\dfrac{2}{a^2+a+1}$
>
> **Method to copy:** never divide by an expression before checking whether it can be zero. Split cases *while* eliminating, not after.

> [!example] Zardini Bsp. 12 — rank as a function of two parameters
> $$A=\begin{bmatrix}1&0&5\\\\-4&4-8b&-20\\\\1&8b-4&a+9\end{bmatrix},\quad \mathbf{x}=(1,-4,3)^\top\stackrel{?}{\in}\operatorname{Bild}(A)$$
> Elimination gives $\left[\begin{array}{ccc\vert c}1&0&5&1\\\\0&4-8b&0&0\\\\0&0&a+4&-2\end{array}\right]$.
> Solvable $\iff a+4\neq0$, i.e. $a\neq-4$. The term $4-8b$ is **not** a problem: even when it vanishes the KB stays satisfied.
> $$\mathrm{Rang}(A)=3\iff a\neq-4\ \text{und}\ b\neq\tfrac12;\qquad =2\iff a=-4\ \text{oder}\ b=\tfrac12;\qquad =1\iff a=-4\ \text{und}\ b=\tfrac12$$

> [!example] PVK §3.2 — Übung: Gaussverfahren
> $$2x_1+x_2-x_3=1,\qquad 4x_1-6x_2=-2,\qquad -2x_1+7x_2+2x_3=9$$
> `II − 2·I` → $[0,-8,2\mid-4]$; `III + I` → $[0,8,1\mid10]$; `III + II` → $[0,0,3\mid6]$.
> $$\boxed{x_3=2,\quad x_2=1,\quad x_1=1}$$

> [!example] PVK §4.1 — Probeprüfung 2, Aufgabe 1 (homogeneous-systems chapter)
> $$-z+y+2x+w=5,\quad 4z-2y+3x-w=-3,\quad z+y+x+w=6,\quad z-y+x-2w=2$$
> Order the unknowns $(x,y,z,w)$, use the third equation as the first pivot row (its $x$-coefficient is 1 → easier numbers). Result:
> $$\boxed{x=\tfrac{13}{11},\quad y=\tfrac{79}{11},\quad z=\tfrac{12}{11},\quad w=-\tfrac{38}{11}}$$
> Unique solution ⇒ $r=n=4$ ⇒ the matrix is **regulär**. (Ugly fractions are normal here; check by substituting back into equation 1.)

---

## 1.3 Operationen mit Matrizen — *pp. 28–35*

### Transponierte und Hermite-Transponierte

> [!note] Def. 1.3.0.1 / 1.3.0.2
> $A\in\mathbb{R}^{m\times n}$ → $A^\top\in\mathbb{R}^{n\times m}$ with $(A^\top)_{ij}=a_{ji}$. Rows become columns.
> $A\in\mathbb{C}^{m\times n}$ → $A^{H}\in\mathbb{C}^{n\times m}$: transpose **and** conjugate every entry ($\overline{x+iy}=x-iy$).
> *Plain words:* flip the matrix across its main diagonal.

$$A=\begin{bmatrix}1&3&5\\\\2&4&6\end{bmatrix}\Longrightarrow A^\top=\begin{bmatrix}1&2\\\\3&4\\\\5&6\end{bmatrix}$$

$$A=\begin{bmatrix}1+i&1+3i&1+5i\\\\1+2i&1+4i&1+6i\end{bmatrix}\Longrightarrow A^{H}=\begin{bmatrix}1-i&1-2i\\\\1-3i&1-4i\\\\1-5i&1-6i\end{bmatrix}$$

> [!note] Def. 1.3.0.3 — Symmetriearten
> **symmetrisch** $A^\top=A$ · **antisymmetrisch** $A^\top=-A$ (⇒ diagonal is 0) · **Hermite symmetrisch** $A^{H}=A$

$$\text{sym: }\begin{bmatrix}1&2\\\\2&5\end{bmatrix},\ \begin{bmatrix}2&3&1\\\\3&2&6\\\\1&6&2\end{bmatrix}\qquad\text{antisym: }\begin{bmatrix}0&1\\\\-1&0\end{bmatrix},\ \begin{bmatrix}0&a&5\\\\-a&0&4\\\\-5&-4&0\end{bmatrix}\qquad\text{herm: }\begin{bmatrix}1&1+i\\\\1-i&2\end{bmatrix}$$

### Addition and scalar multiplication

Entry-wise, both of them: $c_{ij}=a_{ij}+b_{ij}$ and $d_{ij}=\beta a_{ij}$.

**Satz 1.3.0.6:** $A+B=B+A$; $0+A=A$; $A+(-1)A=0$; associativity; $(A+B)^\top=A^\top+B^\top$.

### Matrixmultiplikation — where it comes from

Motivation (this is the good bit): you want to solve several systems with the **same** $A$ at once.
$$A\mathbf{x}^{(1)}=\mathbf{b}^{(1)},\ A\mathbf{x}^{(2)}=\mathbf{b}^{(2)},\dots\quad\Longrightarrow\quad A\underbrace{[\mathbf{x}^{(1)}\ \cdots\ \mathbf{x}^{(p)}]}_{X}=\underbrace{[\mathbf{b}^{(1)}\ \cdots\ \mathbf{b}^{(p)}]}_{B}$$
Gauss elimination depends **only on $A$**, so you do it once for all right-hand sides. That's the whole point.

> [!note] Def. 1.3.0.7 — Matrixmultiplikation
> $A\in\mathbb{R}^{m\times n}$, $X\in\mathbb{R}^{n\times p}$ → $AX\in\mathbb{R}^{m\times p}$, column by column: $(AX)_{:,j}=A\mathbf{x}^{(j)}$.
> Entry-wise: $\displaystyle b_{ij}=\sum_{k=1}^{n}a_{ik}x_{kj}$.
> **Dimensions must match:** (inner) columns of $A$ = rows of $X$. Result inherits rows from the left, columns from the right.

Three ways to see the same product (Bem. 1.3.0.15):
- built from **columns**: $AB=[A\mathbf{b}_1\ \cdots\ A\mathbf{b}_p]$
- built from **rows**: $AB=\begin{bmatrix}[A]_{1,:}B\\\\ \vdots\\\\ [A]_{m,:}B\end{bmatrix}$
- two special cases: result is a **scalar** → (Euclidean) inner product $\mathbf{x}^\top\mathbf{y}$; result is a **matrix** → outer product $\mathbf{x}\mathbf{y}^\top$, which always has **rank 1**

> [!note] Satz 1.3.0.17 — Rechenregeln
> 1. $(AB)C=A(BC)$ (associative)
> 2. $(A+B)C=AC+BC$ and $A(B+C)=AB+AC$ (distributive)
> 3. $(AB)^\top=B^\top A^\top$, $(AB)^{H}=B^{H}A^{H}$ — **order reverses**
> 4. $(ABC)^\top=C^\top B^\top A^\top$

> [!warning] Bem. 1.3.0.8 / 1.3.0.12 — two traps
> - An $m\times n$ matrix ($m\neq n$) **cannot** be multiplied by another $m\times n$ matrix.
> - $AB\neq BA$ in general. Matrix multiplication is **not commutative**. Matrices do not behave like numbers.

> [!note] Bem. 1.3.0.9 — rank of a product
> Every column of $AX$ is a combination of columns of $A$; every row of $AX$ is a combination of rows of $X$. Hence
> $$\mathrm{Rang}(AX)\le\min\{\mathrm{Rang}(A),\mathrm{Rang}(X)\}$$

### Structure matters — multiplying from left vs right

> [!tip] Bem. 1.3.0.10 / 1.3.0.11 — memorise the side rule
> **Diagonal matrix from the LEFT → scales the ROWS. From the RIGHT → scales the COLUMNS.**
> $$D A=\begin{bmatrix}d_1(A)_{1,:}\\\\\vdots\\\\d_n(A)_{n,:}\end{bmatrix},\qquad AD=\big[d_1(A)_{:}\ \cdots\ d_m(A)_{:,m}\big]$$
> Same for elimination matrices. With $E=\begin{bmatrix}1&0&0\\\\-2&1&0\\\\0&0&1\end{bmatrix}$:
> - $EA$ → "$-2\times$ row 1 added to row 2" (a **row** operation)
> - $AE$ → "$-2\times$ column 1 … " acts on **columns**: $\;a_{i1}-2a_{i2}$ appears in column 1
> - $AE^\top$ → column 1 times $-2$ added to column 2
>
> **Left = rows, right = columns.** This one line explains all of §1.6.

**Def. 1.3.0.14 — Potenzen:** $A^0=I$, $A^{k+1}=A^kA$.
**Bem. 1.3.0.13:** $AI=IA=A$ — $I$ is the neutral element.

> [!note] Bem. 1.3.0.18 — Blockweise Produkt
> You may multiply matrices in blocks with the ordinary $2\times2$ formula, **as long as you keep the order** (blocks don't commute):
> $$\begin{bmatrix}A_{11}&A_{12}\\\\A_{21}&A_{22}\end{bmatrix}\begin{bmatrix}B_{11}&B_{12}\\\\B_{21}&B_{22}\end{bmatrix}=\begin{bmatrix}A_{11}B_{11}+A_{12}B_{21}&A_{11}B_{12}+A_{12}B_{22}\\\\A_{21}B_{11}+A_{22}B_{21}&A_{21}B_{12}+A_{22}B_{22}\end{bmatrix}$$

---

### Examples — §1.3

> [!example] Zardini Bsp. 17 & 18 — transpose and symmetry
> $$\begin{bmatrix}1&2&3\\\\4&5&6\\\\7&8&9\end{bmatrix}^{\!\top}=\begin{bmatrix}1&4&7\\\\2&5&8\\\\3&6&9\end{bmatrix},\qquad \begin{bmatrix}1&2&3\\\\2&4&7\\\\3&7&10\end{bmatrix}^{\!\top}=\begin{bmatrix}1&2&3\\\\2&4&7\\\\3&7&10\end{bmatrix}\ \text{(symmetrisch)}$$

> [!example] Zardini Bsp. 19–22 — arithmetic drill
> Addition: $\begin{bmatrix}1&2&0\\\\6&7&8\end{bmatrix}+\begin{bmatrix}0&3&1\\\\2&4&6\end{bmatrix}=\begin{bmatrix}1&5&1\\\\8&11&14\end{bmatrix}$
> Scalar: $6\cdot\begin{bmatrix}1&2\\\\3&4\end{bmatrix}=\begin{bmatrix}6&12\\\\18&24\end{bmatrix}$
> Product $(2\times3)\cdot(3\times2)=(2\times2)$: $\begin{bmatrix}2&3&1\\\\1&3&2\end{bmatrix}\begin{bmatrix}1&5\\\\6&1\\\\1&3\end{bmatrix}=\begin{bmatrix}19&16\\\\15&4\end{bmatrix}$ … but $\begin{bmatrix}2&3&1\\\\1&3&2\end{bmatrix}\begin{bmatrix}1&5\\\\6&1\end{bmatrix}$ **does not exist** ($3\neq2$).

> [!example] Zardini Bsp. 13–16 — naming shapes
> $L=\begin{bmatrix}1&0&0\\\\6&7&0\\\\3&1&4\end{bmatrix}$ (untere Dreiecks), $R=\begin{bmatrix}6&7&8\\\\0&9&2\\\\0&0&3\end{bmatrix}$ (obere), $D=\mathrm{diag}(1,2,3)$, $I_3$; an $n\times1$ matrix is a Spaltenvektor, a $1\times n$ a Zeilenvektor.

---

## 1.4 Inverse einer Matrix — *pp. 36–38*

> [!note] Def. 1.4.0.1 / 1.4.0.5
> Only defined for **square** matrices. $X$ is the inverse of $A$ ($n\times n$) if $AX=I$. Then $A$ is called **invertierbar**.

The key reformulation: $AX=I\iff A\mathbf{x}_1=\mathbf{e}_1,\ A\mathbf{x}_2=\mathbf{e}_2,\dots,A\mathbf{x}_n=\mathbf{e}_n$.
So **column $i$ of $A^{-1}$ is the solution of $A\mathbf{x}=\mathbf{e}_i$.** Computing an inverse = solving $n$ systems at once.

> [!note] Satz 1.4.0.4 — Existenz und Eindeutigkeit
> $A$ has an inverse $\iff \mathrm{Rang}(A)=n$ (i.e. $A$ is regulär). The inverse is **unique**.
>
> *Sketch, both directions:*
> (⇒, Bem. 1.4.0.2) If $X$ exists, set $\mathbf{x}=X\mathbf{b}$; then $A\mathbf{x}=(AX)\mathbf{b}=\mathbf{b}$, so every $\mathbf{b}$ has a solution and by the Äquivalenzschema $r=n$.
> (⇐, Bem. 1.4.0.3) If $r=n$, each $A\mathbf{y}_i=\mathbf{e}_i$ has a unique solution; stack the $\mathbf{y}_i$ as columns of $Y$ and $AY=I$.

> [!note] Bem. 1.4.0.6 — synonyms
> For square matrices, **regulär = invertierbar = voller Rang**. Interchangeable words for one property.

> [!note] Satz 1.4.0.7 — Eigenschaften der Inverse
> 1. $AA^{-1}=I\Rightarrow A^{-1}A=I$
> 2. $(A^{-1})^{-1}=A$
> 3. $I^{-1}=I$
> 4. $(AB)^{-1}=B^{-1}A^{-1}$ ← **order reverses**, same as transpose
> 5. $(A^\top)^{-1}=(A^{-1})^\top$
>
> Proof of 4 is the one-liner worth remembering: $(AB)(B^{-1}A^{-1})=A(BB^{-1})A^{-1}=AA^{-1}=I$.

> [!note] Satz 1.4.0.8 — Kriterien (equivalent statements)
> For $A\in\mathbb{R}^{n\times n}$, all equivalent:
> 6. $A$ invertierbar 2. $\mathrm{Rang}(A)=n$ 3. $A\mathbf{x}=\mathbf{b}$ solvable for all $\mathbf{b}$ 4. $A\mathbf{x}=\mathbf{0}$ has only $\mathbf{x}=\mathbf{0}$
> *(PVK §6.5 adds a fifth: $\det A\neq0$.)*

### Examples — §1.4

> [!example] Zardini Bsp. 24 — for which parameters is $B$ singular?
> $$B=\begin{bmatrix}1&2&\alpha\\\\2&\beta&2\alpha\\\\\alpha&2\alpha&\beta^{2}\end{bmatrix}\ \xrightarrow{\ \text{II}-2\text{I},\ \text{III}-\alpha\text{I}\ }\ \begin{bmatrix}1&2&\alpha\\\\0&\beta-4&0\\\\0&0&\beta^{2}-\alpha^{2}\end{bmatrix}$$
> Singular $\iff \mathrm{Rang}(B)<3\iff \beta=4$ **or** $\beta=\pm\alpha$. And
> $$\mathrm{Rang}(B)=\begin{cases}1,&\beta=4\ \text{und}\ \alpha=\pm\beta=\pm4\\\\2,&\beta=\pm\alpha,\ \beta\neq4\ \text{oder}\ \beta=4,\ \alpha\neq\pm\beta\\\\3,&\beta\neq\pm\alpha,\ \beta\neq4\end{cases}$$
> **Method:** "singulär?" is never a separate technique — it's always "bring to ZSF, count pivots".

---

## 1.5 Ausrechnen der Inverse (Gauss-Jordan) — *pp. 39–41*

> [!tip] Kochrezept (LAVG §1.5 = PVK §6.1 = Zardini §2.5.1)
> 1. Write the augmented block $\big[\,A\mid I\,\big]$.
> 2. Run Gauss elimination on the left block — **applying every operation to both blocks**.
> 3. Keep going **upward** too (that's the "Jordan" part): eliminate above the pivots as well.
> 4. Divide each row by its pivot so the diagonal becomes 1.
> 5. You end with $\big[\,I\mid A^{-1}\,\big]$.

**Why it works (PVK §6.2):** every row operation is a left-multiplication by an elementary matrix $E_i$. After $k$ steps: $E_k\cdots E_1A=I$, hence $E_k\cdots E_1=A^{-1}$. The right block starts at $I$ and accumulates exactly $E_k\cdots E_1$ — so it *becomes* the inverse. The right block is a passenger that records the trip.

> [!note] Def. 1.5.0.3 + Bem. 1.5.0.2/1.5.0.4 — Determinante, practically
> **The determinant is the product of the diagonal entries (pivots) after Gauss elimination.**
> $\det A\neq0\iff A$ invertierbar $\iff \mathrm{Rang}(A)=n$.
> This is not the usual textbook definition, but it is how determinants are actually computed for large matrices. (Full treatment later in the course.)

> [!warning] When *not* to compute an inverse (p. 41)
> $A\mathbf{x}=\mathbf{b}\Rightarrow \mathbf{x}=A^{-1}\mathbf{b}$ is true but wasteful: computing $A^{-1}$ costs about $n\times$ solving one system. In practice one **never** inverts — one solves. The only exception: more than $n$ different right-hand sides with the same $A$.

### Examples — §1.5

> [!example] LAVG Bsp. 1.5.0.1 — tridiagonal $3\times3$
> $$A=\begin{bmatrix}2&-1&0\\\\-1&2&-1\\\\0&-1&2\end{bmatrix}\qquad\Longrightarrow\qquad A^{-1}=\frac{1}{4}\begin{bmatrix}3&2&1\\\\2&4&2\\\\1&2&3\end{bmatrix}$$
> Pivots along the way: $2,\ \tfrac32,\ \tfrac43$. Their product is $2\cdot\tfrac32\cdot\tfrac43=4$ — exactly the denominator in front of $A^{-1}$, **and** $\det A$. Not a coincidence.

> [!example] Zardini Bsp. 23 = PVK §6.1 Übung — same matrix in two documents
> $$A=\begin{bmatrix}1&-3&0\\\\-1&4&1\\\\2&-4&1\end{bmatrix}$$
> Elimination (`II+I`, `III−2I`, then `III−2II`) gives
> $$\left[\begin{array}{ccc\vert ccc}1&-3&0&1&0&0\\\\0&1&1&1&1&0\\\\0&0&-1&-4&-2&1\end{array}\right]$$
> Jordan phase (row 3 $\div(-1)$; `II − III`; `I + 3·II`):
> $$\boxed{A^{-1}=\begin{bmatrix}-8&-3&3\\\\-3&-1&1\\\\4&2&-1\end{bmatrix}}$$
> Check: $\det A=(2)(1)(-1)\cdot$… simply $\det A=-1$ (product of pivots $1\cdot1\cdot(-1)$), so entries stay integers.
> ✅ Verify by multiplying $AA^{-1}$ — always do this, it costs 30 seconds.

---

## 1.6 LU-Zerlegung — *pp. 42–51*

> [!note] Bem. 1.6.0.1 — the statement
> Gauss elimination **is** the LU decomposition.
> - without row swaps: $\;A=LU$
> - with row swaps: $\;PA=LU$, where $P$ is a **Permutationsmatrix**
>
> $L$ = the Protokollmatrix ($m\times m$, lower triangular, 1s on the diagonal); $U$ = the row-echelon result ($m\times n$).

> [!warning] Bem. 1.6.0.2 — software conventions differ
> NumPy's `lu` returns $P,L,U$ with $A=PLU$; MATLAB's returns $PA=LU$. The two $P$s are transposes of each other. Different implementations may also pick different permutations.

### Why bother — the cost argument (Bem. 1.6.0.3)

$$A\mathbf{x}=\mathbf{b}\ \xrightarrow{P\cdot}\ PA\mathbf{x}=P\mathbf{b}\ \Longrightarrow\ L\underbrace{U\mathbf{x}}_{\mathbf{y}}=P\mathbf{b}$$

| Step | Cost | Comment |
|---|---|---|
| apply $P$ | ~free | only pointers/indices move |
| factor $A=LU$ | $\mathcal{O}(n^3)$ | **the expensive part — done once** |
| solve $L\mathbf{y}=P\mathbf{b}$ (forward) | $\mathcal{O}(\tfrac12 n^2)$ | $L$ is triangular |
| solve $U\mathbf{x}=\mathbf{y}$ (backward) | $\mathcal{O}(\tfrac12 n^2)$ | $U$ is triangular |

New right-hand side later? Only the two cheap steps repeat. That is the entire selling point.

### The proof machinery: elimination matrices

> [!note] Def. 1.6.0.4 — Eliminationsmatrix $E_{ij}$
> $E_{ij}$ = identity with $l_{ij}$ placed at position $(i,j)$. Then $E_{ij}A$ performs "multiply row $j$ by $l_{ij}$ and add it to row $i$".
> $$E=\begin{bmatrix}1&0&0\\\\-2&1&0\\\\0&0&1\end{bmatrix}\Longrightarrow E\mathbf{b}=\begin{bmatrix}b_1\\\\-2b_1+b_2\\\\b_3\end{bmatrix}$$

> [!note] Bem. 1.6.0.5 — two rules
> 1. $E_{ij}^{-1}$ = same matrix with $l_{ij}\to-l_{ij}$. (Undo the operation.)
> 2. $E_{ij}E_{kr}$ = identity carrying *both* entries $l_{ij}$ and $l_{kr}$. (They just stack.)

**Proof of $A=LU$:** elimination is a chain $E_{n-1\,n-1}\cdots E_{31}E_{21}A=U$. Move every factor to the right by multiplying with its inverse:
$$A=E_{21}^{-1}E_{31}^{-1}\cdots E_{n-1\,n-1}^{-1}\,U=LU$$
and by rule 2 that product of inverses collapses into **one** lower triangular matrix — which is exactly the Protokollmatrix. ∎

> [!note] Bem. 1.6.0.6 — uniqueness
> Products and inverses of unit-lower-triangular matrices are again unit-lower-triangular (same for upper). From that: if $A=L_1R_1=L_2R_2$ then $L_1=L_2$ and $R_1=R_2$ — the LU decomposition **without permutations is unique**.

### Permutation matrices and how to slide them past $E_{ij}$

$P_{ij}$ = identity with rows $i,j$ swapped. Examples:
$$P_{13}=\begin{bmatrix}0&0&1\\\\0&1&0\\\\1&0&0\end{bmatrix},\quad P_{12}=\begin{bmatrix}0&1&0\\\\1&0&0\\\\0&0&1\end{bmatrix},\quad P_{23}=\begin{bmatrix}1&0&0\\\\0&0&1\\\\0&1&0\end{bmatrix}$$

- $P_{ij}^{-1}=P_{ij}^\top$, and for a single swap also $P_{ij}^\top=P_{ij}$, so $P_{ij}^{-1}=P_{ij}$.
- $P_{13}B$ swaps **rows** 1,3 of $B$; $BP_{13}$ swaps **columns** 1,3. (Left = rows, right = columns — again.)
- The trick that makes $PA=LU$ possible: $P_{23}E_{21}=E_{31}P_{23}$. A permutation slides past an elimination matrix, at the price of **renaming its indices**. That's why you re-order rows of $L$ (except the diagonal) when you swap rows of $A$.

### The other decompositions in this section

| Name | Form | Requires |
|---|---|---|
| **LU / LR** | $A=LU$ | no swaps needed |
| **PLU** | $PA=LU$ | general case |
| **LDU** | $A=LD\tilde U$, $D=\mathrm{diag}(d_i)$ from $U$, $\tilde U$ has 1s on the diagonal | all $d_i\neq0$, i.e. $\mathrm{Rang}(A)=n$ |
| **LDL$^\top$** | $A=LDL^\top$ | $A$ additionally **symmetric** |
| **Cholesky** | $A=R^\top R$ with $R=\sqrt{D}\,L^\top$ | symmetric **and** all pivots $d_i>0$ |

Cholesky exploits the symmetry and needs only **one third** of the operations of plain Gauss elimination. Heavily used in statistics, physics, numerics.

> [!note] Bem. 1.6.0.9 — Blockweise Gauss-Elimination & Schur complement
> Split a $2n\times2n$ matrix into $n\times n$ blocks. Eliminate $C$ by adding $-CA^{-1}\times$(block row 1) to block row 2 (needs $A$ invertible):
> $$\begin{bmatrix}I&0\\\\-CA^{-1}&I\end{bmatrix}\begin{bmatrix}A&B\\\\C&D\end{bmatrix}=\begin{bmatrix}A&B\\\\0&D-CA^{-1}B\end{bmatrix}$$
> $D-CA^{-1}B$ is the **Schur-Komplement**. Not used further in this course, but it reappears in Numerik.

---

### Examples — §1.6

> [!example] LAVG Bsp. 1.6.0.7 — LU **with** permutations, worked in matrix language
> $$A=\begin{bmatrix}0&2&1\\\\4&6&1\\\\2&3&4\end{bmatrix},\qquad \mathbf{b}=\begin{bmatrix}7\\\\19\\\\20\end{bmatrix}$$
> $a_{11}=0$, so swap rows 1 and 3: $P_{13}A=\begin{bmatrix}2&3&4\\\\4&6&1\\\\0&2&1\end{bmatrix}$.
> $E_{21}$ (subtract $2\times$ row 1 from row 2) gives $\begin{bmatrix}2&3&4\\\\0&0&-7\\\\0&2&1\end{bmatrix}$ — position $(2,2)$ became 0 too, so swap rows 2,3:
> $$P_{23}E_{21}P_{13}A=\begin{bmatrix}2&3&4\\\\0&2&1\\\\0&0&-7\end{bmatrix}=U$$
> To collect all $P$s together, slide: $P_{23}E_{21}=E_{31}P_{23}$. Hence
> $$E_{31}\underbrace{P_{23}P_{13}}_{P}A=U\ \Longrightarrow\ PA=\underbrace{E_{31}^{-1}}_{L}U\ \Longrightarrow\ PA=LU$$
> $$P=\begin{bmatrix}0&0&1\\\\1&0&0\\\\0&1&0\end{bmatrix},\qquad L=\begin{bmatrix}1&0&0\\\\0&1&0\\\\2&0&1\end{bmatrix},\qquad U=\begin{bmatrix}2&3&4\\\\0&2&1\\\\0&0&-7\end{bmatrix}$$

> [!example] LAVG §1.6 revisited — Bsp. 1.2.0.16 / 1.2.0.17 as matrix products
> The script re-reads the two big elimination examples in $E_{ij}(a)$ / $P_{ij}$ language. For 1.2.0.17 the swaps compose to $P=P_{45}P_{34}P_{23}$, i.e.
> $$P=\begin{bmatrix}1&0&0&0&0&0&0\\\\0&0&1&0&0&0&0\\\\0&0&0&1&0&0&0\\\\0&0&0&0&1&0&0\\\\0&1&0&0&0&0&0\\\\0&0&0&0&0&1&0\\\\0&0&0&0&0&0&1\end{bmatrix},\quad L=\begin{bmatrix}1&0&0&0&0&0&0\\\\1&1&0&0&0&0&0\\\\1&0&1&0&0&0&0\\\\0&1&3&1&0&0&0\\\\0&2&1&4&1&0&0\\\\1&2&3&2&1&1&0\\\\0&1&2&3&2&0&1\end{bmatrix}$$
> **Takeaway:** each `P·E = E'·P` slide is exactly the row swap you perform inside $L$ (leaving the diagonal alone).
> **Sparse form (Bem. 1.6.0.8):** the last $m-r$ columns of $L$ correspond to the $m-r$ zero rows (KBs) of $U$, so you may drop them — $L$ becomes $m\times r$, $U$ becomes $r\times n$.

> [!example] Zardini Bsp. 26 — LR **without** permutations, then solve
> $$A=\begin{bmatrix}2&-1&-3\\\\6&1&-10\\\\-2&-7&8\end{bmatrix},\qquad \mathbf{b}=\begin{bmatrix}1\\\\0\\\\2\end{bmatrix}$$
> `II − 3·I`, `III − (−1)·I`, then `III − (−2)·II`:
> $$R=\begin{bmatrix}2&-1&-3\\\\0&4&-1\\\\0&0&3\end{bmatrix},\qquad L=\begin{bmatrix}1&0&0\\\\3&1&0\\\\-1&-2&1\end{bmatrix},\qquad P=I$$
> Forward-solve $L\mathbf{c}=P\mathbf{b}$: $\mathbf{c}=(1,-3,-3)^\top$. Backward-solve $R\mathbf{x}=\mathbf{c}$:
> $$\mathbf{x}=\left(-\tfrac{3}{2},\,-1,\,-1\right)^{\!\top}$$

> [!example] Zardini Bsp. 27 — PLR **with** a permutation
> $$B=\begin{bmatrix}0&1&-3\\\\-3&7&6\\\\-3&-2&-2\end{bmatrix}\ \xrightarrow{\ I\leftrightarrow II\ }\ \begin{bmatrix}-3&7&6\\\\0&1&-3\\\\-3&-2&-2\end{bmatrix}\ \xrightarrow{\ III-1\cdot I\ }\ \begin{bmatrix}-3&7&6\\\\0&1&-3\\\\0&-9&-8\end{bmatrix}\ \xrightarrow{\ III-(-9)\cdot II\ }\ \begin{bmatrix}-3&7&6\\\\0&1&-3\\\\0&0&-35\end{bmatrix}$$
> $$R=\begin{bmatrix}-3&7&6\\\\0&1&-3\\\\0&0&-35\end{bmatrix},\qquad L=\begin{bmatrix}1&0&0\\\\0&1&0\\\\1&-9&1\end{bmatrix},\qquad P=\begin{bmatrix}0&1&0\\\\1&0&0\\\\0&0&1\end{bmatrix}$$

> [!example] Zardini Bsp. 28 — $4\times4$ LR with a parameter $a$
> $$A=\begin{bmatrix}2&1&-1&2\\\\4&7&3&9\\\\6&8&-1&9\\\\-2&-11&3-6a&-6+5a\end{bmatrix}\Longrightarrow R=\begin{bmatrix}2&1&-1&2\\\\0&5&5&5\\\\0&0&-3&-2\\\\0&0&0&6+a\end{bmatrix},\quad L=\begin{bmatrix}1&0&0&0\\\\2&1&0&0\\\\3&1&1&0\\\\-1&-2&-2a&1\end{bmatrix}$$
> No swaps ⇒ $P=I_4$. The parameter sits in the last pivot: $6+a$. So $A$ is singular exactly when $a=-6$.

> [!example] PVK §7.4 Übung — LU
> $$A=\begin{bmatrix}2&1&1\\\\4&3&3\\\\8&7&9\end{bmatrix}\Longrightarrow L=\begin{bmatrix}1&0&0\\\\2&1&0\\\\4&3&1\end{bmatrix},\qquad U=\begin{bmatrix}2&1&1\\\\0&1&1\\\\0&0&2\end{bmatrix}$$
> (Multipliers used: `II−2I`, `III−4I`, `III−3II`.)

> [!example] PVK §7.7 Übung — PLU
> $$A=\begin{bmatrix}0&2&1\\\\2&2&3\\\\4&4&7\end{bmatrix}\Longrightarrow P=\begin{bmatrix}0&1&0\\\\1&0&0\\\\0&0&1\end{bmatrix},\quad L=\begin{bmatrix}1&0&0\\\\0&1&0\\\\2&0&1\end{bmatrix},\quad U=\begin{bmatrix}2&2&3\\\\0&2&1\\\\0&0&1\end{bmatrix}$$
> Swap rows 1↔2 first (because $a_{11}=0$), then `III − 2·I`. Column 2 needs nothing.

> [!tip] PVK Schema — the layout that prevents mistakes
> **LU:** write $\big[\,I_n\mid A\,\big]$. Left block collects the multipliers (opposite sign) → $L$. Right block becomes $U$.
> **PLU:** write $\big[\,I_n\mid I_n\mid A\,\big]$. First block records swaps → $P$; second records multipliers → $L$; third becomes $U$.
> ⚠️ On a row swap: swap **whole rows** in $P$ and in $A$, but in the $L$-block swap **only the columns left of the diagonal** (the multipliers already entered) — the diagonal 1s stay put.

---

## 1.7 Orthogonale Matrizen — *pp. 52–59*

### Norm and inner product (simplified preview; full treatment in Kap. 4)

$$\|\mathbf{x}\|=\sqrt{x_1^2+\dots+x_n^2}\ \ (\mathbb{R}^n),\qquad \|\mathbf{x}\|=\sqrt{|x_1|^2+\dots+|x_n|^2}\ \ (\mathbb{C}^n)$$
$$\langle\mathbf{x},\mathbf{y}\rangle=x_1y_1+\dots+x_ny_n=\mathbf{x}^\top\mathbf{y}\ \ (\mathbb{R}^n),\qquad \langle\mathbf{x},\mathbf{y}\rangle=\mathbf{x}^{H}\mathbf{y}\ \ (\mathbb{C}^n)$$

Angle and Kosinussatz:
$$\sphericalangle(\mathbf{x},\mathbf{y})=\arccos\frac{\langle\mathbf{x},\mathbf{y}\rangle}{\|\mathbf{x}\|\,\|\mathbf{y}\|}\qquad\Longleftrightarrow\qquad \langle\mathbf{x},\mathbf{y}\rangle=\|\mathbf{x}\|\,\|\mathbf{y}\|\cos\sphericalangle(\mathbf{x},\mathbf{y})$$

Also $\|\mathbf{x}\|=\sqrt{\langle\mathbf{x},\mathbf{x}\rangle}$. That the quotient lies in $[-1,1]$ is the **Cauchy–Bunyakovsky–Schwarz** inequality (proved later).

> [!note] Def. 1.7.0.1 / 1.7.0.2 — orthogonal
> Vectors: $\mathbf{x}\perp\mathbf{y}\iff\langle\mathbf{x},\mathbf{y}\rangle=0$ (neither may be $\mathbf{0}$).
> Matrix: $A\in\mathbb{R}^{n\times n}$ is **orthogonal** if $A^\top A=I$; $A\in\mathbb{C}^{n\times n}$ is **unitär** if $A^{H}A=I$.
> *In words:* the columns are pairwise perpendicular **and** each has length 1 (orthonormal).

> [!note] Def. 1.7.0.4 — Matrix-Abbildung
> A matrix $A\in\mathbb{R}^{n\times n}$ defines a map $A:\mathbb{R}^n\to\mathbb{R}^n$, $\mathbf{x}\mapsto A\mathbf{x}$. "Matrix" and "its map" are used interchangeably.
> *(PVK §10 develops this properly: column $i$ of $A$ tells you where $\mathbf{e}_i$ lands, so $A=[A\mathbf{e}_1\ \cdots\ A\mathbf{e}_n]$, and $A\mathbf{x}=x_1(A\mathbf{e}_1)+\dots+x_n(A\mathbf{e}_n)$. Matrix multiplication = composing maps: $(BA)\mathbf{x}=B(A\mathbf{x})$.)*

> [!note] Satz 1.7.0.6 — Erhaltungssatz ⭐
> **Orthogonal matrices preserve lengths and angles.**
> Proof in three lines:
> $$\langle A\mathbf{x},A\mathbf{y}\rangle=(A\mathbf{x})^\top(A\mathbf{y})=\mathbf{x}^\top(A^\top A)\mathbf{y}=\mathbf{x}^\top\mathbf{y}=\langle\mathbf{x},\mathbf{y}\rangle$$
> $$\|A\mathbf{x}\|^2=\langle A\mathbf{x},A\mathbf{x}\rangle=\langle\mathbf{x},\mathbf{x}\rangle=\|\mathbf{x}\|^2\ \Rightarrow\ \|A\mathbf{x}\|=\|\mathbf{x}\|$$
> $$\sphericalangle(A\mathbf{x},A\mathbf{y})=\arccos\frac{\langle A\mathbf{x},A\mathbf{y}\rangle}{\|A\mathbf{x}\|\|A\mathbf{y}\|}=\arccos\frac{\langle\mathbf{x},\mathbf{y}\rangle}{\\|\mathbf{x}\|\|\mathbf{y}\|}=\sphericalangle(\mathbf{x},\mathbf{y})$$
> This is *the* reason QR is numerically stable — nothing gets stretched, so rounding errors don't accumulate.

> [!note] Satz 1.7.0.7 — Operationen
> For orthogonal $A,B$: (1) $A$ invertible with $A^{-1}=A^\top$ (2) $A^{-1}$ orthogonal (3) $AB$ orthogonal (4) $I$ orthogonal.
> Practical consequence: **inverting an orthogonal matrix costs nothing — just transpose it.**

### The three families of orthogonal matrices

1. **Permutationsmatrizen** — orthogonal since $PP^\top=I$ (Bsp. 1.7.0.8). Boring but useful.
2. **Drehmatrizen / Givens-Rotationen** — rotate.
3. **Householder-Matrizen** — reflect.

### Rotation

$$D(\varphi)=\begin{bmatrix}\cos\varphi&-\sin\varphi\\\\ \sin\varphi&\cos\varphi\end{bmatrix},\qquad D(\varphi)^\top=D(-\varphi)=D(\varphi)^{-1}$$

> [!note] Def. 1.7.0.10 — Givens Rotation
> $G(\varphi):=D(-\varphi)=\begin{bmatrix}\cos\varphi&\sin\varphi\\\\-\sin\varphi&\cos\varphi\end{bmatrix}$ — the "other direction" rotation, which is the one that zeroes entries.

In $n$ dimensions, $D_{ij}(\varphi)$ is the identity **except** in rows/columns $i$ and $j$, where the $2\times2$ rotation block sits. It rotates only inside the $x_i$–$x_j$ plane and leaves every other coordinate alone.

> [!tip] The zeroing formula — memorise
> To send the $j$-th component of $\mathbf{x}$ to zero using the $i$–$j$ plane:
> $$r=\sqrt{x_i^2+x_j^2},\qquad \cos\varphi=\frac{x_i}{r},\qquad \sin\varphi=\frac{x_j}{r}$$
> Result: $x_i\to r$, $x_j\to 0$, everything else unchanged.

### Reflection (Householder)

Given a plane with **unit** normal $\mathbf{u}$ ($\|\mathbf{u}\|=1$), the reflection of $\mathbf{x}$ is $Q\mathbf{x}=\mathbf{x}-2a\mathbf{u}$ where $a$ = signed length of the projection of $\mathbf{x}$ onto $\mathbf{u}$. And
$$a=\langle\mathbf{u},\mathbf{x}\rangle=\|\mathbf{u}\|\|\mathbf{x}\|\cos\varphi=\mathbf{u}^\top\mathbf{x}$$
so
$$Q\mathbf{x}=\mathbf{x}-2\mathbf{u}(\mathbf{u}^\top\mathbf{x})=(I-2\mathbf{u}\mathbf{u}^\top)\mathbf{x}$$

> [!note] Def. 1.7.0.13 — Householder Matrix
> $$Q=I-2\mathbf{u}\mathbf{u}^\top,\qquad \|\mathbf{u}\|=1$$
> If your normal isn't unit length, use $\mathbf{u}/\|\mathbf{u}\|$ instead. **Every Householder matrix is orthogonal** (Bem. 1.7.0.14); it is also symmetric, so $Q^{-1}=Q^\top=Q$.
>
> *Proof of orthogonality:* $Q^\top Q=(I-2\mathbf{u}\mathbf{u}^\top)^2=I-4\mathbf{u}\mathbf{u}^\top+4\mathbf{u}\underbrace{(\mathbf{u}^\top\mathbf{u})}_{=1}\mathbf{u}^\top=I$.

⚠️ **Order matters in $\mathbf{u}\mathbf{u}^\top$:** it's an **outer** product (column × row) → an $n\times n$ matrix of rank 1. $\mathbf{u}^\top\mathbf{u}$ is the **inner** product → a scalar ($=1$).

---

### Examples — §1.7

> [!example] LAVG Bsp. 1.7.0.3 — what $A^\top A=I$ actually says
> With columns $\mathbf{u},\mathbf{v},\mathbf{w}$:
> $$A^\top A=\begin{bmatrix}\mathbf{u}^\top\mathbf{u}&\mathbf{u}^\top\mathbf{v}&\mathbf{u}^\top\mathbf{w}\\\\\mathbf{v}^\top\mathbf{u}&\mathbf{v}^\top\mathbf{v}&\mathbf{v}^\top\mathbf{w}\\\\\mathbf{w}^\top\mathbf{u}&\mathbf{w}^\top\mathbf{v}&\mathbf{w}^\top\mathbf{w}\end{bmatrix}=I\iff\begin{cases}\mathbf{u}\perp\mathbf{v},\ \mathbf{u}\perp\mathbf{w},\ \mathbf{v}\perp\mathbf{w}&\text{(off-diagonal = 0)}\\\\| \mathbf{u}\|=\|\mathbf{v}\|=\|\mathbf{w}\|=1&\text{(diagonal = 1)}\end{cases}$$

> [!example] LAVG Bsp. 1.7.0.9 — deriving the 2D rotation matrix
> With $r=\|\mathbf{x}\|$ and $\mathbf{x}$ at angle $\alpha$, rotate by $\varphi$:
> $$d_1=r\cos(\alpha+\varphi)=\underbrace{r\cos\alpha}_{x_1}\cos\varphi-\underbrace{r\sin\alpha}_{x_2}\sin\varphi,\qquad d_2=\underbrace{r\sin\alpha}_{x_2}\cos\varphi+\underbrace{r\cos\alpha}_{x_1}\sin\varphi$$
> Read off $D(\varphi)=\begin{bmatrix}\cos\varphi&-\sin\varphi\\\\ \sin\varphi&\cos\varphi\end{bmatrix}$, and $D(\varphi)^\top D(\varphi)=I$ — rotating back undoes it.

> [!example] LAVG Bsp. 1.7.0.11 — rotation in 3D (about the $x_3$-axis)
> $$D(\varphi)=\begin{bmatrix}\cos\varphi&-\sin\varphi&0\\\\ \sin\varphi&\cos\varphi&0\\\\0&0&1\end{bmatrix}$$
> The untouched direction just gets the identity's row and column. Generalises directly to $D_{ij}(\varphi)$ in $\mathbb{R}^n$.

> [!example] LAVG Bsp. 1.7.0.15 — build $Q$ from a given normal ⭐ typical exam question
> $$\mathbf{u}=\begin{bmatrix}-2/3\\\\1/3\\\\-2/3\end{bmatrix}$$
> **Step 1 — check the norm:** $\|\mathbf{u}\|^2=\tfrac49+\tfrac19+\tfrac49=1$ ✓ (if it weren't 1, normalise first).
> **Step 2 — outer product:**
> $$\mathbf{u}\mathbf{u}^\top=\frac19\begin{bmatrix}4&-2&4\\\\-2&1&-2\\\\4&-2&4\end{bmatrix}$$
> **Step 3 — assemble:**
> $$Q=I-2\mathbf{u}\mathbf{u}^\top=\frac19\begin{bmatrix}9&0&0\\\\0&9&0\\\\0&0&9\end{bmatrix}-\frac29\begin{bmatrix}4&-2&4\\\\-2&1&-2\\\\4&-2&4\end{bmatrix}=\frac19\begin{bmatrix}1&4&-8\\\\4&7&4\\\\-8&4&1\end{bmatrix}$$

> [!example] Zardini Bsp. 25 — rotation about the $x$-axis, and its orthogonality
> $$R_x(\theta)=\begin{bmatrix}1&0&0\\\\0&\cos\theta&-\sin\theta\\\\0&\sin\theta&\cos\theta\end{bmatrix}$$
> Applied to $\mathbf{a}=(1,0,0)^\top$: **unchanged** — it already lies on the rotation axis, exactly as expected.
> Applied to $\mathbf{b}=(0,1,0)^\top$: $(0,\cos\theta,\sin\theta)^\top$.
> And $R_x(\theta)^\top R_x(\theta)=I_3$ using $\cos^2+\sin^2=1$ ⇒ orthogonal.

---

## 1.8 QR-Zerlegung via orthogonale Transformationen — *pp. 60–68*

### Why, in one paragraph

Gauss elimination reaches echelon form using $E_{ij}$ matrices. Those are **not** orthogonal, so for some $A$ the rounding errors pile up and the result can be badly wrong. Orthogonal transformations don't stretch anything (Satz 1.7.0.6), so errors can't accumulate the same way. Price: roughly **3× the cost** of LU in the worst case.

> [!note] Def. 1.8.0.1 — QR-Zerlegung
> $A=QR$ with $Q$ **orthogonal** and $R$ **upper triangular**.

Solving with it — and note how cheap the inverse of $Q$ is:
$$A\mathbf{x}=\mathbf{b}\iff QR\mathbf{x}=\mathbf{b}\ \xrightarrow{\ Q^\top\cdot\ }\ R\mathbf{x}=Q^\top\mathbf{b}\ \xrightarrow{\ \text{Rücksubstitution}\ }\ \mathbf{x}$$

Same skeleton as LU: kill everything below the diagonal by left-multiplying — only now with orthogonal matrices instead of $E_{ij}$.
$$Q_{n-1}\cdots Q_1A=R\quad\Longrightarrow\quad A=Q_1^\top Q_2^\top\cdots Q_{n-1}^\top R=QR$$

### Method A — Givens rotations

Zero **one entry at a time**. To kill entry $a_{ij}$ (below the diagonal) using rows $i$ and $j$:

> [!tip] Kochrezept (PVK §11.3)
> 1. Pick the entry $a_{ij}$ to eliminate.
> 2. $r=\sqrt{a_{jj}^2+a_{ij}^2}$, $\ \cos\varphi=\dfrac{a_{jj}}{r}$, $\ \sin\varphi=\dfrac{a_{ij}}{r}$.
> 3. Build $G_{ij}(\varphi)$ = identity, except the block $\begin{bmatrix}\cos\varphi&\sin\varphi\\\\-\sin\varphi&\cos\varphi\end{bmatrix}$ in rows/columns $i,j$.
> 4. Multiply from the **left**: $\tilde A=G_{ij}A$. Entry $a_{ij}$ is now 0.
> 5. Repeat for every entry below the diagonal until you reach $R$.
> 6. $R=G_k\cdots G_1A$ and $Q=(G_k\cdots G_1)^\top$.

> [!note] Bem. 1.8.0.3 — when Givens is the right choice
> Givens is **cheap for dünn-besetzte (sparse) Matrizen** — matrices already full of zeros — because it targets individual entries and doesn't disturb the rest. Sparse matrices are everywhere in applications.

### Method B — Householder reflections

Zero a **whole column at once**. This is what general-purpose software uses, because you don't have to care about the matrix's shape.

> [!tip] Kochrezept (PVK §12.1)
> For $k=1,2,\dots,n$:
> 1. Take the $k$-th column of the current matrix from row $k$ downward: $\mathbf{x}_k=(a_{k,k},a_{k+1,k},\dots,a_{m,k})^\top$.
> 2. Householder vector: $\ \mathbf{u}_k=\dfrac{\mathbf{x}_k-\|\mathbf{x}_k\|\,\mathbf{e}_1}{\big\|\mathbf{x}_k-\|\mathbf{x}_k\|\,\mathbf{e}_1\big\|}$ (the normalisation guarantees $\|\mathbf{u}_k\|=1$).
> 3. $H_k=I-2\mathbf{u}_k\mathbf{u}_k^\top$.
> 4. If needed, pad $H_k$ with an identity block in the top-left so the dimensions match $A$ — this leaves the already-finished columns untouched.
> 5. $A^{(k+1)}=H_kA^{(k)}$. Column $k$ is now zero below the diagonal.
> 6. $R=H_n\cdots H_1A$, $\ Q=(H_n\cdots H_1)^\top$.

**Where step 2 comes from:** you already *know* where $\mathbf{x}$ must land. A reflection preserves length, so $\mathbf{x}\mapsto\|\mathbf{x}\|\mathbf{e}_1$. The mirror's normal is simply the (normalised) difference between the vector and its image.

> [!note] Satz 1.8.0.6 — QR of a general matrix
> For every $A\in\mathbb{R}^{m\times n}$ with $m\ge n$ and $\mathrm{Rang}(A)=n$ there is a **unique** orthogonal $Q\in\mathbb{R}^{m\times m}$ with
> $$A=Q\begin{bmatrix}R\\\\0\end{bmatrix},\qquad R\ \text{upper triangular, all diagonal entries}\ \ge0$$
> If all diagonal entries are $>0$, then $R$ is the **Cholesky factor of $A^\top A$**:
> $$A^\top A=\begin{bmatrix}R^\top&0\end{bmatrix}\underbrace{Q^\top Q}_{I}\begin{bmatrix}R\\\\0\end{bmatrix}=R^\top R$$
> (This is the bridge to Kapitel 5, Ausgleichsrechnung / least squares.)

> [!tip] Practical remark from Bsp. 1.8.0.5
> If you only want to **solve one system**, don't store $Q,Q_1,Q_2,\dots$ at all — just apply each rotation/reflection to the right-hand side as you go, and finish with a triangular system. Much more efficient than keeping the intermediate matrices.

---

### Examples — §1.8

> [!example] LAVG Bsp. 1.8.0.2 — zeroing a vector with two Givens rotations
> $$\mathbf{a}=\begin{bmatrix}4\\\\-3\\\\1\end{bmatrix}$$
> **Step 1** (kill the $-3$, plane 1–2): $r=\sqrt{4^2+(-3)^2}=5$, $\cos\varphi_{12}=\tfrac45$, $\sin\varphi_{12}=-\tfrac35$.
> $$G_{12}=\begin{bmatrix}\tfrac45&-\tfrac35&0\\\\\tfrac35&\tfrac45&0\\\\0&0&1\end{bmatrix},\qquad G_{12}\mathbf{a}=\begin{bmatrix}5\\\\0\\\\1\end{bmatrix}$$
> **Step 2** (kill the $1$, plane 1–3): $r=\sqrt{5^2+1^2}=\sqrt{26}$, $\cos\varphi_{13}=\tfrac{5}{\sqrt{26}}$, $\sin\varphi_{13}=\tfrac{1}{\sqrt{26}}$.
> $$G_{13}=\begin{bmatrix}\tfrac{5}{\sqrt{26}}&0&\tfrac{1}{\sqrt{26}}\\\\0&1&0\\\\-\tfrac{1}{\sqrt{26}}&0&\tfrac{5}{\sqrt{26}}\end{bmatrix},\qquad G_{13}G_{12}\mathbf{a}=\begin{bmatrix}\sqrt{26}\\\\0\\\\0\end{bmatrix}$$
> Sanity check: $\|\mathbf{a}\|=\sqrt{16+9+1}=\sqrt{26}$ — the length survived, as it must.

> [!example] LAVG Bsp. 1.8.0.4 — one Householder reflection on a vector
> $$\mathbf{y}=\begin{bmatrix}2\\\\2\\\\1\end{bmatrix},\quad\|\mathbf{y}\|=3\ \Longrightarrow\ Q\mathbf{y}=\|\mathbf{y}\|\mathbf{e}_1=\begin{bmatrix}3\\\\0\\\\0\end{bmatrix}$$
> $$\mathbf{v}=\mathbf{y}-\|\mathbf{y}\|\mathbf{e}_1=\begin{bmatrix}-1\\\\2\\\\1\end{bmatrix},\qquad \mathbf{u}=\frac{\mathbf{v}}{\|\mathbf{v}\|}=\frac{1}{\sqrt6}\begin{bmatrix}-1\\\\2\\\\1\end{bmatrix}$$
> $$Q=I-2\mathbf{u}\mathbf{u}^\top=I-\frac{2}{6}\begin{bmatrix}-1\\\\2\\\\1\end{bmatrix}\begin{bmatrix}-1&2&1\end{bmatrix}=\frac13\begin{bmatrix}2&2&1\\\\2&-1&-2\\\\1&-2&2\end{bmatrix}$$

> [!example] LAVG Bsp. 1.8.0.5 — full QR of a $3\times2$ matrix ⭐ the model exam problem
> $$A=\begin{bmatrix}1&1\\\\2&0\\\\2&0\end{bmatrix}$$
> **Column 1:** $\mathbf{a}_1=(1,2,2)^\top$, $\|\mathbf{a}_1\|=3$.
> $$\mathbf{v}=\mathbf{a}_1-3\mathbf{e}_1=\begin{bmatrix}-2\\\\2\\\\2\end{bmatrix},\quad\|\mathbf{v}\|=\sqrt{12},\quad \mathbf{u}=\frac{1}{\sqrt{12}}\begin{bmatrix}-2\\\\2\\\\2\end{bmatrix}$$
> $$Q_1=I-\frac{2}{12}\mathbf{v}\mathbf{v}^\top=\frac16\begin{bmatrix}2&4&4\\\\4&2&-4\\\\4&-4&2\end{bmatrix},\qquad Q_1A=\begin{bmatrix}3&\tfrac13\\\\0&\tfrac23\\\\0&\tfrac23\end{bmatrix}$$
> **Column 2:** work on the lower part $\mathbf{b}=\tfrac23\begin{bmatrix}1\\\\1\end{bmatrix}$, $\|\mathbf{b}\|=\tfrac23\sqrt2$. This vector points along the bisector of the first quadrant, so the reflection is just
> $$\frac{1}{\sqrt2}\begin{bmatrix}1&1\\\\1&-1\end{bmatrix}\qquad\Longrightarrow\qquad Q_2=\begin{bmatrix}1&0&0\\\\0&\tfrac{1}{\sqrt2}&\tfrac{1}{\sqrt2}\\\\0&\tfrac{1}{\sqrt2}&-\tfrac{1}{\sqrt2}\end{bmatrix}$$
> $$R=Q_2Q_1A=\begin{bmatrix}3&\tfrac13\\\\0&\tfrac23\sqrt2\\\\0&0\end{bmatrix},\qquad Q=Q_1^\top Q_2^\top,\qquad A=QR$$
> *(The script also runs the formula the long way for practice — same answer, more square roots.)*

> [!example] PVK §11.3 Übung — QR via Givens (with solution)
> $$A=\begin{bmatrix}1&5\\\\-2&1\end{bmatrix}$$
> Eliminate $a_{21}=-2$: $\;r=\sqrt{1^2+(-2)^2}=\sqrt5$, $\ \cos\varphi=\tfrac{1}{\sqrt5}$, $\ \sin\varphi=\tfrac{-2}{\sqrt5}$.
> $$G=\begin{bmatrix}\cos\varphi&\sin\varphi\\\\-\sin\varphi&\cos\varphi\end{bmatrix}=\frac{1}{\sqrt5}\begin{bmatrix}1&-2\\\\2&1\end{bmatrix},\qquad R=GA=\frac{1}{\sqrt5}\begin{bmatrix}5&3\\\\0&11\end{bmatrix}=\begin{bmatrix}\sqrt5&\tfrac{3}{\sqrt5}\\\\0&\tfrac{11}{\sqrt5}\end{bmatrix}$$
> $$GA=R\ \Rightarrow\ A=G^{-1}R=G^\top R\ \Rightarrow\ Q=G^\top=\frac{1}{\sqrt5}\begin{bmatrix}1&2\\\\-2&1\end{bmatrix}$$
> Check $QR=A$ ✓.

> [!example] PVK §12.1 Übung — QR via Householder (with solution)
> $$A=\begin{bmatrix}6&0\\\\8&1\end{bmatrix}$$
> $\mathbf{x}_1=(6,8)^\top$, $\|\mathbf{x}_1\|=10$, $\ \mathbf{v}=\mathbf{x}_1-10\mathbf{e}_1=(-4,8)^\top$, $\ \|\mathbf{v}\|=\sqrt{80}$, $\ \mathbf{u}=\tfrac{1}{\sqrt{80}}(-4,8)^\top$.
> $$H_1=I-2\mathbf{u}\mathbf{u}^\top=I-\frac{2}{80}\begin{bmatrix}16&-32\\\\-32&64\end{bmatrix}=\frac15\begin{bmatrix}3&4\\\\4&-3\end{bmatrix}$$
> $$R=H_1A=\begin{bmatrix}10&\tfrac45\\\\0&-\tfrac35\end{bmatrix},\qquad Q=H_1^\top=H_1=\frac15\begin{bmatrix}3&4\\\\4&-3\end{bmatrix}$$
> ✅ Check: $QR=A$.
> ⚠️ The handwritten solution in the PVK writes $\tfrac{48}{5}$ for $R_{11}$. It must be $\|\mathbf{x}_1\|=10$ — that's the whole point of the construction ($H\mathbf{x}=\|\mathbf{x}\|\mathbf{e}_1$). Use $10$, and use $\|\mathbf{x}_1\|$ as your built-in check on every Householder step.

> [!example] PVK Beispielaufgaben Serie 6 — **sparsity pattern** of $R$ (conceptual, no numbers)
> $A$ is a banded matrix (a diagonal band of non-zeros, zeros elsewhere). Question: what does the occupancy pattern of $R$ from the QR decomposition look like?
> **Reasoning:** do QR with Givens. Each rotation touches exactly **two rows**, $i$ and $j$. So the entries you kill below the diagonal reappear as **fill-in above** the diagonal — the band grows upward by one extra diagonal, and the lower part becomes zero.
> $$A=\begin{bmatrix}*&*&0&0&0&0\\\\ *&*&*&0&0&0\\\\ 0&*&*&*&0&0\\\\ 0&0&*&*&*&0\\\\ 0&0&0&*&*&*\\\\ 0&0&0&0&*&*\end{bmatrix}\ \longrightarrow\ R=\begin{bmatrix}*&*&*&0&0&0\\\\ 0&*&*&*&0&0\\\\ 0&0&*&*&*&0\\\\ 0&0&0&*&*&*\\\\ 0&0&0&0&*&*\\\\ 0&0&0&0&0&*\end{bmatrix}$$
> **Rule to remember:** QR on a banded matrix moves the band up — lower bandwidth $\to$ 0, upper bandwidth $\to$ upper + lower.

> [!example] PVK — counting non-zeros in a banded matrix
> $A(m,n,k)$ is $m\times n$ with $k$ diagonals of non-zeros around the main diagonal. For $A(100,56,17)$:
> - **In $A$:** the main diagonal has $56$ entries; each diagonal below has one fewer as they run out of columns:
> $\;9\cdot56+(55+54+53+52+51+50+49+48)=\mathbf{916}$ non-zeros.
> - **In $R$:** the lower diagonals get rotated upward, but each shifted diagonal is shorter — you lose $9+10+11+12+13+14+15+16=100$ entries. So $916-100=\mathbf{816}$.
>
> *(Good sanity exercise for whether you actually understand what QR does to structure.)*

---

## Cheat sheet — the whole chapter on one screen

### Which decomposition, when

| | Form | Built from | Cost | Use it when |
|---|---|---|---|---|
| **Gauss** | $U\mathbf{x}=\mathbf{c}$ | row ops | $\mathcal{O}(n^3)$ | one system, once |
| **LU / PLU** | $A=LU$, $PA=LU$ | $E_{ij}$, $P_{ij}$ | $\mathcal{O}(n^3)$ once, then $\mathcal{O}(n^2)$ | many $\mathbf{b}$, same $A$ |
| **LDU / LDL$^\top$** | $A=LD\tilde U$ / $LDL^\top$ | LU + rescaling | — | $A$ regular / symmetric |
| **Cholesky** | $A=R^\top R$ | LDL$^\top$ + $\sqrt{D}$ | $\tfrac13$ of Gauss | $A$ symmetric, pivots $>0$ |
| **QR (Givens)** | $A=QR$ | rotations, entry by entry | ~3× LU | sparse $A$, numerical stability |
| **QR (Householder)** | $A=QR$ | reflections, column at a time | ~3× LU | dense $A$, what libraries use |
| **Inverse** | $A^{-1}$ | Gauss-Jordan | $n\times$ one solve | almost never — only if $>n$ right-hand sides |

### Reflexes

- $A\mathbf{x}$ = combination of **columns** of $A$.
- Left-multiply → acts on **rows**. Right-multiply → acts on **columns**.
- $r$ pivots ⇒ $n-r$ free variables ⇒ $m-r$ compatibility conditions.
- Unique solution $\iff r=n$. Any solution at all $\iff$ all KBs satisfied.
- $(AB)^\top=B^\top A^\top$ and $(AB)^{-1}=B^{-1}A^{-1}$ — **order flips**.
- Orthogonal ⇒ $A^{-1}=A^\top$ and lengths/angles preserved.
- Householder: $\mathbf{u}\mathbf{u}^\top$ = matrix (rank 1); $\mathbf{u}^\top\mathbf{u}$ = scalar ($=1$).
- $\det A$ = product of the pivots; $\det A\neq0\iff$ regulär.

### Traps that cost points

1. Writing the multiplier into $L$ with the **wrong sign** → always phrase steps as `II − c·I`.
2. Putting $l_{ij}$ into the wrong **column** of $L$ when a free variable appears mid-way (Bsp. 1.2.0.15).
3. Forgetting to carry a **row swap into $L$** (everything except the diagonal) and into $P$.
4. Dividing by a parameter without a **Fallunterscheidung** (Zardini Bsp. 11).
5. Checking KBs against the *original* $\mathbf{b}$ instead of the *transformed* right-hand side.
6. Forgetting to normalise $\mathbf{u}$ in the Householder matrix.
7. Assuming $AB=BA$.
8. Concluding "no solution" from a zero row when the right-hand side is also zero (that's $0=0$ — fine).

---

## Source map — where to look for what

| Topic | Gradinaru (LAVG) | PVK (Leo An) | Zardini V4 |
|---|---|---|---|
| LGS ↔ matrix form | §1.1, S. 5–14 | §2.1 | §1.1 |
| Gauss, ZSF, Rang, KB | §1.2, S. 15–27 | §3, §4 | §1.2 |
| Solution-set decision tree | Bem. 1.2.0.18/19 | §3.4 (flowchart) | Thm. 1–5 |
| Matrix operations | §1.3, S. 28–35 | §5 | §2.1–2.4 |
| Inverse, criteria | §1.4, S. 36–38 | §6.3–6.5 | §2.5 |
| Gauss-Jordan | §1.5, S. 39–41 | §6.1–6.2 | §2.5.1 |
| LU / PLU | §1.6, S. 42–51 | §7 (Kochrezepte) | §2.7–2.8 |
| Norm, Skalarprodukt, angle | §1.7, S. 52 | §8, §9 | §4.3–4.4 (later) |
| Orthogonal, rotation, Householder | §1.7, S. 52–59 | §10 | §2.6 |
| QR | §1.8, S. 60–68 | §11, §12 | §7.2 (later) |

> [!tip] How to use the three documents together
> **Gradinaru** = the reasoning (why matrix×vector is defined that way, why elimination gives LU, why QR is stable). **PVK** = the Kochrezepte and exam-style drills. **Zardini** = the largest pile of fully worked numeric examples with parameter case-splits.
>
> Order that works: read the concept in Gradinaru → memorise the recipe from the PVK → grind Zardini's examples until the bookkeeping is automatic.