---
title: The 3-Year AI/ML & Physical AI Mastery Roadmap
tags:
  - machine-learning
  - deep-learning
  - robotics
  - physical-ai
  - sim-to-real
  - career-roadmap
  - cpp
  - OOP
draft: true
publish: false
status: in Progress
---

---

title: "The 3-Year Physical AI Engineering Roadmap"<br>
tags:
  - machine-learning
  - deep-learning
  - robotics
  - physical-ai
  - sim-to-real
  - isaac-lab
  - ros2
  - cpp
  - cuda
  - career-roadmap<br>
date_created: 2026-09-14<br>
status: In Progress<br>
target_roles:
  - Robotics Software Engineer
  - Physical AI / Robot Learning Engineer
  - ML Systems / Inference Engineer<br>
target_companies:
  - NVIDIA Zurich
  - ANYbotics
  - ABB Robotics
  - Google Zurich
  - Rivr / Sevensense / Swiss robotics startups

---

# 🎯 North Star

> [!important] The one-sentence target<br>
> Graduate as an engineer who can take a learned policy the whole way: **mathematics → PyTorch → simulation → C++ → ROS 2 → GPU inference → physical robot → measured sim-to-real gap → closed gap.**
> 
> Not "an AI student who did a robotics project." A junior robotics engineer who happens to have a bachelor's degree.

The differentiator is **not** the number of technologies. It's the intersection: *ML + C++ + GPU/inference + simulation + robotics + real hardware + reproducible engineering.* That combination is rare at bachelor's level, which is exactly why it works.

---

# ⚙️ How to actually run this alongside a full-time degree

> [!warning] Read this before Month 1 — it's the part that decides whether this gets executed or abandoned<br>
> **Budget: 10–14 hours/week.** Roughly 1.5–2h on 4–5 weekdays, plus one 4h weekend block. That is the real capacity next to a full-time HSLU workload. This roadmap is scoped to that number, not to an imaginary 30h/week.
> 
> **Exam periods: the roadmap pauses.** Two weeks before each HSLU exam block, roadmap work stops entirely. Coursework wins. This is planned, not a failure — the consolidation months (6, 12, 18, 24) exist partly to absorb this.
> 
> **Overlap aggressively.** Year 1 math/ML overlaps HSLU coursework directly. If a course covers a topic well, shrink that roadmap week to *review + the from-scratch implementation only.* Never learn the same thing twice.
> 
> **Fold roadmap projects into graded coursework.** HSLU's AI Projects and AI Applications modules are the obvious place. Ask whether a course project can *be* a roadmap deliverable. Two birds, one grade.
> 
> **The scope-cut rule:** if a month runs behind, cut project scope — never cut the verification test. A smaller thing that provably works beats a bigger thing that half-works.

---

# ✅ The Non-Negotiable Rule

Every month requires **one shipped deliverable** (merged code, reproducible benchmark, technical write-up, public demo, or upstream PR) **and one passed verification test**.

Each week below has a **Build** spec and a **Test** spec. The Test line is how you know you're done — not "I feel finished," but a number or a passing check.

---

# YEAR 1 — Become Dangerous With ML + Software

> Year 1 goal: you are *not* a robotics engineer yet. You are a strong ML/software engineer ready to specialize.

## Month 1 — Linear Algebra, Calculus & Numerical Computing

📚 3Blue1Brown *Essence of Linear Algebra* (ep 1–8) + *Essence of Calculus* · Strang MIT 18.06 (OCW) — Lectures 21, 22, 25, 29 · *Mathematics for Machine Learning* (Deisenroth/Faisal/Ong, free PDF) Ch. 2–5 · Parr & Howard, *The Matrix Calculus You Need For Deep Learning*

| Wk | Build | Test |
|---|---|---|
| 1 | Watch 3B1B ep 1–8. Implement vector add/scale, matrix multiply (naive triple-loop **and** vectorized), dot product, broadcasting — raw NumPy arrays, no `np.dot`/`@` in the first pass. | `np.allclose(my_matmul(A,B), A@B)` passes on 20 random pairs, sizes 2×2 → 100×100. |
| 2 | Strang L21/22/25/29. Implement power iteration for the dominant eigenvalue. SVD image compression on one real grayscale photo. | Power-iteration eigenvalue within 1e-4 of `np.linalg.eig` on a 5×5 symmetric matrix. Frobenius reconstruction error decreases monotonically for rank k = 5→10→25→50→100. |
| 3 | Derivatives, partials, multivariate chain rule, gradient vectors, Jacobians, Hessian. Build a generic finite-difference gradient checker. Gradient descent on Rosenbrock. | Finite-diff matches analytical gradient within 1e-5 on 3 test functions (x², x·sin(y), x²+y²). GD reaches within 0.01 of (1,1) in ≤10,000 steps at lr=0.001. |
| 4 | Distributions, conditional probability, expectation, variance, Bayes. Naive Bayes spam classifier from the raw formula (no sklearn), UCI SMS Spam Collection (~5,500 messages). | >90% accuracy on a held-out 20% split. |

**Deliverable:** `math-foundations` repo — code, tests, hand-written derivations, plots — plus a blog post deriving the multivariate chain rule with your own computation-graph diagram.

## Month 2 — Statistics, Algorithms & Linux

📚 Downey, *Think Stats* (free) Ch. 1–4, 9 · Bruce & Bruce, *Practical Statistics for Data Scientists* Ch. 3 · NeetCode.io (free tier) · *The Missing Semester of Your CS Education* (MIT, free) — for the Linux track

| Wk | Build | Test |
|---|---|---|
| 1 | *Think Stats* Ch. 1–4. Simulate the CLT: 10,000 samples of size 30 from Uniform(0,1), plot the sampling distribution of the mean. | Sample-mean distribution's mean within 0.01 of 0.5; visually normal. |
| 2 | *Think Stats* Ch. 9 + *Practical Statistics* Ch. 3. Two-sample t-test from the raw formula (no `scipy.stats.ttest_ind`). Bootstrap confidence intervals. | Your p-value matches `scipy.stats.ttest_ind` within 1e-6 on 5 random datasets. |
| 3 | Clean the Kaggle Titanic dataset end to end: missing values, categorical encoding, 2 engineered features (family size, title from name). | Zero nulls in kept columns; every imputation choice has a one-line written rationale in the README. |
| 4 | **NeetCode:** Arrays & Hashing + Two Pointers + Binary Search. Specifically: Two Sum, Valid Anagram, Group Anagrams, Top K Frequent, Product of Array Except Self, Valid Palindrome, Two Sum II, 3Sum, Container With Most Water, Binary Search, Search Rotated Array, Koko Eating Bananas + 8 more from those lists (**20 total**). | All 20 pass the judge. You can state each one's time/space complexity from memory, no notes. |

