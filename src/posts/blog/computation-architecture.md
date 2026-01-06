---
title: Why Cellular Automaton Simulations Benefit from a Plugin-Based Computation Architecture
date: 2026-01-05
description: CAMI blog
---

## Why Cellular Automaton Simulations Benefit from a Plugin-Based Computation Architecture

**CAMI — Cellular Automata Platform**
Student Engineers

---

### Abstract

Cellular automata are often associated with simple discrete systems such as Conway’s Game of Life. However, modern variants introduce continuous states, convolution-based updates, and multi-channel interactions, significantly increasing computational and architectural complexity.
This article presents the rationale behind designing a cellular automaton platform around independent computation plugins. We explain how this approach enables mathematical flexibility, performance isolation, and long-term extensibility, while supporting heterogeneous automata within a single desktop application.

---

### Introduction

Cellular automata are mathematical models in which global behavior emerges from local interactions. While introductory examples often rely on simple binary rules, advanced automata such as Lenia or multi-channel systems involve continuous values, nonlinear functions, and computationally intensive update steps.

When designing a generic cellular automaton platform, a critical architectural question arises: should all automata share a single computation engine, or should each automaton manage its own computational logic independently?

In our project, we opted for a plugin-based architecture, where each automaton is implemented as an isolated computation module.

---

### Limits of a Monolithic Simulation Engine

Designing a single simulation engine capable of supporting heterogeneous cellular automata introduces significant architectural and conceptual limitations. Discrete and continuous systems rely on fundamentally different assumptions regarding state representation, numerical stability, and update semantics. Attempting to unify these models within a single execution pipeline often results in overly complex control flows and implicit constraints that are difficult to reason about.

As the number of supported automata increases, a monolithic design tends to accumulate conditional logic that encodes automaton-specific behavior into the core engine. This coupling not only reduces readability and maintainability, but also makes the system fragile when introducing new automata with distinct mathematical properties. Performance considerations further exacerbate the issue, as optimizations tailored for one class of automata may be detrimental or irrelevant to others.

In practice, a monolithic approach forces early generalization decisions that limit future evolution. When confronted with automata requiring heavy numerical computation, convolution-based updates, or multi-channel state representations, the shared engine becomes a bottleneck rather than a unifying abstraction.

---

### Plugin-Based Architecture Overview

Our platform is structured as follows:

- **Electron**: user interface and visualization
- **Elixir / Phoenix**: orchestration, lifecycle management, IPC
- **C++ plugins**: cellular automaton computation engines

Each plugin is dynamically loaded and responsible for computing the next state of the automaton, given the current grid and parameters. This ensures strict separation between visualization, coordination, and numerical computation.

---

### Mathematical Models Encapsulated in Plugins

#### Conway's Game of Life

The Game of Life is a discrete cellular automaton with binary states. The update rule is defined as:

$$
S_t+1(x) =
\begin{cases}
1 & \text{if } S_t(x) = 1 \text{ and } n \in \{2,3\} \\
1 & \text{if } S_t(x) = 0 \text{ and } n = 3 \\
0 & \text{otherwise}
\end{cases}
$$

Where $n$ denotes the number of active neighboring cells.

This automaton serves as a baseline plugin, illustrating minimal computational overhead.

---

#### Wolfram Elementary Cellular Automata

Wolfram automata are one-dimensional systems defined by a local transition function:

$$
S_{t+1}(i) = f(S_t(i-1), S_t(i), S_t(i+1))
$$

The function $f$ is derived from a rule number, such as Rule 30 or Rule 110.

Encapsulating this logic in a plugin allows dynamic generation of rule tables without impacting other automata.

---

#### Lenia: Continuous Cellular Automata and Numerical Constraints

Lenia is a continuous cellular automaton introduced by Bert Wang-Chak Chan, extending classical discrete automata toward smooth, life-like dynamics. Unlike binary or discrete-state systems, Lenia operates on continuous-valued cell states and relies on convolution-based neighborhood aggregation.

Each cell state $S(x) \in [0,1]$ represents a continuous activation level. The evolution of the system is defined by the following steps.

**Neighborhood aggregation**

The first step consists in computing a local potential field $A$ by convolving the current state with a kernel function $K$:

```latex
A(x) = (K * S)(x) = \sum_{y \in \mathcal{N}(x)} K(x - y) \cdot S(y)
```

