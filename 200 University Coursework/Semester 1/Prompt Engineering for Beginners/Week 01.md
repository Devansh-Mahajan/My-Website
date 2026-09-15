---
tags:
  - class
  - Prompt_Engineering
draft: true
publish: false
---

> [!todo] Learning Goals
> 1. **Explain** what a prompt is and why good wording matters.
> 2. **Write** prompts that fit a specific audience and purpose.
> 3. **Use** three prompt types (zero-shot, few-shot, and step-by-step) and choose a good starting point.
> 4. **Test and refine** prompts iteratively.
> 5. **Spot** one thing to check before using AI output: privacy, accuracy, bias, or disclosure.<br>

> [!info] Definition (Google)<br>
> Prompt engineering is the art and science of designing and optimizing prompts to guide AI models, particularly LLMs, towards generating the desired responses.

### A prompt can be…

| Open            | More directed                                   | Carefully designed                                                                                                                   |
| :-------------- | :---------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------- |
| "Write a poem." | "Write a funny four-line poem about exam week." | "Write a friendly four-line poem for first-year students before exam week. Use simple language, one hopeful message and no clichés." |

## 💡 When is a better prompt worth the effort?

| A quick prompt may be enough when… | Prompt engineering matters more when… |
| :--- | :--- |
| brainstorming | output will be shared with others |
| you want inspiration | accuracy matters |
| can easily edit the result | need a specific format |
| stakes are low | task is repeated |
| you want an unexpected idea/surprise | people may be affected by the output |

### How much would you engineer these?

*(Scale: 1 = Not at all ➡️ 5 = Quite a lot)*

- **a)** Give me three dinner ideas. (Rating: )
- **b)** Write a public announcement about a change in university procedure. (Rating: )
- **c)** Give me creative names for a student event. (Rating: )
- **d)** Summarise a report for senior leaders. (Rating: )
- **e)** Help me decide how to respond to a personal conflict. (Rating: )
- **f)** Create a campaign image representing gender-sensitive teaching. (Rating: )

## Baseline vs. improved output

> [!example] *Prompt A: baseline*<br>
> **"Summarize this paper."**<br>
> *Result:* A long, generic, and unfocused summary that doesn't target a specific audience.

> [!success] *Prompt B: improved*<br>
> **"Summarize this paper in 5 bullet points for university leaders. Start with a one-line takeaway. Include 1 key statistic, 1 main accessibility barrier, and 1 recommendation."**
> 
> **One-line takeaway:**<br>
> European universities show large regional gaps in accessibility for students with disabilities—especially in online information and support services—requiring coordinated investment and policy action.
> 
> **Key points for university leaders:**
> -   **Accessibility gap across regions:** Northern Europe, the UK, and Ireland score much higher on website accessibility…
> -   **Key statistic:** Only **29% of people with disabilities complete tertiary education**, compared to 44% of their non-disabled peers…
> -   **Main barrier:** The most frequent website accessibility problem is **missing or ambiguous labels**…
> -   **Support gaps:** Many accessibility offices are **understaffed (typically <5 people)** and operate on budgets under €50 000…
> -   **Recommendation: Invest in more staff and resources for accessibility offices**, especially in under-resourced regions…

## Crafting the Perfect Message