🐧 **Linux track (starts now, ~2h/week ongoing):** shell fluency, processes, signals, pipes, permissions, SSH, Git beyond `commit/push` (rebase, bisect, reflog), `gdb` basics.<br>
**Test:** debug a deliberately crashing C program using `gdb` alone — find the faulting line without adding print statements.

**Deliverable:** `statistics-algorithms` repo with publication-quality Matplotlib/Seaborn plots.

## Month 3 — Classical ML From Scratch

📚 Andrew Ng *ML Specialization* (Coursera, audit free) Course 1 · Géron, *Hands-On ML* Ch. 1–4 (theory reference only) · Karpathy's `micrograd` — **do not open until after your Week 3 attempt**

| Wk | Build | Test |
|---|---|---|
| 1 | Linear regression from scratch: gradient descent **and** closed-form normal equation. Fit on California Housing. | Both methods agree within 1e-3 on coefficients; held-out R² > 0.6. |
| 2 | Logistic regression (BCE) and softmax regression (categorical CE). Fit on Breast Cancer Wisconsin and Iris. | >90% on Breast Cancer test split; >85% on Iris. |
| 3 | 2-layer feedforward net: manual forward pass **and** manual backprop. NumPy only, zero frameworks. | Loss decreases monotonically ≥100 epochs; test accuracy beats your Week 2 logistic baseline. |
| 4 | **Whiteboard checkpoint.** No new code. Derive cross-entropy gradient + full backprop for your Week 3 network, on paper, from memory. | Completed correctly in under 15 minutes, closed-book. Record yourself once for your own accountability. |

**Deliverable:** `ml-from-scratch` repo + article *"What PyTorch Hides: Deriving and Implementing Backprop in Raw NumPy."*

## Month 4 — PyTorch & Deep Learning Engineering

📚 Karpathy *Neural Networks: Zero to Hero* (YouTube, full playlist) · PyTorch *60 Minute Blitz* · Goodfellow/Bengio/Courville *Deep Learning* (free online) Ch. 7 (regularization), Ch. 8 (optimization)

| Wk | Build | Test |
|---|---|---|
| 1 | Port Month 3's NumPy net to PyTorch `torch.nn`. | Loss curve matches the NumPy version in shape and convergence speed over identical epochs. |
| 2 | Implement SGD, Momentum, Adam by hand (raw update rules, no `torch.optim`), benchmark against `torch.optim`. | Your Adam reaches the same final loss within 5% in the same step count. |
| 3 | Goodfellow Ch. 7: dropout, weight decay, BatchNorm, LayerNorm. Add each individually to a deliberately overfitting model. | Each of the 4 measurably closes the train/val gap vs. baseline — report all 4 before/after gaps in a table. |
| 4 | Real experiment: a Kaggle tabular or image competition (**not MNIST**), tracked in Weights & Biases. | Beats the competition's public baseline, or a heuristic baseline you define and document. |

🔧 **Engineering standard — applies to every experiment from here to Month 36:** config file, fixed seed, checkpoint saved, training log, validation metric, README with one-command reproduction.<br>
**Test:** a stranger clones the repo and reproduces your headline number following the README alone.

**Deliverable:** `pytorch-training-lab` — optimizer benchmarking report (convergence + memory).

## Month 5 — Computer Vision

📚 Stanford **CS231n** — Module 1 (linear classification, backprop) + Module 2 (CNNs, spatial arrangement), notes at cs231n.github.io · `pytorch-grad-cam` (Gildenblat)

| Wk | Build | Test |
|---|---|---|
| 1 | 2D convolution + max/avg pooling in raw NumPy, then PyTorch. | Raw output matches `F.conv2d` within 1e-5 on a test image + kernel. |
| 2 | CS231n Module 2: ResNet residuals, skip connections, receptive fields. | Write 3–4 sentences explaining why skip connections fix vanishing gradients — closed-book. |
| 3 | Fine-tune ResNet18 or ConvNeXt-Tiny (`torchvision` pretrained) on a **robotics-relevant** dataset if possible (object detection, grasping images, industrial defect). Fallback: Dogs vs. Cats / Plant Pathology 2021. | Val accuracy >90% (Dogs vs Cats) or beats the public baseline. |
| 4 | Grad-CAM, confusion matrix, error analysis on your 10 worst misclassifications. | Grad-CAM heatmaps highlight the correct object region on ≥8/10 correctly-classified test images. |

