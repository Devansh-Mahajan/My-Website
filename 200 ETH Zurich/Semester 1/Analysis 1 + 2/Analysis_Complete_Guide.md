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

In math, **a proof is a derivation of a statement from axioms** (basic assumptions). A **theorem** (Satz) is a statement that has been proved. So mathematics literally *is* a collection of true statements together with their derivations. Logic is the rulebook that says which derivations are valid.

> [!info] Where this chapter sits
> This corresponds to Ziltener §1.1 (Logik) and §1.3 (Quantoren), and Struwe Chapter 1.

## 💡 What counts as a mathematical statement (Aussage)?

> [!definition] Statement (Aussage)
> A **statement** is a sentence that is either **true** (T) or **false** (F) — never both, never neither.

Two foundational principles ground everything:

> [!tip] The two pillars of classical logic
> - **Law of non-contradiction** (*Satz vom ausgeschlossenen Widerspruch*): no statement is both true and false simultaneously.
> - **Law of the excluded middle** (*Satz vom ausgeschlossenen Dritten*, *tertium non datur*): every statement is either true or false — there is no third option.

> [!example]- Statements vs. non-statements
> ✅ Are statements:
> - "Bern is the capital of Switzerland." (T)
> - $1 + 1 = 2$ (T)
> - $0 < 0$ (F)
>
> ❌ NOT statements:
> - "Hello!" (an exclamation)
> - "Close the door." (a command)
> - "What time is it?" (a question)
>
> Statements have a *truth value*. Exclamations, commands, and questions don't.

> [!warning]- The liar paradox — why self-reference is forbidden
> Consider $P :=$ *"This sentence is false."*
> - If $P$ is true, then by what it says, $P$ is false. Contradiction.
> - If $P$ is false, then by what it says, $P$ is true. Contradiction.
>
> So $P$ violates the law of non-contradiction. Math forbids self-referential sentences like this — they're not legitimate Aussagen.
>
> Same idea, ancient version: **Epimenides the Cretan** declared *"All Cretans are liars."* (Said by a Cretan.)

## 📜 The five connectives — building bigger statements

Given statements $A$ and $B$, you can build new ones:

| Symbol | Read as | True when... | Mnemonic |
|---|---|---|---|
| $\neg A$ | "not $A$" | $A$ is false | flip the switch |
| $A \wedge B$ | "$A$ **and** $B$" | both are true | a chain — weakest link breaks it |
| $A \vee B$ | "$A$ **or** $B$" (inclusive) | at least one is true | menu where you may pick either or both |
| $A \;\dot\vee\; B$ | "**either** $A$ or $B$" (exclusive) | exactly one is true | XOR |
| $A \rightarrow B$ | "if $A$, then $B$" | NOT ($A$ true and $B$ false) | a promise: broken only if you don't deliver |
| $A \leftrightarrow B$ | "$A$ iff $B$" | both have the same truth value | "live or die together" |

The full **truth table**:

| $A$ | $B$ | $\neg A$ | $A\wedge B$ | $A\vee B$ | $A\rightarrow B$ | $A\leftrightarrow B$ |
|---|---|---|---|---|---|---|
| T | T | F | T | T | T | T |
| T | F | F | F | T | F | F |
| F | T | T | F | T | T | F |
| F | F | T | F | F | T | T |

> [!example]- Practice with connectives
> Each row applies the table to a concrete pair of statements.
>
> | $A$ | $B$ | Combined statement | Truth |
> |---|---|---|---|
> | $0<1$ | $1+1=2$ | $A \wedge B$ | T ∧ T = **T** |
> | $0<1$ | $1+1=3$ | $A \wedge B$ | T ∧ F = **F** |
> | $0<1$ | $1+1=3$ | $A \vee B$ | T ∨ F = **T** |
> | $0<0$ | $1+1=2$ | $A \rightarrow B$ | F → T = **T** (vacuous) |
> | $0<0$ | $1+1=3$ | $A \rightarrow B$ | F → F = **T** (vacuous!) |

> [!info]- The hardware connection — logic gates
> Every connective above corresponds to a physical **logic gate** in digital electronics: AND-gate, OR-gate, NOT-gate, XOR-gate. Modern processors are essentially billions of these gates wired into circuits. Boolean logic isn't an abstract toy — it's literally how your computer computes.

## ⚠️ The trap that catches everyone: vacuous truth

> [!warning] A false hypothesis implies anything
> $A \rightarrow B$ is **true** whenever $A$ is false. The statement *"if the moon is made of cheese, then $1 = 2$"* is **logically true**, because the premise is false.
>
> **Why?** The implication is a **promise**. The promise "if it rains, I'll bring an umbrella" is only **broken** if it rains *and* you don't bring an umbrella. On a sunny day, the promise was never tested — so it was never broken.

> [!example]- More vacuous truths
> All of the following are **true** statements:
> - "If $0 = 1$, then I am Napoleon." (premise is false)
> - "If $n \in \mathbb{N}$ with $n < 0$, then $n^2 = 17$." (no such $n$ exists, so the universal statement is vacuously true)
> - $\forall x \in \emptyset : P(x)$ holds for **any** $P$.
>
> Vacuous truth feels weird, but it makes the rules of logic simple and consistent.

## 💡 Logical equivalence ($\equiv$) vs. material equivalence ($\leftrightarrow$)

These look similar but say different things:

- $A \leftrightarrow B$ is itself a **statement** that says "$A$ and $B$ have the same truth value, *here*". It can be true or false depending on $A, B$.
- $A \equiv B$ is a **meta-claim** that says: $A$ and $B$ have **identical truth tables** — they always agree, no matter what their atoms mean.

So $\equiv$ is *strictly stronger* than $\leftrightarrow$.

> [!example]- A useful equivalence we'll use over and over
> $A \leftrightarrow B \;\equiv\; (A \rightarrow B) \wedge (B \rightarrow A)$.
>
> Read aloud: "iff" means "implies and is implied by". You can verify by checking all 4 rows of the truth table.

> [!warning]- A common mistake — confusing implication with equivalence
> "If it rained → ground is wet" is TRUE.
> "If ground is wet → it rained" is FALSE (someone could have spilled water).
>
> Implication is one-way. To get equivalence you need *both* directions.

## 💡 Reading implications: *sufficient* and *necessary*

The statement $A \rightarrow B$ has three equivalent readings:

1. "If $A$, then $B$."
2. "$A$ is **sufficient** for $B$" (*hinreichend*) — having $A$ alone is enough to guarantee $B$.
3. "$B$ is **necessary** for $A$" (*notwendig*) — without $B$, you can't have $A$.

> [!example]- Sufficient vs. necessary
> Statement: "If it rained, then the ground is wet."
> - **Rain is sufficient** for wet ground (rain alone guarantees wet).
> - **Wet ground is necessary** for rain (no wet → no rain).
> - Wet ground is NOT *sufficient* for rain (sprinklers exist).
> - Rain is NOT *necessary* for wet ground (sprinklers).
>
> So "$A$ iff $B$" means "$A$ is **both** necessary and sufficient for $B$".

## 💡 Contraposition — the most useful identity in proof-writing

$$A \rightarrow B \quad\equiv\quad \neg B \rightarrow \neg A$$

The "**Kontraponiertes**" of an implication. Verify by truth table — both sides are false in exactly the same row ($A$ true, $B$ false).

> [!example]- Why contraposition saves the day
> - "If it rains → ground is wet" $\;\equiv\;$ "If ground is dry → it didn't rain"
> - "If $x^2$ is even → $x$ is even" $\;\equiv\;$ "If $x$ is odd → $x^2$ is odd" *(much easier to prove! Squaring an odd number is direct algebra.)*
> - "If $f$ is differentiable at $a$ → $f$ is continuous at $a$" $\;\equiv\;$ "If $f$ is not continuous at $a$ → $f$ is not differentiable at $a$"
>
> When the direct direction is hard, try contraposition.

## 📜 Quantifiers: $\forall$ and $\exists$

| Symbol | Read as | Example |
|---|---|---|
| $\forall x \in M : P(x)$ | "for all $x$ in $M$, $P(x)$ holds" | $\forall n \in \mathbb{N} : n \geq 1$ ✅ |
| $\exists x \in M : P(x)$ | "there exists $x$ in $M$ with $P(x)$" | $\exists n \in \mathbb{N} : n^2 = 49$ ✅ |

> [!tip] Negation rule — flip the quantifier and negate inside
> $$\neg(\forall x \in X : P(x)) \;\equiv\; \exists x \in X : \neg P(x)$$
> $$\neg(\exists x \in X : P(x)) \;\equiv\; \forall x \in X : \neg P(x)$$
>
> Memorize this. It's the most-tested identity on the basic exam after induction.

> [!warning] Order of quantifiers matters!
> Swap two adjacent quantifiers and you can change a true statement into a false one.
> - $\forall m \in \mathbb{N}_0,\; \exists n \in \mathbb{N}_0 : m \leq n$ — **TRUE** (for each $m$, take $n := m$).
> - $\exists n \in \mathbb{N}_0,\; \forall m \in \mathbb{N}_0 : m \leq n$ — **FALSE** ("there is a largest natural number").
>
> In the first version, $n$ is allowed to depend on $m$. In the second, one fixed $n$ must work for **every** $m$.

> [!example]- Negating a real exam sentence (FS 2023 MC1)
> Original: $\forall n \in \mathbb{N},\; \exists m \in \mathbb{N} : (m > n) \wedge (m < 2n)$
>
> Negation, step by step:
> 1. Flip outer $\forall \to \exists$: $\;\exists n \in \mathbb{N},\; \neg(\exists m \in \mathbb{N} : \dots)$
> 2. Flip inner $\exists \to \forall$: $\;\exists n \in \mathbb{N}, \forall m \in \mathbb{N} : \neg((m > n) \wedge (m < 2n))$
> 3. De Morgan inside: $\neg(P \wedge Q) \equiv \neg P \vee \neg Q$.
>
> Final: $\boxed{\exists n \in \mathbb{N}, \forall m \in \mathbb{N} : (m \leq n) \vee (m \geq 2n)}$

> [!example]- Formal proof: there is no largest natural number
> Claim: $\neg\,(\exists n \in \mathbb{N}_0,\; \forall m \in \mathbb{N}_0 : m \leq n)$.
>
> Push the negation through the quantifiers: $\forall n \in \mathbb{N}_0,\; \exists m \in \mathbb{N}_0 : m > n$.
>
> Proof: given any $n$, take $m := n + 1$. Then $m \in \mathbb{N}_0$ and $m > n$. $\blacksquare$

> [!info]- Names of bound variables don't matter (Goethe's joke)
> $\forall x \in \mathbb{N} : x > 0$ and $\forall n \in \mathbb{N} : n > 0$ are *literally the same statement*. Bound variables are placeholders — only the structure matters.
>
> Goethe wrote in *Maximen und Reflexionen*: "Mathematicians are like Frenchmen — whatever you say to them, they translate it into their own language, and at once it is something entirely different."

## 🔧 Modus ponens — the engine of every proof

The fundamental rule of inference, written as an inference scheme:

$$\frac{A,\quad A \rightarrow B}{B}$$

Read: if I know $A$ is true, and I know "$A$ implies $B$" is true, I'm allowed to conclude $B$.

> [!example]- Modus ponens in everyday math
> - Premise 1: $x = 3$.
> - Premise 2: If $x = 3$, then $x^2 = 9$.
> - Conclusion: $x^2 = 9$. ✓
>
> Every "$\Rightarrow$" you write in a calculation is a hidden modus ponens.

## 🔧 Four proof techniques you absolutely need

### 1. Direct proof
Build a chain $A \Rightarrow B_1 \Rightarrow B_2 \Rightarrow \cdots \Rightarrow B$. Apply modus ponens at every step.