The kernel $K$ is typically radially symmetric and parameterized by a kernel radius and a kernel profile (e.g. polynomial or Gaussian-based functions). This convolution introduces a fundamentally different computational pattern compared to local neighborhood counting in discrete automata.

**Growth function**

The aggregated potential $A(x)$ is then passed through a nonlinear growth function $G$, commonly defined as:

```latex
G(A) = \exp\left(-\frac{(A - \mu)^2}{2\sigma^2}\right) - \beta
```

where:

- $\mu$ controls the target activation level
- $\sigma$ defines the width of the growth curve
- $\beta$ is a bias term controlling decay

This function governs the emergence, stability, or decay of spatial patterns.

**State update**

The state update is performed using an explicit time integration scheme:

$$
S_{t+1}(x) = \mathrm{clip}\left(
S_t(x) + \Delta t \cdot G(A(x)),
0, 1
\right)
$$

where $\Delta t$ is a simulation timestep and the clipping operation enforces numerical stability by bounding the state values.

**Computational implications**

From a software engineering perspective, Lenia introduces several constraints:

- Floating-point precision significantly impacts pattern stability
- Numerical errors accumulate over time
- Convolution dominates computational cost
- Update rules differ fundamentally from discrete automata

These constraints make Lenia poorly suited for integration into a shared, generic update loop.

**Rationale for plugin isolation**

Encapsulating Lenia inside an independent computation plugin allows:

- Dedicated memory layouts optimized for floating-point operations
- Automaton-specific timestep control and stability handling
- Future integration of optimized convolution algorithms or GPU acceleration
- Strict separation from discrete and rule-based automata

This isolation ensures that architectural decisions required for Lenia do not impose unnecessary complexity or performance penalties on other automata supported by the platform.

---

#### Multi-Channel Automata

In multi-channel automata, each cell contains a vector of values:

$$
S(x) = (c_1, c_2, \dots, c_n)
$$

Update rules involve channel-wise interactions, weighted sums, and nonlinear coupling functions. Plugin isolation allows each automaton to define its own memory layout and update strategy without leaking abstractions.

---

### Benefits of Independent Computation Plugins

#### Computational Independence

Each plugin defines its own state representation and update logic, avoiding forced generalization.

#### Performance

Plugins operate close to memory and avoid runtime polymorphism within inner update loops.

#### Extensibility

Adding a new automaton only requires implementing a new plugin, without modifying existing code.

---

### Lessons Learned

Throughout the development of the platform, several important lessons emerged regarding the design of simulation software. One of the most significant realizations was that early over-generalization introduces unnecessary complexity and often obscures the true requirements of the system. Attempting to define a universal abstraction for all cellular automata proved counterproductive when confronted with fundamentally different mathematical models.

Another key lesson was the importance of aligning software architecture with the underlying mathematics of the problem domain. Cellular automata that differ in state dimensionality, numerical precision, and neighborhood computation cannot be efficiently or cleanly expressed through a single update mechanism. Accepting this diversity and reflecting it explicitly in the architecture led to simpler and more robust implementations.

Finally, isolating computation logic into independent modules significantly improved the development process. Debugging became more tractable, performance tuning more localized, and the mental overhead associated with understanding the system was reduced. These benefits outweighed the additional complexity introduced by plugin management and inter-process communication.

---

### Future Work

Several directions for future development naturally arise from the current architecture. Extending the platform to support three-dimensional cellular automata would enable the exploration of richer spatial dynamics and more complex emergent behavior. Such an extension would further validate the flexibility of the plugin-based computation model.

Another promising avenue is the integration of hardware-accelerated computation. Automata such as Lenia would benefit from GPU-backed convolution and parallel execution models, which could be introduced through specialized computation plugins without impacting the existing system.

Finally, the architecture lends itself to externalization and reuse. Providing a stable plugin interface and documentation would allow students, researchers, or third-party developers to implement their own automata, transforming the platform into a broader experimental and educational tool.

---

### Conclusion

Treating each cellular automaton as an independent computational entity allowed us to support fundamentally different mathematical models within a single platform. This architectural choice proved crucial when extending beyond classical automata toward continuous and multi-channel systems.

The plugin-based approach enabled performance isolation, reduced coupling, and long-term extensibility, making it well suited for complex simulation platforms.