> [!tip] 📧 Parallel task: HSLU outreach — send this month, after first-semester grades are in<br>
> Deliberately **not** Month 1. This email should arrive carrying a real HSLU transcript, not just stated ambition. Footing first, then the ask.
> 
> **Contacts:** Prof. Dr. Donnacha Daly (Program Director, BSc AI/ML) — donnacha.daly@hslu.ch · Dr. Curdin Derungs (Deputy Director) — curdin.derungs@hslu.ch · Prof. Dr. Björn Jensen (Head, AI Robotics Lab) — [profile](https://www.hslu.ch/en/lucerne-university-of-applied-sciences-and-arts/about-us/people-finder/profile?pid=3528) · Florian Herzog (Lecturer, AI Robotics Lab) — [profile](https://www.hslu.ch/en/lucerne-university-of-applied-sciences-and-arts/about-us/people-finder/profile?pid=3751) · Fallback: informatik@hslu.ch
> 
> **Draft (send to Daly/Derungs first — they approve thesis topics and can route you to Jensen):**
> 
> *Subject: AI/ML student — early interest in robotics/sim-to-real specialization and thesis direction*
> 
> Dear Prof. Daly / Dr. Derungs,
> 
> My name is Devansh, I'm a student in the Bachelor AI/ML program (first-semester grades: [fill in]). I have a background in electrical engineering (EFZ Elektrotechnik) and have spent the past months building a structured self-study track in deep learning alongside my coursework — including implementing backpropagation and a transformer from scratch, and working in the PyTorch codebase.
> 
> I'm aiming my electives and eventual thesis toward embodied AI / sim-to-real robotics: reinforcement learning and domain randomization to transfer a learned policy onto physical hardware, with sensor fusion via ROS 2. I'd like to plan my module choices deliberately from here rather than deciding late.
> 
> Could I get 15–20 minutes to talk through how best to structure my electives toward this, and whether the AI Robotics Lab might be the right eventual thesis home for this direction?
> 
> Thank you for your time,<br>
> Devansh
> 
> - [ ] Sent to Daly/Derungs — date: ______
> - [ ] Reply received / meeting booked — date: ______
> - [ ] Follow up if no reply after 2 weeks

**Deliverable:** `robot-vision` repo — feature maps, Grad-CAM heatmaps, failure-mode write-up.

## Month 6 — Autograd Engine + C++ Begins

📚 Karpathy `micrograd` (scalar reference) · CS231n backprop notes (cs231n.github.io/optimization-2) · Stroustrup, *A Tour of C++* (3rd ed.) Ch. 1–6

| Wk | Build | Test |
|---|---|---|
| 1–2 | Tensor-level autodiff engine from scratch: computational graph, topological sort, reverse-mode autodiff. Support add, mul, matmul, relu, exp, broadcasting. | Gradients match PyTorch autograd within 1e-6 on 5 test graphs of depth 2–6. |
| 3 | Finite-difference gradient checker as independent verification. | Numerical gradients match your engine's analytical gradients within 1e-5 on the same 5 graphs. |
| 4 | **C++ starts here.** *A Tour of C++* Ch. 1–6: RAII, references, move semantics, smart pointers, STL, CMake. Rewrite your autodiff engine's forward pass in C++. | Compiles clean under `-Wall -Wextra -Wpedantic` (zero warnings). Passes AddressSanitizer + UBSan. Output matches Python version on 5 test cases. |

> [!note] Buffer month — this is also your HSLU exam-block absorber. If coursework ate Weeks 3–4, that's fine: the C++ start rolls into Month 7 and nothing downstream breaks.

**Deliverable:** `cpp-autodiff` repo with unit tests proving gradient parity against PyTorch.

## Months 7–8 — Transformers From Scratch (Year 1 Flagship)

📚 Vaswani et al. *Attention Is All You Need* (arXiv 1706.03762) — §3.2 attention, §3.5 positional encoding · Jay Alammar *The Illustrated Transformer* · Karpathy *Let's build GPT from scratch* + `nanoGPT` · Harvard NLP *The Annotated Transformer*

| Wk | Build | Test |
|---|---|---|
| 1–2 | Read the paper twice — once for the idea, once purely for implementation details. Implement scaled dot-product attention + multi-head attention from raw matrix ops (no `nn.MultiheadAttention`). | Output matches `F.scaled_dot_product_attention` within 1e-4 on random input. |
| 3–4 | Full decoder-only transformer: embeddings, positional encoding (try RoPE), 4–6 stacked blocks, causal masking, output projection. d_model 128–256. | Overfits to near-zero loss on a single batch of 8 examples within 200 steps — this proves correct wiring **before** you scale. |
| 5–6 | Train a BPE tokenizer (vocab 4–8k) on TinyStories (HuggingFace). Pretrain your model. | Loss decreases monotonically per epoch. Sample 5 completions at temp 0.8 — ≥3 are grammatical English sentences. |
| 7–8 | KV-cache for autoregressive inference. Profile tokens/sec and memory, cached vs uncached. | Cached logits identical to uncached within 1e-4. Cached generation ≥2× faster for sequences >100 tokens. |

**Deliverable:** GitHub release with architecture diagrams, loss curves, KV-cache benchmark table, runnable inference script. **This is your first flagship — write it up properly.**

## Month 9 — Modern NLP & Model Adaptation

📚 HuggingFace NLP Course (free) · Hu et al. *LoRA* (arXiv 2106.09685) · Dettmers et al. *QLoRA* (arXiv 2305.14314)

> [!info] NLP is a **secondary** specialization from here on. The purpose is understanding modern foundation-model engineering — not becoming an NLP person. One month, then it stops competing for bandwidth with robotics.

| Wk | Build | Test |
|---|---|---|
| 1–2 | HF course: `transformers`, `datasets`, `tokenizers`, `accelerate`. Run inference on 3 task types (classification, NER, generation). | Sensible outputs on all 3, no copy-paste — you can modify each pipeline meaningfully. |
| 3–4 | LoRA from the paper's formulas (low-rank adapters into attention layers), no `peft`. Then 4-bit quantization for QLoRA. Compare against full fine-tuning **and** official `peft`. | LoRA within 2% of full fine-tune accuracy using <5% trainable params. QLoRA uses <50% the GPU memory of full fine-tuning, within 3% accuracy. |

**Deliverable:** `lora-from-scratch` — comparison table: memory / latency / accuracy across Full vs LoRA vs QLoRA.

## Month 10 — Production Inference & Linux Systems

📚 FastAPI docs · Chip Huyen, *Designing Machine Learning Systems* · Docker *Get Started* + NVIDIA Container Toolkit docs · ONNX Runtime quantization docs

| Wk | Build | Test |
|---|---|---|
| 1 | Async FastAPI service wrapping your Month 9 model, strict Pydantic schemas. | Malformed input returns clean 422, not a crash. 10 manual test requests return correct predictions. |
| 2 | Multi-stage Dockerfile, GPU runtime via NVIDIA Container Toolkit. | `docker build && docker run` succeeds on a clean VM with zero manual fixes. |
| 3 | Export to ONNX, INT8/FP16 quantization, dynamic batching profiling. | Quantized model ≥2× faster on CPU than unquantized PyTorch, <2% accuracy drop. |
| 4 | Deploy to free-tier cloud, add Prometheus metrics + structured logging. | Public URL reachable. 50 concurrent requests complete; p99 < 3× p50. |

🐧 **Linux debugging track:** `top`, `htop`, `ps`, `strace`, `lsof`, `perf`, `valgrind`.<br>
**Test:** profile your inference service with `perf` and correctly identify the top-3 hotspots by CPU time.

**Deliverable:** `inference-benchmark` — Dockerized, load-tested API with GitHub Actions CI running tests on every push.

## Months 11–12 — Modern C++, Concurrency & First Upstream PR

📚 Stroustrup *A Tour of C++* Ch. 7–15 · Meyers *Effective Modern C++* (Items 1–25) · Williams *C++ Concurrency in Action* Ch. 2–5 · LibTorch C++ API docs · pybind11 docs · Edward Yang *"PyTorch internals"* (blog.ezyang.com) · the target repo's `CONTRIBUTING.md`

| Wk | Build | Test |
|---|---|---|
| 1–2 | C++17/20 depth: templates, move semantics, ownership, cache-friendly layout. Build a **producer/consumer queue** with proper synchronization (mutex + condition variable). | ThreadSanitizer reports **zero data races** across a 1M-item stress run. |
| 3–4 | Multithreaded inference pipeline in C++ with a benchmark harness. LibTorch basics; one custom C++ operator bound to Python via pybind11. | Custom op callable from Python, matches a pure-Python reference within 1e-6 on 10 random inputs. Pipeline throughput measurably beats single-threaded baseline — report the number. |
| 5–6 | Read Edward Yang's internals post. Clone + build PyTorch (or ROS 2 / Isaac Lab / ONNX Runtime) from source. Reproduce 2–3 open GitHub issues locally. | Local build succeeds. You reproduce ≥1 reported bug and write a clean repro script for it. |
| 7–8 | Submit the PR. Docs fix, failing-test addition, bug fix, or small optimization — all are legitimate first contributions. | PR submitted with a clear description and passing CI. (Merge may take months — that's normal. Document the review feedback either way.) |

**Deliverable:** First upstream PR + retrospective post on what the codebase taught you.

> [!success] ✅ YEAR 1 CHECKPOINT<br>
> You should be able to: derive backprop closed-book · implement attention from scratch · write modern C++ with zero sanitizer findings · debug with gdb/perf · use PyTorch properly · profile CPU/GPU workloads · use Git professionally · write tests · explain every engineering decision you made.
> 
> **Artifacts:** 6+ repos, 1 upstream PR, 1 working from-scratch transformer generating coherent text, all repos independently reproducible.

---

# YEAR 2 — Become a Robotics / Physical AI Engineer

## Months 13–14 — Reinforcement Learning From Scratch

📚 Sutton & Barto *Reinforcement Learning: An Introduction* (2nd ed., free PDF) Ch. 3–4 (MDPs/Bellman), Ch. 5–6 (MC/TD), Ch. 13 (policy gradients) · OpenAI *Spinning Up in Deep RL* · Schulman et al. *PPO* (arXiv 1707.06347)

| Wk | Build | Test |
|---|---|---|
| 1–2 | S&B Ch. 3–4. Value iteration + policy iteration on FrozenLake (Gymnasium). | Converges to the same optimal policy as Gymnasium's reference solution. |
| 3–4 | S&B Ch. 5–6, 13 + Spinning Up. Implement REINFORCE → A2C → PPO (clipped objective) in that order. | Each solves CartPole-v1: average reward ≥475 over 100 consecutive eval episodes. |
| 5–6 | PPO on LunarLander-v2, then continuous control. Tune hyperparameters deliberately, log every run. | LunarLander average reward ≥200 over 100 episodes. |
| 7–8 | Install MuJoCo. Run your PPO on InvertedPendulum-v4 and InvertedDoublePendulum-v4. | Policy balances for the full 1000-step episode across 10/10 eval runs. |

**Deliverable:** `rl-from-scratch` — all 5 algorithms, training curves, a written comparison of when each is appropriate.

## Month 15 — Robot Kinematics & Dynamics ⭐ NEW

> [!important] This month is why you'll read as a *robotics* engineer rather than "an RL person who used a robot." Nearly every robotics interview touches FK/IK/Jacobians. Do not skip it.

📚 Lynch & Park, *Modern Robotics: Mechanics, Planning, and Control* (free PDF + free Coursera series) Ch. 3 (rigid-body motions/SE(3)), Ch. 4 (forward kinematics), Ch. 5 (velocity kinematics/Jacobians), Ch. 6 (inverse kinematics) · Craig, *Introduction to Robotics* as a secondary reference

| Wk | Build | Test |
|---|---|---|
| 1 | *Modern Robotics* Ch. 3: coordinate frames, homogeneous transforms, SO(3), SE(3), quaternions, rotation composition. | Compose 3 rotations two ways (matrix product vs quaternion product) — results agree within 1e-6. |
| 2 | Ch. 4: forward kinematics for a 6-DOF arm. Implement in **C++** (this is your kinematics library). | FK output matches a simulator's reported end-effector pose within 1e-4 for 20 random joint configurations. |
| 3 | Ch. 5: velocity kinematics, the geometric and analytic Jacobian, singularities. | Numerically differentiate FK and confirm it matches your analytic Jacobian within 1e-5. Correctly identify a singular configuration. |
| 4 | Ch. 6: numerical inverse kinematics (Newton-Raphson / damped least squares). Plus PID control and basic trajectory generation (trapezoidal velocity profile). | IK converges to within 1mm of target pose for 20/20 random reachable targets. PID controller drives a simulated joint to setpoint with <5% overshoot. |

**Deliverable:** `robot-kinematics-cpp` — a tested C++ library with Python bindings, FK/IK/Jacobian/PID, documented with the math.

## Month 16 — MuJoCo & Simulation Physics

📚 MuJoCo docs (mujoco.readthedocs.io) — MJCF modeling, computation pipeline, contact dynamics

| Wk | Build | Test |
|---|---|---|
| 1 | MJCF format: build your own robot model from scratch (not a downloaded one) — links, joints, actuators, sensors. | Your model loads, is physically stable at rest, and joint limits behave correctly. |
| 2 | Contacts, friction cones, constraint solver, integrators, timestep. | Document what happens to a contact-rich task at timestep 0.001 vs 0.01 — with plots. |
| 3 | Train a PPO controller on **your own** environment from Week 1. | Task success rate >70% over 100 eval episodes. |
| 4 | Systematic sensitivity study: vary friction, mass, damping, timestep, actuator latency independently. | A table of ≥5 parameter sweeps vs. reward/stability/failure rate. Identify which parameter your policy is most fragile to — this insight feeds Month 19–20 directly. |

**Deliverable:** `mujoco-robot-learning` — custom environment, trained controller, sensitivity analysis write-up.

## Month 17 — Isaac Sim & Isaac Lab

> [!important] From here, Isaac Lab is the **primary** simulator. MuJoCo stays as the conceptual/lightweight environment. This is the single most directly hireable skill in the roadmap for NVIDIA-adjacent robotics roles.

📚 NVIDIA Isaac Lab docs (isaac-sim.github.io/IsaacLab) — full tutorial sequence · Makoviychuk et al. *Isaac Gym* (arXiv 2108.10470) · OpenUSD basics (NVIDIA's free intro course)

| Wk | Build | Test |
|---|---|---|
| 1 | Install Isaac Sim + Isaac Lab (budget real time for this — GPU driver/CUDA setup is genuinely fiddly). Work the official tutorials. | A stock Isaac Lab example environment trains successfully end to end on your machine. |
| 2 | USD scene composition, articulations, PhysX basics. Import your Month 15/16 robot into Isaac. | Your own robot loads in Isaac Sim with correct kinematics and stable physics. |
| 3 | Simulated sensors: RGB camera, depth, LiDAR, contact sensors. | Camera and depth output render correctly; verify depth values against known scene geometry. |
| 4 | Build a **custom Isaac Lab RL environment** for your task (reward function, observation space, action space, termination conditions). | Environment passes Isaac Lab's env-checker; random policy runs 1,000 steps without crashing. |

**Deliverable:** `isaac-lab-environments` — custom environment, documented, with your robot.

## Month 18 — Large-Scale Parallel RL

📚 Isaac Lab RL training docs · `rl_games` / `rsl_rl` library docs

| Wk | Build | Test |
|---|---|---|
| 1–2 | Scale your Month 17 environment to **1,000+ parallel environments** on GPU. | ≥1,000 envs running; measure and report steps/sec, GPU utilization, GPU memory. |
| 3 | Train PPO at scale on your manipulation or locomotion task. | Task success rate ≥80% in the training distribution over 100 eval episodes. |
| 4 | Benchmark: MuJoCo single-env vs Isaac Lab 1k-env, same task, same algorithm. | Report simulation FPS, wall-clock time to a fixed reward threshold, samples/sec, GPU utilization. Expect ≥10× — document the actual number. |

**Deliverable:** `isaac-lab-rl-benchmark` — the scaling comparison is a genuinely strong portfolio artifact on its own.

> [!note] Buffer/exam absorber. If HSLU exams collide, Week 4's benchmark rolls into Month 19.

## Month 19 — Domain Randomization

📚 Tobin et al. *Domain Randomization for Transferring Deep Neural Networks from Simulation to the Real World* (arXiv 1703.06907) · Peng et al. *Sim-to-Real Transfer of Robotic Control with Dynamics Randomization* (arXiv 1710.06537)

| Wk | Build | Test |
|---|---|---|
| 1 | **Dynamics randomization:** mass, friction, damping, actuator strength, latency. | Training remains stable with randomization on — report the reward-curve difference vs. the deterministic baseline. |
| 2 | **Sensor randomization:** observation noise, camera latency, IMU noise, sensor dropout. | Policy tolerates 2× the training-time noise level with <20% success-rate degradation. |
| 3 | **Visual randomization:** lighting, textures, camera pose jitter. | Policy succeeds under 10 held-out visual configurations it never trained on. |
| 4 | Three-way evaluation: (a) training distribution, (b) nominal/clean environment, (c) unseen harder distribution. | **Headline metric — the generalization gap.** Target: ≥80% success in-distribution, ≥50% on the held-out distribution. Report all three numbers honestly. |

**Deliverable:** `sim-to-real-randomization` — three-way evaluation table, plots, write-up.

## Month 20 — Real-to-Sim & System Identification ⭐ NEW

> [!important] This is what separates a credible sim-to-real story from a hopeful one. Anyone can randomize parameters. Measuring a real system and *fitting the simulator to it* is the rigorous version — and it's the exact workflow industrial robotics teams use.

📚 *Modern Robotics* Ch. 8 (dynamics of open chains) · system-identification literature for robotics (least-squares parameter estimation)

| Wk | Build | Test |
|---|---|---|
| 1 | Instrument a real system and log trajectories. **No robot arm yet? Use anything with a motor and an encoder** — a hobby servo + IMU on a breadboard, or even a laptop-driven stepper. The method matters more than the platform. | ≥30 minutes of clean, timestamped trajectory data (commanded vs. actual), logged and version-controlled. |
| 2 | Measure the physical parameters: joint latency, friction (static + viscous), backlash, motor response curve, actuator saturation, sensor noise characteristics. | A characterization report with a measured number and uncertainty for each parameter. |
| 3 | Build a parameter-estimation pipeline: fit simulator parameters to minimize trajectory error against the logged real data (least-squares or optimization-based). | Pipeline runs end to end: logged data in → fitted parameters out. |
| 4 | Validate: replay the same command sequence in the fitted simulator vs. the real system. | **Quantitative improvement:** trajectory RMSE with fitted parameters is measurably lower than with default/hand-guessed parameters. Report both numbers. |

**Deliverable:** `real2sim-system-identification` — the pipeline, the characterization report, the RMSE improvement table.

## Month 21 — ROS 2 In Depth

📚 ROS 2 official docs (Jazzy or current LTS) — full beginner + intermediate tutorial sequence · *A Concise Introduction to Robot Programming with ROS2* (Fernández et al.)

| Wk | Build | Test |
|---|---|---|
| 1 | Nodes, topics, services, actions, custom `.msg`/`.srv`/`.action` interfaces. **Write in C++**, not Python. | Build a 4-node system from scratch (not copy-pasted): publisher, subscriber, service server, action server. Verify with `ros2 topic echo` / `ros2 action send_goal`. |
| 2 | Lifecycle nodes, QoS profiles, executors, composition, parameters. | Explain, in writing, which QoS profile you'd pick for (a) camera stream, (b) emergency stop, (c) joint state — and why. |
| 3 | TF2 transform trees, `rosbag2` recording/replay, launch files, URDF. | Publish your Month 15 robot's URDF, visualize the TF tree in RViz, confirm frames are correct. |
| 4 | Assemble a full stack: sensor node → controller node → actuator interface. | Full system launches from a single launch file and runs 10 minutes without a crash or a dropped message. |

**Deliverable:** `ros2-robot-stack` — complete C++ ROS 2 system, documented.

## Month 22 — Sensor Fusion & Real-Time Systems

📚 Thrun/Burgard/Fox, *Probabilistic Robotics* Ch. 2–3 (Bayes filters, Kalman/EKF) · `robot_localization` package source (reference implementation) · real-time Linux / `PREEMPT_RT` basics

| Wk | Build | Test |
|---|---|---|
| 1 | *Probabilistic Robotics* Ch. 2–3. Implement a linear Kalman filter from the equations. | Tracks a simulated 1D system with noisy measurements; estimate RMSE beats raw-measurement RMSE. |
| 2 | Extended Kalman Filter fusing IMU + wheel odometry (real or simulated). | **Report both:** raw-odometry RMSE vs EKF RMSE on a test trajectory with injected noise. EKF must be measurably better. |
| 3 | Wrap the EKF in a C++ ROS 2 node. Add a camera or simulated visual measurement as a third input. | Node runs at a stable rate with three asynchronous sensor inputs, correct time synchronization via TF2. |
| 4 | Real-time behavior: scheduling, latency, jitter, deadline misses. Instrument your pipeline. | Report mean / p95 / p99 / max latency and the deadline-miss count over a 10-minute run. |

**Deliverable:** `ros2-ekf-realtime` — with both the RMSE comparison and the full latency distribution table.

## Month 23 — CUDA, TensorRT & Jetson

> [!important] This month is the bridge from "ML person" to "robotics systems engineer." It's also the highest-leverage month for NVIDIA-adjacent roles specifically.

📚 NVIDIA *CUDA C++ Programming Guide* (Ch. 1–5) · *Professional CUDA C Programming* (Cheng/Grossman/McKercher) · TensorRT developer guide · Jetson Orin developer docs · Nsight Systems / Nsight Compute docs

| Wk | Build | Test |
|---|---|---|
| 1 | CUDA fundamentals: threads/blocks/grids, memory hierarchy, coalescing, shared memory, synchronization. Write 4 kernels: vector add, matrix multiply, parallel reduction, an activation function. | All 4 produce correct results vs. a CPU reference. Your matmul achieves ≥20% of `cuBLAS` throughput (a genuine, honest target for a first hand-written kernel). |
| 2 | Profile with Nsight Systems + Nsight Compute. Optimize one kernel using what the profiler tells you. | Document a measured speedup on one kernel **and** name the specific bottleneck the profiler identified (occupancy, memory-bound, etc.). |
| 3 | Full conversion chain: PyTorch → ONNX → TensorRT engine. FP16 and INT8 quantization, CUDA streams, async inference. | Report latency for all four (PyTorch GPU, ONNX, TensorRT FP32, TensorRT FP16/INT8) plus accuracy delta. |
| 4 | Deploy the TensorRT engine inside a C++ ROS 2 node on the Jetson. | **≥30 Hz sustained inference**, zero missed deadlines over a 5-minute continuous run. Report end-to-end latency: sensor read → inference → command output. |

**Deliverable:** `jetson-tensorrt-ros2` — the full benchmark table is the artifact here.

## Month 24 — Internship & Career Checkpoint ⭐ NEW

> [!danger] This is not a project month. It's a career month. Treat it with the same seriousness as a technical deliverable.<br>
> The point: get **real industry experience before graduation.** An internship during Year 3 is worth more than another solo project — and it's a smaller, earlier rep than betting everything on Month 36.

| Wk | Build | Test |
|---|---|---|
| 1 | **CV.** One page. Top third: "Robotics / Physical AI Engineer — Simulation → Learning → Deployment." Then HSLU BSc, then the stack (Isaac Lab, ROS 2, C++, CUDA, TensorRT, PyTorch). | Someone unfamiliar with your work reads it in 60 seconds and correctly describes what you built. |
| 2 | **GitHub portfolio.** Pin 6: `isaac-lab-rl-benchmark`, `ros2-ekf-realtime`, `jetson-tensorrt-ros2`, `real2sim-system-identification`, `robot-kinematics-cpp`, `ml-from-scratch`. Write one landing README tying them into a single story. | Every pinned repo has a working one-command reproduction and a results table at the top of its README. |
| 3 | **90-second technical demo video.** No cinematic filler — show metrics, terminal, simulation, graphs, architecture. | Video posted publicly and linked from CV + GitHub landing page. |
| 4 | **Apply.** NVIDIA (robotics/simulation/Isaac internships), ABB, ANYbotics, Rivr, Sevensense, Swiss robotics startups, relevant university labs. Also: formalize the **HSLU thesis proposal** with Daly/Derungs/Jensen for the Months 25–28 capstone, and ask explicitly whether the lab can supply hardware. | ≥15 internship applications sent, tracked in a spreadsheet (company / role / date / status). Thesis proposal submitted. |

**Deliverable:** Application funnel tracked + thesis proposal submitted. **Not** "internship secured" — that's an outcome, not something you control.

> [!success] ✅ YEAR 2 CHECKPOINT<br>
> You can now truthfully say: *"I can build, train, simulate, profile and deploy robot-learning systems."*
> 
> **Evidence:** PPO from scratch · FK/IK/Jacobians in C++ · MuJoCo custom env · Isaac Lab with 1,000+ parallel envs · domain randomization with a measured generalization gap · real-to-sim system identification with measured RMSE improvement · full C++ ROS 2 stack · EKF with RMSE comparison · CUDA kernels with profiler-driven optimization · TensorRT on Jetson at ≥30Hz · 1 upstream PR · internship applications live.

---

# YEAR 3 — Real Robot + Industry Entry

## Months 25–28 — Capstone: Physical AI Deployment

> [!note] Platform: **SO-ARM101** (6-DOF, native LeRobot support) + **Jetson Orin Nano Super**. Best-documented open-source robot-learning combo — maximum community support, which matters enormously for a solo hardware project.
> 
> **Ask the AI Robotics Lab first** (Month 24 task). If they supply hardware, skip the purchase entirely. The BOM below is the fallback.

📚 HuggingFace **LeRobot** docs + repo (github.com/huggingface/lerobot) — SO-ARM100/101 tutorials · Chi et al. *Diffusion Policy* (arXiv 2303.04137) if going the imitation-learning route

### 🛒 Bill of Materials — order in Month 24 (1–2 week shipping buffer)

| # | Item | Spec | Price | Where (CH/EU) |
|---|---|---|---|---|
| 1 | SO-ARM101 kit, **assembled** | 6-DOF, bus servos 30 kg·cm @12V, LeRobot-native | $300–500 (≈CHF 270–450) | WowRobo, Seeed Studio (EU warehouse) |
| 2 | Jetson Orin Nano Super Dev Kit | 8GB, 67 TOPS | $249–400 — **verify current price**, 2026 pricing has been volatile (≈CHF 350–450 landed) | NVIDIA store, Seeed, Digitec/Galaxus |
| 3 | USB camera ×2 | Logitech C920 or UVC-compatible 1080p, **disable autofocus** for stable calibration | ~CHF 55–80 ea | Digitec/Galaxus, Brack.ch |
| 4 | microSD 128GB U3/A2 | Jetson OS + datasets | ~CHF 18 | Any CH retailer |
| 5 | IMU breakout (BNO085) | Reuse from Month 20/22 | ~CHF 25–30 | Digikey, Mouser |
| 6 | Rigid mount/clamp + cable management | A wobbly base corrupts calibration and inflates your apparent sim-to-real gap | ~CHF 20–25 | Hardware store, or 3D print at HSLU/FabLab Zürich |
| 7 | Powered USB hub | Cameras + servo controller + IMU concurrently | ~CHF 25 | Digitec/Galaxus |
| 8 | Spare servo + cable set | A servo *will* fail mid-project. Buy the spare now, not during crunch. | ~CHF 20 | Same as #1 |

**Total ≈ CHF 800–1100 landed in Zurich.** Prefer EU/CH warehouses to avoid customs delay and the ~8.1% Swiss import VAT. DIY/unassembled route ≈ CHF 500–600 with 3D-printer access, at the cost of 1–2 extra assembly weeks.

### Month 25 — Hardware Bring-Up

**Build:** robot driver, ROS 2 interface, camera pipeline, IMU pipeline, joint-state logging, **safety limits** (do this first, before any learned policy touches the hardware). Then characterize: actuator response, latency, backlash, repeatability, joint limits, thermal drift under sustained load.<br>
**Test:** a hardware characterization report — every parameter measured with a number and an uncertainty. Repeatability: command the same pose 20 times, report the standard deviation of the achieved end-effector position.

### Month 26 — Digital Twin

**Build:** URDF + MJCF/USD representation with your *measured* kinematics and dynamics (from Month 20's methodology, now on real hardware), simulated sensors matched to real camera intrinsics, modeled communication latency.<br>
**Test:** run an identical trajectory in sim and on hardware. Report joint-trajectory RMSE, end-effector position error, and timing error. Side-by-side synchronized video.

### Month 27 — Learned Policy → Real Robot

**Build:** train an RL or imitation policy (LeRobot's diffusion-policy path is the lower-risk option if RL transfer stalls). Deploy the full chain: Isaac Lab → PyTorch → ONNX → TensorRT → C++ ROS 2 node → Jetson → robot.<br>
**Test:** **sim-to-real retention = real_success_rate / sim_success_rate.** Target ≥60–70% initially. Report the raw numbers, not just the ratio. A zero-shot failure that you diagnose properly is a better artifact than a success you can't explain.

### Month 28 — Close the Gap

**Build:** diagnose systematically — latency, camera mismatch, actuator mismatch, friction, backlash, observation noise, dynamics mismatch. Apply fixes in order: system identification → targeted domain randomization → observation filtering → residual learning / policy adaptation.<br>
**Test:** the progression table, which is your headline result:

| Stage | Success rate |
|---|---|
| Simulation baseline | __% |
| Zero-shot real | __% |
| After system identification | __% |
| After targeted domain randomization | __% |
| Final real performance | __% |

**Deliverable:** full sim-to-real technical report + video. **This is the single most important artifact in the entire roadmap.**

## Months 29–30 — Technical Presence

Six videos, 30–90 seconds each, no cinematic filler — show metrics, terminal, robot, graphs, architecture:
1. Simulation training at scale · 2. Real robot executing · 3. Sim vs real side-by-side · 4. Failure analysis (this one earns the most respect) · 5. TensorRT/Jetson benchmark · 6. Architecture walkthrough

**Engage where practitioners actually are:** LeRobot Discord, Isaac Sim forums, ROS Discourse, X/LinkedIn. Comment substantively on ≥3 maintainers' or authors' work — a real question, not a like.<br>
**Test:** ≥1 genuine reply/engagement from someone working in the field. Track this, not follower count.

## Month 31 — Advanced C++ & Real-Time Systems

📚 Williams *C++ Concurrency in Action* Ch. 5–8 (memory model, atomics, lock-free) · Kerrisk *The Linux Programming Interface* (real-time scheduling, `sched_setscheduler`)

**Build:** a real-time robot inference pipeline — lock-free or carefully-locked, with `pthread` priorities and RT scheduling.<br>
**Test:** report latency, jitter, CPU usage, memory, throughput. Zero findings under ThreadSanitizer and AddressSanitizer. p99 latency within 2× of p50 (a genuinely hard bar — document honestly if you miss it).

**Deliverable:** `realtime-robotics-cpp`

## Month 32 — Advanced GPU

**Build:** a custom CUDA kernel doing something real for your pipeline — a fused preprocessing operation (e.g. camera undistort + normalize + resize in one kernel), replacing a multi-step CPU path.<br>
**Test:** benchmark the full ladder — Python → PyTorch CPU → PyTorch CUDA → your custom CUDA → TensorRT. Report where your fused kernel wins and, honestly, where it doesn't. Include the Nsight Compute profile showing occupancy and memory throughput.

**Deliverable:** `cuda-robotics-benchmarks`

## Month 33 — Open Source / Research Artifact

**Target repos:** Isaac Lab, ROS 2, MoveIt, LeRobot, PyTorch, ONNX Runtime.<br>
**Or publish:** a technical report, arXiv preprint, or reproducible benchmark. Robotics venues worth knowing: ICRA, IROS, RSS, CoRL (workshop tracks are realistic from a bachelor's).<br>
**Test:** one meaningful PR submitted to a robotics-ecosystem repo (more relevant now than another PyTorch docs fix), **or** a published technical report with reproducible results. A publication is not required for an engineering role — a rigorous, reproducible technical result is what actually matters.

## Month 34 — Interview Engineering

**Algorithms:** NeetCode 150 — arrays, hashing, binary search, trees, graphs, heaps, DP, plus concurrency problems. Target 100+ total solved (you have ~40 from Months 2 and earlier). **Do not let LeetCode consume the roadmap** — it's a filter to clear, not your edge.

**Be able to whiteboard, closed-book:**
- *C++:* RAII, move semantics, virtual dispatch, smart pointers, templates, memory layout, atomics, mutexes, condition variables
- *Robotics:* Kalman filter, EKF, PID, FK, IK, Jacobian, singularities, PPO, policy gradient, domain randomization, sim-to-real
- *ML:* backprop, attention, normalization, optimizers, CNNs, transformers

**Test:** 3 mock interviews — one C++, one ML, one robotics — with a peer, a mentor, or recorded self-review.

## Month 35 — Application Sprint

Apply across **role categories**, not one job title:
- **Robotics:** Robotics Software Engineer · Robotics Simulation · Robot Learning · Physical AI · Isaac
- **ML:** ML Engineer · Deep Learning Engineer · Inference Engineer
- **Systems:** GPU software · CUDA · performance engineering
- **Edge:** Jetson · TensorRT · robotics deployment

**Outreach format** (bypass HR portals — message Robotics Leads, Principal Engineers, Research Scientists directly): 2 sentences on their recent work + a 15-second capstone video link + GitHub link.

**Test:** 30–50 targeted applications **and** 30+ direct outreach messages, all tracked in a spreadsheet with company / role / date / response status.

## Month 36 — Final Package & Execution

CV top third reads: **Robotics / Physical AI Engineer.** Then HSLU AI/ML BSc · thesis · internship · sim-to-real capstone · C++ · Isaac Lab · ROS 2 · CUDA · TensorRT · Jetson.

**Deliverable:** interview preparation complete, portfolio finalized, application funnel tracked and actively worked.

> [!warning] "Signed offer" is deliberately **not** the deliverable.<br>
> You can execute everything correctly and still not get a specific offer — hiring depends on headcount, timing, and interview luck you don't control. The offer is the *outcome*. The engineering milestone is the funnel: applications sent, interviews prepared, portfolio finished. Full effort applied, result released. That framing is the difference between a plan that survives a rejection and one that collapses on it.

---

# 🏗 The Final Portfolio Architecture

```
                    ┌─────────────────────┐
                    │    REAL ROBOT       │
                    └──────────┬──────────┘
                               │  ROS 2 / sensors
                    ┌──────────▼──────────┐
                    │   C++ ROBOT STACK   │
                    └──────────┬──────────┘
                               │  TensorRT / CUDA
                    ┌──────────▼──────────┐
                    │   LEARNED POLICY    │
                    │      (PyTorch)      │
                    └──────────┬──────────┘
                               │
                    ┌──────────▼──────────┐
                    │     ISAAC LAB       │
                    │    1,000+ envs      │
                    └──────────┬──────────┘
                               │  domain randomization
                    ┌──────────▼──────────┐
                    │    DIGITAL TWIN     │
                    │  (system-identified)│
                    └─────────────────────┘
```

**The pitch, in one breath:** *"Here's the simulator. Here's the trained policy. Here's the C++ ROS 2 deployment. Here's the TensorRT benchmark. Here's the Jetson. Here's the physical robot. Here's the measured sim-to-real gap. Here's how I closed it. Here's the code."*

---

# ✅ Verification Checklist

**Mathematics** — [ ] backprop closed-book · [ ] attention derivation · [ ] gradient descent · [ ] EKF equations · [ ] Jacobians · [ ] PPO objective

**ML** — [ ] linear/logistic regression from scratch · [ ] neural net from scratch · [ ] autograd engine · [ ] attention from scratch · [ ] transformer trained to coherent output

**C++** — [ ] C++17/20 · [ ] RAII · [ ] smart pointers · [ ] move semantics · [ ] templates · [ ] multithreading · [ ] atomics · [ ] CMake · [ ] sanitizers clean · [ ] gdb

**Linux** — [ ] SSH · [ ] processes/signals · [ ] gdb · [ ] perf · [ ] strace · [ ] valgrind · [ ] shell scripting

**CUDA / NVIDIA** — [ ] working kernels · [ ] memory hierarchy · [ ] streams · [ ] Nsight profiling · [ ] TensorRT · [ ] FP16/INT8 · [ ] Jetson deployment

**Robotics** — [ ] FK · [ ] IK · [ ] Jacobian · [ ] singularities · [ ] PID · [ ] dynamics · [ ] EKF · [ ] ROS 2 · [ ] TF2 · [ ] real-time constraints

**Simulation** — [ ] MuJoCo · [ ] Isaac Sim · [ ] Isaac Lab · [ ] PhysX · [ ] USD · [ ] 1,000+ parallel envs · [ ] domain randomization · [ ] system identification

**Physical AI** — [ ] PPO · [ ] imitation learning · [ ] sim-to-real · [ ] real-to-sim · [ ] latency modeling · [ ] real robot deployment

**Engineering** — [ ] unit + integration tests · [ ] CI · [ ] Docker · [ ] reproducible environments · [ ] benchmarking · [ ] profiling · [ ] documentation

**Career** — [ ] HSLU lab contact made (M5) · [ ] internship applications (M24) · [ ] thesis with robotics lab · [ ] 2 OSS contributions · [ ] public hardware demo · [ ] technical report · [ ] 100+ algorithm problems · [ ] 3 mock interviews · [ ] 30+ applications · [ ] 30+ outreach messages

---

# 📊 Honest Positioning

Executed as written — real implementation, benchmarking, debugging, documentation, public evidence, not tutorial completion:

| Target | Rough profile position |
|---|---|
| Generic junior SWE | Top 5–10% |
| ML engineer | Top 3–5% |
| ML systems / inference | Top 1–5% |
| Robotics software engineer | Top 3–5% |
| Physical AI / robot learning | **Top 1–5%** |
| Research scientist | Not automatically competitive without research credentials |

These are *profile* positions, not hire probabilities. You can be a top-3% profile and still be rejected because a role had 200 applicants or wanted a different stack. That's normal and it isn't a verdict on you.

> [!success] The real test<br>
> By graduation the GitHub shouldn't look like a student who completed 36 monthly assignments. It should look like the work of a junior engineer who happens to have a bachelor's degree.