> [!example]- Direct proof: the first binomic formula
> **Claim (Lemma 1.5 in Ziltener):** for all real $x, y$: $(x+y)^2 = x^2 + 2xy + y^2$.
>
> $(x+y)^2 = (x+y)(x+y) = x \cdot x + x \cdot y + y \cdot x + y \cdot y = x^2 + 2xy + y^2$. $\blacksquare$
>
> Each "$=$" is a direct application of distributivity / commutativity.

### 2. Proof by contraposition
To prove $A \Rightarrow B$, prove $\neg B \Rightarrow \neg A$ instead. The two are logically equivalent.

> [!example]- Contraposition: "if $n^2$ is even, then $n$ is even"
> Direct proof is hard (you'd need to factor $n^2$ somehow). Contrapositive: *if $n$ is odd, then $n^2$ is odd.*
>
> Suppose $n$ is odd, so $n = 2k + 1$ for some integer $k$. Then
> $$n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1.$$
> That's of the form $2m + 1$, so $n^2$ is odd. $\blacksquare$

> [!example]- Contraposition: $\sqrt{2} < \sqrt{3}$ (Ziltener Satz 1.8, first proof)
> Use the fact that on $[0, \infty)$, $x \leq y \Rightarrow x^2 \leq y^2$ (Lemma 1.9).
>
> We want $A := (\sqrt{2} < \sqrt{3})$. Equivalently (by contraposition of the squaring lemma): if $\sqrt{2} \geq \sqrt{3}$ then $2 \geq 3$ — which is false. So $\sqrt{2} \geq \sqrt{3}$ is false, hence $\sqrt{2} < \sqrt{3}$. $\blacksquare$

### 3. Proof by contradiction
To prove a statement $S$, **assume $\neg S$** and derive a contradiction (something both true and false).

> [!example]- There is no largest natural number
> Assume there is a largest $n_0 \in \mathbb{N}$. But $n_0 + 1 \in \mathbb{N}$, and $n_0 + 1 > n_0$, contradicting that $n_0$ is the largest. **Contradiction.** $\blacksquare$

> [!example]- $\sqrt{2}$ is irrational (classic, Ziltener Satz 2.1)
> Assume for contradiction $\sqrt{2} = m/n$ with $m, n$ integers having no common factor of 2 (lowest terms).
>
> Squaring: $2 = m^2 / n^2$, so $m^2 = 2n^2$. Hence $m^2$ is even, so $m$ is even (by the previous example contraposed). Write $m = 2k$:
> $$4k^2 = 2n^2 \;\Rightarrow\; n^2 = 2k^2,$$
> so $n^2$ is even, so $n$ is even. But then $m, n$ both have a factor of 2 — contradicting our "lowest terms" assumption. $\blacksquare$

> [!example]- $\sqrt{2 + \sqrt{3}} < 2$ (Ziltener Satz 1.10)
> Assume for contradiction $\sqrt{2 + \sqrt{3}} \geq 2$. Squaring: $2 + \sqrt{3} \geq 4$, so $\sqrt{3} \geq 2$. Squaring again: $3 \geq 4$. False. $\blacksquare$

> [!warning]- Subtle point about contradiction proofs
> Inside a contradiction proof you are *temporarily reasoning from a false premise* (the negation of what you want to prove). So intermediate statements you derive can be **literally false statements** — and that's OK! The whole point is to keep deriving until you bump into a contradiction. From a false hypothesis, *anything* follows (*ex falso quodlibet*). Don't panic when you write down something that "looks wrong" mid-proof.

### 4. Mathematical induction — your best friend on exams

To prove $P(n)$ for **all** $n \in \mathbb{N}_0$:
1. **Base case** (*Induktionsverankerung*): prove $P(0)$ (or $P(1)$ if the claim starts at 1).
2. **Inductive step** (*Induktionsschritt*): assume $P(k)$ holds — the **induction hypothesis (IH)** — and from it deduce $P(k+1)$.

The **domino picture**: line up infinitely many dominoes. Knock down the first one (base case); show that any falling domino topples its neighbor (inductive step). Then they all fall.

> [!example]- Sum of the first $n$ odd numbers $= n^2$
> **Claim:** $\sum_{k=1}^n (2k-1) = n^2$ for all $n \in \mathbb{N}$.
>
> **Base ($n=1$):** $1 = 1^2$ ✓
>
> **Step:** Assume $1 + 3 + \dots + (2n-1) = n^2$. Then
> $$1 + 3 + \dots + (2n-1) + (2n+1) \stackrel{IH}{=} n^2 + (2n+1) = (n+1)^2 \quad\checkmark$$

> [!example]- Sum of integers up to $n$ (Ziltener Satz 1.11)
> **Claim:** $\sum_{i=1}^n i = \dfrac{n(n+1)}{2}$ for all $n \in \mathbb{N}_0$.
>
> **Base ($n=0$):** the empty sum equals $0 = \tfrac{0 \cdot 1}{2}$ ✓.
>
> **Step:** assume $\sum_{i=1}^k i = \tfrac{k(k+1)}{2}$. Then
> $$\sum_{i=1}^{k+1} i = \sum_{i=1}^k i + (k+1) \stackrel{IH}{=} \frac{k(k+1)}{2} + (k+1) = \frac{(k+1)(k+2)}{2}.\quad\checkmark$$

> [!example]- Bernoulli's inequality (Ziltener Lemma 2.7)
> **Claim:** for all $n \in \mathbb{N}_0$ and $x \in [-1, \infty)$: $(1+x)^n \geq 1 + nx$.
>
> **Base ($n=0$):** $(1+x)^0 = 1 \geq 1 + 0\cdot x = 1$ ✓.
>
> **Step:** Assume $(1+x)^k \geq 1+kx$. Multiply by $(1+x) \geq 0$ (allowed since $x \geq -1$):
> $$(1+x)^{k+1} \geq (1+kx)(1+x) = 1 + (k+1)x + kx^2 \geq 1 + (k+1)x.$$
> Last step used $kx^2 \geq 0$ (since $k \geq 0$). $\checkmark$
>
> Bernoulli is the workhorse behind countless analysis estimates — it lets you replace $(1+x)^n$ by a linear lower bound.

## 🎯 How the exam tests logic

Every basic exam contains at least one logic / quantifier task. Common types:
- **Negate a quantified statement** (FS 2023, MC1)
- **Prove an inequality by induction** (FS 2015 task 9, FS 2019 task 13)
- **Prove a sum-formula by induction**
- **Multiple-choice** on logical equivalence, contraposition, vacuous truth.

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

> [!question] **Task 1.4 (Contraposition)**
> Prove by contraposition: if $n^2$ is divisible by 3, then $n$ is divisible by 3.
>
>> [!success]- Solution
>> Contrapositive: *if $n$ is not divisible by 3, then $n^2$ is not divisible by 3.*
>>
>> If $3 \nmid n$, write $n = 3k + r$ with $r \in \{1, 2\}$.
>> - $r = 1$: $n^2 = 9k^2 + 6k + 1 = 3(3k^2 + 2k) + 1$, remainder 1.
>> - $r = 2$: $n^2 = 9k^2 + 12k + 4 = 3(3k^2 + 4k + 1) + 1$, remainder 1.
>>
>> In both cases $3 \nmid n^2$. $\blacksquare$
>>
>> *(This is exactly the trick used to prove $\sqrt 3$ is irrational, mirroring the $\sqrt 2$ argument.)*

> [!question] **Task 1.5 (Truth table / equivalence)**
> Show that $(A \rightarrow B) \equiv (\neg A \vee B)$.
>
>> [!success]- Solution
>> | $A$ | $B$ | $A\to B$ | $\neg A$ | $\neg A \vee B$ |
>> |---|---|---|---|---|
>> | T | T | T | F | T |
>> | T | F | F | F | F |
>> | F | T | T | T | T |
>> | F | F | T | T | T |
>>
>> Columns 3 and 5 match in every row. $\blacksquare$
>>
>> *(This identity is the basis for translating implications into Boolean logic, and explains why "false ⇒ anything" is true: $\neg A$ is already true, so the OR is true.)*

> [!question] **Task 1.6 (Induction — geometric sum)**
> Prove that for all $n \in \mathbb{N}_0$ and $q \in \mathbb{R} \setminus \{1\}$:
> $$\sum_{k=0}^n q^k = \frac{1 - q^{n+1}}{1 - q}.$$
>
>> [!success]- Solution
>> **Base ($n=0$):** LHS $= q^0 = 1$. RHS $= \frac{1 - q}{1 - q} = 1$. ✓
>>
>> **Step:** Assume the formula holds for $n$. Then
>> $$\sum_{k=0}^{n+1} q^k = \sum_{k=0}^{n} q^k + q^{n+1} \stackrel{IH}{=} \frac{1 - q^{n+1}}{1 - q} + q^{n+1}$$
>> $$= \frac{1 - q^{n+1} + q^{n+1}(1-q)}{1-q} = \frac{1 - q^{n+2}}{1-q}.\quad\checkmark$$
>>
>> This formula is the foundation of all geometric-series arguments later in the course.

## 📚 Official problem-set tasks (Loesung 00, 01, 02)

The exercises below are taken verbatim from the official ITET HS24 Übungsserien (Ziltener). Try each one yourself before opening the solution toggle.

> [!question] **L0.4 (warm-up: wenn, oder, ∃, ∀)**
> Determine truth values:
> (i) "If $n$ is even, then $n+1$ is odd" — for which $n \in \mathbb{N}$?
> (ii) "If 1 is even, then 2 is odd."
> (iii) "$1 + 1 = 2$ or $1$ is odd."
> (iv) "Either $1 + 1 = 2$ or $1$ is odd." (exclusive)
> (v) "$\forall m \in \mathbb{N}\; \exists n \in \mathbb{N} : m \leq n$."
> (vi) "$\exists n \in \mathbb{N}\; \forall m \in \mathbb{N} : m \leq n$."
>
>> [!success]- Solution
>> (i) **True for all $n$** (when $n$ even, $n+1$ odd; when $n$ odd, premise false → vacuously true).
>> (ii) **True** (premise "1 is even" is false → vacuous).
>> (iii) **True** (first part true).
>> (iv) **False** (both parts true, exclusive-or rejects this).
>> (v) **True** (take $n := m$).
>> (vi) **False** (no largest natural number).

> [!question] **L0.7 (warm-up induction)**
> Prove $\sum_{i=1}^n i = \dfrac{n(n+1)}{2}$ for all $n \in \mathbb{N}$.
>
>> [!success]- Solution
>> Base $n=1$: $1 = \tfrac{1\cdot 2}{2}$. ✓
>> Step: $\sum_{i=1}^{n+1} i = (n+1) + \tfrac{n(n+1)}{2} = \tfrac{2(n+1) + n(n+1)}{2} = \tfrac{(n+1)(n+2)}{2}$. $\blacksquare$

> [!question] **L1.1 (translate to symbols + truth value)**
> Write each in symbols, then state the truth value:
> (a) "Zero plus one is one, AND zero is greater than one."
> (b) "Zero plus one is one, OR zero is less than one."
> (c) "Either zero plus one is one, OR zero is less than one." (exclusive)
> (d) "If zero is greater than one, then zero plus one is zero."
> (e) "Zero is greater than one IFF zero plus one is one."
>
>> [!success]- Solution
>> (a) $0+1 = 1 \wedge 0 > 1$ — **F** ($0>1$ is false).
>> (b) $0+1 = 1 \vee 0 < 1$ — **T**.
>> (c) $0+1 = 1 \;\dot\vee\; 0 < 1$ — **F** (both true → XOR false).
>> (d) $0 > 1 \rightarrow 0 + 1 = 0$ — **T** (vacuous).
>> (e) $0 > 1 \leftrightarrow 0 + 1 = 1$ — **F** (one side T, other F).

> [!question] **L1.2 (truth-table identities to verify)**
> Verify by truth table:
> (a) $\neg(P \wedge Q) \equiv \neg P \vee \neg Q$ (De Morgan)
> (b) $\neg(P \vee Q) \equiv \neg P \wedge \neg Q$ (De Morgan)
> (c) $(P \rightarrow Q) \equiv (\neg Q \rightarrow \neg P)$ (Contraposition)
> (d) $(P \leftrightarrow Q) \equiv (P \rightarrow Q) \wedge (Q \rightarrow P)$
> (e) $P \wedge (Q \vee R) \equiv (P \wedge Q) \vee (P \wedge R)$ (Distribution)
> (f) Counterexample: is $P \wedge (Q \vee R) \equiv (P \wedge Q) \vee R$?
>
>> [!success]- Solution
>> (a)–(e): build the 4- or 8-row truth tables; the columns for the two sides match in every row.
>>
>> (f) **Not equivalent.** Take $P = F$, $Q = F$, $R = T$:
>> - LHS: $F \wedge (F \vee T) = F \wedge T = F$.
>> - RHS: $(F \wedge F) \vee T = F \vee T = T$.
>> Different. So associating $\wedge$ and $\vee$ wrongly changes meaning.

> [!question] **L1.3 (proofs by contraposition AND contradiction)**
> (a) Prove: $\sqrt{3} < \sqrt{5}$.
> (b) Prove: $\sqrt{3 + \sqrt{5}} < \sqrt{6}$.
>
> Show each by both contraposition and contradiction.
>
>> [!success]- Solution
>> (a) **Contraposition:** the squaring lemma says $0 \leq x \leq y \Rightarrow x^2 \leq y^2$. Contrapose: $x^2 < y^2 \Rightarrow x < y$ (for $x, y \geq 0$). Apply with $x^2 = 3, y^2 = 5$: $3 < 5 \Rightarrow \sqrt 3 < \sqrt 5$. $\blacksquare$
>>
>> **Contradiction:** assume $\sqrt 3 \geq \sqrt 5$. Square (monotonic on $[0,\infty)$): $3 \geq 5$. False. $\blacksquare$
>>
>> (b) **Contradiction:** assume $\sqrt{3 + \sqrt 5} \geq \sqrt 6$. Square: $3 + \sqrt 5 \geq 6$, so $\sqrt 5 \geq 3$. Square again: $5 \geq 9$. False. $\blacksquare$
>> (Contraposition: $5 < 9 \Rightarrow \sqrt 5 < 3 \Rightarrow 3 + \sqrt 5 < 6 \Rightarrow \sqrt{3+\sqrt 5} < \sqrt 6$.)

> [!question] **L1.4 (induction power-pack — four classics)**
> Prove by induction:
> (a) $\sum_{k=1}^n k^2 = \tfrac{1}{6} n(n+1)(2n+1)$
> (b) $\sum_{k=1}^n k^3 = \big(\tfrac{1}{2} n(n+1)\big)^2$
> (c) $(1+x)(1+x^2)(1+x^4)\cdots(1+x^{2^n}) = \dfrac{1 - x^{2^{n+1}}}{1 - x}$ for $x \neq 1, n \in \mathbb{N}_0$
> (d) $\sum_{k=1}^n k \cdot k! = (n+1)! - 1$
>
>> [!success]- Solution to (a)
>> Base $n=1$: $1 = \tfrac{1\cdot 2 \cdot 3}{6}$. ✓
>> Step: add $(n+1)^2$ and factor:
>> $$\tfrac{n(n+1)(2n+1)}{6} + (n+1)^2 = \tfrac{(n+1)\big(n(2n+1) + 6(n+1)\big)}{6} = \tfrac{(n+1)(2n^2 + 7n + 6)}{6} = \tfrac{(n+1)(n+2)(2n+3)}{6}.\;\checkmark$$
>
>> [!success]- Solution to (b)
>> Base $n=1$: $1 = (\tfrac{1\cdot 2}{2})^2$. ✓
>> Step: $\big(\tfrac{n(n+1)}{2}\big)^2 + (n+1)^3 = \tfrac{(n+1)^2}{4}\big(n^2 + 4(n+1)\big) = \tfrac{(n+1)^2 (n+2)^2}{4} = \big(\tfrac{(n+1)(n+2)}{2}\big)^2.\;\checkmark$
>
>> [!success]- Solution to (c)
>> Base $n=0$: $1+x = \tfrac{1 - x^2}{1 - x}$ ✓ (third binomic formula).
>> Step: multiply both sides by $(1 + x^{2^{n+1}})$:
>> $$\tfrac{1 - x^{2^{n+1}}}{1 - x}(1 + x^{2^{n+1}}) = \tfrac{1 - x^{2^{n+2}}}{1 - x}.\;\checkmark$$
>
>> [!success]- Solution to (d)
>> Base $n=1$: $1 \cdot 1! = 1 = 2! - 1$. ✓
>> Step: $\sum_{k=1}^{n+1} k\cdot k! = (n+1)\cdot(n+1)! + (n+1)! - 1 = (n+2)\cdot (n+1)! - 1 = (n+2)! - 1.\;\checkmark$

> [!question] **L1.5 (the famous "all horses are the same color" fallacy)**
> Where is the error in this "proof"?
> *Claim: any group of $n$ horses has the same color. Base $n=1$: trivial. Step: take $n+1$ horses; remove one → the remaining $n$ are same color (IH); remove a different one → those $n$ are also same color (IH); overlap forces all $n+1$ to share the color.*
>
>> [!success]- Solution
>> The step **fails when going from $n=1$ to $n=2$**: removing one horse from 2 leaves a single horse (one color, trivially); removing the *other* one leaves a different single horse — but the two singletons share *no* horse, so there's no "overlap" to force them to the same color. The argument silently assumes $n \geq 2$ when invoking overlap.

> [!question] **L1.6 (multiple choice — equivalences and negations)**
> (a) Which is always true?
>   (i) $(\neg A \rightarrow B) \wedge (B \rightarrow A)$
>   (ii) $(A \vee (\neg A \wedge B)) \leftrightarrow (A \vee B)$
> (b) Negation of "It's raining and I have no umbrella":
>   (i) "It's not raining or I have an umbrella."
> (c) Contrapositive of "If it rains and I have no umbrella, I get wet":
>   (iii) "If I don't get wet, then it's not raining or I have an umbrella."
> (d) Negation of "10 is even and ≤ 11":
>   (iii) "10 is not even or > 11."
>
>> [!success]- Solution
>> (a) **(ii)** is the always-true tautology. Verify: $A \vee (\neg A \wedge B)$ is T iff $A$ is T or ($A$ is F and $B$ is T) — exactly when $A \vee B$ is T.
>> (b) **(i)** by De Morgan applied to the conjunction.
>> (c) **(iii)** flip and negate.
>> (d) **(iii)** De Morgan again.

> [!question] **L2.3 (quantifier interpretation + truth)**
> State each in plain language and decide the truth value:
> (a) $\forall n \in \mathbb{N}_0 : n \leq 1 \vee n > 1$
> (b) $\forall x \in \mathbb{N}_0 : x \leq 1 \vee x > 1$
> (c) $\exists x \in \mathbb{R}\; \forall (p, q) \in \mathbb{Z} \times (\mathbb{Z} \setminus \{0\}) : x \neq p/q$
>
> Then translate to symbols:
> (1) "24 is not a perfect square."
> (2) The Archimedean principle: "for every real $x$, there is a natural number larger than $x$."
>
>> [!success]- Solution
>> (a) "Every $n \in \mathbb{N}_0$ is either $\leq 1$ or $> 1$." **True** (trichotomy on $\mathbb{R}$).
>> (b) Same statement with renamed variable. **True** (Goethe's principle).
>> (c) "There exists an irrational real number." **True** ($\sqrt{2}$ for instance).
>>
>> (1) $\nexists n \in \mathbb{N}_0 : n^2 = 24$.
>> (2) $\forall x \in \mathbb{R}\; \exists n \in \mathbb{N}_0 : n > x$.

> [!question] **L2.4 (negate AND determine truth)**
> Negate each, then determine which (original or negation) is true.
> (a) $\forall n \in \mathbb{N}_0 : n < n^2$
> (b) $\forall n \in \mathbb{N}_0 : n \leq 1 \vee n > 1$
> (c) $\forall x \in (0, \infty)\; \exists n \in \mathbb{N} : 1/n < x$
> (d) $\exists n \in \mathbb{N}\; \forall x \in (0, \infty) : 1/n < x$
>
>> [!success]- Solution
>> (a) Neg: $\exists n : n \geq n^2$. **Negation TRUE** ($n=0$: $0 \geq 0$). Original false.
>> (b) Neg: $\exists n : n > 1 \wedge n \leq 1$ — never. **Original TRUE.**
>> (c) Neg: $\exists x > 0 \;\forall n \geq 1 : 1/n \geq x$. **Original TRUE** (Archimedes).
>> (d) Neg: $\forall n \geq 1\; \exists x > 0 : 1/n \geq x$ — take $x := 1/n$. **Negation TRUE** (no fixed $n$ beats every positive $x$).

> [!question] **L4.9 (Bernoulli's inequality — the official version)**
> Prove $(1+x)^n \geq 1 + nx$ for all $x \in [-1, \infty)$ and $n \in \mathbb{N}_0$.
>
>> [!success]- Solution
>> Base $n=0$: $1 \geq 1$. ✓
>> Step: $(1+x) \geq 0$ since $x \geq -1$, so multiplying the IH:
>> $$(1+x)^{n+1} \geq (1+nx)(1+x) = 1 + (n+1)x + n x^2 \geq 1 + (n+1)x.\;\checkmark$$

---

# 2 · Sets and functions

## 🤔 The big question

**Sets** are the *nouns* of math; **functions** are the *verbs*. You can't talk about anything without them.

In modern foundations (Zermelo–Fraenkel set theory), every mathematical object — numbers, functions, vectors, even logical formulas — is built from sets. So this chapter is the bedrock of everything that follows.

> [!info] Where this chapter sits
> This corresponds to Ziltener §1.2 (Mengenlehre) and §1.4 (Funktionen), and Struwe Chapter 1.

## 💡 Sets — collections without order

Cantor's original definition (1895): a set is *"an unordered collection of distinct objects gathered into a whole"*. Each object is called an **element** (*Element*); we write $x \in A$ for "$x$ is an element of $A$".

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

> [!warning] $\emptyset$ vs $\{\emptyset\}$
> - $\emptyset$ is the empty set: zero elements, $|\emptyset| = 0$.
> - $\{\emptyset\}$ is a set whose **only** element is the empty set: one element, $|\{\emptyset\}| = 1$.
>
> They look almost identical in print but are very different. Don't confuse them.

## 📜 Two ways to write a set

**1. Roster form** (*aufzählende Schreibweise*) — list the elements:
$$\{0, 1, 2, 3\}, \qquad \{-1, 1\}.$$

**2. Set-builder** (*beschreibende Schreibweise*) — give a defining property $P$:
$$\{x \mid P(x)\} \;=\; \text{"all $x$ such that $P(x)$ holds"}.$$

> [!example]- Set-builder examples
> - $\{n \in \mathbb{N}_0 \mid n \text{ even}\} = \{0, 2, 4, 6, \dots\}$.
> - $\{(-1)^n \mid n \in \mathbb{N}_0\} = \{1, -1\}$ — only two distinct values, despite infinitely many $n$.
> - $\{x \in \mathbb{R} \mid x^2 < 2\} = (-\sqrt{2}, \sqrt{2})$.
> - $\{x \in \mathbb{Q} \mid x \geq 0,\; x^2 > 2\}$ — the set Ziltener uses to define $\sqrt 2$ as a Dedekind cut.

## ⚠️ Russell's paradox — why "the set of all sets" is forbidden

Try to define $X := \{x \mid x \notin x\}$ — "the set of all sets that don't contain themselves".

Now ask: is $X \in X$?
- If $X \in X$, then $X$ satisfies the defining property, so $X \notin X$. Contradiction.
- If $X \notin X$, then $X$ satisfies the defining property, so $X \in X$. Contradiction.

This is **Russell's paradox** (Bertrand Russell, 1901). The fix in modern set theory: you may only form $\{x \in X \mid P(x)\}$ — restricting to elements of a *pre-existing* set $X$. You cannot conjure sets out of arbitrary properties.

> [!info]- The barber paradox (intuitive cousin)
> *"In a town, the barber shaves exactly those men who don't shave themselves. Who shaves the barber?"* — same paradox, dressed in everyday clothes. Either answer leads to a contradiction. The resolution: no such barber can exist.

## 📜 Set operations

Fix a "universe" $X$ (the *Grundmenge*). For $A, B \subseteq X$:

| Operation | Definition | Picture |
|---|---|---|
| Union | $A \cup B = \{x \mid x \in A \vee x \in B\}$ | both circles |
| Intersection | $A \cap B = \{x \mid x \in A \wedge x \in B\}$ | overlap only |
| Difference | $A \setminus B = \{x \in A \mid x \notin B\}$ | $A$ minus the overlap |
| Complement | $A^c = X \setminus A$ | everything outside $A$ |
| Subset | $A \subseteq B :\Leftrightarrow \forall x : x \in A \Rightarrow x \in B$ | $A$ inside $B$ |

> [!theorem] De Morgan's Laws (Ziltener Satz 1.13)
> For all $A, B \subseteq X$:
> $$(A \cap B)^c = A^c \cup B^c, \qquad (A \cup B)^c = A^c \cap B^c.$$
>
> The set version and the propositional version of De Morgan are *the same theorem in two languages*: $\cap$ corresponds to $\wedge$, $\cup$ to $\vee$, complement to $\neg$.

> [!example]- Why De Morgan works (mini proof)
> $$x \in (A \cap B)^c$$
> $\Leftrightarrow x \notin A \cap B$
> $\Leftrightarrow \neg(x \in A \wedge x \in B)$
> $\Leftrightarrow \neg(x \in A) \vee \neg(x \in B)$ ← logical De Morgan
> $\Leftrightarrow x \in A^c \vee x \in B^c$
> $\Leftrightarrow x \in A^c \cup B^c.\quad \blacksquare$

## 💡 $n$-tuples and Cartesian products — when order matters

Sets ignore order. But often we *want* order: a coordinate $(3, 5)$ on a map is different from $(5, 3)$.

> [!definition] $n$-tuple (Ziltener 1.14)
> An (ordered) $n$-tuple $(x_1, \dots, x_n)$ is determined by its entries **and their order**:
> $$(x_1, \dots, x_n) = (y_1, \dots, y_n) \;\Leftrightarrow\; x_1 = y_1 \wedge \dots \wedge x_n = y_n.$$
> A 2-tuple is a *pair*, a 3-tuple a *triple*.

> [!definition] Cartesian product (Ziltener 1.15)
> $$X \times Y := \{(x,y) \mid x \in X,\; y \in Y\}, \qquad X^n := \underbrace{X \times \dots \times X}_{n \text{ times}}.$$

> [!example]- A small Cartesian product
> $X = \{0, 1\}$, $Y = \{\text{Apple}, \text{House}, \text{Mountain}\}$.
> $$X \times Y = \{(0,\text{A}), (0,\text{H}), (0,\text{M}), (1,\text{A}), (1,\text{H}), (1,\text{M})\}.$$
> Six pairs. In general for finite sets: $|X \times Y| = |X| \cdot |Y|$.

The set $\mathbb{R}^n$ is the **standard $n$-dimensional space**: $\mathbb{R}^1$ is the line, $\mathbb{R}^2$ the plane, $\mathbb{R}^3$ space.

## 💡 Distance in $\mathbb{R}^n$ — the Euclidean norm and balls

For $\mathbf{v} = (v_1, \dots, v_n) \in \mathbb{R}^n$, the **Euclidean norm** (length):
$$\|\mathbf{v}\| := \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}.$$

This is just the Pythagorean theorem in $n$ dimensions. The distance between two points $\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$ is $\|\mathbf{x} - \mathbf{y}\|$.

> [!definition] Open ball, closed ball, sphere (Ziltener 1.16)
> Fix a center $\mathbf{x}_0 \in \mathbb{R}^n$ and radius $r \in [0, \infty]$.
> - **Open ball:** $B_r(\mathbf{x}_0) := \{\mathbf{x} \in \mathbb{R}^n \mid \|\mathbf{x} - \mathbf{x}_0\| < r\}$ — strict inequality.
> - **Closed ball:** $\overline{B}_r(\mathbf{x}_0) := \{\mathbf{x} \in \mathbb{R}^n \mid \|\mathbf{x} - \mathbf{x}_0\| \leq r\}$.
> - **Sphere:** $S_r^{n-1}(\mathbf{x}_0) := \{\mathbf{x} \in \mathbb{R}^n \mid \|\mathbf{x} - \mathbf{x}_0\| = r\}$ — the boundary surface.

> [!example]- What balls actually look like
> - In $\mathbb{R}^1$: $B_r(x_0) = (x_0 - r, x_0 + r)$ — an open interval. The "sphere" $S^0$ is just two points.
> - In $\mathbb{R}^2$: an open disk; $S^1$ is a circle.
> - In $\mathbb{R}^3$: a solid ball; $S^2$ is the spherical surface (Earth's surface, idealised).
> - Edge cases: $B_0(\mathbf{x}_0) = \emptyset$, $\overline{B}_0(\mathbf{x}_0) = \{\mathbf{x}_0\}$, $B_\infty(\mathbf{x}_0) = \mathbb{R}^n$.
>
> Open balls are the building blocks for the entire concept of *limits* and *continuity* later on. Worth getting comfortable with now.

## 💡 Functions — the rule book

> [!definition] Function (Ziltener 1.20)
> A **function** (or *mapping*, *Abbildung*) is a triple $f = (X, Y, G)$ where:
> - $X$ is a set, the **domain** (*Definitionsbereich*, $\operatorname{dom} f$);
> - $Y$ is a set, the **codomain** (*Zielbereich*, $\operatorname{codom} f$);
> - $G \subseteq X \times Y$ is the **graph** (*Graph*), satisfying: for every $x \in X$ there is exactly one $y \in Y$ with $(x, y) \in G$.
>
> We write $f : X \to Y$ and $f(x) = y$ for that unique $y$. The arrow notation $x \mapsto f(x)$ describes the *rule*.

> [!warning] Why three pieces, not just a formula?
> The **same formula** can give **different functions** depending on the domain/codomain.
> - $f : \mathbb{R} \to \mathbb{R},\; x \mapsto x^2$ is *not* surjective.
> - $\tilde f : \mathbb{R} \to [0, \infty),\; x \mapsto x^2$ *is* surjective.
> - $\hat f : [0, \infty) \to [0, \infty),\; x \mapsto x^2$ is *bijective*.
>
> Same rule, three different functions. Always specify all three pieces.

> [!example]- Some functions to keep in mind
> - $f : \mathbb{R} \to \mathbb{R},\; x \mapsto x^2$.
> - $g : \mathbb{R} \to \mathbb{R},\; x \mapsto \sin x$.
> - $h : [0, \infty) \to \mathbb{R},\; x \mapsto \sqrt{x}$ — domain restriction is essential, since $\sqrt{\cdot}$ isn't real for negatives.
> - **Identity** $\operatorname{id}_X : X \to X$, $x \mapsto x$. The simplest non-trivial function.
> - **A "real-life" function:** $X = \{\text{ETH students}\}$, $Y = \{\text{dates}\}$, $f(x) = $ birthday of $x$. (Each student has exactly one birthday — that's why this *is* a function. Two students can share a birthday — that's why it's not injective.)
> - **From Ziltener:** $X = \{\text{real polynomials}\}$, $Y = \mathcal{P}(\mathbb{R})$, $f(p) = $ zero set of $p$. E.g. $f(1) = \emptyset$, $f(x+1) = \{-1\}$, $f(x^2 - 1) = \{-1, 1\}$.

## 📜 Image and preimage

> [!definition] Image and preimage (Ziltener 1.21)
> Let $f : X \to Y$.
> - For $A \subseteq X$, the **image** $f(A) := \{f(x) \mid x \in A\} \subseteq Y$. Special case: $\operatorname{im}(f) := f(X)$, the *range*.
> - For $B \subseteq Y$, the **preimage** $f^{-1}(B) := \{x \in X \mid f(x) \in B\} \subseteq X$.
> - For a single $y \in Y$: $f^{-1}(y) := f^{-1}(\{y\}) = \{x \in X \mid f(x) = y\}$.

> [!warning] Notation trap — $f^{-1}$ has TWO meanings
> $f^{-1}(B)$ is a **set** — defined for any function, no inversion required. It's "all $x$ that land in $B$"; it can be empty, a single point, or many.
>
> Don't confuse $f^{-1}(y)$ (preimage, a *set*) with $\dfrac{1}{f(y)}$ (reciprocal, a *number*). They use the same symbol but mean different things.
>
> Later, when $f$ is bijective, the symbol $f^{-1}$ also denotes the *inverse function* — and for a single point $y$, the preimage and inverse value agree: $f^{-1}(\{y\}) = \{f^{-1}(y)\}$.

> [!example]- Image and preimage in action
> Let $f : \mathbb{R} \to \mathbb{R},\; x \mapsto x^2$.
> - $\operatorname{im}(f) = [0, \infty)$ — every non-negative real is hit.
> - $f([1,2]) = [1, 4]$.
> - $f^{-1}(\{4\}) = \{-2, +2\}$ (two preimages).
> - $f^{-1}(\{-1\}) = \emptyset$ (no real square is negative).
> - $f^{-1}((-\infty, 4)) = (-2, 2)$.

> [!example]- Image and preimage with a discrete function
> Let $f : \mathbb{N}_0 \to \mathbb{N}_0,\; f(n) = n^2$.
> - $\operatorname{im}(f) = \{0, 1, 4, 9, 16, \dots\}$ — the perfect squares.
> - $f^{-1}(\{1, 2, 3, 4, 5\}) = \{1, 2\}$ (since $1^2 = 1$ and $2^2 = 4$ are the only squares in that set).

## 🔧 Injective, surjective, bijective

> [!definition] (Ziltener 1.22)
> Let $f : X \to Y$.
> - **Injective** (*injektiv*, one-to-one): $\forall x_1, x_2 \in X : f(x_1) = f(x_2) \Rightarrow x_1 = x_2$. Equivalently: different inputs → different outputs.
> - **Surjective** (*surjektiv*, onto): $\forall y \in Y, \exists x \in X : f(x) = y$. Every $y$ is hit.
> - **Bijective**: both injective and surjective. Then $f$ has an inverse function.

The **graphical "horizontal line test"** for $f : \mathbb{R} \to \mathbb{R}$:
- *Injective* ⟺ every horizontal line crosses the graph **at most once**.
- *Surjective* ⟺ every horizontal line crosses **at least once**.
- *Bijective* ⟺ every horizontal line crosses **exactly once**.

> [!example]- Mental pictures
> | Function | Injective? | Surjective? | Bijective? |
> |---|---|---|---|
> | $\operatorname{id}_X : X \to X$ | ✅ | ✅ | ✅ |
> | $f: [0,\infty) \to \mathbb{R},\; x \mapsto x$ | ✅ | ❌ (negatives missed) | ❌ |
> | $f: \mathbb{R} \to [0,\infty),\; x \mapsto x^2$ | ❌ ($f(1)=f(-1)$) | ✅ | ❌ |
> | $f: \mathbb{R} \to \mathbb{R},\; x \mapsto x^2$ | ❌ | ❌ | ❌ |
> | $f: \mathbb{R} \to \mathbb{R},\; x \mapsto x^3$ | ✅ | ✅ | ✅ |
> | $\exp : \mathbb{R} \to (0, \infty)$ | ✅ | ✅ | ✅ (inverse: $\ln$) |
>
> Note how injectivity and surjectivity depend on **codomain choice**, not just on the formula.

## 💡 The inverse function

> [!definition] Inverse function (Ziltener 1.23)
> If $f : X \to Y$ is **bijective**, define
> $$f^{-1} : Y \to X, \qquad f^{-1}(y) := \text{the unique $x \in X$ with $f(x) = y$.}$$
>
> Then $f^{-1} \circ f = \operatorname{id}_X$ and $f \circ f^{-1} = \operatorname{id}_Y$. The graph of $f^{-1}$ is the reflection of the graph of $f$ across the line $y = x$.

> [!warning]- Why bijectivity is required for an inverse
> - If $f$ is not injective, two inputs share an output — so trying to invert at that output gives a multi-valued thing, not a function.
> - If $f$ is not surjective, some $y$ has *no* preimage — so $f^{-1}(y)$ wouldn't be defined.
>
> Both conditions are necessary. Bijectivity = "exactly one preimage for every output".

> [!example]- Common inverse functions
> - $\operatorname{id}_X^{-1} = \operatorname{id}_X$ — the identity is its own inverse.
> - $f : [0, \infty) \to [0, \infty),\; x \mapsto x^2$ has inverse $\sqrt{\cdot} : [0, \infty) \to [0, \infty)$.
> - $\exp : \mathbb{R} \to (0, \infty)$ has inverse $\ln = \log : (0, \infty) \to \mathbb{R}$ (natural log).
> - $\sin : [-\tfrac{\pi}{2}, \tfrac{\pi}{2}] \to [-1, 1]$ has inverse $\arcsin$ — note the carefully restricted domain to make it bijective.
> - $\tan : (-\tfrac{\pi}{2}, \tfrac{\pi}{2}) \to \mathbb{R}$ has inverse $\arctan$.

## 🔧 Composition

> [!definition] Composition (Ziltener 1.25)
> If $f : X \to Y$ and $g : Y \to Z$, define
> $$(g \circ f) : X \to Z, \qquad (g \circ f)(x) := g(f(x)).$$
> Read right-to-left: apply $f$ first, then $g$.

Properties:
- **Associative:** $(h \circ g) \circ f = h \circ (g \circ f)$, written without parentheses as $h \circ g \circ f$.
- **NOT commutative in general:** $g \circ f \neq f \circ g$. Often $f \circ g$ isn't even defined.

> [!example]- Composition is not commutative
> Let $f, g : \mathbb{R} \to \mathbb{R}$ with $f(x) = x + 1$ and $g(y) = y^2$.
> - $(g \circ f)(x) = g(x+1) = (x+1)^2 = x^2 + 2x + 1$.
> - $(f \circ g)(x) = f(x^2) = x^2 + 1$.
>
> $(x+1)^2 \neq x^2 + 1$ in general. Order matters.

> [!example]- Composition with multiple variables
> $f : \mathbb{R}^2 \to \mathbb{R},\; f(x, y) = x + y$ and $g = \exp : \mathbb{R} \to \mathbb{R}$.
> - $(g \circ f)(x, y) = e^{x + y}$ ✓
> - $(f \circ g)$ is **not defined**: $g$ outputs a single real, but $f$ wants a pair as input.

> [!example]- Inverses via composition
> If $f$ is bijective with inverse $f^{-1}$, then $f^{-1} \circ f = \operatorname{id}_X$ and $f \circ f^{-1} = \operatorname{id}_Y$. This is sometimes used as the *definition* of "inverse function" (and it's a slick way to verify a candidate inverse: just check both compositions equal the identity).

## 🎯 How the exam tests this

Set/function questions are warm-up multiple choice. Example FS 2023 MC2:
> *True or false: for any $f: X \to Y$ and any $A, B, C \subseteq X$, we have $f((A \cup B) \cap C) = (f(A) \cup f(B)) \cap f(C)$.*

**Answer: False.** The image and intersection don't generally commute when $f$ isn't injective.

> [!example]- Tiny counterexample
> Let $X = \{1, 2\}$, $Y = \{0\}$, $f(x) = 0$. Take $A = \{1\}$, $B = \emptyset$, $C = \{2\}$.
> - LHS: $f((A \cup B) \cap C) = f(\{1\} \cap \{2\}) = f(\emptyset) = \emptyset$.
> - RHS: $(f(\{1\}) \cup \emptyset) \cap f(\{2\}) = \{0\} \cap \{0\} = \{0\}$.
>
> $\emptyset \neq \{0\}$. Statement is false. $\blacksquare$
>
> *(Lesson: Image preserves $\cup$ but not $\cap$ in general. Preimage preserves both.)*

## 📝 Practice tasks

> [!question] **Task 2.1 (Set identity)**
> Prove $A \setminus (B \cup C) = (A \setminus B) \cap (A \setminus C)$.
>
>> [!success]- Solution
>> $x \in A \setminus (B \cup C)$
>> $\Leftrightarrow x \in A \wedge x \notin B \cup C$
>> $\Leftrightarrow x \in A \wedge \neg(x \in B \vee x \in C)$
>> $\Leftrightarrow x \in A \wedge x \notin B \wedge x \notin C$ (De Morgan)
>> $\Leftrightarrow (x \in A \wedge x \notin B) \wedge (x \in A \wedge x \notin C)$
>> $\Leftrightarrow x \in (A \setminus B) \cap (A \setminus C)$. $\blacksquare$

> [!question] **Task 2.2 (Image / preimage computation)**
> For $f : \mathbb{R} \to \mathbb{R}$, $f(x) = x^2 - 1$, compute:
>
> (a) $f([-2, 2])$ &nbsp;&nbsp; (b) $f^{-1}([0, 3])$ &nbsp;&nbsp; (c) $f^{-1}((-2, 0))$
>
>> [!success]- Solution
>> (a) On $[-2, 2]$: $x^2 \in [0, 4]$, so $f(x) = x^2 - 1 \in [-1, 3]$. **$f([-2,2]) = [-1, 3]$.**
>>
>> (b) $0 \leq x^2 - 1 \leq 3 \Leftrightarrow 1 \leq x^2 \leq 4 \Leftrightarrow x \in [-2, -1] \cup [1, 2]$.
>>
>> (c) $-2 < x^2 - 1 < 0 \Leftrightarrow -1 < x^2 < 1$. The left inequality holds automatically ($x^2 \geq 0 > -1$); the right gives $|x| < 1$. **$f^{-1}((-2, 0)) = (-1, 1)$.**

> [!question] **Task 2.3 (Bijectivity & inverse)**
> Show that $f : \mathbb{R} \setminus \{1\} \to \mathbb{R} \setminus \{1\}$, $f(x) = \dfrac{x+1}{x-1}$ is bijective and find $f^{-1}$.
>
>> [!success]- Solution
>> Solve $y = \frac{x+1}{x-1}$ for $x$:
>> $$y(x-1) = x+1 \;\Rightarrow\; yx - y = x + 1 \;\Rightarrow\; x(y - 1) = y + 1 \;\Rightarrow\; x = \frac{y+1}{y-1}.$$
>>
>> So $f^{-1}(y) = \dfrac{y+1}{y-1}$ — **the function equals its own inverse!** ($f \circ f = \operatorname{id}$, an *involution*.)
>>
>> The formula is well-defined exactly when $y \neq 1$, matching the codomain. So $f$ is a bijection.

> [!question] **Task 2.4 (Composition)**
> Let $f(x) = 2x + 3$ and $g(x) = x^2$. Compute $g \circ f$ and $f \circ g$, and verify they differ.
>
>> [!success]- Solution
>> $(g \circ f)(x) = g(2x+3) = (2x+3)^2 = 4x^2 + 12x + 9$.
>>
>> $(f \circ g)(x) = f(x^2) = 2x^2 + 3$.
>>
>> At $x = 1$: $g \circ f = 25$, $f \circ g = 5$. Different. $\blacksquare$

> [!question] **Task 2.5 (Preimage preserves $\cap$ and $\cup$)**
> For any $f : X \to Y$ and any $A, B \subseteq Y$, prove:
> (a) $f^{-1}(A \cap B) = f^{-1}(A) \cap f^{-1}(B)$
> (b) $f^{-1}(A \cup B) = f^{-1}(A) \cup f^{-1}(B)$
>
>> [!success]- Solution
>> (a) $x \in f^{-1}(A \cap B) \Leftrightarrow f(x) \in A \cap B \Leftrightarrow f(x) \in A \wedge f(x) \in B \Leftrightarrow x \in f^{-1}(A) \wedge x \in f^{-1}(B) \Leftrightarrow x \in f^{-1}(A) \cap f^{-1}(B)$.
>>
>> (b) Same argument with $\vee$ instead of $\wedge$. $\blacksquare$
>>
>> *(Compare with Task 2 of FS 2023 MC2: image is "less well-behaved" — it doesn't preserve $\cap$ in general. Preimage is the better citizen.)*

> [!question] **Task 2.6 (Composition of bijections)**
> Let $f : X \to Y$ and $g : Y \to Z$ both be bijective. Show $g \circ f : X \to Z$ is bijective and $(g \circ f)^{-1} = f^{-1} \circ g^{-1}$ ("socks and shoes" rule).
>
>> [!success]- Solution
>> **Injective:** if $(g \circ f)(x_1) = (g \circ f)(x_2)$, then $g(f(x_1)) = g(f(x_2))$. By injectivity of $g$: $f(x_1) = f(x_2)$. By injectivity of $f$: $x_1 = x_2$. ✓
>>
>> **Surjective:** for any $z \in Z$, surjectivity of $g$ gives $y \in Y$ with $g(y) = z$; surjectivity of $f$ gives $x \in X$ with $f(x) = y$. Then $(g \circ f)(x) = z$. ✓
>>
>> **Inverse formula:** $(f^{-1} \circ g^{-1}) \circ (g \circ f) = f^{-1} \circ (g^{-1} \circ g) \circ f = f^{-1} \circ \operatorname{id}_Y \circ f = f^{-1} \circ f = \operatorname{id}_X$. Similarly the other composition. So $f^{-1} \circ g^{-1}$ is the inverse. $\blacksquare$
>>
>> *Mnemonic: to undo "put on socks, then shoes" you do "take off shoes, then socks" — reverse order.*

## 📚 Official problem-set tasks (Loesung 00, 02, 03, 04)

Set/function exercises taken verbatim from the official ITET HS24 Übungsserien. All solutions in toggle format.

> [!question] **L0.1 (graphs warm-up)**
> Sketch the graphs and give 4 specific points on each:
> (a) $\exp_2(x) = 2^x$  (b) $\log_2$  (c) $\sin$  (d) $\cos$  (e) $f(x) = e^{-x^2}$ (Gaussian bell)
>
> How are the graphs of $\exp_2$ and $\log_2$ related?
>
>> [!success]- Solution
>> Sample points:
>> - (a) $(0,1), (1,2), (2,4), (3,8)$
>> - (b) $(1,0), (2,1), (4,2), (8,3)$
>> - (c) $(0,0), (\pi/2, 1), (\pi, 0), (3\pi/2, -1)$
>> - (d) $(0,1), (\pi/2, 0), (\pi, -1), (3\pi/2, 0)$
>> - (e) $(-1, e^{-1}), (0, 1), (1, e^{-1}), (2, e^{-4})$
>>
>> $\exp_2$ and $\log_2$ are inverse functions of each other; their graphs are reflections across the line $y = x$.

> [!question] **L0.5 (set fundamentals)**
> (i) How many elements?
>   (a) $\emptyset$  (b) $\{\emptyset\}$  (c) $\{0, 1, 0\}$  (d) $\{(-1)^n \mid n \in \mathbb{Z}\}$
>
> (ii) Solution set of $x^2 + x - 2 = 0$?
> (iii) Sketch $\{(x, y) \in \mathbb{R}^2 \mid x^2 + y^2 = 1\}$ and $\{(x,y,z) \in \mathbb{R}^3 \mid x^2 + y^2 + z^2 = 1\}$.
>
>> [!success]- Solution
>> (i) (a) **0**  (b) **1**  (c) **2** (only $0, 1$ are distinct)  (d) **2** (only values $1, -1$).
>>
>> (ii) Quadratic formula: $x = \tfrac{-1 \pm 3}{2}$, so the set is $\{1, -2\}$.
>>
>> (iii) The unit circle $S^1 \subset \mathbb{R}^2$, and the unit sphere $S^2 \subset \mathbb{R}^3$.

> [!question] **L2.1 (set operations practice)**
> (a) Simplify: $X = \{1, 2, 1+1\}$, $Y = \{0 \cdot n \mid n \in \mathbb{N}_0\}$, $Z = \{n \in \mathbb{N}_0 \mid n > 0 \wedge n \leq 3\}$.
> (b) For $X = \{0, 1\}, Y = \{1, 2\}$: compute $X \cap Y$, $X \cup Y$, $X \setminus Y$. Is $X \subseteq Y$?
> (c) For $X = \{\text{Apple, House}\}, Y = \{0, 1, 2\}, Z = \{0, 1\}$: compute $X \times Y$, $Y^2$, $Z^3$.
>
>> [!success]- Solution
>> (a) $X = \{1, 2\}$ (duplicates collapse); $Y = \{0\}$ (every element equals 0); $Z = \{1, 2, 3\}$.
>>
>> (b) $X \cap Y = \{1\}$; $X \cup Y = \{0, 1, 2\}$; $X \setminus Y = \{0\}$; $X \not\subseteq Y$ (since $0 \notin Y$).
>>
>> (c) $X \times Y$ has 6 pairs $\{(\text{A},0),\dots,(\text{H},2)\}$; $|Y^2| = 9$; $|Z^3| = 8$.

> [!question] **L2.2 (De Morgan and distributivity for sets)**
> Prove:
> (a) $(A \cap B)^c = A^c \cup B^c$
> (b) $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$
> (c) $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$
>
>> [!success]- Solution
>> All three follow by translating "$x \in \dots$" into propositional logic and applying the corresponding propositional De Morgan / distributive law.
>>
>> (a) $x \in (A \cap B)^c \Leftrightarrow \neg(x \in A \wedge x \in B) \Leftrightarrow \neg(x \in A) \vee \neg(x \in B) \Leftrightarrow x \in A^c \cup B^c$. $\blacksquare$
>>
>> (b) $x \in A \cap (B \cup C) \Leftrightarrow (x \in A) \wedge (x \in B \vee x \in C) \Leftrightarrow (x \in A \wedge x \in B) \vee (x \in A \wedge x \in C) \Leftrightarrow x \in (A \cap B) \cup (A \cap C)$. $\blacksquare$
>>
>> (c) Same trick with $\vee$ and $\wedge$ swapped.

> [!question] **L2.5 (function or not? — decoding the triple)**
> Which of the following triples $(X, Y, G)$ is a function?
> (a) $X = \mathbb{R}, Y = \mathbb{R}, G = \{(x, e^x) \mid x \in \mathbb{R}\}$
> (b) $X = \mathbb{R}, Y = \mathbb{R}, G = \{(y^2, y) \mid y \in \mathbb{R}\}$
> (c) $X = [0, \infty), Y = \mathbb{R}, G = \{(y^2, y) \mid y \in \mathbb{R}\}$
> (d) $X = [0, \infty), Y = \mathbb{R}, G = \{(y^2, y) \mid y \in [0, \infty)\}$
>
>> [!success]- Solution
>> (a) **Function** (each $x$ has exactly one $e^x$).
>> (b) **Not a function**: $-1 \in X$ has no pair in $G$ (no $y$ with $y^2 = -1$).
>> (c) **Not a function**: $1 \in X$ has *two* pairs $(1, 1)$ and $(1, -1)$ in $G$.
>> (d) **Function**: this is exactly $f(x) = \sqrt{x}$.

> [!question] **L2.6 (image and preimage with full proofs)**
> Compute and prove:
> (a) $\operatorname{im}(f)$ for $f(x) = x^2$ and for $h(x) = e^x$.
> (b) $f^{-1}((-1, 4))$, $g^{-1}([-8, -1])$ for $g(x) = x^3$, $h^{-1}([-1, 1])$.
>
>> [!success]- Solution
>> (a) $\operatorname{im}(f) = [0, \infty)$. ($\subseteq$) every square is $\geq 0$. ($\supseteq$) for $y \geq 0$ and $z := \max\{y, 1\}$ we have $f(0) = 0 \leq y \leq z \leq z^2 = f(z)$, so the intermediate value theorem yields some $x$ with $f(x) = y$.
>>
>> $\operatorname{im}(h) = (0, \infty)$. ($\subseteq$) $e^x > 0$. ($\supseteq$) For $y \geq 1$ apply IVT on $[0, y]$ since $h(0) = 1 \leq y \leq y \leq e^y = h(y)$. For $y < 1$, set $\tilde y = 1/y > 1$, find $\tilde x$ with $e^{\tilde x} = \tilde y$, then $h(-\tilde x) = 1/\tilde y = y$.
>>
>> (b) $f^{-1}((-1, 4)) = \{x : -1 < x^2 < 4\} = \{x : x^2 < 4\} = (-2, 2)$.
>>
>> $g^{-1}([-8, -1]) = \{x : -8 \leq x^3 \leq -1\} = [-2, -1]$ (cube root is monotonic).
>>
>> $h^{-1}([-1, 1]) = \{x : e^x \leq 1\} = (-\infty, 0]$ (since $e^x > 0$ always, the lower bound $-1$ is automatic).

> [!question] **L2.7 (inj/surj/bij — the full menagerie)**
> Classify each as injective / surjective / bijective:
> (a) $f : \mathbb{N}_0 \to \{m \in \mathbb{N}_0 : m \text{ even}\}, f(n) = 2n$
> (b) $f : [0, \infty) \to \mathbb{R}, f(x) = x$
> (c) $f : \mathbb{R} \to [0, \infty), f(x) = x^2$
> (d) $f : \mathbb{R} \to \mathbb{R}, f(x) = x^2$
> (e) $f : \mathbb{R} \to \mathbb{R}, f(x) = 2x + 1$
> (f) $f : \mathbb{R} \to (0, \infty), f(x) = e^{2x}$
>
>> [!success]- Solution
>> (a) **Bijective**.
>> (b) Injective only.
>> (c) Surjective only.
>> (d) Neither.
>> (e) **Bijective**, with inverse $y \mapsto (y-1)/2$.
>> (f) **Bijective**, with inverse $y \mapsto \tfrac{1}{2}\ln y$.

> [!question] **L2.8 (compute the inverses)**
> Find $f^{-1}$ for the bijective functions in L2.7.
>
>> [!success]- Solution
>> (a) $f^{-1}(m) = m/2$.
>> (e) $f^{-1}(y) = (y - 1)/2$.
>> (f) $f^{-1}(y) = \tfrac{1}{2}\ln(y)$ for $y > 0$.

> [!question] **L2.9 (compositions, including ill-defined ones)**
> (a) $f, g : \mathbb{R} \to \mathbb{R}$ with $f(x) = x^2$, $g(y) = e^y$. Compute $g \circ f$ and $f \circ g$.
> (b) $f : \mathbb{R}^2 \to \mathbb{R}, f(\mathbf{x}) = \|\mathbf{x}\|$; $g : \mathbb{R} \to \mathbb{R}, g(y) = e^y$. Compute $g \circ f$ and $g \circ f(1, 2)$. What about $f \circ g$?
>
>> [!success]- Solution
>> (a) $(g \circ f)(x) = e^{x^2}$; $(f \circ g)(y) = (e^y)^2 = e^{2y}$.
>>
>> (b) $(g \circ f)(x_1, x_2) = e^{\sqrt{x_1^2 + x_2^2}}$; at $(1, 2)$: $e^{\sqrt 5}$. $f \circ g$ is **not well-defined**: $g$ produces a scalar, but $f$ takes a vector in $\mathbb{R}^2$.

> [!question] **L2.10 (image/preimage and set operations — full proofs)**
> (a) Prove $f^{-1}(B_1 \cup B_2) = f^{-1}(B_1) \cup f^{-1}(B_2)$, $f^{-1}(B_1 \cap B_2) = f^{-1}(B_1) \cap f^{-1}(B_2)$, and $f(A_1 \cup A_2) = f(A_1) \cup f(A_2)$.
> (b) Find a counterexample to $f(A_1 \cap A_2) = f(A_1) \cap f(A_2)$.
>
>> [!success]- Solution
>> (a) All three follow by translating to logic. E.g.:
>> $x \in f^{-1}(B_1 \cap B_2) \Leftrightarrow f(x) \in B_1 \wedge f(x) \in B_2 \Leftrightarrow x \in f^{-1}(B_1) \cap f^{-1}(B_2)$. $\blacksquare$
>>
>> (b) Take $f : \{1, 2\} \to \{1\}$ with $f \equiv 1$, $A_1 = \{1\}, A_2 = \{2\}$. Then $A_1 \cap A_2 = \emptyset$, so $f(A_1 \cap A_2) = \emptyset$. But $f(A_1) \cap f(A_2) = \{1\} \cap \{1\} = \{1\}$. Different.

> [!question] **L2.12 (multiple choice — set/function traps)**
> (a) Are $f(f^{-1}(B)) = B$ and $f^{-1}(f(A)) = A$ always true?
> (b) $\big||x - 2| - 1\big| < 3 \Leftrightarrow ?$
> (c) If $g \circ f = \operatorname{id}_X$, what follows? (i) $f$ injective, (iv) $g$ surjective.
> (d) $f$ even, $g$ odd: which products are even/odd?
> (e) Inverse of $f : [0, \infty) \to \mathbb{R}, f(x) = x^4$?
> (f) Negate $\forall a \in A,\, \exists b \in B : a \leq b$.
>
>> [!success]- Solution
>> (a) Both **false in general**: equality requires extra hypotheses (surjectivity for the first, injectivity for the second).
>> (b) $||x-2| - 1| < 3 \Leftrightarrow -3 < |x-2| - 1 < 3 \Leftrightarrow |x-2| < 4 \Leftrightarrow$ **$-2 < x < 6$.**
>> (c) Both (i) and (iv): $g \circ f = \operatorname{id}_X$ forces $f$ to be injective and $g$ to be surjective.
>> (d) $fg$ is **odd** (even·odd = odd); $fg^2$ is **even** (even·even = even).
>> (e) The inverse **doesn't exist** as a map to $\mathbb{R}$: $f$ isn't surjective onto $\mathbb{R}$ (range is $[0, \infty)$).
>> (f) $\exists a \in A : \forall b \in B : a > b$.

> [!question] **L3.1 (element vs subset — fundamentals)**
> Using $0 := \emptyset$, $1 := \{0\}$, $2 := \{0, 1\}$, $3 := \{0, 1, 2\}$, …, decide:
> (a) $1 \in \{1\}$  (b) $1 \subseteq \{1\}$  (c) $\emptyset \in \{\emptyset\}$  (d) $\emptyset \subseteq \{\emptyset\}$  (e) $\forall X : \emptyset \subseteq X$
>
>> [!success]- Solution
>> (a) **True** ($1$ is the unique element).
>> (b) **False**: $1 = \{0\}$, so $1 \subseteq \{1\}$ would need $0 \in \{1\}$ — but $\{1\}$'s only element is $1$, not $0$.
>> (c) **True**.
>> (d) **True**: $\emptyset$ is a subset of every set.
>> (e) **True** (vacuously: there's nothing to check).

> [!question] **L4.1 (cardinality / equinumerosity)**
> Show $\mathbb{N}_0$ and $\{\text{perfect squares}\} = \{0, 1, 4, 9, \dots\}$ have the same cardinality.
>
>> [!success]- Solution
>> Define $f : \mathbb{N}_0 \to \{\text{perfect squares}\}$, $f(n) = n^2$.
>> - **Injective**: if $n_1^2 = n_2^2$ with $n_1, n_2 \geq 0$, then $n_1 = n_2$.
>> - **Surjective**: every perfect square is by definition some $n^2$.
>>
>> So $f$ is a bijection. The two sets are equinumerous (despite one being a strict subset of the other — the hallmark of infinite sets, Galileo's paradox).

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

## 📚 Official problem-set tasks (Loesung 02, 03, 04)

> [!question] **L2.11 (compute sup, inf, max, min)**
> For each of the following subsets of $\mathbb{R}$, compute $\sup$, $\inf$, and decide whether max/min exist:
> (a) $A := \{1/n \mid n \in \mathbb{N}\}$
> (b) $B := \{1/x \mid x \in (1, 2]\}$
> (c) $C := \{x/(x+1) \mid x \in [2, \infty)\}$
>
>> [!success]- Solution
>> (a) $A = \{1, 1/2, 1/3, \dots\}$. $\sup A = 1 = \max A$; $\inf A = 0$ (not attained, no min).
>> (b) $B = [\tfrac{1}{2}, 1)$. $\inf B = 1/2 = \min B$; $\sup B = 1$ (not attained, no max).
>> (c) The function $x \mapsto x/(x+1) = 1 - 1/(x+1)$ is strictly increasing. At $x = 2$ it equals $2/3$. As $x \to \infty$ it tends to 1. So $C = [2/3, 1)$: $\inf C = 2/3 = \min C$; $\sup C = 1$ (no max).

> [!question] **L3.2 (Dedekind cuts in action)**
> Recall $\bar r := \{s \in \mathbb{Q} : s > r\}$ for $r \in \mathbb{Q}$, and addition/multiplication of cuts.
> (a) Show $\bar 1 + \bar 2 = \bar 3$.
> (b) Show $\bar 1 \cdot \bar 1 = \bar 1$.
> (c) Define $\sqrt 2 := \{r \in \mathbb{Q} : r \geq 0,\, r^2 > 2\}$. Verify $\sqrt 2$ is a Dedekind cut.
>
>> [!success]- Solution
>> (a) $\bar 1 + \bar 2 = \{r + s : r > 1, s > 2\}$.
>> ($\subseteq$): if $r > 1, s > 2$ then $r + s > 3$. ($\supseteq$): given $t > 3$, set $r = 1 + (t-3)/2$ and $s = 2 + (t-3)/2$; then $r > 1, s > 2$, and $r + s = t$. $\blacksquare$
>>
>> (b) Same idea: ($\subseteq$) $rs > 1$ when $r, s > 1$; ($\supseteq$) given $t > 1$, take $r = (t+1)/2 > 1$ and $s = t/r$, then $s > 1$ (algebra) and $rs = t$.
>>
>> (c) Check the four Dedekind cut axioms:
>> - Nonempty: $r = 2$ has $r^2 = 4 > 2$. ✓
>> - $\neq \mathbb{Q}$: $r = 1$ has $r^2 = 1 \not> 2$. ✓
>> - Upward closed: if $r \in \sqrt 2$ and $s > r$, then $s^2 > r^2 > 2$. ✓
>> - No smallest: given $r \in \sqrt 2$, set $s_0 := (2r+2)/(r+2)$. Then $s_0 < r$ and $s_0^2 > 2$ (after expanding). ✓

> [!question] **L3.6 (sup and inf of $-A$)**
> Let $\emptyset \neq A \subseteq \mathbb{R}$ be bounded, and define $-A := \{-a : a \in A\}$. Show:
> $$\sup(-A) = -\inf A, \qquad \inf(-A) = -\sup A.$$
>
>> [!success]- Solution
>> Note: $u$ is a lower bound of $A \Leftrightarrow \forall a \in A : u \leq a \Leftrightarrow \forall a : -u \geq -a \Leftrightarrow -u$ is an upper bound of $-A$.
>>
>> So $\inf A$ being a lower bound of $A$ means $-\inf A$ is an upper bound of $-A$, hence $\sup(-A) \leq -\inf A$. Conversely, $\sup(-A)$ being an upper bound of $-A$ makes $-\sup(-A)$ a lower bound of $A$, so $-\sup(-A) \leq \inf A$, i.e. $\sup(-A) \geq -\inf A$. Equality. $\blacksquare$
>>
>> The second identity follows from the first applied to $-A$ in place of $A$.

> [!question] **L3.7 (complex arithmetic — bring to standard form)**
> Compute in form $a + bi$:
> (a) $(3 + 2i)(6 - 5i)$
> (b) $\dfrac{1}{1 + i}$
> (c) $\dfrac{3 + 4i}{2 - i}$
> (d) $\left(\dfrac{1 + i}{1 - i}\right)^n$ for $n \in \mathbb{N}$
> (e) $(1+i)^2 + (\overline{1+i})^2$
> (f) $\left(\dfrac{1 + i\sqrt 3}{2}\right)^3$
> (g) $(1+i)^6$ via polar form
>
>> [!success]- Solution
>> (a) $18 - 15i + 12i + 10 = 28 - 3i$.
>> (b) $\frac{1}{1+i} \cdot \frac{1-i}{1-i} = \frac{1-i}{2} = \tfrac{1}{2} - \tfrac{1}{2} i$.
>> (c) $\frac{(3+4i)(2+i)}{(2-i)(2+i)} = \frac{2 + 11i}{5} = \tfrac{2}{5} + \tfrac{11}{5} i$.
>> (d) $\frac{1+i}{1-i} = i$, so the answer is $i^n$ — periodic with period 4: $1, i, -1, -i, 1, \dots$.
>> (e) $(1+i)^2 = 2i$, $(\overline{1+i})^2 = (1-i)^2 = -2i$, sum $= 0$.
>> (f) $(1 + i\sqrt 3)^3 = 1 + 3 i\sqrt 3 + 3(i\sqrt 3)^2 + (i\sqrt 3)^3 = 1 + 3i\sqrt 3 - 9 - 3\sqrt 3\, i = -8$. Divide by $8$: $-1$.
>> (g) $1+i = \sqrt 2 \,\operatorname{cis}(\pi/4)$, so $(1+i)^6 = 8\,\operatorname{cis}(3\pi/2) = -8i$.

> [!question] **L3.8 (point sets in $\mathbb{C}$)**
> Sketch:
> (a) $M_1 := \{z \in \mathbb{C} : 1 < |z - i| < 2\}$
> (b) $M_2 := \{z \in \mathbb{C} : |z - 1| = |z + 1|\}$
>
>> [!success]- Solution
>> (a) Open **annulus** centered at $i$, between radii 1 and 2.
>>
>> (b) Set $z = x + iy$: $(x-1)^2 + y^2 = (x+1)^2 + y^2 \Leftrightarrow -2x = 2x \Leftrightarrow x = 0$. The **imaginary axis** (perpendicular bisector of $-1$ and $1$).

> [!question] **L3.9 (zeros of complex quadratics)**
> For $P(z) = az^2 + bz + c$ ($a \neq 0$), the zeros are $\alpha_\pm = (-b \pm \sqrt{b^2 - 4ac})/(2a)$. Apply to:
> (a) $z^2 + 6z + 10$
> (b) $4z^2 + 4iz - 1$
> (c) $(z^2 + 1)(z - 3i)^2$
>
>> [!success]- Solution
>> (a) Discriminant $36 - 40 = -4$, so $\sqrt{-4} = 2i$. Roots: $(-6 \pm 2i)/2 = -3 \pm i$.
>>
>> (b) Discriminant $-16 - (-16) = 0$, root $-i/2$ (double).
>>
>> (c) Factor reveals roots $\pm i$ and $3i$ (with $3i$ a double root).

> [!question] **L3.10 / L4.11 (online MC — counting roots, sup, geometry, polar)**
> (a) How many distinct zeros does $P(z) = z(z^2+1)^2 - z^2 - z^5$ have?
> (b) Maximum of $A := \{1/n : n \in \mathbb{N}\} \cup (2, 4)$?
> (c) Geometric shape of $M := \{c \in \mathbb{C} : |c - 1| = 2\}$?
>
>> [!success]- Solution
>> (a) Expand: $P(z) = z(z^4 + 2z^2 + 1) - z^2 - z^5 = z^5 + 2z^3 + z - z^2 - z^5 = 2z^3 - z^2 + z = z(2z^2 - z + 1)$. Three distinct roots: $0$ and the two roots of $2z^2 - z + 1$ (discriminant $1 - 8 = -7$). **Answer: 3.**
>>
>> (b) Max **does not exist**: $\sup A = 4 \notin A$.
>>
>> (c) **Circle** centered at $1$ with radius $2$.

> [!question] **L4.2 (the cis-function and powers)**
> Bring to standard form:
> (a) $(1+i)^2$  (b) $(1+i)(1-i)$  (c) $1/(1-i)$  (d) $\operatorname{cis}(\pi/4), \operatorname{cis}(\pi/3), \operatorname{cis}(\pi/6)$
> (e) $(1+i)^{10}$  (f) $\big(\tfrac{1+\sqrt 3 i}{2}\big)^6$
>
> Prove: $\operatorname{cis}(\varphi + \psi) = \operatorname{cis}(\varphi)\operatorname{cis}(\psi)$ and $\operatorname{cis}(k\pi/2) = i^k$ for $k \in \mathbb{Z}$.
>
>> [!success]- Solution
>> (a) $2i$. (b) $2$. (c) $\tfrac{1}{2} + \tfrac{1}{2} i$.
>> (d) $\tfrac{\sqrt 2}{2}(1 + i)$, $\tfrac{1}{2} + \tfrac{\sqrt 3}{2} i$, $\tfrac{\sqrt 3}{2} + \tfrac{1}{2} i$.
>> (e) Polar: $(\sqrt 2)^{10}\operatorname{cis}(10\pi/4) = 32\operatorname{cis}(5\pi/2) = 32 i$.
>> (f) Polar: $\operatorname{cis}(6\cdot\pi/3) = \operatorname{cis}(2\pi) = 1$.
>>
>> The addition formula $\operatorname{cis}(\varphi + \psi) = \operatorname{cis}\varphi \cdot \operatorname{cis}\psi$ unpacks to the classical sin/cos addition theorems. The second identity follows iteratively from $\operatorname{cis}(\pi/2) = i$.

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

## 📚 Official problem-set tasks (Loesung 00, 04, 05)

> [!question] **L0.6 (sequences warm-up)**
> (i) First six terms of $a_n := n^2$.
> (ii) Fibonacci: $a_0 = 0, a_1 = 1, a_n = a_{n-2} + a_{n-1}$. First six terms.
> (iii) Convergence of $(n^2)_n$, $(1/n)_n$, $((n+1)/(n+2))_n$.
>
>> [!success]- Solution
>> (i) $0, 1, 4, 9, 16, 25$.
>> (ii) $0, 1, 1, 2, 3, 5$.
>> (iii) Diverges to $\infty$; converges to $0$; converges to $1$.

> [!question] **L4.5 (ε-N proofs of convergence)**
> Prove via the ε-N definition:
> (a) $a_n := 2/n \to 0$.
> (b) $a_n := 1 + 1/\sqrt n \to 1$.
> (c) $a_n := 2/n + 1 + 1/\sqrt n \to 1$.
> (d) $a_n := (-1)^n$ diverges.
>
>> [!success]- Solution
>> (a) Given $\varepsilon > 0$, choose $n_0 \geq 2/\varepsilon$ (Archimedes). For $n \geq n_0$: $|a_n - 0| = 2/n \leq 2/n_0 \leq \varepsilon$. ✓
>>
>> (b) Choose $n_0 \geq 1/\varepsilon^2$. For $n \geq n_0$: $|a_n - 1| = 1/\sqrt n \leq 1/\sqrt{n_0} \leq \varepsilon$. ✓
>>
>> (c) Sum of (a) and (b); limit is $0 + 1 = 1$. (Or: directly use the limit-laws.)
>>
>> (d) Suppose $a_n \to A$. Pick $\varepsilon = 1/2$. For all large $n$, $|(-1)^n - A| < 1/2$. But $(-1)^n$ alternates between $1$ and $-1$, which differ by $2$, contradicting "all within $1/2$ of one fixed $A$".

> [!question] **L4.7 (zero × bounded = zero)**
> Suppose $a_n \to 0$ and $(b_n)$ is bounded ($|b_n| \leq C$). Show $a_n b_n \to 0$.
>
>> [!success]- Solution
>> Given $\varepsilon > 0$, set $\tilde\varepsilon := \varepsilon/C$. Pick $N$ so $|a_n| < \tilde\varepsilon$ for $n \geq N$. Then $|a_n b_n| \leq |a_n| \cdot C < (\varepsilon / C) \cdot C = \varepsilon$. $\blacksquare$
>>
>> *Used constantly: any $1/n$-style decay times any bounded oscillation (sin, cos, $(-1)^n$) goes to zero.*

> [!question] **L4.8 (compute these limits)**
> (a) $\lim \dfrac{n^2 - n + 3}{n^2 + 2}$
> (b) $\lim \dfrac{n^3 - n^2 + 3}{2^n(n^2 + 5)}$
> (c) $\lim \dfrac{\sqrt{n^2 - 1}}{n}$
> (d) $\lim n^2 \left(\dfrac{\sin n}{2^n} + \dfrac{\cos n}{n^4}\right)$
>
>> [!success]- Solution
>> (a) Divide by $n^2$: $\frac{1 - 1/n + 3/n^2}{1 + 2/n^2} \to 1$.
>> (b) Numerator grows polynomially, denominator exponentially; limit $0$.
>> (c) $\sqrt{1 - 1/n^2} \to 1$. (Conjugate trick gives $|\sqrt{1 - 1/n^2} - 1| \leq 1/n^2 \to 0$.)
>> (d) Both terms are (zero-sequence)·(bounded). Use L4.7: limit $= 0 + 0 = 0$.

> [!question] **L4.10 (Heron's method for $\sqrt c$)**
> Fix $c \geq 1$. Define $a_1 := c$, $a_{n+1} := \tfrac{1}{2}(a_n + c/a_n)$.
> (a) Show $1 \leq a_n \leq c$ for all $n$.
> (b) Show $a_n^2 \geq c$.
> (c) Show $(a_n)$ is monotonically decreasing.
> (d) Conclude $a_n \to \sqrt c$.
> (e) Numerical check for $c = 3$.
>
>> [!success]- Solution
>> (a) Induction: $a_{n+1} = \tfrac{1}{2}(a_n + c/a_n) \in [\tfrac12(1 + 1), \tfrac12(c + c)] = [1, c]$.
>>
>> (b) $a_{n+1}^2 - c = \tfrac{1}{4}(a_n + c/a_n)^2 - c = \tfrac{1}{4}(a_n - c/a_n)^2 \geq 0$.
>>
>> (c) $a_n - a_{n+1} = \tfrac{1}{2a_n}(a_n^2 - c) \geq 0$ by (b).
>>
>> (d) Bounded + monotone ⇒ convergent (Chapter 4 main theorem). The limit $a$ satisfies $a = \tfrac12(a + c/a)$, so $a^2 = c$, hence $a = \sqrt c$.
>>
>> (e) $c = 3$: $a_1 = 3, a_2 = 2, a_3 = 1.75, a_4 \approx 1.73214, a_5 \approx 1.73205081$ — matches $\sqrt 3 \approx 1.732050808$ to 7 decimals. *Doubling of correct digits per step (quadratic convergence).*

> [!question] **L4.11 (online MC — limits)**
> (a) $\lim \dfrac{16 n^3 + 100 n + 10^6}{27 n^3 + 10920 n + 2020}$
> (b) $\lim \dfrac{n^2}{2^n n^2 + 8}$
> (c) $\lim \dfrac{n^3 + 22n^2 - 10}{29 n^2 - 27 n + 8}$
>
>> [!success]- Solution
>> (a) **$16/27$** — leading coefficients dominate.
>> (b) **$0$** — exponential beats polynomial.
>> (c) **Diverges** to $+\infty$ (numerator degree exceeds denominator).

> [!question] **L5.1 (lim sup and lim inf)**
> Compute:
> (a) $\limsup_{k\to\infty} (-1)^k(1 + 1/k)$
> (b) $\liminf_{k\to\infty} (-1)^k(1 + 1/k)$
> (c) $\limsup_{k\to\infty} k(1 + (-1)^k)$
> (d) $\liminf_{k\to\infty} k(1 + (-1)^k)$
>
>> [!success]- Solution
>> (a) Even subsequence $\to 1^+$, odd subsequence $\to -1^-$. **$\limsup = 1$.**
>> (b) **$\liminf = -1$.**
>> (c) Even: $a_{2k} = 4k \to \infty$. **$\limsup = +\infty$.**
>> (d) Odd: $a_{2k+1} = 0$ for all $k$. **$\liminf = 0$.**

> [!question] **L5.2 (vector convergence and $n$-th roots)**
> (a) Convergence of $a_n := ((n+1)/n,\, 2^{-n}) \in \mathbb{R}^2$?
> (b) Show $\sqrt[n]{n} \to 1$.
> (c) Show $\sqrt[n]{n!} \to \infty$.
>
>> [!success]- Solution
>> (a) Component-wise: $1 + 1/n \to 1$ and $2^{-n} \to 0$. **Limit $(1, 0)$.**
>>
>> (b) Write $\sqrt[n]{n} = 1 + \delta_n$ with $\delta_n \geq 0$. Then $n = (1 + \delta_n)^n \geq \binom{n}{2}\delta_n^2 = \tfrac{n(n-1)}{2}\delta_n^2$, so $\delta_n^2 \leq \tfrac{2}{n-1} \to 0$, hence $\delta_n \to 0$. ✓
>>
>> (c) Hint: $(2k)! \geq k^k$, so $\sqrt[n]{n!} \geq \sqrt{n/2}$ for both even and odd $n$. Given $C > 0$, pick $n_0 > 2C^2$; for $n \geq n_0$: $\sqrt[n]{n!} \geq \sqrt{n/2} > C$. So $\sqrt[n]{n!} \to \infty$. $\blacksquare$

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

## 📚 Official problem-set tasks (Loesung 00, 05)

> [!question] **L0.7 (warm-up: geometric series)**
> Compute $1 + \tfrac12 + \tfrac14 + \tfrac18 + \dots$
>
>> [!success]- Solution
>> Geometric series with $q = 1/2$: $\sum q^i = \dfrac{1}{1 - 1/2} = 2$.

> [!question] **L5.3 (apply convergence tests)**
> Show convergence of:
> (a) $\sum_{k=1}^\infty \dfrac{(k!)^2}{(2k)!}$
> (b) $\sum_{k=1}^\infty \dfrac{k!}{k^k}$
> (c) $\sum_{k=1}^\infty k^p z^k$ for $|z| < 1, p \in \mathbb{N}$
> (d) $\sum_{k=0}^\infty \dfrac{(-1)^k}{2k+1}$ (Leibniz series for $\pi/4$)
>
>> [!success]- Solution
>> (a) **Ratio test:** $\dfrac{a_{k+1}}{a_k} = \dfrac{(k+1)^2}{(2k+2)(2k+1)} \to \dfrac{1}{4} < 1$. Convergent.
>>
>> (b) **Ratio test:** $\dfrac{a_{k+1}}{a_k} = \dfrac{(k+1)!\, k^k}{k!\,(k+1)^{k+1}} = \dfrac{k^k}{(k+1)^k} = \left(\dfrac{k}{k+1}\right)^k \to \dfrac{1}{e} < 1$. Convergent.
>>
>> (c) **Root test:** $\sqrt[k]{|k^p z^k|} = k^{p/k}\,|z| \to |z| < 1$ (using $\sqrt[k]{k} \to 1$). Convergent.
>>
>> (d) **Leibniz alternating-series test:** $b_k = 1/(2k+1)$ is positive, decreasing, $\to 0$. Convergent.

> [!question] **L5.4 (Cauchy criterion, harmonic series, ζ-series)**
> (a) Define $x_k := 3^{-k}$ if $4 \mid k$, else $x_k := -3^{-k}$. Show $a_n := \sum_{k=0}^n x_k$ is Cauchy (hence convergent).
> (b) Write down the negation of "Cauchy".
> (c) Show the harmonic series partial sums $H_n = \sum_{k=1}^n 1/k$ are NOT Cauchy.
> (d) Conclude harmonic series diverges.
> (e) Show $\sum 1/k^s$ diverges for $s \leq 1$.
>
>> [!success]- Solution
>> (a) Given $\varepsilon > 0$, pick $n_0$ with $3^{-n_0} < \varepsilon$ (Bernoulli: $3^{n_0} \geq 1 + 2 n_0$). For $n \geq m \geq n_0$:
>> $$|a_n - a_m| \leq \sum_{k=m+1}^n |x_k| \leq \sum_{k=m+1}^n 3^{-k} \leq \tfrac{3^{-m}}{2} \leq 3^{-n_0} < \varepsilon. \;\checkmark$$
>>
>> (b) **Negation:** $\exists \varepsilon > 0\;\forall n_0 \in \mathbb{N}_0\;\exists m, n \geq n_0 : |a_m - a_n| > \varepsilon$.
>>
>> (c) Take $\varepsilon = 1/4$. For any $n_0$, set $m = 2 n_0, n = n_0$. Then
>> $$H_{2n_0} - H_{n_0} = \sum_{k=n_0+1}^{2n_0} \tfrac{1}{k} \geq \sum \tfrac{1}{2 n_0} = \tfrac{n_0}{2 n_0} = \tfrac{1}{2} > \tfrac{1}{4}.$$
>> So $(H_n)$ fails Cauchy.
>>
>> (d) Cauchy is necessary for convergence in $\mathbb{R}$ (completeness), so $(H_n)$ diverges. $\blacksquare$
>>
>> (e) For $s \leq 1$: $1/k^s \geq 1/k$, so partial sums $\geq H_n$, which diverges. By comparison, $\sum 1/k^s$ diverges too.

> [!question] **L5.5 (radius of convergence)**
> Compute the radius of convergence $\rho = 1/\limsup \sqrt[k]{|c_k|}$ for the power series $\sum c_k z^k$:
> (a) $c_k = 1$ &nbsp; (b) $c_k = 1/k^k$ &nbsp; (c) $c_k = k!/k^k$ &nbsp; (d) $c_k = k^p$ &nbsp; (e) $c_k = 1/k!$
>
> Then decide convergence at specific points:
> (f) $\sum k!/k^k$ at $z = 1$.
> (g) Geometric $\sum z^k$ for $|z| > 1$.
> (h) Exponential $\sum z^k/k!$ for arbitrary $z$.
>
>> [!success]- Solution
>> (a) $\rho = 1$.
>> (b) $\sqrt[k]{1/k^k} = 1/k \to 0$, so $\rho = \infty$.
>> (c) Use ratio test on $a_k = k! z^k / k^k$: ratio $\to |z|/e$, so $\rho = e$.
>> (d) $\sqrt[k]{k^p} = k^{p/k} \to 1$, so $\rho = 1$.
>> (e) $\sqrt[k]{1/k!} \to 0$, so $\rho = \infty$.
>>
>> (f) $|z| = 1 < e = \rho$: **converges**.
>> (g) $|z| > 1 = \rho$: **diverges**.
>> (h) $\rho = \infty$: **converges for every $z \in \mathbb{C}$**. (This is the definition of $e^z$.)

> [!question] **L5.6 (online MC)**
> (a) For a given sequence: which exists — limit, $\liminf$, or $\limsup$?
> (b) True/false: $b_n := \sup_{k \geq n} a_k$ is monotonically decreasing; $c_n := \inf_{k \geq n} a_k$ is monotonically increasing.
> (c) Is the harmonic series convergent or divergent?
>
>> [!success]- Solution
>> (a) The $\liminf$ always exists (in $[-\infty, +\infty]$) — same for $\limsup$. The plain limit may not.
>> (b) **True**: as $n$ grows, you take sup over a smaller set (so $b_n$ can only stay or shrink); inf over a smaller set can only stay or grow.
>> (c) **Divergent** — the canonical example showing "$a_n \to 0$" is necessary but **not sufficient** for $\sum a_n$ to converge.

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

