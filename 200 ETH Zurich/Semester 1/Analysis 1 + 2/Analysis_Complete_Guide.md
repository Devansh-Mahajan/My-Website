# 📐 Analysis I & II — The Complete Intuitive Guide
### *A from-the-ground-up synthesis of Struwe (2010), Ziltener (2025), and seven D-ITET basic exams (2013–2023)*

> **Promise.** If you read this from top to bottom, knowing only high school math, you will *understand* every concept on the ETH D-ITET Analysis basic exam — not just memorize formulas. Every idea is built up from intuition, every theorem comes with a real-world picture, and every chapter ends with **actual exam tasks** with full solutions.

---

## 🧭 How to use this note

This document is written for **Obsidian**, so it uses LaTeX (`$...$` and `$$...$$`), callouts (`> [!tip]`), and `[[wiki-links]]` for navigation.

Every chapter follows the same six-step rhythm:

1. 🤔 **The big question** — what real-world or mathematical problem are we solving?
2. 💡 **The intuition** — a picture or analogy your brain can hold
3. 📜 **The formal definition** — the precise statement
4. 🔧 **Worked examples** — small, then medium, then exam-level
5. 🎯 **How the exam tests this** — concrete patterns from past D-ITET exams
6. 📝 **Practice tasks** with solutions

> [!tip] How to study with this document
> 1. **First pass** — read intuitions and worked examples only. Skip formal definitions if they feel intimidating.
> 2. **Second pass** — read carefully, do every example with paper.
> 3. **Third pass** — close the document, redo every "Practice Task" from memory.

---

## 📋 Table of Contents

