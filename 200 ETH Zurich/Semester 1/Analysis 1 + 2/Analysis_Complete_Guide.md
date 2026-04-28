# 📐 Analysis — The Complete Ground-Up Guide

> *A unified Obsidian-friendly synthesis of Struwe's "Analysis für Informatik" (ETH, 2010) and Ziltener's "Skript zu den Vorlesungen Analysis 1 und 2 für ITET und RW" (ETH, 2025) — written so that a high school student can grasp every concept the first time.*

---

## 🧭 How to read this note

Every section follows the same rhythm:

1. **Why we care** — the real-world or mathematical motivation
2. **Intuition** — what your gut should tell you
3. **Formal definition** — the precise statement, in LaTeX
4. **Worked examples** — to lock the concept in
5. **Key theorems** — the headlines you must remember
6. **Pitfalls** — where students typically slip up

You should be able to read this top-to-bottom in order. Each chapter assumes only the previous chapters and *nothing else*.

---

## 📋 Table of Contents

1. [[#1 · Logic — the language of mathematics]]
2. [[#2 · Sets — the bricks of mathematics]]
3. [[#3 · Functions — the verbs of mathematics]]
4. [[#4 · Numbers — from counting to the complex plane]]
5. [[#5 · Sequences — the idea of "approaching"]]
6. [[#6 · Series — adding infinitely many things]]
7. [[#7 · Continuity — drawing without lifting the pen]]
8. [[#8 · Differentiation in one variable]]
9. [[#9 · Taylor series — polynomial X-rays of any function]]
10. [[#10 · Integration in one variable]]
11. [[#11 · Ordinary differential equations]]
12. [[#12 · Multivariable differentiation]]
13. [[#13 · Multivariable integration]]
14. [[#14 · Vector calculus — Green, Stokes, Gauß]]
15. [[#15 · The grand picture]]

---

# 1 · Logic — the language of mathematics

## 1.1 Why we care

Every theorem, every proof, every line in this entire document is built out of **logical statements**. You have to know how they combine, how they negate, and how to prove them — otherwise the rest of analysis looks like magic.

## 1.2 Statements and the law of excluded middle

> [!definition] Mathematical statement
> A **mathematical statement** is a sentence that is either **true** or **false** — never both, never neither.

This is called the *Law of the Excluded Middle* (Latin: *tertium non datur*, "no third option").

> [!example] Statements
> - $4 > 2$ — **true**
> - $\forall n \in \mathbb{N}: n > 4 \rightarrow n > 2$ — **true**
> - $5 < 3$ — **false**
> - "This sentence is false." — **not a valid statement** (paradox)

## 1.3 Connectives

Given two statements $A$ and $B$, we form new statements:

| Symbol | Read as | Meaning |
| --- | --- | --- |
| $\neg A$ | not $A$ | flips the truth value |
| $A \wedge B$ | $A$ and $B$ | true iff **both** are true |
| $A \vee B$ | $A$ or $B$ | true iff **at least one** is true |
| $A \rightarrow B$ | if $A$, then $B$ | only false when $A$ true, $B$ false |
| $A \leftrightarrow B$ | $A$ iff $B$ | true iff both have the same truth value |

The truth table:

| $A$ | $B$ | $\neg A$ | $A \wedge B$ | $A \vee B$ | $A \rightarrow B$ | $A \leftrightarrow B$ |
| --- | --- | --- | --- | --- | --- | --- |
| T | T | F | T | T | T | T |
| T | F | F | F | T | F | F |
| F | T | T | F | T | T | F |
| F | F | T | F | F | T | T |

> [!warning] Surprising row: a false hypothesis implies anything
> $A \rightarrow B$ is **true** whenever $A$ is false. The statement *"if the moon is cheese, then $1 = 2$"* is logically true. The implication only fails when you actually have a true premise leading to a false conclusion.

## 1.4 Implication and contraposition

> [!info] Equivalent forms of $A \rightarrow B$
> $$A \rightarrow B \quad \Longleftrightarrow \quad \neg B \rightarrow \neg A$$
> "If it rains, the ground is wet" is the same as "if the ground is dry, it didn't rain."

This is called the **contrapositive**, and it is the basis of **proof by contradiction**.

## 1.5 Quantifiers

| Symbol | Read | Meaning |
| --- | --- | --- |
| $\forall x \in M : P(x)$ | for all $x$ in $M$, $P(x)$ holds | $P$ is true for every $x$ |
| $\exists x \in M : P(x)$ | there exists $x$ in $M$ with $P(x)$ | at least one $x$ makes $P$ true |

> [!tip] Negating quantifiers — flip everything
> $$\neg(\forall x : P(x)) \;\Longleftrightarrow\; \exists x : \neg P(x)$$
> $$\neg(\exists x : P(x)) \;\Longleftrightarrow\; \forall x : \neg P(x)$$

> [!example] In words
> The negation of "every student passed" is "there exists a student who didn't pass." Not "no student passed."

## 1.6 Three proof techniques you must know

### Direct proof
Build a chain $A \Rightarrow B_1 \Rightarrow B_2 \Rightarrow \cdots \Rightarrow S$.

### Proof by contradiction
To prove $A \Rightarrow B$: assume $A \wedge \neg B$ and derive a contradiction.

> [!example] No largest natural number
> Assume there is a largest $n_0 \in \mathbb{N}$. But then $n_0 + 1 \in \mathbb{N}$ and $n_0 + 1 > n_0$ — contradiction. Hence no such $n_0$ exists. $\blacksquare$

### Mathematical induction
To prove $A(n)$ holds for **every** $n \in \mathbb{N}$:

1. **Base case:** show $A(1)$ is true.
2. **Inductive step:** assume $A(n)$ is true (the *induction hypothesis*) and prove $A(n+1)$.

> [!example] Sum of odd numbers
> Claim: $\displaystyle\sum_{k=1}^{n}(2k-1) = n^2$ for every $n \in \mathbb{N}$.
>
> *Base ($n = 1$):* $1 = 1^2$. ✓
>
> *Step:* Assume $1 + 3 + \dots + (2n-1) = n^2$. Then
> $$1 + 3 + \dots + (2n-1) + (2n+1) = n^2 + (2n+1) = (n+1)^2.\quad \blacksquare$$

---

# 2 · Sets — the bricks of mathematics

## 2.1 What is a set?

> [!definition] Set (Cantor)
> A **set** is an unordered collection of distinct objects, called its **elements**.

We write $x \in A$ if $x$ is in $A$, and $x \notin A$ otherwise. Order and repetition are irrelevant: $\{a, b\} = \{b, a\} = \{a, b, a\}$.

The **empty set** is $\emptyset = \{\}$.

## 2.2 Standard sets

$$\mathbb{N} = \{1, 2, 3, \dots\}, \quad \mathbb{N}_0 = \{0, 1, 2, 3, \dots\}, \quad \mathbb{Z} = \{\dots, -1, 0, 1, \dots\}$$

$$\mathbb{Q} = \left\{ \frac{p}{q} \;\middle|\; p \in \mathbb{Z},\; q \in \mathbb{N} \right\}, \quad \mathbb{R}, \quad \mathbb{C}$$

## 2.3 Operations on sets

| Operation | Definition |
| --- | --- |
| Union | $A \cup B = \{x : x \in A \vee x \in B\}$ |
| Intersection | $A \cap B = \{x : x \in A \wedge x \in B\}$ |
| Difference | $A \setminus B = \{x \in A : x \notin B\}$ |
| Complement | $A^c = X \setminus A$ (relative to a universe $X$) |
| Cartesian product | $A \times B = \{(a, b) : a \in A,\; b \in B\}$ |

## 2.4 De Morgan's Laws

> [!theorem] De Morgan
> $$(A \cap B)^c = A^c \cup B^c, \qquad (A \cup B)^c = A^c \cap B^c$$

> [!tip] Memorize this slogan
> "Push the negation in, flip $\cap$ and $\cup$." It works at every level — for sets, for logical statements, for probabilities.

## 2.5 The Russell paradox (why we can't allow *all* collections)

The "set $M$ of all sets that don't contain themselves" cannot exist:
- If $M \in M$, then by definition of $M$, $M \notin M$ — contradiction.
- If $M \notin M$, then by definition $M \in M$ — contradiction.

This is why modern set theory restricts what counts as a set.

---

# 3 · Functions — the verbs of mathematics

## 3.1 The idea

You already met functions in high school: $y = f(x) = x^2$ takes a number $x$ and returns its square.

> [!definition] Function
> A **function** $f: X \to Y$ assigns to every $x \in X$ exactly one element $f(x) \in Y$.
> - $X$ — the **domain** (Definitionsbereich)
> - $Y$ — the **codomain** (Wertebereich)
> - $f(X) = \{f(x) : x \in X\}$ — the **image** or **range**

We write $x \mapsto f(x)$ for the assignment rule.

## 3.2 Three crucial properties

> [!definition] Injective, surjective, bijective
> Let $f: X \to Y$.
>
> - **Injective** (one-to-one): different inputs go to different outputs.
> $$\forall x_1, x_2 \in X: \; f(x_1) = f(x_2) \;\Rightarrow\; x_1 = x_2$$
>
> - **Surjective** (onto): every element of $Y$ is hit.
> $$\forall y \in Y, \; \exists x \in X : f(x) = y$$
>
> - **Bijective**: both injective and surjective.

If $f$ is bijective, an **inverse function** $f^{-1}: Y \to X$ exists, with
$$f^{-1} \circ f = \mathrm{id}_X, \qquad f \circ f^{-1} = \mathrm{id}_Y$$

> [!example] Visualize
> - $f(x) = x^2$ on $\mathbb{R}$ is **not** injective (since $f(2) = f(-2)$) and **not** surjective onto $\mathbb{R}$ (negative numbers aren't hit). But on $[0, \infty)$ it's bijective with inverse $\sqrt{\cdot}$.
> - $f(x) = e^x$ is bijective from $\mathbb{R}$ to $(0, \infty)$, with inverse $\ln$.

## 3.3 Composition

If $f: X \to Y$ and $g: Y \to Z$, the **composition** $g \circ f : X \to Z$ is
$$(g \circ f)(x) := g(f(x))$$

Composition is **associative**: $(h \circ g) \circ f = h \circ (g \circ f)$.

> [!example] Concrete chain
> $f(x) = x^2$, $g(y) = \sin y$. Then $(g \circ f)(x) = \sin(x^2)$.

---

# 4 · Numbers — from counting to the complex plane

## 4.1 The number tower

$$\mathbb{N} \;\subset\; \mathbb{Z} \;\subset\; \mathbb{Q} \;\subset\; \mathbb{R} \;\subset\; \mathbb{C}$$

Each layer adds something you couldn't do before:

| Set | New superpower |
| --- | --- |
| $\mathbb{N}$ | count, add, multiply |
| $\mathbb{Z}$ | subtract |
| $\mathbb{Q}$ | divide (by nonzero) |
| $\mathbb{R}$ | take limits (no "gaps") |
| $\mathbb{C}$ | take square roots of negatives |

## 4.2 The real numbers and the completeness axiom

The rationals have holes: $\sqrt{2} \notin \mathbb{Q}$. To do calculus, we need a number system **without gaps**. That's $\mathbb{R}$.

> [!definition] Bounded sets, supremum, infimum
> Let $S \subseteq \mathbb{R}$ be non-empty.
>
> - $S$ is **bounded above** if $\exists M \in \mathbb{R}: \forall x \in S: x \leq M$. Such an $M$ is an *upper bound*.
> - The **supremum** $\sup S$ is the **least** upper bound.
> - Analogously, $\inf S$ is the *greatest lower bound*.
> - If $\sup S \in S$, we call it the **maximum** $\max S$. Likewise for the minimum.

> [!theorem] Completeness axiom of $\mathbb{R}$
> Every non-empty subset of $\mathbb{R}$ that is bounded above has a supremum in $\mathbb{R}$.

This is the single most important property of $\mathbb{R}$. It is what makes calculus *work*.

> [!example] Sup vs. max
> $S = \{x \in \mathbb{R} : x^2 < 2\} = (-\sqrt{2}, \sqrt{2})$.
> $\sup S = \sqrt{2}$, but $\sqrt{2} \notin S$, so $S$ has **no maximum**.

> [!tip] Archimedean property
> For every $x \in \mathbb{R}$ there is $n \in \mathbb{N}$ with $n > x$. Equivalently: $\mathbb{R}$ has no "infinitely large" elements, and $\frac{1}{n} \to 0$.

## 4.3 The Euclidean space $\mathbb{R}^d$

We can stack reals into vectors. An element of $\mathbb{R}^d$ is $\mathbf{x} = (x_1, \dots, x_d)$.

> [!definition] Euclidean norm and dot product
> For $\mathbf{x}, \mathbf{y} \in \mathbb{R}^d$:
> $$\|\mathbf{x}\| := \sqrt{x_1^2 + \dots + x_d^2}, \qquad \mathbf{x}\cdot\mathbf{y} := \sum_{i=1}^d x_i y_i$$

Three inequalities you'll use constantly:

> [!theorem] Three core inequalities
> 1. **Cauchy–Schwarz:** $|\mathbf{x}\cdot\mathbf{y}| \leq \|\mathbf{x}\|\,\|\mathbf{y}\|$
> 2. **Triangle inequality:** $\|\mathbf{x} + \mathbf{y}\| \leq \|\mathbf{x}\| + \|\mathbf{y}\|$
> 3. **Reverse triangle:** $\big|\|\mathbf{x}\| - \|\mathbf{y}\|\big| \leq \|\mathbf{x} - \mathbf{y}\|$

## 4.4 Complex numbers $\mathbb{C}$

The equation $x^2 = -1$ has no real solution. We **invent** a number $i$ with $i^2 = -1$, and form
$$\mathbb{C} := \{a + bi : a, b \in \mathbb{R}\}$$

You can think of $\mathbb{C}$ as $\mathbb{R}^2$ with extra structure (multiplication).

> [!definition] Complex operations
> For $z = a + bi$ and $w = c + di$:
> $$z + w = (a+c) + (b+d)i$$
> $$z \cdot w = (ac - bd) + (ad + bc)i$$
> $$\overline{z} = a - bi \quad \text{(complex conjugate)}$$
> $$|z| = \sqrt{a^2 + b^2} = \sqrt{z \overline{z}} \quad \text{(modulus / absolute value)}$$
> $$\frac{1}{z} = \frac{\overline{z}}{|z|^2} \quad (z \neq 0)$$

### Polar form

Every $z \neq 0$ has a unique representation
$$z = r(\cos\varphi + i\sin\varphi), \quad r = |z|, \;\; \varphi \in [0, 2\pi)$$

We abbreviate this as $z = r\,\mathrm{cis}(\varphi)$, or — using **Euler's formula** —
$$\boxed{\;e^{i\varphi} = \cos\varphi + i\sin\varphi\;}$$

so that $z = r e^{i\varphi}$.

> [!tip] Why polar form is amazing
> Multiplication in polar form is *trivial*:
> $$(r e^{i\varphi})(s e^{i\psi}) = rs\, e^{i(\varphi + \psi)}$$
> **Multiply moduli, add angles.** This makes powers (de Moivre) and roots simple.

> [!example] Powers via polar form
> $1 + i = \sqrt{2}\,e^{i\pi/4}$, so
> $$(1+i)^8 = (\sqrt{2})^8 \cdot e^{i\cdot 8 \cdot \pi/4} = 16 \cdot e^{i 2\pi} = 16$$

### k-th roots of complex numbers

Every $z = r e^{i\varphi} \neq 0$ has exactly $k$ different $k$-th roots:
$$w_j = \sqrt[k]{r}\,e^{i(\varphi + 2\pi j)/k}, \quad j = 0, 1, \dots, k-1$$

> [!theorem] Fundamental Theorem of Algebra
> Every non-constant complex polynomial $p(z) = a_n z^n + \dots + a_1 z + a_0$ has at least one complex root.
> Equivalently, every degree-$n$ polynomial factors into $n$ linear factors over $\mathbb{C}$.

This is why $\mathbb{C}$ is called **algebraically closed** — and why we never need to invent new numbers beyond it.

---

# 5 · Sequences — the idea of "approaching"

## 5.1 What is a sequence?

> [!definition] Sequence
> A **(real or complex) sequence** is a function $a: \mathbb{N}_0 \to \mathbb{C}$ (or $\mathbb{R}$). We write $a_n := a(n)$ and $(a_n)_{n \in \mathbb{N}_0}$.

> [!example] Three classics
> - Harmonic: $a_n = \frac{1}{n}$ for $n \geq 1$ — terms $1, \tfrac12, \tfrac13, \tfrac14, \dots$
> - Geometric (ratio $q$): $a_n = q^n$ — terms $1, q, q^2, q^3, \dots$
> - Constant: $a_n = c$ — boring but useful

## 5.2 The crown jewel: convergence

This single definition is the foundation of everything that follows. Read it slowly.

> [!definition] Convergence of a sequence
> $(a_n)$ **converges** to $A \in \mathbb{C}$ — written $a_n \to A$ or $\lim_{n\to\infty} a_n = A$ — iff
> $$\forall \varepsilon > 0 \;\;\exists n_0 \in \mathbb{N} \;\;\forall n \geq n_0 : \; |a_n - A| < \varepsilon.$$

In words: ***no matter how small a tolerance $\varepsilon$ you pick, eventually all terms of the sequence are within $\varepsilon$ of $A$.***

> [!info] How to read this
> $\varepsilon$ is a "challenge" — how close to $A$ do you want? You answer with $n_0$ — from this index onwards, I promise to stay within $\varepsilon$. Smaller $\varepsilon$ usually requires bigger $n_0$.

> [!example] $\frac{1}{n} \to 0$
> Given $\varepsilon > 0$, choose any integer $n_0 > \frac{1}{\varepsilon}$. Then for $n \geq n_0$:
> $$\left|\tfrac{1}{n} - 0\right| = \tfrac{1}{n} \leq \tfrac{1}{n_0} < \varepsilon \quad \checkmark$$

## 5.3 Limit arithmetic

> [!theorem] Calculus of limits
> If $a_n \to A$ and $b_n \to B$, then:
> - $a_n + b_n \to A + B$
> - $a_n \cdot b_n \to A \cdot B$
> - $a_n / b_n \to A/B$ provided $B \neq 0$
> - $|a_n| \to |A|$

> [!theorem] Squeeze theorem (Sandwich)
> If $a_n \leq c_n \leq b_n$ for all $n \geq N$ and $a_n \to L$, $b_n \to L$, then $c_n \to L$.

## 5.4 The four pillars of convergence

> [!theorem] Monotone convergence
> A monotonically increasing sequence that is bounded above converges (to its supremum). Same for decreasing & bounded below.

> [!theorem] Bolzano–Weierstrass
> Every bounded sequence in $\mathbb{R}^d$ has a convergent subsequence.

> [!theorem] Cauchy criterion
> A sequence $(a_n)$ in $\mathbb{R}$ (or $\mathbb{C}$, or $\mathbb{R}^d$) converges **iff** it is a **Cauchy sequence**:
> $$\forall \varepsilon > 0 \;\;\exists n_0 : \; \forall n, m \geq n_0 : \; |a_n - a_m| < \varepsilon$$

> [!tip] Why Cauchy is golden
> You can prove convergence **without knowing the limit**! Just check that the terms huddle together.

## 5.5 Limes superior and inferior

For bounded sequences, define
$$\limsup_{n\to\infty} a_n := \lim_{n\to\infty}\!\Big(\sup_{k\geq n} a_k\Big), \qquad \liminf_{n\to\infty} a_n := \lim_{n\to\infty}\!\Big(\inf_{k\geq n} a_k\Big)$$

> [!theorem] Convergence ⇔ $\limsup = \liminf$
> A bounded sequence converges iff $\limsup a_n = \liminf a_n$.

## 5.6 Standard limits to memorize

| Sequence | Limit | Condition |
| --- | --- | --- |
| $\dfrac{1}{n^p}$ | $0$ | $p > 0$ |
| $q^n$ | $0$ | $\|q\| < 1$ |
| $\sqrt[n]{n}$ | $1$ | — |
| $\sqrt[n]{a}$ | $1$ | $a > 0$ |
| $\dfrac{n^p}{q^n}$ | $0$ | $\|q\| > 1$, any $p$ |
| $\left(1 + \dfrac{1}{n}\right)^n$ | $e \approx 2.71828$ | — |
| $\dfrac{n!}{n^n}$ | $0$ | — |

---

# 6 · Series — adding infinitely many things

## 6.1 The basic question

What does $1 + \tfrac12 + \tfrac14 + \tfrac18 + \cdots$ even *mean*? You can't add up an infinite list — but you can take the limit of finite sums.

> [!definition] Series
> Given a sequence $(a_k)$, define the **partial sums**
> $$S_n := \sum_{k=1}^{n} a_k$$
> The **series** $\sum_{k=1}^{\infty} a_k$ converges iff $(S_n)$ converges. We write
> $$\sum_{k=1}^{\infty} a_k := \lim_{n\to\infty} S_n$$

## 6.2 The geometric series — the most important series

> [!theorem] Geometric series
> For $|q| < 1$,
> $$\sum_{k=0}^{\infty} q^k = \frac{1}{1 - q}$$

*Proof sketch:* $S_n = 1 + q + q^2 + \dots + q^n$. Using $(1-q)S_n = 1 - q^{n+1}$ and $q^{n+1} \to 0$, divide by $1-q$. $\blacksquare$

> [!example] Zeno's paradox solved
> Achilles runs $1 + \tfrac12 + \tfrac14 + \cdots = \dfrac{1}{1 - 1/2} = 2$ km. Finite distance, finite time. The "infinity" is harmless.

## 6.3 The harmonic series — a brutal counterexample

> [!warning] Harmonic series diverges
> $$\sum_{k=1}^{\infty} \frac{1}{k} = +\infty$$
> Even though $\frac{1}{k} \to 0$.

*Why?* Group: $1 + \frac{1}{2} + \underbrace{(\frac{1}{3} + \frac{1}{4})}_{> 1/2} + \underbrace{(\frac{1}{5} + \dots + \frac{1}{8})}_{> 1/2} + \cdots$. Infinitely many groups, each $\geq \frac{1}{2}$. ✗

> [!info] The lesson
> $a_k \to 0$ is **necessary** for $\sum a_k$ to converge — but **not sufficient**.

## 6.4 Convergence tests

| Test | Statement |
| --- | --- |
| **n-th term** | If $a_k \not\to 0$, then $\sum a_k$ diverges. |
| **Comparison** | If $0 \leq a_k \leq b_k$ and $\sum b_k$ converges, then $\sum a_k$ converges. |
| **Ratio (d'Alembert)** | If $\lim \big\lvert\frac{a_{k+1}}{a_k}\big\rvert = L$: $L < 1$ ⇒ converges absolutely; $L > 1$ ⇒ diverges; $L = 1$ ⇒ inconclusive. |
| **Root (Cauchy)** | If $\lim \sqrt[k]{\lvert a_k \rvert} = L$: same conclusions as ratio test. |
| **Leibniz (alternating)** | If $a_k \geq 0$ decreases to $0$, then $\sum (-1)^{k+1} a_k$ converges. |
| **Integral test** | If $f \geq 0$ is decreasing, $\sum f(k)$ converges iff $\int_1^\infty f$ does. |

## 6.5 Absolute vs. conditional convergence

> [!definition] Absolute convergence
> $\sum a_k$ **converges absolutely** iff $\sum |a_k|$ converges.

> [!theorem] Absolute ⇒ ordinary
> Absolute convergence implies convergence. The converse is false.

> [!example] Conditional convergence
> $\sum_{k=1}^{\infty}\frac{(-1)^{k+1}}{k} = 1 - \tfrac12 + \tfrac13 - \tfrac14 + \cdots = \ln 2$
> converges (Leibniz) but not absolutely (harmonic).

> [!warning] Riemann rearrangement
> A conditionally convergent series can be rearranged to converge to **any** real number — or to $\pm\infty$. Absolute convergence is a much sturdier property.

## 6.6 Power series

> [!definition] Power series
> A **power series** centered at $z_0$:
> $$\sum_{k=0}^{\infty} a_k (z - z_0)^k$$

Every power series has a **radius of convergence** $R \in [0, \infty]$:

$$\frac{1}{R} = \limsup_{k \to \infty} \sqrt[k]{|a_k|} \quad \text{(Cauchy–Hadamard)}$$

- $|z - z_0| < R$ → converges (absolutely)
- $|z - z_0| > R$ → diverges
- On the boundary $|z - z_0| = R$: anything can happen

## 6.7 The exponential function

This is the most important power series in all of analysis:

> [!theorem] Exponential function
> $$\exp(z) := \sum_{k=0}^{\infty} \frac{z^k}{k!} = 1 + z + \frac{z^2}{2!} + \frac{z^3}{3!} + \cdots$$
> converges absolutely for **every** $z \in \mathbb{C}$ ($R = \infty$).

It satisfies the functional equation:
$$\exp(z + w) = \exp(z)\cdot \exp(w)$$

This single identity recovers everything: $\exp(0) = 1$, $\exp(-z) = 1/\exp(z)$, $\exp(n) = e^n$, and (by Euler) it links to $\sin$ and $\cos$:

$$e^{ix} = \cos x + i \sin x$$

$$\cos x = \frac{e^{ix} + e^{-ix}}{2}, \qquad \sin x = \frac{e^{ix} - e^{-ix}}{2i}$$

---

# 7 · Continuity — drawing without lifting the pen

## 7.1 The picture

A function $f$ is **continuous at $x_0$** if, when you wiggle $x$ a tiny bit around $x_0$, $f(x)$ wiggles only a tiny bit around $f(x_0)$.

A function is **continuous everywhere** if its graph has no jumps, holes, or vertical asymptotes.

## 7.2 The two equivalent definitions

> [!definition] Continuity (sequential)
> $f: \Omega \to \mathbb{R}^n$ is **continuous at $x_0 \in \Omega$** iff
> $$\forall \text{ sequences } (x_k) \subset \Omega \text{ with } x_k \to x_0 : \;\; f(x_k) \to f(x_0)$$

> [!definition] Continuity ($\varepsilon$-$\delta$)
> Equivalently, $f$ is continuous at $x_0$ iff
> $$\forall \varepsilon > 0 \;\; \exists \delta > 0 \;\; \forall x \in \Omega : \;\; \|x - x_0\| < \delta \;\Rightarrow\; \|f(x) - f(x_0)\| < \varepsilon$$

> [!info] These two definitions are **equivalent** (both go back to the same intuition: small input change ⇒ small output change). Use whichever is easier in a given problem.

## 7.3 Examples and counterexamples

> [!example] Continuous everywhere
> Polynomials, $e^x$, $\sin x$, $\cos x$, $\sqrt{x}$ on $[0, \infty)$, $\log x$ on $(0, \infty)$.

> [!example] Jump discontinuity
> $$f(x) = \begin{cases} 1, & x \geq 0 \\ -1, & x < 0 \end{cases}$$
> The left and right limits at $0$ are different.

> [!example] Nowhere continuous
> The Dirichlet function $\chi_{\mathbb{Q}}(x) = 1$ if $x \in \mathbb{Q}$, $0$ otherwise. Between any two reals there are both rationals and irrationals, so the function jumps everywhere.

## 7.4 Algebra of continuous functions

> [!theorem] Continuity is preserved by
> - Addition, subtraction, multiplication
> - Division (where the denominator is non-zero)
> - Composition: if $f$ continuous at $x_0$ and $g$ continuous at $f(x_0)$, then $g \circ f$ continuous at $x_0$

## 7.5 Lipschitz continuity — quantitative continuity

> [!definition] Lipschitz continuity
> $f$ is **Lipschitz continuous** with constant $L \geq 0$ if
> $$\|f(x) - f(y)\| \leq L \|x - y\| \quad \forall x, y$$

This is *uniform* control of how fast $f$ can change. Lipschitz ⇒ uniformly continuous ⇒ continuous.

## 7.6 Compact sets — where continuity becomes powerful

> [!definition] Compactness (sequential)
> $K \subseteq \mathbb{R}^d$ is **compact** iff every sequence in $K$ has a subsequence that converges to a point of $K$.

> [!theorem] Heine–Borel
> A subset of $\mathbb{R}^d$ is compact iff it is **closed and bounded**.

> [!example] Compact vs. not
> - $[0, 1]$ is compact ✓
> - $(0, 1)$ is **not** compact ($1/n \to 0 \notin (0,1)$)
> - $\mathbb{R}$ is **not** compact (unbounded)
> - The unit sphere $S^{d-1} = \{x : \|x\| = 1\}$ is compact

## 7.7 Two cornerstone theorems

> [!theorem] Extreme value theorem
> A continuous function $f: K \to \mathbb{R}$ on a compact set $K$ attains its maximum and minimum:
> $$\exists x_{\min}, x_{\max} \in K : \; f(x_{\min}) = \min_K f, \;\; f(x_{\max}) = \max_K f$$

> [!theorem] Intermediate value theorem (IVT)
> If $f: [a, b] \to \mathbb{R}$ is continuous and $c$ lies between $f(a)$ and $f(b)$, then there exists $x_0 \in [a, b]$ with $f(x_0) = c$.

> [!example] Rooting via IVT
> If $f(a) < 0 < f(b)$, then $f$ has a zero somewhere in $(a, b)$. This is the basis of bisection methods used in real numerical software.

## 7.8 Uniform vs. pointwise convergence

> [!definition] Pointwise vs. uniform convergence
> A sequence of functions $(f_k)$ converges to $f$:
> - **Pointwise**: $\forall x: f_k(x) \to f(x)$
> - **Uniformly**: $\sup_x |f_k(x) - f(x)| \to 0$

> [!warning] Pointwise is a trap
> $f_k(x) = x^k$ on $[0,1]$ converges *pointwise* to $f(x) = 0$ if $x < 1$, $f(1) = 1$. Each $f_k$ is continuous, but the limit is **not**. Pointwise convergence does not preserve continuity.

> [!theorem] Uniform limit of continuous = continuous
> If continuous functions $f_k$ converge **uniformly** to $f$, then $f$ is continuous.

---

# 8 · Differentiation in one variable

## 8.1 The derivative — the central idea

If you zoom in on the graph of a smooth function near $x_0$, it starts to look like a straight line. The **slope** of that line is the **derivative** at $x_0$.

> [!definition] Derivative
> Let $\Omega \subseteq \mathbb{R}$ be open and $f: \Omega \to \mathbb{R}$. We say $f$ is **differentiable at $x_0 \in \Omega$** if the limit
> $$f'(x_0) := \lim_{x \to x_0} \frac{f(x) - f(x_0)}{x - x_0} = \lim_{h \to 0} \frac{f(x_0 + h) - f(x_0)}{h}$$
> exists. Then $f'(x_0)$ is called the **derivative** of $f$ at $x_0$. Other notations: $\frac{df}{dx}(x_0)$, $\dot f(x_0)$, $Df(x_0)$.

## 8.2 The geometric meaning

The fraction $\frac{f(x) - f(x_0)}{x - x_0}$ is the slope of the **secant** through $(x_0, f(x_0))$ and $(x, f(x))$. As $x \to x_0$, this secant rotates onto the **tangent**. So $f'(x_0)$ = slope of the tangent line at $x_0$.

The tangent line itself is
$$T(x) = f(x_0) + f'(x_0)(x - x_0)$$

This is the **best linear approximation** of $f$ near $x_0$.

## 8.3 First examples

> [!example] $f(x) = x^2$
> $$\frac{(x_0+h)^2 - x_0^2}{h} = \frac{2x_0 h + h^2}{h} = 2x_0 + h \xrightarrow{h \to 0} 2x_0$$
> So $f'(x_0) = 2x_0$, i.e. $\frac{d}{dx}(x^2) = 2x$.

> [!example] $f(x) = |x|$ at $x_0 = 0$
> Right limit: $\frac{|h|}{h} = 1$ for $h > 0$. Left limit: $-1$. They don't agree, so $|x|$ is **not** differentiable at $0$. (It's still continuous!)

> [!example] $\exp$ is its own derivative
> Using $\exp(x_0 + h) = \exp(x_0)\exp(h)$ and $\frac{\exp(h) - 1}{h} \to 1$:
> $$\exp'(x_0) = \exp(x_0)$$

## 8.4 Differentiable ⇒ continuous (but not the other way)

> [!theorem]
> If $f$ is differentiable at $x_0$, then $f$ is continuous at $x_0$.
>
> *Proof:* $f(x) - f(x_0) = \frac{f(x) - f(x_0)}{x - x_0} \cdot (x - x_0) \to f'(x_0) \cdot 0 = 0$. $\blacksquare$

The converse fails — e.g. $|x|$. There even exist functions that are continuous *everywhere* but differentiable *nowhere* (Weierstrass function).

## 8.5 The differentiation rules

> [!theorem] Sum, product, quotient
> Suppose $f, g$ are differentiable at $x_0$.
> $$(f + g)'(x_0) = f'(x_0) + g'(x_0)$$
> $$(fg)'(x_0) = f'(x_0)g(x_0) + f(x_0)g'(x_0)$$
> $$\left(\frac{f}{g}\right)'(x_0) = \frac{f'(x_0)g(x_0) - f(x_0)g'(x_0)}{g(x_0)^2}, \quad g(x_0) \neq 0$$

> [!theorem] Chain rule
> If $f$ is differentiable at $x_0$ and $g$ is differentiable at $f(x_0)$, then $g \circ f$ is differentiable at $x_0$ with
> $$(g \circ f)'(x_0) = g'(f(x_0)) \cdot f'(x_0)$$

> [!theorem] Inverse function rule
> If $f$ is bijective and differentiable at $x_0$ with $f'(x_0) \neq 0$, then $f^{-1}$ is differentiable at $y_0 = f(x_0)$ and
> $$(f^{-1})'(y_0) = \frac{1}{f'(x_0)} = \frac{1}{f'(f^{-1}(y_0))}$$

## 8.6 Standard derivatives — the table

| $f(x)$ | $f'(x)$ | Notes |
| --- | --- | --- |
| $c$ (constant) | $0$ | |
| $x^n$ | $n x^{n-1}$ | $n \in \mathbb{R}$ |
| $\sqrt{x}$ | $\dfrac{1}{2\sqrt{x}}$ | $x > 0$ |
| $e^x$ | $e^x$ | |
| $a^x$ | $a^x \ln a$ | $a > 0$ |
| $\ln x$ | $\dfrac{1}{x}$ | $x > 0$ |
| $\log_a x$ | $\dfrac{1}{x \ln a}$ | |
| $\sin x$ | $\cos x$ | |
| $\cos x$ | $-\sin x$ | |
| $\tan x$ | $\dfrac{1}{\cos^2 x} = 1 + \tan^2 x$ | |
| $\arcsin x$ | $\dfrac{1}{\sqrt{1 - x^2}}$ | |
| $\arccos x$ | $-\dfrac{1}{\sqrt{1 - x^2}}$ | |
| $\arctan x$ | $\dfrac{1}{1 + x^2}$ | |
| $\sinh x$ | $\cosh x$ | |
| $\cosh x$ | $\sinh x$ | |

## 8.7 The mean value theorem — the workhorse

> [!theorem] Rolle's theorem
> If $f: [a, b] \to \mathbb{R}$ is continuous on $[a,b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then there exists $c \in (a, b)$ with $f'(c) = 0$.

> [!theorem] Mean value theorem (MVT)
> If $f: [a, b] \to \mathbb{R}$ is continuous on $[a,b]$ and differentiable on $(a, b)$, then there exists $c \in (a, b)$ with
> $$f'(c) = \frac{f(b) - f(a)}{b - a}$$

> [!info] Real-world reading
> If you drove from Zürich to Geneva (282 km) in 3 hours, your **average** speed was 94 km/h. The MVT says: at *some* instant, your speedometer read exactly 94 km/h.

## 8.8 Consequences of the MVT

> [!theorem] Sign of derivative ⇒ monotonicity
> Let $f$ be differentiable on $(a,b)$.
> - $f' \equiv 0 \;\;\Rightarrow\;\; f$ is constant
> - $f' \geq 0 \;\;\Rightarrow\;\; f$ is monotonically increasing
> - $f' > 0 \;\;\Rightarrow\;\; f$ is **strictly** increasing
> - $f' \leq 0 \;\;\Rightarrow\;\; f$ is monotonically decreasing
> - $f' < 0 \;\;\Rightarrow\;\; f$ is **strictly** decreasing

## 8.9 Local extrema

> [!theorem] Fermat's necessary condition
> If $f$ has a local maximum or minimum at an interior point $x_0$, then $f'(x_0) = 0$. (Such an $x_0$ is a **critical point**.)

> [!theorem] Second derivative test
> If $f'(x_0) = 0$ and $f''$ continuous near $x_0$:
> - $f''(x_0) > 0 \;\Rightarrow\;$ strict local **minimum**
> - $f''(x_0) < 0 \;\Rightarrow\;$ strict local **maximum**
> - $f''(x_0) = 0 \;\Rightarrow\;$ inconclusive — examine higher derivatives

## 8.10 L'Hôpital's rule

> [!theorem] L'Hôpital
> Suppose $f, g$ are differentiable near $x_0$ and either both $\to 0$ or both $\to \pm\infty$ as $x \to x_0$. If $g'(x) \neq 0$ near $x_0$ and $\lim \frac{f'(x)}{g'(x)}$ exists, then
> $$\lim_{x \to x_0} \frac{f(x)}{g(x)} = \lim_{x \to x_0} \frac{f'(x)}{g'(x)}$$

> [!example] Classic
> $\displaystyle\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\cos x}{1} = 1$.

---

# 9 · Taylor series — polynomial X-rays of any function

## 9.1 The motivating question

The tangent line $f(x_0) + f'(x_0)(x - x_0)$ approximates $f$ near $x_0$ to **first order**. Can we do better with a **polynomial of higher degree**?

Yes — and the answer is the **Taylor polynomial**.

## 9.2 Taylor's theorem

> [!theorem] Taylor formula (Lagrange remainder)
> If $f: [a, b] \to \mathbb{R}$ is $(n+1)$-times differentiable, then for any $x, x_0 \in [a, b]$ there exists $\xi$ between $x_0$ and $x$ such that
> $$f(x) = \underbrace{\sum_{k=0}^{n} \frac{f^{(k)}(x_0)}{k!}(x - x_0)^k}_{\text{Taylor polynomial } T_n(x)} \;+\; \underbrace{\frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)^{n+1}}_{\text{remainder } R_n(x)}$$

If $R_n(x) \to 0$ as $n \to \infty$, then
$$f(x) = \sum_{k=0}^{\infty} \frac{f^{(k)}(x_0)}{k!}(x - x_0)^k$$
is the **Taylor series** of $f$ around $x_0$.

## 9.3 The standard Taylor series (centered at 0)

| Function | Series | Domain |
| --- | --- | --- |
| $e^x$ | $\displaystyle\sum_{k=0}^{\infty} \frac{x^k}{k!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$ | $\mathbb{R}$ |
| $\sin x$ | $\displaystyle\sum_{k=0}^{\infty} \frac{(-1)^k x^{2k+1}}{(2k+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$ | $\mathbb{R}$ |
| $\cos x$ | $\displaystyle\sum_{k=0}^{\infty} \frac{(-1)^k x^{2k}}{(2k)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$ | $\mathbb{R}$ |
| $\dfrac{1}{1-x}$ | $\displaystyle\sum_{k=0}^{\infty} x^k = 1 + x + x^2 + \cdots$ | $\lvert x\rvert < 1$ |
| $\ln(1+x)$ | $\displaystyle\sum_{k=1}^{\infty} \frac{(-1)^{k+1} x^k}{k} = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$ | $-1 < x \leq 1$ |
| $(1+x)^\alpha$ | $\displaystyle\sum_{k=0}^{\infty} \binom{\alpha}{k} x^k$ | $\lvert x\rvert < 1$ |
| $\arctan x$ | $\displaystyle\sum_{k=0}^{\infty} \frac{(-1)^k x^{2k+1}}{2k+1}$ | $\lvert x\rvert \leq 1$ |

> [!tip] Power series ARE Taylor series
> If $f(x) = \sum a_k x^k$ has positive radius of convergence, then $a_k = \frac{f^{(k)}(0)}{k!}$ — the coefficients of $f$ are *forced* to be the Taylor coefficients. So power series are exactly the smooth functions that "remember themselves" through their derivatives.

## 9.4 What Taylor series are good for

1. **Approximation:** $\sin(0.1) \approx 0.1 - \frac{0.1^3}{6} = 0.0998333$ — accurate to 7 decimal places already!
2. **Limits:** Replace functions by their Taylor expansions to compute limits.
3. **Solving ODEs:** Many ODEs have power-series solutions.
4. **Defining functions on $\mathbb{C}$:** $e^z, \sin z, \cos z$ for complex $z$ are *defined* by their Taylor series.

> [!example] Limit via Taylor
> $$\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \lim_{x \to 0} \frac{x^2/2 - x^4/24 + \cdots}{x^2} = \frac{1}{2}$$

---

# 10 · Integration in one variable

## 10.1 Two stories about integration

There are two complementary views of $\int_a^b f(x)\,dx$:

1. **Geometry**: the (signed) area between the graph of $f$ and the $x$-axis on $[a, b]$.
2. **Accumulation**: the total amount of $f$ collected from $a$ to $b$ — distance from velocity, mass from density, etc.

The **Fundamental Theorem of Calculus** will reveal that integration is also the **inverse of differentiation**.

## 10.2 The Riemann integral — formal construction

> [!definition] Partition and Riemann sum
> A **partition** of $[a, b]$ is a finite list $a = x_0 < x_1 < \cdots < x_n = b$. Pick "tags" $\xi_k \in [x_{k-1}, x_k]$. The corresponding **Riemann sum** is
> $$S(f, P, \xi) := \sum_{k=1}^{n} f(\xi_k)(x_k - x_{k-1})$$

The **mesh** of $P$ is $\|P\| := \max_k (x_k - x_{k-1})$.

> [!definition] Riemann integrable
> $f: [a, b] \to \mathbb{R}$ is **Riemann integrable** with integral $I = \int_a^b f(x)\,dx$ iff
> $$\forall \varepsilon > 0\;\; \exists \delta > 0 \;: \;\; \|P\| < \delta \;\Rightarrow\; |S(f, P, \xi) - I| < \varepsilon$$
> for any choice of tags.

> [!theorem] Continuous ⇒ integrable
> Every continuous function on $[a, b]$ is Riemann integrable. So is every monotonic function. So is every bounded function with only finitely many discontinuities.

## 10.3 Properties of the integral

> [!theorem] Linearity, monotonicity, additivity
> $$\int_a^b (\alpha f + \beta g)\,dx = \alpha\!\int_a^b\! f + \beta\!\int_a^b\! g$$
> $$f \leq g \;\text{on}\; [a,b] \;\Rightarrow\; \int_a^b f \leq \int_a^b g$$
> $$\int_a^c f = \int_a^b f + \int_b^c f \quad (a \leq b \leq c)$$
> $$\left|\int_a^b f\right| \leq \int_a^b |f|$$

## 10.4 The Fundamental Theorem of Calculus (FTC)

The most beautiful theorem in elementary analysis. It says that *integration and differentiation are inverse operations*.

> [!theorem] FTC, Part 1 (existence of antiderivative)
> If $f: [a, b] \to \mathbb{R}$ is continuous, then the function
> $$F(x) := \int_a^x f(t)\,dt$$
> is differentiable on $(a, b)$, and $F'(x) = f(x)$.

> [!theorem] FTC, Part 2 (computing definite integrals)
> If $F$ is **any** antiderivative of $f$ (i.e., $F' = f$) on $[a, b]$, then
> $$\int_a^b f(x)\,dx = F(b) - F(a) =: F(x)\Big|_a^b$$

> [!example] FTC at work
> $\int_0^\pi \sin x\,dx = -\cos x \Big|_0^\pi = -\cos\pi + \cos 0 = -(-1) + 1 = 2$.

## 10.5 Antiderivatives — the table

| $f(x)$ | $\displaystyle\int f(x)\,dx$ |
| --- | --- |
| $x^n$ ($n \neq -1$) | $\dfrac{x^{n+1}}{n+1} + C$ |
| $\dfrac{1}{x}$ | $\ln \lvert x\rvert + C$ |
| $e^x$ | $e^x + C$ |
| $a^x$ | $\dfrac{a^x}{\ln a} + C$ |
| $\sin x$ | $-\cos x + C$ |
| $\cos x$ | $\sin x + C$ |
| $\dfrac{1}{\cos^2 x}$ | $\tan x + C$ |
| $\dfrac{1}{1 + x^2}$ | $\arctan x + C$ |
| $\dfrac{1}{\sqrt{1 - x^2}}$ | $\arcsin x + C$ |
| $\sinh x$ | $\cosh x + C$ |
| $\cosh x$ | $\sinh x + C$ |

## 10.6 Integration by parts

From the product rule $(fg)' = f'g + fg'$, integrating both sides:

> [!theorem] Integration by parts
> $$\int_a^b f(x) g'(x)\,dx = \big[f(x)g(x)\big]_a^b - \int_a^b f'(x) g(x)\,dx$$

> [!tip] How to choose $f$ and $g'$
> Pick $f$ as the part that gets *simpler* when differentiated (polynomials, $\ln$, $\arctan$). Pick $g'$ as the part you can integrate easily ($e^x$, $\sin x$, $\cos x$).

> [!example] $\int x e^x\,dx$
> Let $f = x$, $g' = e^x$. Then $f' = 1$, $g = e^x$:
> $$\int x e^x \,dx = x e^x - \int e^x\,dx = x e^x - e^x + C = (x - 1)e^x + C$$

## 10.7 Substitution (change of variable)

> [!theorem] Substitution rule
> If $\varphi: [a, b] \to \mathbb{R}$ is continuously differentiable and $f$ is continuous on $\varphi([a,b])$:
> $$\int_a^b f(\varphi(x))\, \varphi'(x)\,dx = \int_{\varphi(a)}^{\varphi(b)} f(u)\,du$$

> [!example] $\int 2x\cos(x^2)\,dx$
> Set $u = x^2$, $du = 2x\,dx$: $\int \cos u\,du = \sin u + C = \sin(x^2) + C$.

## 10.8 Partial fractions

For rational functions $\frac{P(x)}{Q(x)}$ with $\deg P < \deg Q$: factor $Q$ over $\mathbb{R}$, then split into simpler pieces:

$$\frac{P(x)}{(x - a)(x - b)} = \frac{A}{x - a} + \frac{B}{x - b}$$

Each piece is integrable in closed form.

> [!example]
> $$\frac{1}{x^2 - 1} = \frac{1}{(x-1)(x+1)} = \frac{1/2}{x-1} - \frac{1/2}{x+1}$$
> $$\Rightarrow \int \frac{dx}{x^2 - 1} = \frac{1}{2}\ln\left|\frac{x-1}{x+1}\right| + C$$

## 10.9 Improper integrals

When the interval is infinite or the integrand blows up, use limits:

$$\int_a^{\infty} f(x)\,dx := \lim_{b \to \infty} \int_a^b f(x)\,dx$$

> [!example] $\int_1^{\infty}\!\frac{1}{x^p}\,dx$
> - Converges if $p > 1$, with value $\frac{1}{p-1}$
> - Diverges if $p \leq 1$
> 
> Compare: $\int_0^1\!\frac{1}{x^p}\,dx$ converges if $p < 1$, diverges if $p \geq 1$.

---

# 11 · Ordinary differential equations

## 11.1 What is an ODE?

> [!definition] Ordinary differential equation
> An **ordinary differential equation (ODE)** of order $n$ is an equation of the form
> $$F\!\big(t,\, y(t),\, y'(t),\, y''(t),\, \dots,\, y^{(n)}(t)\big) = 0$$
> involving an unknown function $y(t)$ and its derivatives, all with respect to a single variable $t$.

A **solution** is a function $y$ that satisfies this equation on some interval.

> [!example] Models everywhere
> - Newton's 2nd law: $m\,\ddot x = F(x, \dot x, t)$ (mechanics)
> - Radioactive decay: $\dot N = -\lambda N$ (population, chemistry)
> - LC circuit: $L\,\ddot Q + \frac{1}{C}Q = 0$ (electrical engineering)
> - Logistic growth: $\dot P = rP(1 - P/K)$ (biology)

## 11.2 Initial value problems

> [!definition] IVP
> An **initial value problem** consists of an ODE plus initial conditions
> $$y(t_0) = y_0,\;\; y'(t_0) = y_1,\;\; \dots,\;\; y^{(n-1)}(t_0) = y_{n-1}$$
> Under reasonable conditions on $F$ (Picard–Lindelöf theorem), the IVP has a **unique** solution near $t_0$.

## 11.3 First-order: separable ODEs

If you can write the equation as
$$y'(x) = f(x)\, g(y),$$
**separate the variables**:
$$\frac{dy}{g(y)} = f(x)\,dx \;\;\Longrightarrow\;\; \int \frac{dy}{g(y)} = \int f(x)\,dx + C$$

> [!example] Exponential decay
> $\dot N = -\lambda N$. Separate: $\frac{dN}{N} = -\lambda \,dt$. Integrate: $\ln |N| = -\lambda t + C$. Hence $N(t) = N_0 e^{-\lambda t}$.

## 11.4 First-order linear ODEs

The general form is
$$y'(x) + p(x)\,y(x) = q(x)$$

> [!theorem] Integrating factor method
> Let $\mu(x) := \exp\!\big(\!\int p(x)\,dx\big)$. Then
> $$y(x) = \frac{1}{\mu(x)}\!\left(\int \mu(x) q(x)\,dx + C\right)$$

*Why?* Multiplying the ODE by $\mu$ makes the left side an exact derivative: $(\mu y)' = \mu q$.

## 11.5 Linear ODEs with constant coefficients (homogeneous)

Equations of the form
$$a_n y^{(n)} + a_{n-1} y^{(n-1)} + \dots + a_1 y' + a_0 y = 0$$

**Strategy: try $y = e^{\lambda t}$.** Substituting gives the **characteristic polynomial**:
$$p(\lambda) = a_n \lambda^n + a_{n-1}\lambda^{n-1} + \dots + a_1\lambda + a_0 = 0$$

Each root $\lambda$ produces a solution $e^{\lambda t}$. The general solution is a linear combination.

| Roots of $p(\lambda)$ | Contribution to general solution |
| --- | --- |
| Simple real $\lambda$ | $C\, e^{\lambda t}$ |
| Repeated real $\lambda$ (mult. $m$) | $(C_0 + C_1 t + \dots + C_{m-1} t^{m-1})\,e^{\lambda t}$ |
| Complex pair $\alpha \pm i\beta$ | $e^{\alpha t}(C_1 \cos\beta t + C_2 \sin\beta t)$ |

## 11.6 The damped harmonic oscillator (a 2nd-order classic)

$$\ddot y + 2\delta \dot y + \omega_0^2 y = 0$$

Characteristic polynomial: $\lambda^2 + 2\delta\lambda + \omega_0^2 = 0$, so $\lambda_{1,2} = -\delta \pm \sqrt{\delta^2 - \omega_0^2}$.

| Regime | Condition | Solution shape |
| --- | --- | --- |
| Undamped | $\delta = 0$ | $C_1 \cos(\omega_0 t) + C_2 \sin(\omega_0 t)$ |
| Underdamped | $0 < \delta < \omega_0$ | $e^{-\delta t}(C_1 \cos(\omega t) + C_2 \sin(\omega t))$, $\omega = \sqrt{\omega_0^2 - \delta^2}$ |
| Critically damped | $\delta = \omega_0$ | $(C_1 + C_2 t)\,e^{-\delta t}$ |
| Overdamped | $\delta > \omega_0$ | $C_1 e^{\lambda_1 t} + C_2 e^{\lambda_2 t}$ (both real, both negative) |

This single equation describes a mass on a spring, an RLC circuit (after replacing variables), or a pendulum near equilibrium.

## 11.7 Inhomogeneous linear ODEs

For $\mathcal{L}y = q(x)$ where $\mathcal{L}$ is a linear differential operator:

$$\boxed{\;y_{\text{general}} = y_{\text{homog}} + y_{\text{particular}}\;}$$

1. Solve $\mathcal{L}y = 0$ → general homogeneous solution $y_h$ (with free constants).
2. Find **any** particular solution $y_p$ of $\mathcal{L}y = q$.
3. The general solution is $y = y_h + y_p$.

**Method of undetermined coefficients:** for $q$ of standard form, guess the form of $y_p$:

| $q(x)$ | Guess for $y_p$ |
| --- | --- |
| Polynomial of degree $m$ | Polynomial of degree $m$ (or $m+1$ if $0$ is a root of $p(\lambda)$) |
| $e^{\alpha x}$ | $A e^{\alpha x}$ (multiply by $x$ if $\alpha$ is a root) |
| $\sin\omega x$ or $\cos\omega x$ | $A\cos\omega x + B\sin\omega x$ |
| Product of these | Product of guesses |

## 11.8 Systems of first-order ODEs

Any $n$-th order ODE can be rewritten as a system of $n$ first-order ODEs. In matrix form:
$$\dot{\mathbf{y}}(t) = A \mathbf{y}(t) + \mathbf{b}(t)$$

For the linear homogeneous case ($\mathbf{b} = 0$), the solution is
$$\mathbf{y}(t) = e^{At}\,\mathbf{y}(0)$$
where $e^{At} := \sum_{k=0}^\infty \frac{(At)^k}{k!}$ is the **matrix exponential**.

---

# 12 · Multivariable differentiation

## 12.1 The setting

We now consider functions $f: \Omega \subseteq \mathbb{R}^d \to \mathbb{R}^m$. Examples:
- $f: \mathbb{R}^2 \to \mathbb{R}$ — a "landscape", height as function of position $(x, y)$
- $f: \mathbb{R}^3 \to \mathbb{R}$ — temperature in a room as function of $(x, y, z)$
- $f: \mathbb{R} \to \mathbb{R}^3$ — a parametric curve in space
- $f: \mathbb{R}^3 \to \mathbb{R}^3$ — a vector field (e.g., wind velocity)

## 12.2 Partial derivatives

> [!definition] Partial derivative
> The **partial derivative** of $f$ with respect to $x_i$ at $x \in \Omega$:
> $$\frac{\partial f}{\partial x_i}(x) := \lim_{h \to 0} \frac{f(x + h\mathbf{e}_i) - f(x)}{h}$$
> where $\mathbf{e}_i$ is the $i$-th unit vector. In words: differentiate $f$ in the $x_i$-direction, treating all other variables as constants.

> [!example] Concrete
> $f(x, y) = x^2 y + \sin(xy)$
> $$\frac{\partial f}{\partial x} = 2xy + y\cos(xy), \qquad \frac{\partial f}{\partial y} = x^2 + x\cos(xy)$$

## 12.3 The gradient

> [!definition] Gradient
> If $f: \mathbb{R}^d \to \mathbb{R}$ is differentiable, its **gradient** is the vector of all partial derivatives:
> $$\nabla f(x) = \mathrm{grad}\,f(x) := \left(\frac{\partial f}{\partial x_1}, \dots, \frac{\partial f}{\partial x_d}\right)$$

> [!info] Geometric meaning of $\nabla f$
> 1. $\nabla f(x)$ points in the direction of **steepest ascent**.
> 2. Its magnitude $\|\nabla f(x)\|$ is the slope in that direction.
> 3. $\nabla f$ is **perpendicular** to the level sets $\{f = c\}$.

## 12.4 The directional derivative

In the direction of a unit vector $\mathbf{v} \in \mathbb{R}^d$:
$$\partial_\mathbf{v} f(x) = \nabla f(x) \cdot \mathbf{v}$$

The maximum is attained when $\mathbf{v}$ aligns with $\nabla f(x)$, giving $\|\nabla f(x)\|$ — confirming that the gradient points uphill.

## 12.5 Total differentiability and the Jacobian

For a vector-valued function $f = (f_1, \dots, f_m): \mathbb{R}^d \to \mathbb{R}^m$:

> [!definition] Total differentiability
> $f$ is **(totally) differentiable** at $x_0$ if there is a linear map $A: \mathbb{R}^d \to \mathbb{R}^m$ with
> $$\lim_{h \to 0} \frac{\|f(x_0 + h) - f(x_0) - A h\|}{\|h\|} = 0$$
> The matrix of $A$ is the **Jacobian matrix**:
> $$J_f(x_0) := \begin{pmatrix} \dfrac{\partial f_1}{\partial x_1} & \cdots & \dfrac{\partial f_1}{\partial x_d} \\ \vdots & \ddots & \vdots \\ \dfrac{\partial f_m}{\partial x_1} & \cdots & \dfrac{\partial f_m}{\partial x_d} \end{pmatrix}$$

> [!warning] Subtle point
> Existence of all partial derivatives does **not** imply (total) differentiability. But: if all partials exist and are *continuous* on a neighbourhood, then $f$ is differentiable there. ($C^1$ ⇒ differentiable.)

## 12.6 The chain rule (multivariable version)

> [!theorem] Multivariable chain rule
> If $g: \mathbb{R}^d \to \mathbb{R}^m$ is differentiable at $x$ and $f: \mathbb{R}^m \to \mathbb{R}^k$ is differentiable at $g(x)$, then $f \circ g$ is differentiable at $x$ with
> $$J_{f \circ g}(x) = J_f(g(x)) \cdot J_g(x)$$
> (matrix multiplication of Jacobians)

> [!example] Special case: $f: \mathbb{R}^2 \to \mathbb{R}$ along a curve
> If $\gamma(t) = (x(t), y(t))$ is a curve and we look at $h(t) = f(\gamma(t))$:
> $$\frac{dh}{dt} = \frac{\partial f}{\partial x}\,\dot x(t) + \frac{\partial f}{\partial y}\,\dot y(t) = \nabla f(\gamma(t)) \cdot \dot\gamma(t)$$

## 12.7 Higher partial derivatives and Schwarz's theorem

> [!theorem] Schwarz / Clairaut
> If $f$ is twice continuously differentiable, then mixed partials are equal:
> $$\frac{\partial^2 f}{\partial x_i \partial x_j} = \frac{\partial^2 f}{\partial x_j \partial x_i}$$

## 12.8 Hessian and Taylor in $\mathbb{R}^d$

> [!definition] Hessian
> $$H_f(x) := \begin{pmatrix} \dfrac{\partial^2 f}{\partial x_1 \partial x_1} & \cdots & \dfrac{\partial^2 f}{\partial x_1 \partial x_d} \\ \vdots & \ddots & \vdots \\ \dfrac{\partial^2 f}{\partial x_d \partial x_1} & \cdots & \dfrac{\partial^2 f}{\partial x_d \partial x_d} \end{pmatrix}$$
> (a symmetric matrix when $f \in C^2$)

> [!theorem] Multivariable Taylor (2nd order)
> $$f(x_0 + h) = f(x_0) + \nabla f(x_0) \cdot h + \tfrac{1}{2}\, h^T H_f(x_0)\, h + o(\|h\|^2)$$

## 12.9 Local extrema in $\mathbb{R}^d$

> [!theorem] Necessary condition
> If $f$ has a local extremum at an interior critical point $x_0$, then $\nabla f(x_0) = 0$.

> [!theorem] Second-derivative test
> Let $x_0$ be a critical point ($\nabla f(x_0) = 0$). Then:
> - $H_f(x_0)$ **positive definite** (all eigenvalues $> 0$) ⇒ strict local **minimum**
> - $H_f(x_0)$ **negative definite** ⇒ strict local **maximum**
> - $H_f(x_0)$ **indefinite** (eigenvalues of mixed sign) ⇒ **saddle point**
> - $H_f(x_0)$ semidefinite (some eigenvalue $= 0$) ⇒ test inconclusive

## 12.10 The inverse function theorem

> [!theorem] Inverse function theorem
> Let $f: \Omega \subseteq \mathbb{R}^d \to \mathbb{R}^d$ be $C^1$ and $\det J_f(x_0) \neq 0$. Then there is an open neighborhood $U$ of $x_0$ such that
> 1. $f|_U$ is bijective onto an open set $V = f(U)$.
> 2. $f^{-1}: V \to U$ is also $C^1$.
> 3. $J_{f^{-1}}(f(x)) = \big(J_f(x)\big)^{-1}$.

## 12.11 The implicit function theorem

> [!theorem] Implicit function theorem
> Let $F: \mathbb{R}^d \times \mathbb{R}^k \to \mathbb{R}^k$ be $C^1$ with $F(x_0, y_0) = 0$ and $\det\!\big(\frac{\partial F}{\partial y}(x_0, y_0)\big) \neq 0$. Then there is a neighborhood of $x_0$ on which one can solve $F(x, y) = 0$ for $y$ as a $C^1$ function of $x$: $y = g(x)$, with
> $$Dg(x) = -\left(\frac{\partial F}{\partial y}\right)^{-1}\!\left(\frac{\partial F}{\partial x}\right)$$

> [!example] 1D version
> If $F(x, y) = x^2 + y^2 - 1 = 0$ defines the unit circle, then $\frac{\partial F}{\partial y} = 2y \neq 0$ except at $y = 0$. So we can express $y = \pm\sqrt{1 - x^2}$ except at $(\pm 1, 0)$.

## 12.12 Lagrange multipliers (constrained optimization)

To extremize $f(x)$ subject to $g(x) = 0$, look for $x^*$ and a scalar $\lambda$ with
$$\nabla f(x^*) = \lambda \nabla g(x^*), \qquad g(x^*) = 0$$

Geometrically: at the extremum, the level set of $f$ is tangent to the constraint set.

---

# 13 · Multivariable integration

## 13.1 The double integral

For a continuous $f: R \to \mathbb{R}$ on a rectangle $R = [a,b]\times[c,d]$, partition $R$ into small rectangles of area $\Delta A_{ij}$, pick sample points $(\xi_{ij}, \eta_{ij})$, and form
$$\sum_{i,j} f(\xi_{ij}, \eta_{ij})\, \Delta A_{ij}$$
The limit, as the partition becomes finer, is the **double integral**
$$\iint_R f(x, y)\,dA = \int\!\!\int_R f(x, y)\,dx\,dy$$

## 13.2 Fubini's theorem

> [!theorem] Fubini
> For continuous $f$ on $R = [a,b] \times [c,d]$:
> $$\iint_R f\,dA = \int_a^b\!\!\left(\int_c^d f(x, y)\,dy\right)dx = \int_c^d\!\!\left(\int_a^b f(x, y)\,dx\right)dy$$

You can compute a double integral as **two iterated single integrals**, in either order.

> [!example]
> $\displaystyle\iint_{[0,1]^2}\! xy\,dA = \int_0^1\!\!\int_0^1 xy\,dy\,dx = \int_0^1\! \tfrac{x}{2}\,dx = \tfrac{1}{4}$.

## 13.3 Double integrals over general regions

For a region $D$ between two graphs $g_1(x) \leq y \leq g_2(x)$ on $[a, b]$:
$$\iint_D f\,dA = \int_a^b\!\!\int_{g_1(x)}^{g_2(x)} f(x, y)\,dy\,dx$$

(Likewise with the order of integration swapped.)

## 13.4 Change of variables (substitution in higher dimensions)

> [!theorem] Transformation formula
> If $\Phi: \Omega \to \Phi(\Omega)$ is a $C^1$ bijection between open sets in $\mathbb{R}^d$ and $f$ is integrable:
> $$\int_{\Phi(\Omega)} f(\mathbf{y})\,d\mathbf{y} = \int_{\Omega} f(\Phi(\mathbf{x}))\, |\det J_\Phi(\mathbf{x})|\,d\mathbf{x}$$
> The factor $|\det J_\Phi|$ is the **Jacobian determinant** — it's the local volume-stretch factor.

### Polar coordinates ($d = 2$)

$x = r\cos\theta,\;\; y = r\sin\theta,\;\;\; |\det J| = r$
$$\iint f(x, y)\,dx\,dy = \iint f(r\cos\theta, r\sin\theta)\,r\,dr\,d\theta$$

### Cylindrical coordinates ($d = 3$)

$x = r\cos\theta,\; y = r\sin\theta,\; z = z;\;\; |\det J| = r$

### Spherical coordinates ($d = 3$)

$x = r\sin\varphi\cos\theta,\; y = r\sin\varphi\sin\theta,\; z = r\cos\varphi,\;\; |\det J| = r^2 \sin\varphi$
$$\iiint f\,dV = \int\!\!\int\!\!\int f\, r^2 \sin\varphi\,dr\,d\varphi\,d\theta$$

> [!example] Volume of a ball of radius $R$
> $$V = \int_0^{2\pi}\!\!\int_0^\pi\!\!\int_0^R r^2\sin\varphi\,dr\,d\varphi\,d\theta = 2\pi \cdot 2 \cdot \frac{R^3}{3} = \frac{4}{3}\pi R^3 \;\checkmark$$

## 13.5 Jordan content (a notion of "volume")

A bounded set $A \subset \mathbb{R}^d$ is **Jordan measurable** if $\chi_A$ is Riemann integrable, and its volume (Jordan content) is
$$\mathrm{vol}(A) := \int \chi_A = \int_A 1\,d\mathbf{x}$$

This generalizes "length, area, volume" to higher dimensions.

---

# 14 · Vector calculus — Green, Stokes, Gauß

This is the spectacular finale: three theorems that all say the same thing in different dimensions.

## 14.1 Vector fields and conservativity

> [!definition] Vector field
> A **vector field** on $\Omega \subseteq \mathbb{R}^d$ is a map $\mathbf{F}: \Omega \to \mathbb{R}^d$. Imagine attaching an arrow to each point of space.

> [!definition] Conservative field, potential
> A vector field $\mathbf{F}$ is **conservative** if there exists a scalar function (a **potential**) $\varphi: \Omega \to \mathbb{R}$ with
> $$\mathbf{F} = \nabla \varphi$$

> [!theorem] Necessary condition (integrability)
> If $\mathbf{F} = (F_1, \dots, F_d)$ is conservative and $C^1$, then
> $$\frac{\partial F_i}{\partial x_j} = \frac{\partial F_j}{\partial x_i}\quad \text{for all } i, j$$
> (because mixed partials of $\varphi$ commute by Schwarz's theorem). On simply connected domains, this condition is also **sufficient**.

## 14.2 Line integrals

> [!definition] Line integral
> For a $C^1$ curve $\gamma: [a, b] \to \mathbb{R}^d$ and a continuous vector field $\mathbf{F}$:
> $$\int_\gamma \mathbf{F}\cdot d\mathbf{s} := \int_a^b \mathbf{F}(\gamma(t)) \cdot \gamma'(t)\,dt$$

Physical interpretation: the **work** done by force $\mathbf{F}$ along the path $\gamma$.

> [!theorem] Fundamental theorem for line integrals
> If $\mathbf{F} = \nabla \varphi$, then
> $$\int_\gamma \mathbf{F}\cdot d\mathbf{s} = \varphi(\gamma(b)) - \varphi(\gamma(a))$$
> The integral depends only on the **endpoints** — the path is irrelevant. In particular, $\oint_\gamma \mathbf{F}\cdot d\mathbf{s} = 0$ for closed curves.

## 14.3 Three differential operators

For a vector field $\mathbf{F} = (F_1, F_2, F_3)$ in $\mathbb{R}^3$:

> [!definition] Divergence and curl
> $$\mathrm{div}\,\mathbf{F} := \nabla \cdot \mathbf{F} = \frac{\partial F_1}{\partial x} + \frac{\partial F_2}{\partial y} + \frac{\partial F_3}{\partial z}$$
> $$\mathrm{curl}\,\mathbf{F} := \nabla \times \mathbf{F} = \begin{pmatrix} \partial_y F_3 - \partial_z F_2 \\ \partial_z F_1 - \partial_x F_3 \\ \partial_x F_2 - \partial_y F_1 \end{pmatrix}$$

> [!info] Physical meaning
> - **Divergence** measures how much $\mathbf{F}$ "spreads out" or sources/sinks at a point.
> - **Curl** measures the "rotation" of $\mathbf{F}$ — set a tiny paddle wheel in the field; the curl tells you which way and how fast it spins.

## 14.4 Green's theorem (2D)

> [!theorem] Green's theorem
> Let $D \subset \mathbb{R}^2$ be a "nice" bounded region with boundary $\partial D$ traversed counterclockwise. For $C^1$ functions $P, Q$ on $D$:
> $$\oint_{\partial D} (P\,dx + Q\,dy) = \iint_D \left(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\right)dA$$

> [!example] Area via Green
> Choose $P = -\tfrac{y}{2}$, $Q = \tfrac{x}{2}$. Then $\partial_x Q - \partial_y P = 1$, so
> $$\mathrm{Area}(D) = \tfrac{1}{2}\oint_{\partial D} (x\,dy - y\,dx)$$

## 14.5 Stokes' theorem (curve in 3D bounding a surface)

> [!theorem] Stokes' theorem
> Let $S \subset \mathbb{R}^3$ be a smooth oriented surface with boundary $\partial S$ (the orientation rule: if you walk along $\partial S$ with the surface normal pointing "up", the surface is on your left). For a $C^1$ vector field $\mathbf{F}$:
> $$\oint_{\partial S} \mathbf{F} \cdot d\mathbf{s} = \iint_S (\nabla \times \mathbf{F}) \cdot d\mathbf{S}$$

> [!info] Reading
> The circulation of $\mathbf{F}$ around the boundary equals the total curl of $\mathbf{F}$ piercing through the surface. Green's theorem is the 2D special case.

## 14.6 Gauß's theorem (volume bounded by a surface)

> [!theorem] Gauß / divergence theorem
> Let $V \subset \mathbb{R}^3$ be a bounded volume with smooth boundary $\partial V$ (outward-oriented). For a $C^1$ vector field $\mathbf{F}$:
> $$\oiint_{\partial V} \mathbf{F}\cdot d\mathbf{S} = \iiint_V \nabla \cdot \mathbf{F}\,dV$$

> [!info] Reading
> Total flux of $\mathbf{F}$ out through the boundary surface = total source/sink strength of $\mathbf{F}$ in the volume. This is **the** governing principle of fluid flow, electrostatics (Gauß's law for electric fields), and heat transfer.

## 14.7 The grand unification

All these theorems follow the same template:
$$\boxed{\;\;\int_{\partial \Omega} \omega = \int_{\Omega} d\omega \;\;}$$
*"The integral of a thing over the boundary equals the integral of its derivative over the interior."*

Concretely:

| Setting | Statement |
| --- | --- |
| FTC (1D) | $\displaystyle\int_a^b f'(x)\,dx = f(b) - f(a)$ |
| FTC for line integrals | $\displaystyle\int_\gamma \nabla \varphi \cdot d\mathbf{s} = \varphi(\gamma(b)) - \varphi(\gamma(a))$ |
| Green (2D) | $\displaystyle\oint_{\partial D}\!P\,dx + Q\,dy = \iint_D (\partial_x Q - \partial_y P)\,dA$ |
| Stokes (3D) | $\displaystyle\oint_{\partial S}\mathbf{F}\cdot d\mathbf{s} = \iint_S (\nabla\!\times\!\mathbf{F})\cdot d\mathbf{S}$ |
| Gauß (3D) | $\displaystyle\oiint_{\partial V}\mathbf{F}\cdot d\mathbf{S} = \iiint_V \nabla\!\cdot\!\mathbf{F}\,dV$ |

In modern language (differential forms), they are **literally the same theorem** — Stokes' theorem on manifolds.

---

# 15 · The grand picture

## How it all fits together

Everything in analysis is built on the single concept of a **limit** ($\varepsilon$-$\delta$). From it, we get:

```
                    LIMITS (ε-δ)
                         │
        ┌────────────────┼──────────────────┐
        │                │                  │
   SEQUENCES         CONTINUITY         DERIVATIVES
   (limits of           (limits of      (limits of
    discrete)            functions)      diff. quotients)
        │                │                  │
        └────────────────┼──────────────────┘
                         │
                      INTEGRALS
                  (limits of Riemann sums)
                         │
                         ▼
              ┌─────────┴──────────┐
              │                    │
          TAYLOR                 ODEs
       (polynomial         (equations involving
        expansion)            derivatives)
              │                    │
              └────────┬───────────┘
                       │
                       ▼
              MULTIVARIABLE CALCULUS
            (gradient, Jacobian, Hessian)
                       │
                       ▼
                MULTIPLE INTEGRALS
              (Fubini, change of variables)
                       │
                       ▼
              VECTOR FIELD THEOREMS
              (Green, Stokes, Gauß)
                       │
                       ▼
       PARTIAL DIFFERENTIAL EQUATIONS
        (Laplace, wave, heat — Analysis 3)
```

## What every analyst keeps in their head

> [!success] The hall of fame
> 1. **Bolzano–Weierstrass** — bounded sequences have convergent subsequences.
> 2. **Cauchy criterion** — convergence is internal: terms huddle.
> 3. **Intermediate value theorem** — continuous functions hit every value in between.
> 4. **Extreme value theorem** — continuous + compact ⇒ max & min are attained.
> 5. **Mean value theorem** — average rate of change is achieved at some point.
> 6. **Fundamental theorem of calculus** — derivative and integral are inverses.
> 7. **Taylor's theorem** — every smooth function is *almost* a polynomial.
> 8. **Inverse function theorem** — non-degenerate maps are locally invertible.
> 9. **Implicit function theorem** — non-degenerate equations define functions.
> 10. **Fubini** — multiple integrals are iterated single integrals.
> 11. **Stokes' theorem** (in all its forms) — boundary integrals = derivative integrals.

## Final advice

- **Don't memorize — internalize.** Know *why* each theorem holds, and you'll know *when* to use it.
- **Always draw a picture.** Even high-dimensional intuition starts with a 2D sketch.
- **Keep $\varepsilon$ and $\delta$ at the center of your thinking.** They are the heartbeat of analysis.
- **Practice computation.** Theorems are proved; calculations are *trained*.

---

> *Sources synthesized in this guide:*
> - **M. Struwe**, *Analysis für Informatik*, Skript, ETH Zürich, 5. November 2010.
> - **F. Ziltener**, *Skript zu den Vorlesungen Analysis 1 und 2 für ITET und RW*, ETH Zürich, 21. Mai 2025.

> *Further reading:* Chr. Blatter, *Ingenieur-Analysis 1 und 2*; J. J. Duistermaat & J. A. C. Kolk, *Multidimensional Real Analysis I and II*.