*(Video Reference: "This isn't how I meant" - [YouTube Link](https://www.youtube.com/watch?v=j-6N3bLgYyQ))*

### What makes a strong prompt:

*Core principles: clarity, context, constraints, role*

-   **Role/Audience**
	-   Who the model should "be" (e.g., "career coach").
	-   Who the work is for (e.g., "first-semester AI/ML students").
-   **Task**
	-   The action you want (e.g., summarize, compare, extract, rewrite, plan, evaluate).
-   **Context/Content**
	-   The material to work with (e.g., your notes, a paragraph, a dataset, a link).
	-   Examples (e.g., second client with this issue).
-   **Format**
	-   The output shape (e.g., bullets, headings, table, 120 words, etc.).
-   **Quality bar**
	-   What "good" looks like (e.g., clear, specific, accurate, includes examples, cites sources).

## Various Prompting Frameworks

### 1. Popular ChatGPT Acronyms

-   **R-T-F:** Role ➡️ Task ➡️ Format
-   **T-A-G:** Task ➡️ Action ➡️ Goal
-   **B-A-B:** Before ➡️ After ➡️ Bridge
-   **C-A-R-E:** Context ➡️ Action ➡️ Result ➡️ Example
-   **R-I-S-E:** Role ➡️ Input ➡️ Steps ➡️ Expectation

### 2. D.E.E.P. Prompting Framework

-   **D**escribe Goal
-   **E**nvironment
-   **E**xamples
-   **P**rompt with Constraints

### 3. The FIVE "S" Model (For Students)

-   **S**et the scene
-   **S**pecific (Be specific)
-   **S**implify your language
-   **S**tructure the output
-   **S**hare feedback

### 4. CRAFT Framework (German)

-   **C**context (Kontext)
-   **R**ole (Rolle)
-   **A**udience (Zielpublikum)
-   **F**ormat (Format)
-   **T**ask (Aufgabe)

### 5. RICE-FACT Framework

-   **R**ole / **I**nstruction / **C**context / **E**xamples
-   **F**ormat / **A**ction / **C**onstraints / **T**one

### 6. Google's Strategies for Better Prompts

1. Set Clear Goals and Objectives
2. Provide Context and Background Information
3. Use Few-Shot Prompting
4. Be Specific
5. Iterate and Experiment
6. Leverage Chain of Thought Prompting

## The R-T-C-F-Q Framework

-   **R - Role/Audience:** 
	-   Who the AI should act as (e.g., "career coach").
	-   Who the output is for (e.g., "first-semester AI/ML students").
-   **T - Task:** 
	-   The action you want (e.g., summarize, compare, extract, rewrite, plan, evaluate).
-   **C - Context/Content:** 
	-   The material to work with (e.g., your notes, a paragraph, a dataset, a link).
	-   Examples (e.g., second client with this issue).
-   **F - Format:** 
	-   What the output should look like (e.g., bullets, headings, table, 120 words, etc.).
-   **Q - Quality bar:** 
	-   What a good output must include or avoid (e.g., clear, specific, accurate, includes examples, cites sources).

**Example: Structured output**

> "As the hiring manager of Company Z, extract name, top 3 skills, and 1 sentence fit-reason into a 3-column table from this CV text. If missing, write 'x'."

**Example: Data Analysis**

> "Analyze these survey results. Create a 4-row table: trend, supporting data, risk, recommendation. Highlight the most urgent row in bold."

**Example: Importance of Role/Audience**

> "Act as a career advisor for first-year AI/ML students. Rewrite my messy notes into a 5-bullet email with a friendly tone, each bullet begins with a verb, ends with one emoji, ≤120 words total."

## Use-Case Framework Table

> [!warning] **AI ≠ Neutral Tool!**

| Use-Case | Who's it for? | Job to be done (task) | Input | Output format | Quality bar (what "good" must include) | Risks/ethics |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| writing cover letters | hiring manager at a company | create a short, tailored cover letter that connects my skills with the job posting | job ad text + CV bullet points | 1 page cover letter (3-4 paragraphs) in professional tone | - personalized to job and company<br>highlights 2-3 skills from CV<br>natural human tone<br>no factual errors<br>concise and readable | - Don't paste personal info<br>check that AI doesn't invent jobs/skills<br>disclose AI use |

### 🛑 Always consider:

1. **Privacy**
2. **Accuracy**
3. **Bias & Fairness**
4. **Disclosure**

## Core Prompt Types

### (1) Zero-shot Prompting

- **Best for:** A quick first attempt or establishing a baseline.
- **Method:** A single instruction with no examples.

> **Prompt Example:** "Summarize Hansel and Gretel in three sentences for a teenage audience."

### (2) Few-shot Prompting

- **Best for:** When style, tone, structure, or specific formats really matter.
- **Method:** Show, don't tell. Give the AI examples of the kind of output you want.
- *⚠️ Note:* Always check your examples! AI may copy their tone, assumptions, errors, or bias.

> **Prompt Example:** "Example A — Cinderella, 2–3 sentences: Cinderella is mistreated by her stepfamily but attends a royal ball with magical help. The prince searches for the person whose foot fits the glass slipper, and Cinderella is found. The story highlights resilience and kindness.
> 
> Example B — Little Red Riding Hood, 2–3 sentences: Red Riding Hood visits her grandmother but is deceived by a wolf. A woodsman rescues them. The tale warns about trusting strangers.
> 
> Now summarize Hansel and Gretel in the same style: 2–3 sentences, with a final sentence stating the takeaway."

### (3) Step-by-step Prompting

- **Best for:** Planning, comparison, checking work, and complex multi-step tasks.
- **Method:** Ask for a clear process, criteria, or sequence.

> **Prompt Example:** "Help me choose between three weekend-trip options.
> 
> 1. Compare travel time from Lucerne.
> 
> 2. Compare total cost for two adults and two children.
> 
> 3. Check whether each option has a rainy-day activity.
> 
> 4. Recommend one option and explain the trade-off."

## Task: Choose the best starting point for each task.

*(Options: Zero-shot, Few-shot, Step-by-step)*

- **a)** Writing a quick summary of a short article: 
- **b)** Writing an Instagram caption in the same voice as two other posts: 
- **c)** Comparing two internship options using salary, travel time, learning opportunities, and team culture: 
- **d)** Creating a five-bullet revision guide in the same format as an example sheet: 
- **e)** Generating three ideas for a birthday activity:

## Task: A/B Prompt test

### Instructions

1. Choose one (low-risk) task from study, work or everyday life.
2. Write **Prompt A**.
3. Run it and save the output.
4. Write **Prompt B** to improve it.
5. Run it and save the output.
6. Complete the mini prompt log (table below).
7. Decide: Did the extra guidance actually help? Why or why not?

---

### Mini Prompt Log

| Task and intended user | Prompt A (zero-shot baseline) | Prompt B to improve output | What improved? | What still needs checking? |
| :--- | :--- | :--- | :--- | :--- |
| *(e.g., draft email for boss)* | *(e.g., "Write an email…")* | *(e.g., added role, constraints)* | | |
| | | | | |

**Reflection:**<br>
*Did the extra guidance actually help? Why or why not?*<br>
[Type your reflection here…]

## Semester Project Overview

### 📌 Project Phases

- [ ] **1. Choose** a project direction
- [ ] **2. Build** a substantial final product
- [ ] **3. Document** the AI workflow behind it
- [ ] **4. Test** and improve it
- [ ] **5. Present** what worked, what failed, and what needs human judgement

### 🎨 Possible Formats

- Campaign
- Video
- Podcast
- Accessible information
- Prototype tool
- Your own approved idea

## References

- Google Cloud. (n.d.). *Strategies for writing better prompts*. Retrieved September 8, 2025, from [https://cloud.google.com/discover/what-is-prompt-engineering?hl=en#strategies-for-writing-better-prompts](https://cloud.google.com/discover/what-is-prompt-engineering?hl=en#strategies-for-writing-better-prompts)
- Krejtz, K., Marcus-Quinn, A., Duarte, C., Stasiak, I., Seixas Pereira, L., & Krejtz, I. (2025). Higher education accessibility information in practice: A report on the accessibility of European universities. *Universal Access in the Information Society*, 24, 2673–2685. [https://doi.org/10.1007/s10209-025-01224-4](https://doi.org/10.1007/s10209-025-01224-4)
- MIT Sloan. (2023). *Addressing AI hallucinations and bias*. MIT Sloan School of Management. [https://mitsloanedtech.mit.edu/ai/basics/addressing-ai-hallucinations-and-bias](https://mitsloanedtech.mit.edu/ai/basics/addressing-ai-hallucinations-and-bias)
- Reuters. (2024, December 20). *Italy fines OpenAI €15 million for violating EU privacy rules*. Reuters. [https://www.reuters.com/technology/italy-fines-openai-15-million-euros-over-privacy-rules-breach-2024-12-20](https://www.reuters.com/technology/italy-fines-openai-15-million-euros-over-privacy-rules-breach-2024-12-20)
- Research AI Multiple. (2024). *AI bias: A comprehensive overview*. [https://research.aimultiple.com/ai-bias/](https://research.aimultiple.com/ai-bias/)
- Zhan, J., Carrillo, C., & Luo, Y. (2025). *Trustworthy AI for medicine: Continuous hallucination detection and elimination (CHECK)*. arXiv. [https://arxiv.org/abs/2506.11129](https://arxiv.org/abs/2506.11129)
- Kojima, T., Gu, S. S., Reid, M., Matsuo, Y., & Iwasawa, Y. (2022). Large Language Models are Zero-Shot Reasoners. *Advances in Neural Information Processing Systems (NeurIPS 2022)*. [arXiv:2205.11916](https://arxiv.org/abs/2205.11916)
- OpenAI. (2023, May 4). *Why language models hallucinate*. OpenAI Research Blog.
- Weidinger, L., Uesato, J., Rauh, M., Griffin, C., Huang, P., Krueger, G., Mellor, J., et al. (2022). *Taxonomy of Risks posed by language models*. In Proceedings of the 2022 ACM Conference on Fairness, Accountability, and Transparency (FAccT). University of Cambridge.
- Zeng, A., Jin, Z., Xu, Z., et al. (2025). *LLMs in the Loop: Human Feedback Reduces Bias and Hallucination*. arXiv preprint.