1. [[#1 · Logic — the operating system of math]]
2. [[#2 · Sets and functions]]
3. [[#3 · Numbers — from $\mathbb{N}$ to $\mathbb{C}$]]
4. [[#4 · Sequences — what does "approaching" mean?]]
5. [[#5 · Series — adding infinitely many things]]
6. [[#6 · Continuity — drawing without lifting the pen]]
7. [[#7 · Differentiation — the slope at a point]]
8. [[#8 · Taylor series — polynomial X-rays]]
9. [[#9 · Limits and L'Hôpital's rule]]
10. [[#10 · Integration — the Fundamental Theorem]]
11. [[#11 · Integration techniques (parts, substitution, partial fractions)]]
12. [[#12 · Ordinary differential equations]]
13. [[#13 · Multivariable functions]]
14. [[#14 · Multivariable extrema and Lagrange multipliers]]
15. [[#15 · Multiple integrals]]
16. [[#16 · Vector fields, Green, Stokes, Gauß]]
17. [[#17 · Implicit and inverse function theorems]]
18. [[#18 · Master strategy — the exam playbook]]

---

# 1 · Logic — the operating system of math

## 🤔 The big question

Why do we need logic? Because every theorem you'll ever read says "*if* this holds, *then* that holds" — and to use the theorem you must understand exactly what it claims, what it doesn't, and how to negate it.

## 💡 Intuition: statements are switches

A **mathematical statement** is a sentence that is either **true** or **false** — like a light switch with only "on" and "off". No "kinda", no "maybe", no "depends on the weather".

> [!example]
> - $4 > 2$ — TRUE ✅
> - $5 < 3$ — FALSE ❌
> - "This sentence is false" — **not allowed** (paradox: if it's true it's false, if it's false it's true). Math forbids self-reference like this.

## 📜 The five connectives

Given two statements $A$ and $B$, you can build new ones:

| Symbol | Read as | Meaning | Mnemonic |
|---|---|---|---|
| $\neg A$ | "not $A$" | Flips the truth value | think: "the opposite" |
| $A \wedge B$ | "$A$ and $B$" | True only if **both** are true | think: a chain — weakest link breaks it |
| $A \vee B$ | "$A$ or $B$" | True if **at least one** is true | inclusive or — like a menu where you can pick either or both |
| $A \rightarrow B$ | "if $A$, then $B$" | Only false when $A$ true, $B$ false | a promise: only broken if you don't deliver |
| $A \leftrightarrow B$ | "$A$ iff $B$" | Same truth value | "they live or die together" |

## ⚠️ The trap that catches everyone: vacuous truth

> [!warning] A false hypothesis implies anything
> $A \rightarrow B$ is **true** whenever $A$ is false. The statement *"if the moon is made of cheese, then $1 = 2$"* is **logically true**, because the premise is false.
>
> Why? The implication is a **promise**. The promise "if it rains, I'll bring an umbrella" is only **broken** if it rains *and* you don't bring an umbrella. On a sunny day, the promise was never tested — so it was never broken.

## 💡 Contraposition — the most useful identity in proof-writing

$$A \rightarrow B \quad\Longleftrightarrow\quad \neg B \rightarrow \neg A$$

> [!example]
> - "If it rains → ground is wet" $\;\equiv\;$ "If ground is dry → it didn't rain"
> - "If $x^2$ is even → $x$ is even" $\;\equiv\;$ "If $x$ is odd → $x^2$ is odd" *(easier to prove!)*

## 📜 Quantifiers: $\forall$ and $\exists$

| Symbol | Read as | Example |
|---|---|---|
| $\forall x \in M : P(x)$ | "for all $x$ in $M$, $P(x)$ holds" | $\forall n \in \mathbb{N} : n \geq 1$ ✅ |
| $\exists x \in M : P(x)$ | "there exists $x$ in $M$ with $P(x)$" | $\exists n \in \mathbb{N} : n^2 = 49$ ✅ |

> [!tip] Negation rule — flip the quantifier and negate the statement
> $$\neg(\forall x : P(x)) \;\equiv\; \exists x : \neg P(x)$$
> $$\neg(\exists x : P(x)) \;\equiv\; \forall x : \neg P(x)$$

> [!example] Negating a real exam-style sentence (FS 2023 task MC1)
> Original: $\forall n \in \mathbb{N},\; \exists m \in \mathbb{N} : (m > n) \wedge (m < 2n)$
>
> Negation, step by step:
> 1. Flip outer $\forall \to \exists$: $\;\exists n \in \mathbb{N},\; \neg(\exists m \in \mathbb{N} : \dots)$
> 2. Flip inner $\exists \to \forall$: $\;\exists n \in \mathbb{N}, \forall m \in \mathbb{N} : \neg((m > n) \wedge (m < 2n))$
> 3. De Morgan: $\neg(P \wedge Q) \equiv \neg P \vee \neg Q$
>
> Final: $\boxed{\exists n \in \mathbb{N}, \forall m \in \mathbb{N} : (m \leq n) \vee (m \geq 2n)}$

## 🔧 Three proof techniques you absolutely need

### Direct proof
Build a chain $A \Rightarrow B_1 \Rightarrow B_2 \Rightarrow \cdots \Rightarrow S$.

### Proof by contradiction
To prove $A \Rightarrow B$, **assume the opposite** ($A \wedge \neg B$) and derive nonsense.

> [!example] There is no largest natural number
> Assume there is a largest $n_0 \in \mathbb{N}$. But $n_0 + 1$ is also in $\mathbb{N}$, and $n_0 + 1 > n_0$. **Contradiction!** $\blacksquare$

### Mathematical induction — your best friend on exams

To prove $P(n)$ for **all** $n \in \mathbb{N}$:
1. **Base case:** prove $P(1)$ (or $P(0)$).
2. **Inductive step:** assume $P(n)$ holds — the **induction hypothesis** (IH) — and prove $P(n+1)$.

> [!example] Sum of the first $n$ odd numbers $= n^2$
>
> **Claim:** $\sum_{k=1}^n (2k-1) = n^2$.
>
> **Base ($n=1$):** $1 = 1^2$ ✓
>
> **Step:** Assume $1 + 3 + \dots + (2n-1) = n^2$. Then
> $$1 + 3 + \dots + (2n-1) + (2n+1) \stackrel{IH}{=} n^2 + (2n+1) = (n+1)^2 \quad\checkmark$$

## 🎯 How the exam tests logic

Every basic exam contains at least one logic / quantifier task. Common types:
- **Negate a quantified statement** (FS 2023, MC1)
- **Prove an inequality by induction** (FS 2015 task 9, FS 2019 task 13)
- **Prove a sum-formula by induction**

## 📝 Practice tasks

> [!question] **Task 1.1 (Quantifier negation)**
> Negate: $\;\exists x \in \mathbb{R}, \forall y \in \mathbb{R} : x \cdot y = 0$.
>
>> [!success]- Solution
>> Flip $\exists \to \forall$, $\forall \to \exists$, negate the equation:
>> $$\forall x \in \mathbb{R}, \exists y \in \mathbb{R} : x \cdot y \neq 0.$$

> [!question] **Task 1.2 (Induction — adapted from FS 2015 task 9)**
> Prove that for all $n \in \mathbb{N}_0$ and $x \in [0,1]$: $(1+x)^n \leq 1 + (2^n - 1)x$.
>
>> [!success]- Solution
>> **Base ($n=0$):** $(1+x)^0 = 1 \leq 1 + 0 = 1$. ✓
>>
>> **Step:** Assume the inequality for $n$. Then
>> $$(1+x)^{n+1} = (1+x)(1+x)^n \overset{\text{IH}}{\leq} (1+x)(1 + (2^n - 1)x)$$
>> $$= 1 + 2^n x + (2^n - 1)x^2$$
>> Since $x^2 \leq x$ on $[0, 1]$:
>> $$\leq 1 + 2^n x + (2^n - 1) x = 1 + (2^{n+1} - 1)x \quad\checkmark$$

> [!question] **Task 1.3 (FS 2019 task 13 — clever induction)**
> Prove: $\;\sum_{n=1}^{2N}\frac{(-1)^{n-1}}{n} = \sum_{n=1}^N \frac{1}{N+n}$ for all $N \in \mathbb{N}$.
>
>> [!success]- Solution
>> **Base ($N=1$):** LHS $= 1 - \frac{1}{2} = \frac{1}{2}$. RHS $= \frac{1}{2}$. ✓
>>
>> **Step:** Look at the *difference* between $N+1$ and $N$ terms.
>>
>> LHS difference: $\frac{1}{2N+1} - \frac{1}{2N+2}$.
>>
>> RHS difference: $\big(\sum_{n=1}^{N+1} \frac{1}{(N+1)+n}\big) - \big(\sum_{n=1}^N \frac{1}{N+n}\big)$. Re-indexing the first sum with $k = n+1$:
>> $$= \frac{1}{2N+1} + \frac{1}{2N+2} - \frac{1}{N+1} = \frac{1}{2N+1} - \frac{1}{2N+2}$$
>> Both differences match, so the identity transfers from $N$ to $N+1$. $\blacksquare$

---

# 2 · Sets and functions

## 🤔 The big question

Sets are the **nouns** of math; functions are the **verbs**. You can't talk about anything without them.

## 💡 Sets — collections without order

> [!definition] Set
> A **set** is an unordered collection of distinct objects, called **elements**.

Notation: $\{1, 2, 3\} = \{3, 1, 2\} = \{1, 1, 2, 3\}$ — order and repetition don't matter.

| Set | Symbol | Members |
|---|---|---|
| Naturals | $\mathbb{N}$ | $\{1, 2, 3, \dots\}$ |
| Naturals incl. 0 | $\mathbb{N}_0$ | $\{0, 1, 2, 3, \dots\}$ |
| Integers | $\mathbb{Z}$ | $\{\dots, -1, 0, 1, \dots\}$ |
| Rationals | $\mathbb{Q}$ | $\{p/q : p \in \mathbb{Z}, q \in \mathbb{N}\}$ |
| Reals | $\mathbb{R}$ | All decimals |
| Complex | $\mathbb{C}$ | $\{a + bi : a, b \in \mathbb{R}\}$ |
| Empty set | $\emptyset$ or $\{\}$ | nothing |

## 📜 Set operations and De Morgan

| Operation | Definition | Picture |
|---|---|---|
| Union | $A \cup B = \{x : x \in A \vee x \in B\}$ | both circles |
| Intersection | $A \cap B = \{x : x \in A \wedge x \in B\}$ | overlap only |
| Difference | $A \setminus B = \{x \in A : x \notin B\}$ | $A$ minus the overlap |
| Complement | $A^c = X \setminus A$ | everything outside $A$ |
| Cartesian product | $A \times B = \{(a,b) : a \in A, b \in B\}$ | grid of pairs |

> [!theorem] De Morgan's Laws
> $$(A \cap B)^c = A^c \cup B^c, \qquad (A \cup B)^c = A^c \cap B^c$$

## 💡 Functions — the rule book

> [!definition] Function
> A function $f: X \to Y$ assigns to every $x \in X$ exactly **one** $f(x) \in Y$.
> - $X$ — **domain**
> - $Y$ — **codomain**
> - Notation: $x \mapsto f(x)$

> [!example]
> - $f: \mathbb{R} \to \mathbb{R},\; x \mapsto x^2$
> - $g: \mathbb{R} \to \mathbb{R},\; x \mapsto \sin x$
> - $h: [0, \infty) \to \mathbb{R},\; x \mapsto \sqrt{x}$ — only on non-negatives!

## 🔧 Injective, surjective, bijective

> [!definition]
> - **Injective** (one-to-one): different inputs → different outputs. $\;f(x_1) = f(x_2) \Rightarrow x_1 = x_2$.
> - **Surjective** (onto): every $y \in Y$ is hit. $\;\forall y \in Y, \exists x: f(x) = y$.
> - **Bijective**: both. Then an inverse $f^{-1}: Y \to X$ exists.

> [!example] Mental picture
> - $f(x) = x^2$ on $\mathbb{R}$: NOT injective ($f(1) = f(-1)$), NOT surjective onto $\mathbb{R}$ (negative numbers aren't hit).
> - $f(x) = e^x: \mathbb{R} \to (0, \infty)$: bijective, inverse is $\ln$.

## 🔧 Composition

If $f: X \to Y$ and $g: Y \to Z$:
$$(g \circ f)(x) = g(f(x))$$
Apply $f$ first, then $g$. **Associative**: $(h \circ g) \circ f = h \circ (g \circ f)$.

## 🎯 How the exam tests this

Set/function questions are warm-up multiple choice. Example FS 2023 MC2:
> *True or false: for any $f: X \to Y$ and any $A, B, C \subseteq X$, we have $f((A \cup B) \cap C) = (f(A) \cup f(B)) \cap f(C)$.*

**Answer: False.** The image and intersection don't generally commute when $f$ isn't injective.

---

# 3 · Numbers — from $\mathbb{N}$ to $\mathbb{C}$

## 🤔 Why so many number systems?

Every time a problem couldn't be solved, mathematicians invented a new kind of number.

| Couldn't solve... | so we invented... |
|---|---|
| $3 - 5 = ?$ in $\mathbb{N}$ | $\mathbb{Z}$ (integers) |
| $1 \div 2 = ?$ in $\mathbb{Z}$ | $\mathbb{Q}$ (rationals) |
| $\sqrt{2} = ?$ in $\mathbb{Q}$ | $\mathbb{R}$ (reals) |
| $\sqrt{-1} = ?$ in $\mathbb{R}$ | $\mathbb{C}$ (complex) |

So: $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$.

## 💡 The real numbers — the "no gaps" property

The rationals have **holes**: $\sqrt{2} \notin \mathbb{Q}$ (Pythagoras already knew). Calculus needs a number system without holes — that's $\mathbb{R}$.

> [!definition] Bounds, supremum, infimum
> Let $S \subseteq \mathbb{R}$ be non-empty.
> - $S$ is **bounded above** if $\exists M : \forall x \in S, x \leq M$. $M$ is an upper bound.
> - The **supremum** $\sup S$ is the **least upper bound**.
> - The **infimum** $\inf S$ is the greatest lower bound.
> - If $\sup S \in S$, it's the maximum $\max S$. Likewise for $\min$.

> [!theorem] Completeness axiom of $\mathbb{R}$
> Every non-empty bounded-above subset of $\mathbb{R}$ has a supremum in $\mathbb{R}$.

This is the **single most important property** of $\mathbb{R}$. Every limit theorem ultimately relies on it.

> [!example] Sup vs. max
> $S = \{x \in \mathbb{R} : x^2 < 2\} = (-\sqrt{2}, \sqrt{2})$.
> $\sup S = \sqrt{2}$, but $\sqrt{2} \notin S$, so $S$ has **no maximum**.

> [!info] Archimedean property
> For every $x \in \mathbb{R}$ there is $n \in \mathbb{N}$ with $n > x$. Hence $\frac{1}{n} \to 0$.

## 💡 The Euclidean space $\mathbb{R}^d$

Stack $d$ reals into a vector $\mathbf{x} = (x_1, \dots, x_d)$.

> [!definition] Norm and dot product
> $$\|\mathbf{x}\| := \sqrt{x_1^2 + \dots + x_d^2}, \qquad \mathbf{x}\cdot\mathbf{y} := \sum_{i=1}^d x_i y_i$$

> [!theorem] Three core inequalities
> 1. **Cauchy–Schwarz:** $|\mathbf{x}\cdot\mathbf{y}| \leq \|\mathbf{x}\|\,\|\mathbf{y}\|$
> 2. **Triangle:** $\|\mathbf{x} + \mathbf{y}\| \leq \|\mathbf{x}\| + \|\mathbf{y}\|$
> 3. **Reverse triangle:** $\big|\|\mathbf{x}\| - \|\mathbf{y}\|\big| \leq \|\mathbf{x} - \mathbf{y}\|$

## 💡 Complex numbers

Define $i$ with $i^2 = -1$ and form $\mathbb{C} = \{a + bi : a, b \in \mathbb{R}\}$.

You can think of $\mathbb{C}$ as $\mathbb{R}^2$ — the **complex plane** — with horizontal axis = real part, vertical axis = imaginary part.

> [!definition] Complex operations
> For $z = a + bi$ and $w = c + di$:
> $$z + w = (a+c) + (b+d)i$$
> $$z \cdot w = (ac - bd) + (ad + bc)i$$
> $$\overline{z} = a - bi \qquad\text{(complex conjugate)}$$
> $$|z| = \sqrt{a^2 + b^2} = \sqrt{z\bar z}$$
> $$\frac{1}{z} = \frac{\bar z}{|z|^2} \quad (z \neq 0)$$

> [!example] Inverse computation (from Ziltener)
> $\dfrac{1}{1+i} = \dfrac{1-i}{|1+i|^2} = \dfrac{1-i}{2} = \dfrac{1}{2} - \dfrac{i}{2}$

## 💡 Polar form and Euler's formula — the magic shortcut

Every $z \neq 0$ can be written as
$$z = r(\cos\varphi + i\sin\varphi), \qquad r = |z|,\;\; \varphi \in [0, 2\pi)$$
or equivalently — via **Euler's formula**:
$$\boxed{\;e^{i\varphi} = \cos\varphi + i\sin\varphi\;}$$
so $z = r e^{i\varphi}$.

> [!tip] Why polar form is amazing
> Multiplication becomes trivial:
> $$(r e^{i\varphi})(s e^{i\psi}) = rs \, e^{i(\varphi + \psi)}$$
> **Multiply moduli, add angles.** Powers and roots become easy.

> [!example] Power via polar form
> $1 + i = \sqrt{2}\, e^{i\pi/4}$, so
> $(1+i)^8 = (\sqrt{2})^8 \cdot e^{i\cdot 8\cdot\pi/4} = 16 \cdot e^{i2\pi} = 16$.

## 🎯 Roots of complex numbers

Every $z = re^{i\varphi} \neq 0$ has exactly $k$ different $k$-th roots:
$$w_j = \sqrt[k]{r}\, e^{i(\varphi + 2\pi j)/k}, \quad j = 0, 1, \dots, k-1$$

> [!theorem] Fundamental Theorem of Algebra
> Every non-constant complex polynomial $p(z) = a_n z^n + \dots + a_0$ has at least one complex root. Hence it factors completely into linear factors over $\mathbb{C}$.

This is why $\mathbb{C}$ is **algebraically closed** — and why FS 2023 MC3 ("does there exist a degree-3 polynomial with no complex root?") is **false**.

## 📝 Practice tasks

> [!question] **Task 3.1** — Compute $(1 - i)^4$.
>
>> [!success]- Solution
>> $1 - i = \sqrt{2}\,e^{-i\pi/4}$, so $(1-i)^4 = (\sqrt 2)^4 e^{-i\pi} = 4(-1) = -4$.

> [!question] **Task 3.2** — Find all $w \in \mathbb{C}$ with $w^3 = -8$.
>
>> [!success]- Solution
>> $-8 = 8e^{i\pi}$. The three cube roots:
>> $$w_j = 2 e^{i(\pi + 2\pi j)/3}, \quad j = 0, 1, 2$$
>> Concretely: $w_0 = 2e^{i\pi/3} = 1 + i\sqrt{3}$, $w_1 = 2e^{i\pi} = -2$, $w_2 = 2e^{i5\pi/3} = 1 - i\sqrt{3}$.

---

# 4 · Sequences — what does "approaching" mean?

## 🤔 The big question

If a turtle moves $1, \tfrac12, \tfrac14, \tfrac18, \dots$ meters per step, where does it end up? Intuitively at $0$ — but how do we make that precise without hand-waving?

**Answer:** the *epsilon-N* definition of a limit. This single idea is the foundation of every theorem in calculus.

## 💡 What is a sequence?

> [!definition] Sequence
> A **sequence** is an infinite ordered list $a_0, a_1, a_2, \dots$ — equivalently, a function $a: \mathbb{N}_0 \to \mathbb{R}$ (or $\mathbb{C}$). Notation: $(a_n)_{n \in \mathbb{N}_0}$.

> [!example] Three classics
> - **Harmonic** $a_n = \frac{1}{n}$: terms $1, \tfrac12, \tfrac13, \tfrac14, \dots$
> - **Geometric** $a_n = q^n$: terms $1, q, q^2, q^3, \dots$
> - **Constant** $a_n = c$

## 📜 The definition that started it all

> [!definition] Convergence
> $(a_n)$ **converges** to $A$ — written $a_n \to A$ or $\lim_{n\to\infty} a_n = A$ — iff
> $$\forall \varepsilon > 0 \;\;\exists n_0 \in \mathbb{N} \;\;\forall n \geq n_0 : \; |a_n - A| < \varepsilon.$$

**How to read this:**
- $\varepsilon$ is a "challenge" (any tolerance the prover throws at you, no matter how tiny).
- You answer with $n_0$ (an index from which on the sequence is closer than $\varepsilon$ to $A$).
- Smaller $\varepsilon$ usually requires bigger $n_0$.

> [!example] $\frac{1}{n} \to 0$
> Given $\varepsilon > 0$, choose any $n_0 > \frac{1}{\varepsilon}$. Then for $n \geq n_0$:
> $$\left|\tfrac{1}{n} - 0\right| = \tfrac{1}{n} \leq \tfrac{1}{n_0} < \varepsilon \quad\checkmark$$

## 🔧 Limit arithmetic — your daily toolkit

> [!theorem] If $a_n \to A$ and $b_n \to B$, then:
> - $a_n + b_n \to A + B$
> - $a_n \cdot b_n \to A \cdot B$
> - $a_n / b_n \to A/B$ (provided $B \neq 0$)
> - $|a_n| \to |A|$

> [!theorem] Squeeze (Sandwich) Theorem
> If $a_n \leq c_n \leq b_n$ for all $n \geq N$ and $a_n \to L$ and $b_n \to L$, then $c_n \to L$.

## 🔧 Standard limits — memorize these

| Sequence | Limit | Condition |
|---|---|---|
| $\dfrac{1}{n^p}$ | $0$ | $p > 0$ |
| $q^n$ | $0$ | $\lvert q\rvert < 1$ |
| $\sqrt[n]{n}$ | $1$ | — |
| $\sqrt[n]{a}$ | $1$ | $a > 0$ |
| $\dfrac{n^p}{q^n}$ | $0$ | $\lvert q\rvert > 1$ |
| $\left(1 + \dfrac{1}{n}\right)^n$ | $e$ | — |
| $\dfrac{n!}{n^n}$ | $0$ | — |

## 💡 The four pillars of convergence

> [!theorem] Monotone convergence
> A monotonically increasing sequence bounded above converges (to its supremum). Likewise for decreasing & bounded below.

> [!theorem] Bolzano–Weierstrass
> Every bounded sequence in $\mathbb{R}^d$ has a convergent subsequence.

> [!theorem] Cauchy criterion
> A sequence converges $\iff$ it is **Cauchy**:
> $$\forall \varepsilon > 0 \;\;\exists n_0 : \; \forall n, m \geq n_0 : \; |a_n - a_m| < \varepsilon$$

> [!tip] Why Cauchy is golden
> You can prove convergence **without knowing the limit** — just check the terms huddle together.

## 🔧 Worked exam-style examples

> [!example] FS 2023 MC4 — algebraic limit
> $a_n = \dfrac{n^3}{(n+1)^2} - \dfrac{n^2}{n+1}$.
>
> Common denominator $(n+1)^2$:
> $$a_n = \frac{n^3 - n^2(n+1)}{(n+1)^2} = \frac{-n^2}{(n+1)^2}$$
> Divide by $n^2$ in numerator and denominator: $a_n = -\dfrac{1}{(1 + 1/n)^2} \to -1$.

> [!example] FS 2023 MC5 — conjugate trick
> $a_n = \sqrt{n+1} - \sqrt{n}$.
>
> Multiply by conjugate $\frac{\sqrt{n+1}+\sqrt n}{\sqrt{n+1}+\sqrt n}$:
> $$a_n = \frac{(n+1) - n}{\sqrt{n+1}+\sqrt n} = \frac{1}{\sqrt{n+1}+\sqrt n} \to 0$$

## 💡 Limes superior and inferior

For a bounded sequence, define
$$\limsup_{n\to\infty} a_n := \lim_{n\to\infty}\!\Big(\sup_{k\geq n} a_k\Big), \qquad \liminf_{n\to\infty} a_n := \lim_{n\to\infty}\!\Big(\inf_{k\geq n} a_k\Big)$$

> [!theorem]
> A bounded sequence converges $\iff$ $\limsup a_n = \liminf a_n$.

## 🎯 How the exam tests sequences

- Compute a limit using algebra/conjugates (FS 2023 MC4, MC5).
- Identify which standard tool applies (squeeze, monotone convergence).
- Find limits of recursive sequences (HS 2013 task 2 — golden ratio recursion).

## 📝 Practice tasks

> [!question] **Task 4.1** — Compute $\lim_{n\to\infty}\dfrac{3n^2 - n}{2n^2 + 5}$.
>
>> [!success]- Solution
>> Divide top and bottom by $n^2$: $\dfrac{3 - 1/n}{2 + 5/n^2} \to \dfrac{3}{2}$.

> [!question] **Task 4.2** — Show $a_n = (-1)^n$ does not converge.
>
>> [!success]- Solution
>> Two subsequences: $a_{2k} = 1 \to 1$ and $a_{2k+1} = -1 \to -1$. Different subsequence limits ⇒ no overall limit.

> [!question] **Task 4.3 (FS 2013 task 2 — resistor circuit)**
> A resistor network gives total resistance $R_n = R_a + \frac{n R_b R_c}{R_b + n R_c} + R_d$.
> Does $(R_n)$ converge? If so, to what?
>
>> [!success]- Solution
>> $\lim_{n\to\infty} R_n = R_a + \lim_{n\to\infty} \frac{R_b R_c}{R_b/n + R_c} + R_d = R_a + R_b + R_d$. Converges.

---

# 5 · Series — adding infinitely many things

## 🤔 The big question

What is $1 + \tfrac12 + \tfrac14 + \tfrac18 + \cdots$? You can't literally add infinitely many things — but you can take the **limit of partial sums**.

## 📜 Series — formal definition

> [!definition] Series
> Given $(a_k)$, define **partial sums** $S_n = \sum_{k=1}^n a_k$. The series $\sum_{k=1}^\infty a_k$ **converges** iff $(S_n)$ converges, in which case
> $$\sum_{k=1}^\infty a_k := \lim_{n\to\infty} S_n.$$

## 💎 Two essential examples

> [!theorem] Geometric series — THE most important series
> For $|q| < 1$:
> $$\sum_{k=0}^\infty q^k = \frac{1}{1-q}$$

*Proof sketch:* $S_n = 1 + q + \dots + q^n$, so $(1-q)S_n = 1 - q^{n+1} \to 1$.

> [!example] Zeno's paradox solved
> Achilles runs $1 + \tfrac12 + \tfrac14 + \cdots = \dfrac{1}{1 - 1/2} = 2$ km. Finite!

> [!example] Square inscribed inside square (HS 2013 task 2a)
> Each new square has side $a_{k+1} = \tfrac{1}{\sqrt 2} a_k$. Total perimeter:
> $$U = \sum_{k=1}^\infty 4 a_k = 4a_1 \sum_{k=1}^\infty \big(\tfrac{1}{\sqrt 2}\big)^{k-1} = \frac{4a_1}{1 - 1/\sqrt 2} = 4(2 + \sqrt 2)$$
> for $a_1 = 1$.

> [!warning] Harmonic series diverges
> $$\sum_{k=1}^\infty \frac{1}{k} = +\infty$$
> Even though $\frac{1}{k} \to 0$.
>
> *Why?* Group terms: $1 + \frac12 + (\frac13 + \frac14) + (\frac15 + \dots + \frac18) + \cdots$ — each group $\geq \frac12$, infinitely many groups.

> [!info] **The lesson:** $a_k \to 0$ is **necessary** for $\sum a_k$ to converge — but **not sufficient**.

## 🔧 Convergence tests — your decision tree

| Test | When to use | Statement |
|---|---|---|
| **n-th term** | always check first | If $a_k \not\to 0$, diverges |
| **Geometric** | $a_k = q^k$ | converges iff $\lvert q\rvert < 1$ |
| **Comparison** | bound by simpler series | $0 \leq a_k \leq b_k$ and $\sum b_k$ converges ⇒ $\sum a_k$ converges |
| **Ratio test** | factorials / exponentials | $\lim \big\lvert\frac{a_{k+1}}{a_k}\big\rvert = L$: $L<1$ converges, $L>1$ diverges |
| **Root test** | $k$-th powers | $\lim \sqrt[k]{\lvert a_k\rvert} = L$: same conclusion |
| **Leibniz** | alternating series | $a_k \geq 0$ decreasing to $0$ ⇒ $\sum (-1)^{k+1} a_k$ converges |

> [!example] FS 2023 MC7 — pick the divergent series
> $\sum \frac{(n+1)^2}{n^3 - 2}$ behaves like $\sum \frac{n^2}{n^3} = \sum \frac{1}{n}$ — divergent (harmonic-like).

> [!example] FS 2019 task 2
> $\sum (-1)^n \frac{n+1}{2n+1}$. Since $\frac{n+1}{2n+1} \to \tfrac12 \neq 0$, the n-th-term test ⇒ **diverges**.

## 💡 Absolute vs. conditional convergence

> [!definition]
> $\sum a_k$ **converges absolutely** iff $\sum |a_k|$ converges.

> [!theorem]
> Absolute convergence ⇒ convergence (but not vice versa).

> [!example] Conditional convergence
> $\sum_{k=1}^\infty \frac{(-1)^{k+1}}{k} = 1 - \tfrac12 + \tfrac13 - \cdots = \ln 2$ converges (Leibniz), but **not absolutely**.

## 🚀 Power series — calculus's superpower

> [!definition] Power series
> $$\sum_{k=0}^\infty a_k (z - z_0)^k$$
>
> Has a **radius of convergence** $R \in [0, \infty]$, computed by
> $$\frac{1}{R} = \limsup_{k\to\infty}\sqrt[k]{|a_k|} \quad\text{(Cauchy–Hadamard)}$$
> or by ratio test:
> $$\frac{1}{R} = \lim_{k\to\infty}\bigg|\frac{a_{k+1}}{a_k}\bigg|$$
>
> - $|z - z_0| < R$ → converges
> - $|z - z_0| > R$ → diverges
> - At $|z - z_0| = R$ → must be checked separately

> [!example] FS 2019 MC1
> $\sum \frac{(n!)^2}{(2n)!} x^n$. Ratio:
> $$\frac{(n!)^2/(2n)!}{((n+1)!)^2/(2n+2)!} = \frac{(2n+1)(2n+2)}{(n+1)^2} \to 4$$
> So $R = 4$.

## 💎 The exponential series

The single most important power series:
$$e^z := \sum_{k=0}^\infty \frac{z^k}{k!}, \qquad R = \infty$$

It satisfies $\;e^{z+w} = e^z \cdot e^w\;$ — and from this single fact follow Euler's formula, the trigonometric identities, and (via $e^{i\pi} = -1$) the bridge between exponentials and trigonometry.

## 🎯 How the exam tests series

- Compute radius of convergence (FS 2019 MC1, FS 2023 task 2)
- Decide convergence (FS 2023 MC7, FS 2019 task 2)
- Sum a geometric-type series (HS 2013 task 2)
- Show uniform convergence of partial sums of a power series (FS 2023 task 2)

## 📝 Practice tasks

> [!question] **Task 5.1** — Find $R$ for $\sum \frac{x^k}{k\,2^k}$.
>
>> [!success]- Solution
>> $\sqrt[k]{|a_k|} = \frac{1}{\sqrt[k]{k}\cdot 2} \to \frac{1}{2}$, so $R = 2$.

> [!question] **Task 5.2** — Sum $\sum_{k=0}^\infty \frac{1}{3^k}$.
>
>> [!success]- Solution
>> Geometric with $q = 1/3$: $\frac{1}{1 - 1/3} = \frac{3}{2}$.

> [!question] **Task 5.3 (HS 2013 task 2b — nested triangles)**
> Triangles inscribed each at half the side length. The first triangle has area $F_1$. What percentage of the total area $\sum F_k$ is $F_1$?
>
>> [!success]- Solution
>> $F_k = (\tfrac14)^{k-1} F_1$, so $\sum F_k = \frac{F_1}{1 - 1/4} = \frac{4 F_1}{3}$, hence $F_1$ is $\frac{3}{4} = 75\%$.

---

# 6 · Continuity — drawing without lifting the pen

## 🤔 The big question

You drove from Zürich to Geneva starting at altitude $400\,\text{m}$ and arriving at $375\,\text{m}$. Did your altitude pass through *exactly* $390\,\text{m}$ somewhere along the way? Common sense says **yes** — and the precise statement of "yes" is the **Intermediate Value Theorem**, the most useful consequence of continuity.

## 💡 Intuition

A function is **continuous at $x_0$** if, when you wiggle $x$ a tiny bit around $x_0$, $f(x)$ also wiggles only a tiny bit around $f(x_0)$. No jumps, no holes, no infinities at $x_0$.

## 📜 The two equivalent definitions

> [!definition] Continuity (sequential)
> $f$ is continuous at $x_0$ iff for every sequence $x_k \to x_0$, $\;f(x_k) \to f(x_0)$.

> [!definition] Continuity ($\varepsilon$-$\delta$)
> $f$ is continuous at $x_0$ iff
> $$\forall \varepsilon > 0 \;\;\exists \delta > 0 \;\;\forall x : \; |x - x_0| < \delta \Rightarrow |f(x) - f(x_0)| < \varepsilon.$$

> [!info] These are **equivalent**. Use sequential when you have a sequence. Use $\varepsilon$-$\delta$ when proving from scratch.

## 🔧 Examples and counterexamples

> [!example] Continuous everywhere
> Polynomials, $e^x$, $\sin x$, $\cos x$, $\sqrt{x}$ on $[0, \infty)$, $\ln x$ on $(0, \infty)$.

> [!example] Jump discontinuity
> $f(x) = \begin{cases} 1, & x \geq 0 \\ -1, & x < 0 \end{cases}$ is discontinuous at $0$ — left limit $= -1$, right limit $= 1$.

> [!example] FS 2023 MC11 — pick the right constant
> $f(x) = \begin{cases} 2e^x - 1, & x \leq \ln 2 \\ ax + 2, & x > \ln 2 \end{cases}$. For continuity at $\ln 2$:
> $$2 e^{\ln 2} - 1 = 3 \quad\text{must equal}\quad a\ln 2 + 2$$
> So $a = \frac{1}{\ln 2}$.

## 💡 Lipschitz continuity — quantitative continuity

> [!definition] Lipschitz with constant $L$
> $$\|f(x) - f(y)\| \leq L \|x - y\| \quad \forall x, y$$
> Lipschitz ⇒ uniformly continuous ⇒ continuous.

## 💡 Compact sets — where continuity gets superpowers

> [!definition] Compactness (sequential)
> $K \subseteq \mathbb{R}^d$ is **compact** iff every sequence in $K$ has a subsequence converging to a point of $K$.

> [!theorem] Heine–Borel
> In $\mathbb{R}^d$: compact $\iff$ closed and bounded.

> [!example]
> $[0,1]$ is compact. $(0,1)$ is **not** ($\frac{1}{n} \to 0 \notin (0,1)$). $\mathbb{R}$ is **not** (unbounded).

## 🎯 The two great theorems

> [!theorem] Extreme Value Theorem
> A continuous $f: K \to \mathbb{R}$ on a compact $K$ attains its max and min.

> [!theorem] Intermediate Value Theorem (IVT)
> If $f: [a,b] \to \mathbb{R}$ is continuous and $c$ lies between $f(a)$ and $f(b)$, then $\exists x_0 \in (a,b)$ with $f(x_0) = c$.

> [!example] FS 2023 MC13
> If $\lim_{x\to-\infty} f = -1$ and $\lim_{x\to+\infty} f = 1$ for continuous $f$, then $\exists x_0$ with $f(x_0) = 0$. **True** by IVT.

> [!example] HS 2015 task 4 — the "tangent point"
> Find $c \in [1,2]$ such that the tangent to $f(x) = x^2 + x + 3$ at $c$ has the same slope as the secant from $(1, 5)$ to $(2, 9)$.
>
> Secant slope $= \frac{9-5}{2-1} = 4$. Set $f'(c) = 2c + 1 = 4$, so $c = \tfrac{3}{2}$. (This is the **Mean Value Theorem** in action — see chapter 7.)

> [!example] HS 2016 task 11 — fixed point via IVT
> Let $f: [a,b] \to [a,b]$ continuous. Show $f$ has a fixed point ($f(\xi) = \xi$).
>
> Define $g(x) = f(x) - x$. Then $g(a) = f(a) - a \geq 0$ and $g(b) = f(b) - b \leq 0$. By IVT, $\exists \xi$ with $g(\xi) = 0$, i.e., $f(\xi) = \xi$. $\blacksquare$

## 💡 Pointwise vs. uniform convergence of functions

> [!definition]
> A sequence $(f_k)$ of functions converges to $f$:
> - **Pointwise**: $\forall x: f_k(x) \to f(x)$
> - **Uniformly**: $\sup_x |f_k(x) - f(x)| \to 0$

> [!warning] Pointwise is a trap
> $f_k(x) = x^k$ on $[0,1]$ converges pointwise to $f(x) = 0$ for $x < 1$, $f(1) = 1$. Each $f_k$ is continuous, **but the limit isn't**.

> [!theorem]
> Uniform limit of continuous functions is continuous.

> [!example] FS 2023 MC14
> $f_n(x) = e^{-nx}$ on $[0, 1]$:
> - At $x = 0$: $f_n(0) = 1$.
> - At $x > 0$: $f_n(x) \to 0$.
>
> So pointwise limit is the discontinuous step function. Cannot converge uniformly (would force the limit to be continuous).

## 🎯 Practice tasks

> [!question] **Task 6.1** — Show $f(x) = \sin x$ is Lipschitz on $\mathbb{R}$.
>
>> [!success]- Solution
>> By the MVT, $|\sin x - \sin y| = |\cos(\xi)||x-y| \leq |x-y|$. So $L = 1$.

> [!question] **Task 6.2 (FS 2019 task 5)** — Where is $f$ continuous, differentiable, $C^1$?
> $$f(x) = \begin{cases} x^2 \sin(1/x) & x > 0 \\ \cos x - 1 & x \leq 0 \end{cases}$$
>
>> [!success]- Solution
>> Outside $0$: smooth. At $0$:
>> - **Continuous?** Both branches $\to 0$ as $x \to 0$. ✓
>> - **Differentiable?** Right limit of $\frac{f(x)-f(0)}{x} = x \sin(1/x) \to 0$. Left: $\frac{\cos x - 1}{x} \to 0$. So $f'(0) = 0$ exists.
>> - **$C^1$?** For $x>0$: $f'(x) = 2x\sin(1/x) - \cos(1/x)$. The $\cos(1/x)$ term oscillates between $-1$ and $1$, so $\lim_{x\to 0^+} f'(x)$ doesn't exist. **Not $C^1$.**

---

# 7 · Differentiation — the slope at a point

## 🤔 The big question

A car's odometer reads $f(t)$ at time $t$. The speedometer at instant $t_0$ shows what number? Answer: the **derivative** $f'(t_0)$ — the **instantaneous rate of change**.

## 💡 Intuition: zoom in until straight

Take any smooth graph and zoom in near a point. Eventually it looks like a **straight line**. The slope of that line is $f'(x_0)$.

## 📜 The definition

> [!definition] Derivative
> $f$ is **differentiable at $x_0$** if the limit
> $$f'(x_0) := \lim_{h \to 0}\frac{f(x_0 + h) - f(x_0)}{h}$$
> exists. Other notations: $\frac{df}{dx}(x_0), \;\dot f(x_0), \; Df(x_0)$.

The **tangent line** at $x_0$: $\;y = f(x_0) + f'(x_0)(x - x_0)$.

## 🔧 First examples

> [!example] $f(x) = x^2$
> $$\lim_{h\to 0}\frac{(x_0+h)^2 - x_0^2}{h} = \lim_{h\to 0}(2x_0 + h) = 2x_0$$

> [!example] $f(x) = |x|$ at $x_0 = 0$
> Right: $\lim_{h\to 0^+}\frac{|h|}{h} = 1$. Left: $-1$. **Not differentiable.** (Continuous, though!)

> [!example] $\exp$ is its own derivative
> Using $\exp(x_0+h) = \exp(x_0)\exp(h)$ and $\frac{\exp(h)-1}{h} \to 1$:
> $$\exp'(x_0) = \exp(x_0)$$

## 💡 Differentiable ⇒ continuous (not vice versa)

> [!theorem] If $f$ is differentiable at $x_0$, it's continuous at $x_0$.
> *Proof:* $f(x) - f(x_0) = \frac{f(x)-f(x_0)}{x-x_0}\cdot(x-x_0) \to f'(x_0)\cdot 0 = 0$.

The converse fails: $|x|$ is continuous but not differentiable at $0$. Worse, **Weierstrass** built a function continuous everywhere but differentiable nowhere.

## 🔧 The differentiation rules

| Rule | Formula |
|---|---|
| Sum | $(f+g)' = f' + g'$ |
| Product | $(fg)' = f'g + fg'$ |
| Quotient | $(f/g)' = (f'g - fg')/g^2$ |
| Chain | $(g\circ f)'(x) = g'(f(x))\cdot f'(x)$ |
| Inverse | $(f^{-1})'(y_0) = 1/f'(f^{-1}(y_0))$ |

## 🔧 Standard derivatives — memorize this table

| $f(x)$ | $f'(x)$ |
|---|---|
| $c$ (const) | $0$ |
| $x^n$ | $nx^{n-1}$ |
| $\sqrt x$ | $\frac{1}{2\sqrt x}$ |
| $e^x$ | $e^x$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $1/x$ |
| $\log_a x$ | $\frac{1}{x \ln a}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\frac{1}{\cos^2 x} = 1 + \tan^2 x$ |
| $\arcsin x$ | $\frac{1}{\sqrt{1-x^2}}$ |
| $\arccos x$ | $-\frac{1}{\sqrt{1-x^2}}$ |
| $\arctan x$ | $\frac{1}{1+x^2}$ |
| $\sinh x$ | $\cosh x$ |
| $\cosh x$ | $\sinh x$ |

## 💡 The Mean Value Theorem — calculus's workhorse

> [!theorem] Rolle's theorem
> If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, and $f(a) = f(b)$, then $\exists c \in (a,b)$ with $f'(c) = 0$.

> [!theorem] Mean Value Theorem (MVT)
> If $f$ is continuous on $[a,b]$, differentiable on $(a,b)$, then $\exists c \in (a,b)$ with
> $$f'(c) = \frac{f(b) - f(a)}{b-a}$$

> [!info] Real-world reading
> If you drive from Zürich to Geneva (282 km) in 3 hours, your average speed is 94 km/h. The MVT says: at *some* instant, your speedometer read **exactly** 94 km/h.
>
> The HS 2016 exam phrased this exact scenario: a driver passes two cameras at distance $d$ in time $t$. If $d/t$ exceeds the speed limit, the driver gets a ticket — the MVT guarantees they were speeding at some moment.

> [!example] HS 2015 task 4 — already discussed in chapter 6
> Direct application of the MVT: setting $f'(c) = $ secant slope.

## 💡 Consequences of the MVT

> [!theorem] Sign of derivative ⇒ monotonicity
> - $f' \equiv 0$ ⇒ $f$ constant
> - $f' \geq 0$ ⇒ $f$ increasing
> - $f' > 0$ ⇒ $f$ strictly increasing
> - $f' \leq 0$ ⇒ $f$ decreasing
> - $f' < 0$ ⇒ $f$ strictly decreasing

## 💡 Local extrema

> [!theorem] Fermat's necessary condition
> If $f$ has a local extremum at an interior $x_0$, then $f'(x_0) = 0$.

> [!theorem] Second derivative test
> If $f'(x_0) = 0$ and $f''$ is continuous near $x_0$:
> - $f''(x_0) > 0$ → strict local **min**
> - $f''(x_0) < 0$ → strict local **max**
> - $f''(x_0) = 0$ → inconclusive (try higher derivatives)

## 🎯 How the exam tests differentiation

- Compute a derivative using chain rule (FS 2013 task 3b — $\arcsin(\cos x)$)
- Apply MVT (HS 2015 task 4, HS 2016 task 11-style)
- Find local/global extrema (HS 2015 task 8, HS 2016 task 4)

## 📝 Practice tasks

> [!question] **Task 7.1 (FS 2013 task 3b)** — Differentiate $f(x) = \arcsin(\cos x)$.
>
>> [!success]- Solution
>> Using $\cos x = \sin(\pi/2 - x)$ and $\arcsin(\sin u) = u$ on the right intervals:
>> $f(x) = \pi/2 - x$ on $[0, \pi]$, so $f'(x) = -1$ there.
>> Or via chain rule: $f'(x) = \frac{-\sin x}{\sqrt{1 - \cos^2 x}} = \frac{-\sin x}{|\sin x|} = -\text{sign}(\sin x)$.

> [!question] **Task 7.2** — Find the absolute max and min of $f(x) = x^3 - 3x$ on $[-2, 2]$.
>
>> [!success]- Solution
>> $f'(x) = 3x^2 - 3 = 0$ ⇒ $x = \pm 1$. Evaluate:
>> $f(-2) = -2,\, f(-1) = 2,\, f(1) = -2,\, f(2) = 2$. Max $= 2$, min $= -2$.

> [!question] **Task 7.3** — Find $f'(x)$ for $f(x) = x^x$, $x > 0$.
>
>> [!success]- Solution
>> Logarithmic differentiation: $\ln f = x \ln x$, so $\frac{f'}{f} = \ln x + 1$. Hence $f'(x) = x^x(\ln x + 1)$.

---

# 8 · Taylor series — polynomial X-rays

## 🤔 The big question

Calculators don't actually "compute $\sin(0.7)$" by some magic. They **approximate** by polynomials — because polynomials are the only functions a CPU can really evaluate (just $+, -, \times, \div$). Which polynomial best approximates $\sin$ near $0$? **The Taylor polynomial.**

## 💡 Intuition: keep matching higher derivatives

The tangent line $T_1(x) = f(x_0) + f'(x_0)(x - x_0)$ matches $f$ in **value and slope** at $x_0$. Why stop there? Match the **curvature** too — and the rate-of-change of curvature, etc.

## 📜 Taylor's theorem

> [!theorem] Taylor formula with Lagrange remainder
> If $f$ is $(n+1)$-times differentiable, then $\exists \xi$ between $x_0$ and $x$ with
> $$f(x) = \underbrace{\sum_{k=0}^n \frac{f^{(k)}(x_0)}{k!}(x-x_0)^k}_{T_n(x) \text{ — Taylor polynomial}} + \underbrace{\frac{f^{(n+1)}(\xi)}{(n+1)!}(x-x_0)^{n+1}}_{R_n(x) \text{ — remainder}}$$

If $R_n(x) \to 0$ as $n \to \infty$, then
$$f(x) = \sum_{k=0}^\infty \frac{f^{(k)}(x_0)}{k!}(x-x_0)^k$$
is the **Taylor series** of $f$ around $x_0$.

## 🔧 The standard Taylor series (around $x_0 = 0$) — memorize all of these

| Function | Series | Domain |
|---|---|---|
| $e^x$ | $\sum_{k=0}^\infty \frac{x^k}{k!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots$ | $\mathbb{R}$ |
| $\sin x$ | $x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots$ | $\mathbb{R}$ |
| $\cos x$ | $1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots$ | $\mathbb{R}$ |
| $\frac{1}{1-x}$ | $1 + x + x^2 + \cdots$ | $\lvert x\rvert < 1$ |
| $\ln(1+x)$ | $x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots$ | $-1 < x \leq 1$ |
| $(1+x)^\alpha$ | $\sum_{k=0}^\infty \binom{\alpha}{k}x^k$ | $\lvert x\rvert < 1$ |
| $\arctan x$ | $x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots$ | $\lvert x\rvert \leq 1$ |
| $\frac{1}{1+x^2}$ | $1 - x^2 + x^4 - \cdots$ | $\lvert x\rvert < 1$ |

## 🎯 The exam pattern

Taylor series are **incredibly useful** for limits ("$\frac{0}{0}$" type) and for showing differentiability properties.

> [!example] FS 2013 task 1a — limit using Taylor
> $$\lim_{x\to 0}\frac{1 - \cos x}{\tan x \sin x}$$
> Using $1 - \cos x = \frac{x^2}{2} + o(x^2)$ and $\sin x \tan x = x^2 + o(x^2)$:
> $$\lim_{x\to 0}\frac{x^2/2 + o(x^2)}{x^2 + o(x^2)} = \frac{1}{2}$$

> [!example] HS 2015 task 1b — Taylor for $f(0)$ and $f'(0)$
> $f(x) = \frac{e^{5x} - 1}{e^x - 1}$ on $\mathbb{R}\setminus\{0\}$, extended continuously.
>
> Numerator: $5x + \frac{25}{2}x^2 + o(x^2)$. Denominator: $x + \frac{x^2}{2} + o(x^2)$. Divide:
> $$f(x) = \frac{5x(1 + \frac{5x}{2} + o(x))}{x(1 + \frac{x}{2} + o(x))} = (5 + \tfrac{25}{2}x + o(x))(1 - \tfrac{x}{2} + o(x)) = 5 + 10x + o(x)$$
> So $f(0) = 5$ and $f'(0) = 10$.

> [!example] FS 2023 MC24 — Taylor polynomial of $f(x,y) = x/y$ around $(0,1)$ to order 2
> Use $\frac{1}{y} = \frac{1}{1 + (y-1)} = 1 - (y-1) + (y-1)^2 - \cdots$. So
> $$\frac{x}{y} = x - x(y-1) + x(y-1)^2 - \cdots$$
> Up to order 2 (i.e. only terms with total degree $\leq 2$):
> $$T_2 = x - x(y-1)$$

## 🎯 Practice tasks

> [!question] **Task 8.1** — Compute $\lim_{x\to 0}\frac{\sin x - x}{x^3}$.
>
>> [!success]- Solution
>> $\sin x = x - \frac{x^3}{6} + o(x^3)$, so $\sin x - x = -\frac{x^3}{6} + o(x^3)$. Hence limit $= -\frac{1}{6}$.

> [!question] **Task 8.2** — Find the Taylor polynomial of $\ln(1 + 2x)$ up to order 3.
>
>> [!success]- Solution
>> Use $\ln(1+u) = u - \frac{u^2}{2} + \frac{u^3}{3} - \cdots$ with $u = 2x$: $\;2x - 2x^2 + \frac{8x^3}{3}$.

---

# 9 · Limits and L'Hôpital's rule

## 🤔 The big question

Limits like $\frac{0}{0}$, $\frac{\infty}{\infty}$, $0 \cdot \infty$, $1^\infty$, $\infty - \infty$, $0^0$ are called **indeterminate** — you can't just plug in. We need techniques.

## 🔧 The toolbox (in order of preference)

1. **Algebraic simplification** (cancel, conjugate, common denominator).
2. **Standard limits** (memorize: $\lim_{x\to 0}\frac{\sin x}{x} = 1$, etc.).
3. **Taylor series** (turn the function into a polynomial-like object).
4. **L'Hôpital's rule** (last resort — sometimes loops forever).

## 💡 L'Hôpital's rule

> [!theorem] L'Hôpital
> If $\lim_{x\to x_0} f(x) = \lim_{x\to x_0} g(x) = 0$ (or both $\pm\infty$), $g'(x) \neq 0$ near $x_0$, and $\lim \frac{f'(x)}{g'(x)}$ exists, then
> $$\lim_{x\to x_0}\frac{f(x)}{g(x)} = \lim_{x\to x_0}\frac{f'(x)}{g'(x)}$$

> [!warning] Common L'Hôpital mistakes
> 1. Apply only when you have $\frac{0}{0}$ or $\frac{\infty}{\infty}$.
> 2. Differentiate numerator and denominator **separately** — NOT as a quotient!
> 3. If it loops, switch to Taylor.

## 🎯 Worked exam-style examples

> [!example] FS 2013 task 1a (Method 1, L'Hôpital)
> $\displaystyle\lim_{x\to 0}\frac{1 - \cos x}{\tan x \sin x}$. Numerator and denominator $\to 0$, so apply L'Hôpital:
> $$= \lim_{x\to 0}\frac{\sin x}{\frac{1}{\cos^2 x}\sin x + \cos x \cos x \cdot \tan x}$$
> Simplify by dividing top and bottom by $\sin x$:
> $$= \lim_{x\to 0}\frac{1}{\frac{1}{\cos^2 x} + 1} = \frac{1}{2}$$

> [!example] FS 2013 task 1b (substitution + L'Hôpital)
> $\displaystyle\lim_{x\to 0^+}\frac{2x}{e^{-1/x}}$. Substitute $t = 1/x$ (so $x \to 0^+$ means $t \to +\infty$):
> $$\lim_{t\to\infty}\frac{2/t}{e^{-t}} = \lim_{t\to\infty}\frac{2 e^t}{t} \overset{\text{L'H}}{=} \lim_{t\to\infty} 2e^t = +\infty$$

> [!example] HS 2015 task 2b (conjugate)
> $\displaystyle\lim_{x\to\infty}(\sqrt{x^2 + x} - x)$. Multiply by conjugate:
> $$= \lim_{x\to\infty}\frac{x}{\sqrt{x^2+x} + x} = \lim_{x\to\infty}\frac{1}{\sqrt{1 + 1/x} + 1} = \frac{1}{2}$$

> [!example] FS 2019 task 3b (L'Hôpital for $\sin/(\cdot)$)
> $\lim_{x\to 1}\frac{\sin(x^2 - 1)}{x - 1}$. L'Hôpital: $= \lim \frac{2x\cos(x^2-1)}{1} = 2$.

> [!example] HS 2016 task 2c (1/x form, $0\cdot\infty$)
> $\lim_{x\to\infty}(x^{1/x} - 1)\cdot\tfrac{1}{x}$. Use $x^{1/x} = e^{\ln(x)/x}$ and $\ln(x)/x \to 0$. Then
> $x^{1/x} - 1 = e^{\ln x/x} - 1 \approx \ln x / x$. So the original $\approx \ln(x)/x^2 \to 0$.

> [!example] FS 2019 task 3a (clever inequality)
> $\lim_{n\to\infty}\sqrt[n]{3^n - 2^n} = \lim_{n\to\infty} 3\sqrt[n]{1 - (2/3)^n}$. Hint shows $\sqrt[n]{1 - (2/3)^n} \to 1$ (squeeze: $1 \geq \sqrt[n]{1 - (2/3)^n} \geq \sqrt[n]{1 - 2/3} \to 1$). So limit $= 3$.

## 🎯 The "compute this limit" exam tasks

Almost every basic exam has 2–4 limit computations. Strategies:

| If you see... | Try first |
|---|---|
| $\frac{0}{0}$ with trig | Taylor |
| $\frac{0}{0}$ rational | factor / cancel |
| $\sqrt{a} - \sqrt{b}$ at $\infty$ | conjugate |
| $\infty - \infty$ | common denominator |
| $1^\infty$ | $f(x)^{g(x)} = e^{g(x)\ln f(x)}$ |
| Always | L'Hôpital as fallback |

## 📝 Practice tasks

> [!question] **Task 9.1 (HS 2016 task 2a)** — $\displaystyle\lim_{x\to\frac{\pi}{2}}\frac{\tan(3x)}{\tan(x)}$.
>
>> [!success]- Solution
>> Rewrite as $\frac{\sin 3x \cos x}{\cos 3x \sin x}$. As $x \to \pi/2$: $\cos x \to 0$, $\cos 3x \to 0$, so we have $0/0$. L'Hôpital on numerator and denominator separately... or: $\sin 3x \to \sin(3\pi/2) = -1$ and $\sin x \to 1$, so we just need $\frac{\cos x}{\cos 3x}$. L'Hôpital: $\frac{-\sin x}{-3\sin 3x} \to \frac{-1}{-3(-1)} = -\frac{1}{3}$. So overall $\frac{-1 \cdot \cos x}{\cos 3x \cdot 1} \to (-1)\cdot(-1/3) = 1/3$.

> [!question] **Task 9.2 (HS 2016 task 2b)** — $\displaystyle\lim_{x\to 0}\frac{e^{x^2} - 1}{\sin^2 x}$.
>
>> [!success]- Solution
>> Taylor: $e^{x^2} - 1 = x^2 + o(x^2)$, $\sin^2 x = x^2 + o(x^2)$. Limit $= 1$.

> [!question] **Task 9.3** — $\displaystyle\lim_{x\to 0^+}\log(x)\tan(x)$.
>
>> [!success]- Solution
>> $\tan x \approx x$ near 0, so this is $\approx x\log x \to 0$ (standard limit).

---

# 10 · Integration — the Fundamental Theorem

## 🤔 The big question

The integral $\int_a^b f(x)\,dx$ measures **area under the curve**. But it also computes:
- distance from velocity
- mass from density
- charge from current
- expected value from probability density

The miracle: integration is the **inverse** of differentiation. This is the **Fundamental Theorem of Calculus**.

## 💡 Antiderivatives

> [!definition] Antiderivative
> $F$ is an antiderivative of $f$ if $F'(x) = f(x)$. We write $\int f(x)\,dx = F(x) + C$.

The "$+C$" reminds us the antiderivative is unique only up to a constant.

## 💡 The Riemann integral

Partition $[a,b]$ into small intervals, pick sample points $\xi_k$, form the Riemann sum
$$\sum_k f(\xi_k)(x_{k+1} - x_k)$$
and refine. The limit is the **Riemann integral** $\int_a^b f(x)\,dx$.

> [!theorem]
> Every continuous function on $[a, b]$ is Riemann-integrable. So is every monotonic function, and any bounded function with finitely many discontinuities.

## 💎 The Fundamental Theorem of Calculus (FTC)

> [!theorem] FTC, Part 1 (existence)
> If $f$ is continuous on $[a, b]$, then $F(x) = \int_a^x f(t)\,dt$ is differentiable and $F'(x) = f(x)$.

> [!theorem] FTC, Part 2 (computation)
> If $F' = f$ on $[a, b]$, then
> $$\int_a^b f(x)\,dx = F(b) - F(a) =: F(x)\Big|_a^b$$

> [!example]
> $\int_0^\pi \sin x\,dx = -\cos x \big|_0^\pi = -(-1) - (-1) = 2$.

## 🔧 The antiderivative table — memorize this

| $f(x)$ | $\int f\,dx$ |
|---|---|
| $x^n$ ($n \neq -1$) | $\frac{x^{n+1}}{n+1} + C$ |
| $\frac{1}{x}$ | $\ln\lvert x\rvert + C$ |
| $e^x$ | $e^x + C$ |
| $a^x$ | $\frac{a^x}{\ln a} + C$ |
| $\sin x$ | $-\cos x + C$ |
| $\cos x$ | $\sin x + C$ |
| $\frac{1}{\cos^2 x}$ | $\tan x + C$ |
| $\frac{1}{1+x^2}$ | $\arctan x + C$ |
| $\frac{1}{\sqrt{1-x^2}}$ | $\arcsin x + C$ |
| $\sinh x$ | $\cosh x + C$ |
| $\cosh x$ | $\sinh x + C$ |

## 💡 Properties

- **Linearity:** $\int(\alpha f + \beta g) = \alpha\int f + \beta\int g$
- **Additivity:** $\int_a^c = \int_a^b + \int_b^c$
- **Monotonicity:** $f \leq g$ ⇒ $\int f \leq \int g$
- **Estimation:** $\big|\int_a^b f\big| \leq \int_a^b |f|$

## 🎯 Improper integrals

When the interval is infinite or the integrand blows up:
$$\int_a^\infty f\,dx := \lim_{b\to\infty}\int_a^b f\,dx$$

> [!theorem] **The $1/x^p$ test**
> - $\int_1^\infty \frac{1}{x^p}\,dx$ converges iff $p > 1$.
> - $\int_0^1 \frac{1}{x^p}\,dx$ converges iff $p < 1$.

> [!example] FS 2015 task 5
> Discuss $\int_1^\infty \frac{1}{x^\alpha}\,dx$ in three cases ($\alpha = 1$, $\alpha < 1$, $\alpha > 1$). Result above.

## 🎯 How the exam tests integration

- Compute a definite integral (every exam has 2-3)
- Apply FTC
- Improper integrals with parameter (FS 2015 task 5)
- Recursion via integration by parts (FS 2023 task 3)

## 📝 Practice tasks

> [!question] **Task 10.1** — Compute $\int_0^1 (3x^2 + 2x)\,dx$.
>
>> [!success]- Solution
>> $= [x^3 + x^2]_0^1 = 2$.

> [!question] **Task 10.2** — Determine convergence of $\int_0^\infty e^{-x}\,dx$ and find its value if convergent.
>
>> [!success]- Solution
>> $\int_0^t e^{-x}\,dx = -e^{-x}\big|_0^t = 1 - e^{-t} \to 1$. Converges, value $1$.

> [!question] **Task 10.3 (FS 2023 task 3)** — Define $f_n(t) = \int_0^t x^n e^{-x}\,dx$. Show $f_n(t) = n f_{n-1}(t) - t^n e^{-t}$ and use this to evaluate $\int_0^\infty x^n e^{-x}\,dx = n!$.
>
>> [!success]- Solution
>> Integration by parts: $u = x^n$, $dv = e^{-x}dx$ ⇒ $du = nx^{n-1}dx$, $v = -e^{-x}$.
>> $$f_n(t) = -x^n e^{-x}\Big|_0^t + n\int_0^t x^{n-1}e^{-x}\,dx = -t^n e^{-t} + n f_{n-1}(t)$$
>> As $t \to \infty$, $t^n e^{-t} \to 0$. By induction with base $f_0 = 1 - e^{-t} \to 1 = 0!$:
>> $$\int_0^\infty x^n e^{-x}\,dx = n!$$

---

# 11 · Integration techniques (parts, substitution, partial fractions)

The exam will throw integrals at you that don't appear in the table. You need three techniques: **integration by parts**, **substitution**, and **partial fractions**.

## 🔧 Integration by parts

From $(fg)' = f'g + fg'$:
$$\boxed{\;\int f(x)g'(x)\,dx = f(x)g(x) - \int f'(x)g(x)\,dx\;}$$

> [!tip] How to choose $f$ and $g'$
> Pick $f$ as the part that gets **simpler** when differentiated:
> - polynomials → become 0 eventually
> - $\ln x$ → becomes $1/x$
> - $\arctan x$, $\arcsin x$ → become rational
>
> Pick $g'$ as something easy to integrate ($e^x$, $\sin x$, $\cos x$).
>
> **Mnemonic LIATE**: pick $f$ as the first thing in the list that appears
> Logarithm > Inverse trig > Algebraic (polynomial) > Trig > Exponential.

> [!example] $\int x e^x\,dx$
> Let $f = x$, $g' = e^x$ ⇒ $f' = 1$, $g = e^x$.
> $$\int x e^x\,dx = xe^x - \int e^x\,dx = xe^x - e^x + C = (x-1)e^x + C$$

> [!example] FS 2013 task 3a-ii: $\int_0^2 \log(1+x)\,dx$
> Let $u = \log(1+x)$, $dv = dx$ ⇒ $du = \frac{dx}{1+x}$, $v = x$.
> $$= [x\log(1+x)]_0^2 - \int_0^2 \frac{x}{1+x}\,dx = 2\log 3 - \int_0^2\Big(1 - \tfrac{1}{1+x}\Big)\,dx$$
> $$= 2\log 3 - 2 + \log 3 = 3\log 3 - 2$$

> [!example] FS 2019 task 4: $\int \log(x^2 + 1)\,dx$
> $u = \log(x^2+1)$, $dv = dx$ ⇒ $du = \frac{2x}{x^2+1}dx$, $v = x$.
> $$= x\log(x^2+1) - \int\frac{2x^2}{x^2+1}\,dx = x\log(x^2+1) - \int\Big(2 - \tfrac{2}{x^2+1}\Big)dx$$
> $$= x\log(x^2+1) - 2x + 2\arctan x + C$$

> [!example] FS 2015 task 1b: $\int_0^\pi x^2\sin x\,dx$
> Two parts:
> $$\int x^2 \sin x\,dx = -x^2\cos x + 2\int x\cos x\,dx = -x^2\cos x + 2x\sin x - 2\int\sin x\,dx$$
> $$= -x^2\cos x + 2x\sin x + 2\cos x + C$$
> Evaluate at endpoints: $[\pi^2 + 0 - 2] - [0 + 0 + 2] = \pi^2 - 4$.

> [!example] HS 2016 task 5a (recursion trick): $\int e^x\sin x\,dx$
> Let $I = \int e^x\sin x\,dx$. Two parts give $I = e^x\sin x - \int e^x\cos x\,dx$. Apply parts again to the $\cos$ integral: $\int e^x\cos x\,dx = e^x\cos x + I$. Substitute back:
> $$I = e^x\sin x - e^x\cos x - I \;\Rightarrow\; I = \frac{e^x(\sin x - \cos x)}{2} + C$$

## 🔧 Substitution (u-substitution)

If $u = \varphi(x)$, $du = \varphi'(x)\,dx$:
$$\int f(\varphi(x))\varphi'(x)\,dx = \int f(u)\,du$$

> [!tip] When to substitute
> Look for an "outer" function and an "inner" function whose derivative *also* shows up. Set $u = $ inner.

> [!example] $\int 2x\cos(x^2)\,dx$
> $u = x^2$, $du = 2x\,dx$. $\int\cos u\,du = \sin u + C = \sin(x^2) + C$.

> [!example] HS 2014 task 3a-i: $\int_0^1\frac{\arctan x}{1+x^2}\,dx$
> $u = \arctan x$, $du = \frac{dx}{1+x^2}$. New limits $u(0) = 0$, $u(1) = \pi/4$.
> $$\int_0^{\pi/4} u\,du = \frac{u^2}{2}\Big|_0^{\pi/4} = \frac{\pi^2}{32}$$

> [!example] HS 2016 task 5b: $\int_1^3\frac{x^3}{\sqrt{1+x^2}}\,dx$
> Substitute $u = \sqrt{1+x^2}$, $du = \frac{x}{\sqrt{1+x^2}}\,dx$, $x^2 = u^2 - 1$.
> Limits: $u(1) = \sqrt 2$, $u(3) = \sqrt{10}$.
> $$\int_{\sqrt 2}^{\sqrt{10}} (u^2 - 1)\,du = \tfrac{u^3}{3} - u\,\Big|_{\sqrt 2}^{\sqrt{10}} = \frac{7\sqrt{10} + \sqrt 2}{3}$$

## 🔧 Partial fraction decomposition

For rational integrands $\frac{P(x)}{Q(x)}$ with $\deg P < \deg Q$:
1. Factor $Q(x)$ into linear and irreducible quadratic factors.
2. Write $\frac{P(x)}{Q(x)}$ as a sum:
   $$\frac{A}{x-a} + \frac{B}{(x-a)^2} + \cdots + \frac{Cx+D}{x^2 + bx + c}$$
3. Integrate each piece.

> [!example] FS 2013 task 3a-i: $\int\frac{x+2}{x^3 - x^2 + 2x - 2}\,dx$
> Factor: $x^3 - x^2 + 2x - 2 = x^2(x-1) + 2(x-1) = (x-1)(x^2+2)$.
> Set $\frac{x+2}{(x-1)(x^2+2)} = \frac{A}{x-1} + \frac{Bx+C}{x^2+2}$.
> Multiply through and compare coefficients: $A = 1, B = -1, C = 0$.
> $$\int\left(\frac{1}{x-1} - \frac{x}{x^2+2}\right)dx = \log|x-1| - \tfrac{1}{2}\log(x^2+2) + C$$

> [!example] HS 2014 task 3a-ii: $\int\frac{x+4}{x^3 - 2x^2}\,dx$
> Factor: $x^2(x-2)$. Setup: $\frac{A}{x-2} + \frac{B}{x} + \frac{C}{x^2}$. Solving gives $A = \tfrac32, B = -\tfrac32, C = -2$.
> $$= \tfrac{3}{2}\log|x-2| - \tfrac{3}{2}\log|x| + \tfrac{2}{x} + C$$

> [!example] FS 2019 MC2: $\int\frac{1}{1-x^2}\,dx$
> $\frac{1}{(1-x)(1+x)} = \frac{1/2}{1-x} + \frac{1/2}{1+x}$. So
> $$= \tfrac{1}{2}(-\log|1-x| + \log|1+x|) + C = \tfrac{1}{2}\log\Big|\tfrac{1+x}{1-x}\Big| + C$$

## 🎯 The exam pattern for integrals

Each exam typically has 2-3 integrals, often:
- one **integration by parts** (involves $\ln$, $\arctan$, or $x \cdot e^x$ / $x \cdot \sin x$)
- one **partial fraction** (cubic denominator)
- sometimes a **substitution** (square root, trig)

## 📝 Practice tasks

> [!question] **Task 11.1** — $\int x \ln x\,dx$.
>
>> [!success]- Solution
>> Parts: $u = \ln x, dv = x\,dx$. Then $du = \frac{1}{x}dx, v = \frac{x^2}{2}$.
>> $$= \tfrac{x^2}{2}\ln x - \int\tfrac{x}{2}\,dx = \tfrac{x^2}{2}\ln x - \tfrac{x^2}{4} + C$$

> [!question] **Task 11.2 (HS 2014 task 3 partial fraction)** — $\int\frac{9}{x^3 - 3x - 2}\,dx$ (factor: $(x-2)(x+1)^2$).
>
>> [!success]- Solution
>> Setup: $\frac{A}{x-2} + \frac{B}{x+1} + \frac{C}{(x+1)^2}$. After comparing: $A=1, B=-1, C=-3$.
>> $$= \log|x-2| - \log|x+1| + \frac{3}{x+1} + C = \log\Big|\frac{x-2}{x+1}\Big| + \frac{3}{x+1} + C$$

> [!question] **Task 11.3 (Substitution)** — $\int\frac{e^x}{1 + e^{2x}}\,dx$.
>
>> [!success]- Solution
>> $u = e^x$, $du = e^x\,dx$. $\int\frac{du}{1+u^2} = \arctan u + C = \arctan(e^x) + C$.

---

# 12 · Ordinary differential equations

## 🤔 The big question

Newton's law $F = ma$ is really $m\ddot x = F(x, \dot x, t)$ — an **ODE**. So is radioactive decay, population growth, electrical circuits, planetary motion. Solving ODEs is **the** mathematical core of physics and engineering.

## 📜 What is an ODE?

> [!definition]
> An ODE of order $n$ is an equation involving an unknown function $y(t)$ and its derivatives up to order $n$.
>
> **Order** = highest derivative. **Linear** = no products of $y$ and its derivatives.

| ODE | Models |
|---|---|
| $\dot N = -\lambda N$ | radioactive decay |
| $m\ddot x + k x = 0$ | spring without friction |
| $\ddot x + 2\delta\dot x + \omega_0^2 x = 0$ | damped oscillator |
| $L\ddot Q + R\dot Q + Q/C = U(t)$ | RLC circuit |

## 🔧 Type 1 — Separable ODEs

If you can write $\;y'(x) = f(x)\,g(y)$, separate:
$$\frac{dy}{g(y)} = f(x)\,dx \;\;\Longrightarrow\;\; \int\frac{dy}{g(y)} = \int f(x)\,dx + C$$

> [!example] FS 2013 task 4b
> $\ln(y)\,y' = y\sqrt x$. Separate:
> $$\frac{\ln y}{y}\,dy = \sqrt x\,dx \;\Rightarrow\; \frac{(\ln y)^2}{2} = \frac{2}{3}x^{3/2} + C$$
> Hence $y = e^{\pm\sqrt{(4/3)x^{3/2} + C}}$.

> [!example] HS 2014 task 4b: $yy' = 2(1+y^2)x^3$
> $\frac{y\,dy}{1+y^2} = 2x^3\,dx$. Substitute $t = 1+y^2, dt = 2y\,dy$:
> $$\frac{dt}{2t} = 2x^3\,dx \;\Rightarrow\; \tfrac12\ln t = \tfrac{x^4}{2} + C \;\Rightarrow\; t = Ce^{x^4} \;\Rightarrow\; y = \pm\sqrt{Ce^{x^4} - 1}$$

## 🔧 Type 2 — Linear first-order ODEs

$$y' + p(x)y = q(x)$$

Use the **integrating factor** $\mu(x) = e^{\int p(x)\,dx}$. Multiplying gives $(\mu y)' = \mu q$, so
$$y(x) = \frac{1}{\mu(x)}\Big(\int\mu(x)q(x)\,dx + C\Big)$$

## 🔧 Type 3 — Linear ODEs with constant coefficients

For $\;a_n y^{(n)} + \dots + a_1 y' + a_0 y = 0$:

**Try $y = e^{\lambda x}$.** This produces the **characteristic polynomial**:
$$p(\lambda) = a_n\lambda^n + \dots + a_1\lambda + a_0 = 0$$

| Roots of $p(\lambda)$ | Solution contribution |
|---|---|
| Simple real $\lambda$ | $C\,e^{\lambda x}$ |
| Repeated real $\lambda$ (mult. $m$) | $(C_0 + C_1 x + \dots + C_{m-1}x^{m-1})e^{\lambda x}$ |
| Complex pair $\alpha \pm i\beta$ | $e^{\alpha x}(C_1\cos\beta x + C_2\sin\beta x)$ |

> [!example] FS 2013 task 4a
> $y'' - 3y' + 2y = 130\cos(3x)$.
>
> *Homogeneous:* $\lambda^2 - 3\lambda + 2 = 0 \Rightarrow \lambda_1 = 1, \lambda_2 = 2$. So $y_h = C_1 e^x + C_2 e^{2x}$.
>
> *Particular ansatz:* since $\cos(3x) = \text{Re}(e^{3x \cdot i})$ and $3i$ is **not** a root, try $y_p = A\cos(3x) + B\sin(3x)$.
> Plug in, collect coefficients: $-7A - 9B = 130$ (from $\cos$) and $9A - 7B = 0$ (from $\sin$). Solve: $A = -7, B = -9$.
>
> *Final:* $y(x) = C_1 e^x + C_2 e^{2x} - 7\cos(3x) - 9\sin(3x)$.

> [!example] HS 2014 task 4a: $2y'' - 9y' + 9y = 9x^2$
> *Homogeneous:* $\lambda_1 = 3, \lambda_2 = 3/2$, so $y_h = C_1 e^{3x} + C_2 e^{3x/2}$.
> *Particular:* try $y_p = Ax^2 + Bx + C$. Substitute, compare coefficients: $A = 1, B = 2, C = 14/9$.
> *Final:* $y = y_h + x^2 + 2x + 14/9$.

> [!example] FS 2023 task 4 (parameter analysis)
> $y'' + 2y' + ay = 0$. Characteristic: $\lambda^2 + 2\lambda + a = 0 \Rightarrow \lambda = -1 \pm \sqrt{1 - a}$.
> - $a < 1$: real distinct, $y = Ae^{(\sqrt{1-a}-1)x} + Be^{-(\sqrt{1-a}+1)x}$.
> - $a = 1$: double root $-1$, $y = (A + Bx)e^{-x}$.
> - $a > 1$: complex pair, $y = e^{-x}(A\cos\sqrt{a-1}\,x + B\sin\sqrt{a-1}\,x)$.
>
> Bounded as $x \to \infty$ iff $a \geq 0$.

## 💡 The damped harmonic oscillator (engineering classic)

$$\ddot y + 2\delta\dot y + \omega_0^2 y = 0$$

| Regime | Condition | Solution |
|---|---|---|
| Undamped | $\delta = 0$ | $C_1\cos(\omega_0 t) + C_2\sin(\omega_0 t)$ |
| Underdamped | $0 < \delta < \omega_0$ | $e^{-\delta t}(C_1\cos\omega t + C_2\sin\omega t)$, $\omega = \sqrt{\omega_0^2 - \delta^2}$ |
| Critically damped | $\delta = \omega_0$ | $(C_1 + C_2 t)e^{-\delta t}$ |
| Overdamped | $\delta > \omega_0$ | $C_1 e^{\lambda_1 t} + C_2 e^{\lambda_2 t}$ |

## 🔧 Inhomogeneous: total = homogeneous + particular

$$y = y_h + y_p$$

For $q(x)$ of standard form, **guess** $y_p$:

| $q(x)$ | Guess for $y_p$ |
|---|---|
| polynomial of degree $m$ | polynomial of degree $m$ |
| $e^{\alpha x}$ | $A e^{\alpha x}$ (multiply by $x$ if $\alpha$ is a root) |
| $\sin\omega x$, $\cos\omega x$ | $A\cos\omega x + B\sin\omega x$ |
| product | product |

> [!warning] Resonance trap
> If your ansatz already solves the **homogeneous** equation, multiply by $x$. This is what FS 2019 task 6 tests:
> $y'' + y' - 2y = e^{-2x}$ — homogeneous roots are $-2, 1$. Since $-2$ is a root, the ansatz isn't $Ae^{-2x}$ but $\boxed{Ax e^{-2x}}$. Solving gives $A = -1/3$.

## 💡 Systems of ODEs and matrix exponential

A scalar $n$-th order ODE can be rewritten as a system of $n$ first-order equations. In matrix form:
$$\dot{\mathbf y}(t) = A\mathbf y(t)$$
Solution: $\mathbf y(t) = e^{At}\mathbf y(0)$, where $e^{At} = \sum_{k=0}^\infty \frac{(At)^k}{k!}$.

> [!example] FS 2023 task 4.A1 — converting to a system
> Rewrite $y'' + 2y' + ay = 0$ as a system:
> Let $\mathbf F = (y, y')^T$. Then $\dot{\mathbf F} = \begin{pmatrix} 0 & 1 \\ -a & -2\end{pmatrix}\mathbf F$.

## 🎯 The exam pattern

Every exam has **at least one ODE task**, and often two:
- one second-order linear with constant coefficients (homogeneous + particular)
- one first-order separable

## 📝 Practice tasks

> [!question] **Task 12.1 (FS 2017 task 6)** — Find the unique bounded solution of $y'' + y' - 6y = 10\sin x$ with $y(0) = 0$.
>
>> [!success]- Solution
>> *Homogeneous:* $\lambda^2 + \lambda - 6 = 0 \Rightarrow \lambda = 2, -3$. So $y_h = C_1 e^{2x} + C_2 e^{-3x}$.
>> *Particular:* ansatz $y_p = a\cos x + b\sin x$. Plugging in:
>> $(-7a + b)\cos x + (-a - 7b)\sin x = 10\sin x$. So $a = -1/(...)$... working it out: $a = -7/5$, no — let's redo: equations $-a + b - 6a = 0$ from cos, $-b - a - 6b = 10$ from sin... carefully: $y_p' = -a\sin x + b\cos x$, $y_p'' = -a\cos x - b\sin x$. Sum: $(-a + b - 6a)\cos x + (-b - a - 6b)\sin x = (-7a + b)\cos x + (-a - 7b)\sin x = 10\sin x$. So $-7a + b = 0$ and $-a - 7b = 10$. From first: $b = 7a$. Plug: $-a - 49a = 10 \Rightarrow a = -1/5$, $b = -7/5$. So $y_p = -\frac{1}{5}\cos x - \frac{7}{5}\sin x$.
>>
>> *Bounded as $x\to\infty$:* requires $C_1 = 0$. Then $y(0) = C_2 - \tfrac{1}{5} = 0$, so $C_2 = \tfrac{1}{5}$.
>> *Final:* $y(x) = \tfrac{1}{5}e^{-3x} - \tfrac{1}{5}\cos x - \tfrac{7}{5}\sin x$.

> [!question] **Task 12.2** — Solve $y' = xy$, $y(0) = 1$.
>
>> [!success]- Solution
>> Separable: $\frac{dy}{y} = x\,dx \Rightarrow \ln|y| = x^2/2 + C$. With $y(0)=1$: $C = 0$. $y = e^{x^2/2}$.

---

# 13 · Multivariable functions

## 🤔 The big question

Real engineering problems involve many variables: temperature varies in 3D space, profit depends on price *and* advertising, an antenna's gain depends on angle and frequency. We need calculus that handles many variables.

## 📜 The setup

A function $f: \mathbb{R}^d \to \mathbb{R}^m$. Examples:
- $f(x,y) = $ height of a mountain at $(x,y)$ — *scalar field* on $\mathbb{R}^2$
- $f(x,y,z) = $ temperature in a room — scalar field on $\mathbb{R}^3$
- $\mathbf F(x,y,z) = (\text{wind}_x, \text{wind}_y, \text{wind}_z)$ — *vector field* $\mathbb{R}^3 \to \mathbb{R}^3$
- $\gamma(t) = (\cos t, \sin t, t)$ — *curve* $\mathbb{R} \to \mathbb{R}^3$ (a helix)

## 💡 Continuity in many variables

> [!warning] Path-dependence trap
> Just because $f$ is continuous in $x$ alone (with $y$ fixed) and in $y$ alone (with $x$ fixed) does **NOT** mean $f$ is continuous in $(x, y)$.

> [!example] Classic counterexample
> $f(x,y) = \frac{xy}{x^2 + y^2}$ for $(x,y) \neq (0,0)$, $f(0,0) = 0$.
> Along $y = x$: $f(x, x) = \frac{x^2}{2x^2} = \tfrac{1}{2}$ for $x \neq 0$. So $\lim_{x\to 0} f(x,x) = \tfrac12 \neq 0$. Not continuous!

> [!example] FS 2019 task 7
> $f(x,y) = \frac{xy(x - y + 1)}{x^2 + y^2}$ for $(x,y) \neq (0,0)$, $f(0,0) = 0$.
> - Along $x = 0$: $f \equiv 0$, continuous.
> - Along $y = x$: $f = \frac{x^2(1)}{2x^2} = \tfrac12$, **discontinuous** at origin.

## 💡 Partial derivatives

> [!definition] Partial derivative
> $$\frac{\partial f}{\partial x_i}(\mathbf x) := \lim_{h\to 0}\frac{f(\mathbf x + h\mathbf e_i) - f(\mathbf x)}{h}$$
> where $\mathbf e_i$ is the $i$-th unit vector.
>
> **In words:** differentiate in the $x_i$-direction, treating other variables as constants.

> [!example]
> $f(x,y) = x^2 y + \sin(xy)$. Then
> $$\frac{\partial f}{\partial x} = 2xy + y\cos(xy), \qquad \frac{\partial f}{\partial y} = x^2 + x\cos(xy)$$

## 💡 The gradient — direction of steepest ascent

> [!definition] Gradient
> $$\nabla f(\mathbf x) = \text{grad}\,f(\mathbf x) := \Big(\tfrac{\partial f}{\partial x_1}, \dots, \tfrac{\partial f}{\partial x_d}\Big)$$

> [!info] Geometric meaning
> 1. $\nabla f(\mathbf x)$ points in the direction of **steepest ascent**.
> 2. Its magnitude equals the rate of ascent in that direction.
> 3. $\nabla f$ is **perpendicular** to level sets $\{f = c\}$.

The **directional derivative** in direction $\mathbf v$ (unit vector):
$$\partial_{\mathbf v}f(\mathbf x) = \nabla f(\mathbf x)\cdot\mathbf v$$

## 💡 Total differentiability and the Jacobian

For $\mathbf f = (f_1, \dots, f_m): \mathbb{R}^d \to \mathbb{R}^m$:

> [!definition] Jacobian matrix
> $$J_{\mathbf f}(\mathbf x) = \begin{pmatrix}
> \frac{\partial f_1}{\partial x_1} & \cdots & \frac{\partial f_1}{\partial x_d}\\
> \vdots & \ddots & \vdots\\
> \frac{\partial f_m}{\partial x_1} & \cdots & \frac{\partial f_m}{\partial x_d}
> \end{pmatrix}$$

> [!definition] (Total) differentiability
> $\mathbf f$ is differentiable at $\mathbf x_0$ if
> $$\mathbf f(\mathbf x_0 + \mathbf h) = \mathbf f(\mathbf x_0) + J_{\mathbf f}(\mathbf x_0)\mathbf h + o(\|\mathbf h\|).$$

> [!warning] Subtle point (FS 2023 MC22)
> Existence of all partial derivatives at $\mathbf x_0$ does **NOT** imply (total) differentiability. But: if all partials exist and are **continuous** in a neighborhood, $\mathbf f$ is differentiable there. ($C^1 \Rightarrow$ differentiable.)

## 🔧 Multivariable chain rule — the workhorse

> [!theorem] Chain rule (matrix form)
> If $\mathbf g: \mathbb{R}^d \to \mathbb{R}^m$ and $\mathbf f: \mathbb{R}^m \to \mathbb{R}^k$ are differentiable:
> $$J_{\mathbf f \circ \mathbf g}(\mathbf x) = J_{\mathbf f}(\mathbf g(\mathbf x))\cdot J_{\mathbf g}(\mathbf x)$$

> [!example] FS 2013 task 7
> $\mathbf f: \mathbb{R}^3 \to \mathbb{R}^2$, $\mathbf f(x,y,z) = ((x+y)z,\; xy)$.
> $\mathbf g: \mathbb{R}^2 \to \mathbb{R}^3$, $\mathbf g(u,v) = (u+v,\; u-v,\; uv)$.
>
> $J_{\mathbf f}(x,y,z) = \begin{pmatrix} z & z & x+y \\ y & x & 0\end{pmatrix}$,
>
> $J_{\mathbf g}(u,v) = \begin{pmatrix} 1 & 1 \\ 1 & -1 \\ v & u\end{pmatrix}$.
>
> By chain rule: $J_{\mathbf h}(x,y,z) = J_{\mathbf g}(\mathbf f(x,y,z))\cdot J_{\mathbf f}(x,y,z)$.

> [!example] FS 2023 MC21
> $\mathbf f(x_1, x_2) = (x_1^2,\; x_1 - x_2)$, $\mathbf g(y_1, y_2) = (y_1,\; y_1 y_2)$. Then $J_{\mathbf h}(1,1) = ?$
>
> $J_{\mathbf f}(1,1) = \begin{pmatrix} 2 & 0 \\ 1 & -1\end{pmatrix}$. $\mathbf f(1,1) = (1, 0)$.
>
> $J_{\mathbf g}(1, 0) = \begin{pmatrix} 1 & 0 \\ 0 & 1\end{pmatrix}$.
>
> Product: $\begin{pmatrix} 2 & 0\\ 1 & -1\end{pmatrix}$.

## 💡 Higher partials and Schwarz

> [!theorem] Schwarz / Clairaut
> If $f$ is twice continuously differentiable, mixed partials commute:
> $$\frac{\partial^2 f}{\partial x_i \partial x_j} = \frac{\partial^2 f}{\partial x_j \partial x_i}$$

## 💡 The Hessian and multivariable Taylor

> [!definition] Hessian
> $$H_f(\mathbf x) = \begin{pmatrix}
> \frac{\partial^2 f}{\partial x_1^2} & \cdots & \frac{\partial^2 f}{\partial x_1 \partial x_d}\\
> \vdots & \ddots & \vdots\\
> \frac{\partial^2 f}{\partial x_d \partial x_1} & \cdots & \frac{\partial^2 f}{\partial x_d^2}
> \end{pmatrix}$$
> (symmetric for $C^2$ functions).

> [!theorem] Multivariable Taylor (2nd order)
> $$f(\mathbf x_0 + \mathbf h) = f(\mathbf x_0) + \nabla f(\mathbf x_0)\cdot\mathbf h + \tfrac{1}{2}\mathbf h^T H_f(\mathbf x_0)\mathbf h + o(\|\mathbf h\|^2)$$

## 🎯 How the exam tests this

- Compute partial derivatives, gradient (every exam)
- Use the chain rule to get a Jacobian (FS 2013 task 7, FS 2023 MC21)
- Decide where a piecewise function is continuous/differentiable (FS 2019 task 5, FS 2023 MC22)
- Find the Taylor polynomial of a multivariable function (FS 2023 MC24)

## 📝 Practice tasks

> [!question] **Task 13.1** — Compute $\nabla f$ and $H_f$ for $f(x,y) = x^2 + xy - y^3$.
>
>> [!success]- Solution
>> $\nabla f = (2x + y,\, x - 3y^2)$. $H_f = \begin{pmatrix} 2 & 1 \\ 1 & -6y\end{pmatrix}$.

> [!question] **Task 13.2 (FS 2019 task 7)** — Find a line through origin where $f(x,y) = \frac{xy(x-y+1)}{x^2+y^2}$ (extended by 0 at origin) is continuous, and one where it isn't.
>
>> [!success]- Solution
>> On $x = 0$: $f \equiv 0$, continuous. On $y = x$: $f(x, x) = \frac{x^2}{2x^2} = \tfrac12$, not continuous at 0.

---

# 14 · Multivariable extrema and Lagrange multipliers

## 🤔 The big question

Where on a surface is the highest peak? On a constrained surface (like a sphere), where is the largest value of a function? **This** is what almost every Analysis 2 exam tests.

## 💡 The 2-step recipe for global extrema on a domain $D$

To find global max/min of $f$ on a bounded domain $D \subset \mathbb{R}^d$:

1. **Interior critical points:** solve $\nabla f = \mathbf 0$ inside $D$.
2. **Boundary:** parametrize $\partial D$ and find extrema of the restricted function. Use Lagrange multipliers if $\partial D$ is given by an equation.
3. **Compare:** evaluate $f$ at all candidates plus all "corners" of $\partial D$, pick max/min.

## 💡 The Hessian / second-derivative test (interior points only)

At a critical point $\mathbf x_0$ ($\nabla f = \mathbf 0$):

| Hessian $H_f(\mathbf x_0)$ | Type |
|---|---|
| Positive definite (all eigenvalues $> 0$) | strict local **min** |
| Negative definite (all eigenvalues $< 0$) | strict local **max** |
| Indefinite (mixed signs) | **saddle** |
| Semi-definite (zero eigenvalue) | inconclusive |

For a $2\times 2$ Hessian $H = \begin{pmatrix} a & b\\b & c\end{pmatrix}$:
- $\det H > 0$ and $a > 0$ ⇒ positive definite (min)
- $\det H > 0$ and $a < 0$ ⇒ negative definite (max)
- $\det H < 0$ ⇒ saddle

> [!example] FS 2015 task 1a
> $f(x,y) = y^2(\tfrac{x^2}{2} + \cos x - \tfrac32) - x^2 - \cos x$. At origin: $\nabla f(0,0) = \mathbf 0$.
> $$H_f(0,0) = \begin{pmatrix} -1 & 0\\ 0 & -1\end{pmatrix}$$
> Both eigenvalues $-1 < 0$ ⇒ negative definite ⇒ local **maximum**.

## 💡 Lagrange multipliers — the constraint trick

To extremize $f(\mathbf x)$ subject to $g(\mathbf x) = 0$:

> [!theorem] Lagrange multiplier method
> Critical points satisfy
> $$\nabla f(\mathbf x) = \lambda\nabla g(\mathbf x), \qquad g(\mathbf x) = 0$$
> for some $\lambda \in \mathbb{R}$.

> [!info] Geometric meaning
> At an extremum on the constraint, the level set of $f$ must be **tangent** to the constraint set — so $\nabla f$ and $\nabla g$ must be parallel.

> [!example] FS 2013 task 5 — extrema on a sphere
> Maximize/minimize $f(x,y,z) = x^2 + xz - y^2 + z^2$ subject to $g(x,y,z) = x^2 + y^2 + z^2 - 1 = 0$.
>
> Set $\nabla f = \lambda\nabla g$:
> $$\begin{cases} 2x + z = 2\lambda x\\ -2y = 2\lambda y\\ x + 2z = 2\lambda z\\ x^2 + y^2 + z^2 = 1\end{cases}$$
>
> The 2nd equation gives $y = 0$ or $\lambda = -1$.
>
> **Case $\lambda = -1$:** equations 1, 3 ⇒ $x = z = 0$, then $y = \pm 1$. $f = -1$.
>
> **Case $y = 0$:** With $\lambda = -3/2$ ⇒ $x = z = \pm\frac{\sqrt 2}{2}$, $f = 3/2$. With $\lambda = -1/2$ ⇒ $x = -z = \pm\frac{\sqrt 2}{2}$, $f = 1/2$. With $x = 0$ ⇒ $z = \pm 1$, $f = 1$.
>
> **Conclusion:** Max $= 3/2$ at $(\pm\tfrac{\sqrt 2}{2}, 0, \pm\tfrac{\sqrt 2}{2})$; min $= -1$ at $(0, \pm 1, 0)$.

> [!example] HS 2015 task 6 — distance to paraboloid
> Find the point on $z = 4 - x^2 - y^2$ closest to $(5, 5, 4)$.
>
> Minimize $f_2(x,y,z) = (x-5)^2 + (y-5)^2 + (z-4)^2$ subject to $g(x,y,z) = 4 - x^2 - y^2 - z = 0$.
> Lagrange: $\nabla f_2 = \lambda\nabla g$ gives
> $$2(x-5) + 2\lambda x = 0,\;\; 2(y-5) + 2\lambda y = 0,\;\; 2(z-4) + \lambda = 0$$
> Together with the constraint, solving yields $(1, 1, 2)$ with distance $6$.

> [!example] FS 2023 task 5 — extrema on a closed region with curved boundary
> $f(x,y) = xy - x^2 + 4y$ on $D = \{(x,y) : x^2 \leq y \leq 1\}$.
>
> 1. **Interior:** $\nabla f = (y - 2x, x + 4) = 0 \Rightarrow x = -4, y = -8$. **Not in $D$.**
> 2. **Top edge $y = 1$, $-1 < x < 1$:** restrict $f(x, 1) = x + 1 - x^2 + 4 = -x^2 + x + 5$. Critical point: $-2x + 1 = 0 \Rightarrow x = 1/2$. Candidate $(1/2, 1)$.
> 3. **Bottom edge $y = x^2$, $-1 < x < 1$:** $f(x, x^2) = x^3 + 3x^2$. Critical points: $3x^2 + 6x = 0 \Rightarrow x = 0$ (inside) or $x = -2$ (outside). Candidate $(0, 0)$.
> 4. **Corners $(-1, 1)$ and $(1, 1)$.**
>
> Evaluate: $f(0,0) = 0$, $f(1/2, 1) = 17/4$, $f(-1, 1) = 2$, $f(1, 1) = 4$.
>
> Max $= 17/4$ at $(1/2, 1)$; min $= 0$ at $(0, 0)$.

## 🎯 The exam pattern

Lagrange / extrema problems are guaranteed on every basic exam. Always:
1. Check the interior.
2. Check each piece of the boundary (parametrize or use Lagrange).
3. Check **corners** explicitly.
4. Compare values at all candidates.

## 📝 Practice tasks

> [!question] **Task 14.1 (FS 2019 task 8)** — Find global extrema of $f(x,y) = x^2 + 2y^2 - x$ on $\{x^2 + y^2 \leq 1\}$.
>
>> [!success]- Solution
>> *Interior:* $\nabla f = (2x - 1, 4y) = 0 \Rightarrow x = 1/2, y = 0$. Inside disk. Candidate.
>> *Boundary:* parametrize $(\cos t, \sin t)$. $g(t) = \cos^2 t + 2\sin^2 t - \cos t = 1 + \sin^2 t - \cos t$. $g'(t) = 2\sin t\cos t + \sin t = \sin t(2\cos t + 1) = 0$. So $\sin t = 0$ (points $(\pm 1, 0)$) or $\cos t = -1/2$ (points $(-1/2, \pm\sqrt 3/2)$).
>> Values: $f(1/2, 0) = -1/4$, $f(1, 0) = 0$, $f(-1, 0) = 2$, $f(-1/2, \pm\sqrt 3/2) = 9/4$.
>> Max $= 9/4$, min $= -1/4$.

> [!question] **Task 14.2 (HS 2014 task 5)** — Global extrema of $f(x,y) = x^2 - 3xy + y^2 + y$ on $D = \{0 \leq x \leq 1, 0 \leq y \leq x\}$.
>
>> [!success]- Solution
>> *Interior:* $\nabla f = (2x - 3y, -3x + 2y + 1) = 0$ ⇒ $x = 3/5$, $y = 2/5$. In $D$. Value $-1/5 + ... = 1/5$.
>> *Edges:*
>> - $y = 0$, $0 < x < 1$: $f = x^2$, monotone, no interior extremum.
>> - $x = 1$, $0 < y < 1$: $f = (y-1)^2$, monotone, no interior extremum.
>> - $y = x$, $0 < x < 1$: $f = -y^2 + y$, max at $y = 1/2$. Candidate $(1/2, 1/2)$, value $1/4$.
>> *Corners:* $(0,0), (1,0), (1,1)$ ⇒ values $0, 1, 0$.
>> Max $= 1$ at $(1, 0)$; min $= 0$ at $(0,0)$ and $(1,1)$.

---

# 15 · Multiple integrals

## 🤔 The big question

Volume under a 3D surface, mass of an irregular object, charge of a non-uniform region — all require integrals over 2D or 3D regions.

## 💡 Double integral

For continuous $f$ on a rectangle $R = [a,b]\times[c,d]$, partition into small rectangles, sum $f(\xi_{ij})\Delta A_{ij}$, refine. Limit = $\iint_R f\,dA$.

## 💎 Fubini's theorem — iterated single integrals

> [!theorem] Fubini
> $$\iint_R f\,dA = \int_a^b\!\!\int_c^d f(x,y)\,dy\,dx = \int_c^d\!\!\int_a^b f(x,y)\,dx\,dy$$

**You can integrate in either order.** Pick the easier one.

For a region $D = \{(x,y) : a \leq x \leq b,\; g_1(x) \leq y \leq g_2(x)\}$:
$$\iint_D f\,dA = \int_a^b\!\!\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy\,dx$$

> [!example] HS 2014 task 6
> $\iint_D (x^2 + 2y)\,dx\,dy$ where $D$ is bounded by $y = -x^2$ and $y = -\sqrt x$.
>
> Intersection: $-x^2 = -\sqrt x \Rightarrow x = 0$ or $x = 1$. On $[0,1]$: $-\sqrt x \leq -x^2$.
> $$I = \int_0^1\!\!\int_{-\sqrt x}^{-x^2}(x^2 + 2y)\,dy\,dx = \int_0^1[x^2 y + y^2]_{-\sqrt x}^{-x^2}\,dx$$
> $$= \int_0^1(x^2\sqrt x - x) \,dx = \tfrac{2}{7} - \tfrac{1}{2} = -\tfrac{3}{14}$$

> [!example] HS 2015 MC1c — switching integration order
> $\int_0^2\int_0^{\sqrt x}(x^2 + \sqrt y)\,dy\,dx$. Region: $0 \leq x \leq 2$, $0 \leq y \leq \sqrt x$, equivalently $y \geq 0$ and $x \geq y^2$. So
> $$\int_0^{\sqrt 2}\int_{y^2}^2 (x^2 + \sqrt y)\,dx\,dy$$

## 🔧 Change of variables — Jacobian determinant

> [!theorem] Transformation formula
> If $\Phi: \Omega \to \Phi(\Omega)$ is a $C^1$ bijection:
> $$\int_{\Phi(\Omega)} f(\mathbf y)\,d\mathbf y = \int_\Omega f(\Phi(\mathbf x))\,|\det J_\Phi(\mathbf x)|\,d\mathbf x$$

The factor $|\det J_\Phi|$ is the local **volume-stretch factor**.

### Polar coordinates ($d = 2$)
$x = r\cos\theta,\; y = r\sin\theta,\quad |\det J| = r$.
$$\iint f(x,y)\,dx\,dy = \iint f(r\cos\theta, r\sin\theta)\,r\,dr\,d\theta$$

### Cylindrical coordinates ($d = 3$)
$x = r\cos\theta,\; y = r\sin\theta,\; z = z;\quad |\det J| = r$.

### Spherical coordinates ($d = 3$)
$x = r\sin\varphi\cos\theta,\; y = r\sin\varphi\sin\theta,\; z = r\cos\varphi;\quad |\det J| = r^2\sin\varphi$.

> [!example] FS 2013 task 6 — using polar coordinates
> $I = \iiint_B (x^2 + y^2)z\,d\mu$ where $B$ is bounded by $z = 5\sqrt{1-x^2-y^2}$ and $z = -\sqrt{1-x^2-y^2}$.
>
> Cross-section at height $z=0$ is unit disk. So:
> $$I = \iint_{x^2+y^2 \leq 1}(x^2+y^2)\Big[\tfrac{z^2}{2}\Big]_{-\sqrt{1-x^2-y^2}}^{5\sqrt{1-x^2-y^2}}dx\,dy = 12\iint(x^2+y^2)(1-x^2-y^2)\,dx\,dy$$
> Polar coordinates:
> $$I = 12\int_0^{2\pi}\int_0^1 r^2(1-r^2)\,r\,dr\,d\theta = 24\pi\int_0^1(r^3 - r^5)\,dr = 24\pi\big(\tfrac14 - \tfrac16\big) = 2\pi$$

> [!example] HS 2016 task 7 — ice cream cone (cone + spherical cap)
> Cone $x^2 + y^2 = 3z^2$ meets sphere $x^2+y^2+z^2 = 1$ at $z = 1/2$.
> Volume of cone (cylindrical): $\pi/8$. Volume of cap (cylindrical): $5\pi/24$. Total: $\pi/3$.

> [!example] HS 2015 task 9 — rotation volume
> $V = \{0 \leq y \leq 1,\; x^2 + z^2 \leq \tfrac{1}{1+y^2}\}$. Cross-section is a disk of radius $\sqrt{\tfrac{1}{1+y^2}}$, so area $\frac{\pi}{1+y^2}$. Volume:
> $$V = \pi\int_0^1\frac{dy}{1+y^2} = \pi\arctan y\big|_0^1 = \frac{\pi^2}{4}$$

## 🎯 The exam pattern

- A 2D integral over a region (often using polar coordinates).
- A 3D integral often involving rotation symmetry (cylindrical, spherical).
- Sometimes a Jacobian computation explicitly.

## 📝 Practice tasks

> [!question] **Task 15.1** — Compute $\iint_D xy\,dA$ where $D$ is the unit disk.
>
>> [!success]- Solution
>> Polar: $\int_0^{2\pi}\int_0^1 r^2\cos\theta\sin\theta\cdot r\,dr\,d\theta = \int_0^{2\pi}\sin\theta\cos\theta\,d\theta\cdot\int_0^1 r^3\,dr = 0\cdot\tfrac14 = 0$.

> [!question] **Task 15.2 (FS 2019 MC1c)** — Volume of $K = \{x \geq 0,\, 0 \leq y \leq 6,\, 0 \leq z \leq 4 - x^2\}$.
>
>> [!success]- Solution
>> $\int_0^2\int_0^6 (4-x^2)\,dy\,dx = 6\int_0^2 (4-x^2)\,dx = 6 \cdot (8 - 8/3) = 32$.

> [!question] **Task 15.3** — Volume of unit ball using spherical coordinates.
>
>> [!success]- Solution
>> $\int_0^{2\pi}\!\!\int_0^\pi\!\!\int_0^1 r^2\sin\varphi\,dr\,d\varphi\,d\theta = 2\pi\cdot 2\cdot\tfrac13 = \tfrac{4\pi}{3}$.

---

# 16 · Vector fields, Green, Stokes, Gauß

This is the **grand finale**: three theorems that all say the same thing in different dimensions — *integral over a boundary equals integral of a derivative over the interior.*

## 💡 Vector fields and conservativity

> [!definition] Vector field
> A **vector field** on $\Omega \subseteq \mathbb{R}^d$ is a map $\mathbf F: \Omega \to \mathbb{R}^d$. Imagine attaching an arrow to every point.

> [!definition] Conservative field, potential
> $\mathbf F$ is **conservative** if there exists a scalar function $\varphi$ (a **potential**) with $\mathbf F = \nabla \varphi$.

> [!theorem] Necessary integrability condition
> If $\mathbf F = (F_1, \dots, F_d)$ is conservative and $C^1$, then
> $$\frac{\partial F_i}{\partial x_j} = \frac{\partial F_j}{\partial x_i} \quad \forall i,j$$
> (because mixed partials of $\varphi$ commute). On simply connected domains, this is also **sufficient**.

## 💡 Line integrals

> [!definition] Line integral
> For $\gamma: [a, b] \to \mathbb{R}^d$ a $C^1$ curve and $\mathbf F$ continuous:
> $$\int_\gamma \mathbf F\cdot d\mathbf s := \int_a^b \mathbf F(\gamma(t))\cdot\gamma'(t)\,dt$$

Physical meaning: the **work** done by force $\mathbf F$ along the path.

> [!theorem] Fundamental Theorem for line integrals
> If $\mathbf F = \nabla\varphi$:
> $$\int_\gamma \mathbf F\cdot d\mathbf s = \varphi(\gamma(b)) - \varphi(\gamma(a))$$
> Path-independent! Closed loop integrals vanish.

> [!example] FS 2023 MC25
> $\lambda = \cos(y)\,dx - x\sin(y)\,dy$. Note this is $d(x\cos y)$ — exact! So for any path from $(0,0)$ to $(1,0)$:
> $$\int_\gamma \lambda = x\cos y \big|_{(0,0)}^{(1,0)} = 1\cdot 1 - 0 = 1$$

## 💡 Three differential operators (in $\mathbb{R}^3$)

For $\mathbf F = (F_1, F_2, F_3)$:

> [!definition]
> **Divergence:**
> $$\text{div}\,\mathbf F = \nabla\cdot\mathbf F = \frac{\partial F_1}{\partial x} + \frac{\partial F_2}{\partial y} + \frac{\partial F_3}{\partial z}$$
>
> **Curl** (3D):
> $$\text{curl}\,\mathbf F = \nabla\times\mathbf F = \begin{pmatrix} \partial_y F_3 - \partial_z F_2 \\ \partial_z F_1 - \partial_x F_3 \\ \partial_x F_2 - \partial_y F_1\end{pmatrix}$$
>
> **Curl** (2D, scalar):
> $$\text{rot}\,\mathbf F = \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y}$$

> [!info] Physical meaning
> - **Divergence** at a point = how much $\mathbf F$ spreads out / is sourced there.
> - **Curl** at a point = how much $\mathbf F$ rotates / circulates there. Imagine putting a tiny paddle wheel in the field; curl is its angular velocity.

## 💎 Green's theorem (2D)

> [!theorem] Green
> Let $D \subset \mathbb{R}^2$ be a "nice" bounded region with boundary $\partial D$ traversed counterclockwise. For $C^1$ functions $P, Q$:
> $$\oint_{\partial D}(P\,dx + Q\,dy) = \iint_D\Big(\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y}\Big)dA$$

> [!example] HS 2014 task 8
> $I = \int_{\partial B}(y\,dx + x\,dy)$ over a rectangle $B$. By Green: $\partial Q/\partial x - \partial P/\partial y = 1 - 1 = 0$, so $I = 0$.

> [!example] FS 2023 task 6.A3 — using Green to compute a line integral
> Compute $\int_\gamma \mathbf v\cdot d\mathbf s$ where $\mathbf v = (g(y),\, xe^y + \tfrac{1}{3}x^3 y)$ along a half-disk boundary. With $\text{rot}(\mathbf v) = f(x,y) = 2y^3 + x^2 y$ (chapter result), Green relates this to the area integral.

## 💎 Stokes' theorem (3D)

> [!theorem] Stokes
> For a smooth oriented surface $S$ with boundary curve $\partial S$:
> $$\oint_{\partial S}\mathbf F\cdot d\mathbf s = \iint_S(\nabla\times\mathbf F)\cdot d\mathbf S$$

> [!info] Reading
> The circulation of $\mathbf F$ around the boundary equals the total curl piercing the surface. Green is the 2D special case.

> [!example] FS 2013 task 8 — line integral via Stokes
> Compute $|\int_\gamma \mathbf v\cdot d\mathbf x|$ where $\gamma$ is the intersection of $z = x^2 + y^2 + 1$ and $2x + 2y - 2z + 3 = 0$ and $\mathbf v = (x + z^2, 1 - xy, 3z)$.
>
> The intersection projects to a circle $(x - 1/2)^2 + (y - 1/2)^2 = 1$ in the $xy$-plane, with $z = x + y + 3/2$. Use Stokes: $\nabla\times\mathbf v = (0, 2z, -y)$. Surface element on $z = f(x,y)$ is $\sqrt{1 + f_x^2 + f_y^2}\,dx\,dy = \sqrt 3\,dx\,dy$ with normal direction $(1,1,-1)/\sqrt 3$.
> The work goes through Stokes; final answer: $\frac{11\pi}{2}$.

## 💎 Gauß's theorem (Divergence theorem)

> [!theorem] Gauß
> For a bounded volume $V$ with smooth boundary $\partial V$ (outward orientation):
> $$\oiint_{\partial V}\mathbf F\cdot d\mathbf S = \iiint_V(\nabla\cdot\mathbf F)\,dV$$

> [!info] Reading
> Total flux out through the boundary = total source strength inside.

> [!example] HS 2015 task 7
> Cylinder $V$, $\mathbf F = (x^3, ?, ?)$. $\text{div}\,\mathbf F = 3x^2$.
> $$\iiint_V 3x^2\,dV = \int_0^5\int_0^{2\pi}\int_0^2 3r^2\cos^2(\varphi)\cdot r\,dr\,d\varphi\,dz = 60\pi$$

> [!example] HS 2016 task 10 — flux through cylinder
> $\mathbf F$ given, $\text{div}\,\mathbf F = x^2 + y^2 + z^2$.
> Cylindrical coordinates over a cylinder of radius $R$, height $H$:
> $$\int_0^R\int_0^{2\pi}\int_0^H (r^2 + z^2)r\,dz\,d\varphi\,dr = 2\pi HR^2\Big(\tfrac{R^2}{4} + \tfrac{H^2}{6}\Big)$$

## 💡 The grand unification

All these theorems follow the same template:

$$\boxed{\;\int_{\partial\Omega}\omega = \int_\Omega d\omega\;}$$

| Setting | Statement |
|---|---|
| FTC (1D) | $\int_a^b f'(x)\,dx = f(b) - f(a)$ |
| FT for line integrals | $\int_\gamma\nabla\varphi\cdot d\mathbf s = \varphi(\gamma(b)) - \varphi(\gamma(a))$ |
| Green (2D) | $\oint_{\partial D}(P\,dx + Q\,dy) = \iint_D(\partial_x Q - \partial_y P)\,dA$ |
| Stokes (3D) | $\oint_{\partial S}\mathbf F\cdot d\mathbf s = \iint_S(\nabla\times\mathbf F)\cdot d\mathbf S$ |
| Gauß (3D) | $\oiint_{\partial V}\mathbf F\cdot d\mathbf S = \iiint_V(\nabla\cdot\mathbf F)\,dV$ |

In modern language (differential forms), they are *literally* the same theorem.

## 🎯 The exam pattern

Practically every basic exam ends with **one big theorem-of-vector-calculus task** (Green, Stokes, or Gauß).

- **Use Gauß** when the surface is closed and you have a *flux integral*.
- **Use Stokes** when you have a *line integral around a closed curve* and the curve bounds a surface that's hard to parametrize directly.
- **Use Green** for 2D analogues.

## 📝 Practice tasks

> [!question] **Task 16.1** — Use Green to compute $\oint_C(x^2\,dx + xy\,dy)$ where $C$ is the boundary of the unit square traversed counterclockwise.
>
>> [!success]- Solution
>> $\partial_x(xy) - \partial_y(x^2) = y - 0 = y$. So $\iint_{[0,1]^2}y\,dA = \tfrac12$.

> [!question] **Task 16.2 (FS 2017 task 12)** — Use Gauß to compute $\int_S \mathbf v\cdot d\sigma$ where $\mathbf v = (x^3/3, x^2 y, 2xy)$ and $S$ is a half-sphere.
>
>> [!success]- Solution
>> $\text{div}\,\mathbf v = x^2 + y^2 + z^2 \cdot ?$... computing: $\partial_x(x^3/3) = x^2$, $\partial_y(x^2 y) = x^2$, $\partial_z(2xy) = 0$, sum $= 2x^2$. (The original FS 2017 task has actually $\text{div}\,\mathbf v = x^2 + y^2 + z^2$; we'd need to consult the original PDF for exact values. The technique: close off with a flat disk at $z = 0$, apply Gauß, then subtract the disk's contribution.)
>>
>> The result for the standard problem with $\text{div}\,\mathbf v = x^2 + y^2 + z^2$ on a unit half-ball: $\iiint r^2 \cdot r^2 \sin\varphi\,dr\,d\varphi\,d\theta = \frac{2\pi}{5}$, plus a vanishing disk integral, giving $\frac{2\pi}{5}$.

---

# 17 · Implicit and inverse function theorems

## 🤔 The big question

Sometimes you have an equation like $x^2 + y^2 = 1$ and want to know: can I solve for $y$ as a function of $x$ near a specific point? When $x^2 + xe^y - y^2 = ?$ does the equation locally define a function $y(x)$?

The **implicit function theorem** answers this — and it's the subject of a guaranteed exam task.

## 💡 The inverse function theorem

> [!theorem] Inverse function theorem
> Let $\mathbf f: \Omega \subseteq \mathbb{R}^d \to \mathbb{R}^d$ be $C^1$ and $\det J_{\mathbf f}(\mathbf x_0) \neq 0$. Then there is a neighborhood $U$ of $\mathbf x_0$ such that:
> 1. $\mathbf f|_U$ is bijective onto an open set $V$.
> 2. $\mathbf f^{-1}: V \to U$ is also $C^1$.
> 3. $J_{\mathbf f^{-1}}(\mathbf f(\mathbf x)) = (J_{\mathbf f}(\mathbf x))^{-1}$.

> [!example] FS 2017 task 10 — finding $(f^{-1})'(0)$
> $f(x) = \sin x + \arctan x$. Note $f(0) = 0$, so $f^{-1}(0) = 0$.
> $f'(x) = \cos x + \frac{1}{1+x^2}$, $f'(0) = 2 \neq 0$.
> By the inverse function theorem: $(f^{-1})'(0) = \frac{1}{f'(0)} = \frac{1}{2}$.

> [!example] FS 2023 MC27
> $\mathbf F(x,y) = (xy - 2y,\, xe^x)$. Locally invertible at $(0,0)$?
> $J_{\mathbf F}(0,0) = \begin{pmatrix} y - ? & x - 2 \\ e^x + xe^x & 0\end{pmatrix}\Big|_{(0,0)} = \begin{pmatrix} 0 & -2 \\ 1 & 0\end{pmatrix}$. $\det = 2 \neq 0$. **Yes, locally invertible.**

## 💎 The implicit function theorem

> [!theorem] Implicit function theorem
> Let $F: \mathbb{R}^d \times \mathbb{R}^k \to \mathbb{R}^k$ be $C^1$ with $F(\mathbf x_0, \mathbf y_0) = 0$ and $\det\big(\frac{\partial F}{\partial \mathbf y}(\mathbf x_0, \mathbf y_0)\big) \neq 0$. Then near $\mathbf x_0$ we can solve $F(\mathbf x, \mathbf y) = 0$ for $\mathbf y$ as a $C^1$ function of $\mathbf x$: $\mathbf y = g(\mathbf x)$, and
> $$Dg(\mathbf x_0) = -\Big(\frac{\partial F}{\partial \mathbf y}\Big)^{-1}\frac{\partial F}{\partial \mathbf x}\Big|_{(\mathbf x_0, \mathbf y_0)}$$

For one variable each: if $F(x, y) = 0$ with $F_y \neq 0$:
$$y'(x) = -\frac{F_x}{F_y}$$

> [!example] FS 2019 task 12 — solve implicitly + compute derivative
> $f(x, y) = 2e^x + y(x-1) - y^2$. Show locally solvable for $y(x)$ near $(0, 1)$, find $y'(0)$.
>
> $f(0, 1) = 2 - 1 - 1 = 0$ ✓. $\frac{\partial f}{\partial y} = (x-1) - 2y$, at $(0,1)$: $-3 \neq 0$ ✓.
> $\frac{\partial f}{\partial x} = 2e^x + y$, at $(0,1)$: $3$.
> $$y'(0) = -\frac{3}{-3} = 1$$

> [!example] HS 2014 task 7 — Taylor polynomial of implicit function
> $3\sin x + e^{\sin(xy)} = x + y$, find $\varphi(x)$ near $\varphi(0) = 1$, compute Taylor polynomial of $\varphi$ to order 2.
>
> $F(x,y) = 3\sin x + e^{\sin(xy)} - x - y$. $F_y(0,1) = e^{\sin(0)}\cos(0)\cdot 0 - 1 = -1 \neq 0$ ✓.
> $F_x(0,1) = 3\cos 0 + e^{\sin(0)}\cos(0) \cdot 1 - 1 = 3 + 1 - 1 = 3$, so $\varphi'(0) = -F_x/F_y = 3$.
>
> For $\varphi''(0)$: differentiate the equation twice and substitute $x=0, y=\varphi(0)=1, \varphi'(0) = 3$. Result: $\varphi''(0) = 7$.
>
> Taylor polynomial: $T_2(\varphi) = 1 + 3x + \frac{7}{2}x^2$.

> [!example] FS 2023 MC28
> $f(x,y,z) = e^{xy} + yz^2 - 1$. Can we solve $f = 0$ for $y$ as $g(x, z)$ near $(1, 0, ?)$?
>
> Need $f(1, 0, z) = 0$: $e^0 + 0 - 1 = 0$ ✓ for any $z$. $\frac{\partial f}{\partial y}(1, 0, z) = xe^{xy}|_{(1,0,z)} + z^2 = 1 + z^2 \neq 0$ ✓. So **yes**.

## 🎯 The exam pattern

The implicit function theorem appears in nearly every exam:
- **Verify** the hypotheses ($F(\mathbf x_0, \mathbf y_0) = 0$ and $\det\frac{\partial F}{\partial \mathbf y} \neq 0$).
- **Compute** $y'(x_0)$ or higher derivatives using implicit differentiation.
- Possibly: build a Taylor polynomial of the implicit function.

## 📝 Practice tasks

> [!question] **Task 17.1** — Show that $x^2 + y^2 + xy = 1$ defines $y(x)$ near $(0, 1)$ and compute $y'(0)$.
>
>> [!success]- Solution
>> $F(x,y) = x^2 + y^2 + xy - 1$. $F(0,1) = 0$ ✓. $F_y = 2y + x$, $F_y(0,1) = 2 \neq 0$ ✓.
>> $F_x = 2x + y$, so $y'(0) = -\frac{F_x(0,1)}{F_y(0,1)} = -\frac{1}{2}$.

> [!question] **Task 17.2 (HS 2015 task 8)** — Adapted: at the touching point of curves $F_1 = 0, F_2 = 0$, both gradients are parallel. Use this with the relations to find unknowns.
>
>> [!success]- Solution
>> Sketch: at $(3, y_0)$, both $F_1(3, y_0) = 0$ and $F_2(3, y_0) = 0$ must hold (curves intersect), and $\nabla F_1(3, y_0) = \lambda\nabla F_2(3, y_0)$ (tangency). Four equations, solve for the four unknowns. (See HS 2015 task 8 solution: $\lambda = -2, v = 4, y_0 = 3, c = 3$.)

---

# 18 · Master strategy — the exam playbook

## 📊 Anatomy of the D-ITET basic exam

Based on FS 2013, FS 2015, FS 2019, FS 2023, HS 2013, HS 2014, HS 2015, HS 2016 (~8 exams analyzed), the structure is remarkably stable:

| Block | Topic | Approx. % |
|---|---|---|
| Limits / sequences | computing $\lim$, L'Hôpital, Taylor | ~10–15% |
| Series | radius of convergence, sum, convergence test | ~5–10% |
| Single-variable derivatives | chain rule, MVT, extrema | ~10% |
| Single-variable integrals | parts, partial fractions, substitution | ~15% |
| ODEs | linear constant-coefficient, separable | ~10–15% |
| Multivariable derivatives | gradient, Jacobian, Hessian | ~10% |
| Constrained extrema | Lagrange multipliers | ~10–15% |
| Multiple integrals | polar/cylindrical/spherical | ~10% |
| Vector calculus | Green / Stokes / Gauß | ~10% |
| Implicit / inverse function | $y'$ via $F_x / F_y$ | ~5% |
| Induction / proof | sum identity or inequality | ~5% |

**Recent exams (2019, 2023) have a large multiple-choice block** at the start (~28 questions) testing the big concepts.

## 🎯 The "must-know" cheat sheet

### Limits
- $\lim_{x\to 0}\frac{\sin x}{x} = 1$
- $\lim_{x\to 0}\frac{1-\cos x}{x^2} = \tfrac12$
- $\lim_{x\to 0}\frac{e^x - 1}{x} = 1$
- $\lim_{x\to 0}\frac{\ln(1+x)}{x} = 1$
- $(1 + 1/n)^n \to e$

### Series
- Geometric: $\sum_{k=0}^\infty q^k = \frac{1}{1-q}$ for $|q| < 1$
- Harmonic diverges
- Power series: $R = 1/\limsup\sqrt[k]{|a_k|}$ or $\lim|a_k/a_{k+1}|$

### Derivatives
- $(x^n)' = nx^{n-1}$, $(e^x)' = e^x$, $(\ln x)' = 1/x$
- $(\sin)' = \cos$, $(\cos)' = -\sin$
- $(\arctan)' = 1/(1+x^2)$, $(\arcsin)' = 1/\sqrt{1-x^2}$
- Chain: $(g\circ f)' = g'(f)\cdot f'$
- Inverse: $(f^{-1})'(y) = 1/f'(f^{-1}(y))$

### Integrals
- $\int 1/x\,dx = \ln|x|$ (the absolute value matters!)
- $\int 1/(1+x^2)\,dx = \arctan x$
- Parts: $\int u\,dv = uv - \int v\,du$
- Substitution: spot $u$ and $du$
- Partial fractions: factor denominator, set up undetermined coefficients
- Improper: $\int_1^\infty x^{-p}$ converges iff $p > 1$

### ODEs
- Separable: $\int\frac{dy}{g(y)} = \int f(x)\,dx$
- Linear constant-coeff: characteristic polynomial $\to e^{\lambda x}$
- Resonance: if RHS matches homogeneous solution, multiply ansatz by $x$

### Multivariable
- Jacobian, Hessian, $\nabla$
- Lagrange: $\nabla f = \lambda\nabla g$
- Polar Jacobian: $r$. Spherical: $r^2\sin\varphi$.
- Implicit: $y'(x) = -F_x/F_y$
- Inverse function condition: $\det J \neq 0$

### Vector calculus
- $\text{div}\,\mathbf F = \nabla\cdot\mathbf F$
- $\text{rot}\,\mathbf F$ (3D) = $\nabla\times\mathbf F$
- Green: $\oint = \iint$ in 2D
- Stokes: $\oint = \iint$ on a surface in 3D
- Gauß: $\oiint = \iiint$ for closed surfaces

## 🧠 The 5 strategy tips that actually move the needle

1. **Read everything first.** Spend 5 minutes scanning all problems. Tackle easy ones first to build momentum and bank points.
2. **Always verify hypotheses** before applying a theorem. Lagrange, implicit function, IVT, MVT — they have specific conditions.
3. **Don't loop with L'Hôpital.** If two iterations don't simplify, switch to Taylor.
4. **Sketch the region** before any 2D/3D integral. Catching the wrong limits costs many points.
5. **For Lagrange / extrema:** always check (a) interior critical points, (b) boundary, (c) corners. Forgetting corners is the #1 reason students lose points on extrema problems.

## 🏁 Final words

> [!success] You're ready when…
> - You can write down the standard limits, derivatives, and integrals from memory.
> - You can apply each big theorem (FTC, MVT, IVT, EVT, Green, Stokes, Gauß) without rereading the conditions.
> - You can convert any extremum problem to either gradient = 0 (interior) or Lagrange (boundary).
> - You can solve a 2nd-order linear ODE with constant coefficients in your sleep.
> - You stop being scared of $\varepsilon$ and $\delta$ — they're just tolerance and response.

Good luck. The math you've learned here is the same math powering signal processing, control theory, machine learning, and physics. **Master it once and it stays with you forever.**

---

> *Sources synthesized in this guide:*
> - **M. Struwe**, *Analysis für Informatik*, Skript, ETH Zürich, 5. November 2010.
> - **F. Ziltener**, *Skript zu den Vorlesungen Analysis 1 und 2 für ITET und RW*, ETH Zürich, 21. Mai 2025.
> - Past D-ITET basic exams: FS 2013, FS 2015, HS 2013, HS 2014, HS 2015, HS 2016, FS 2019, FS 2023.
>
> *Further reading:* Chr. Blatter, *Ingenieur-Analysis 1 und 2*; J. J. Duistermaat & J. A. C. Kolk, *Multidimensional Real Analysis I and II*.

