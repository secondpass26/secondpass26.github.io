---
title: Skills needed to be an HFT C++ engineer
description: A summary of the skills needed to become an HFT C++ programmer.
published: 2026-09-03
category: Development
tags:
  - C++
  - Programming
---

## Stage 1: Become extremely solid in C++

Spend the first few months getting to the point where C++ itself rarely gets in your way.

You should eventually become extremely comfortable with:

* stack versus heap
* object lifetime
* RAII
* constructors and destructors
* references and pointers
* const correctness
* copy versus move semantics
* value categories
* `unique_ptr`, `shared_ptr`, and `weak_ptr`
* STL containers
* iterators
* templates
* lambdas
* exception safety
* memory allocation
* undefined behaviour
* threading
* mutexes
* atomics
* condition variables
* memory ordering

And go beyond syntax.

For example, don't just know:
```cpp
std::vector<int> v;
```

Understand:

* size
* capacity
* reserve
* reallocation
* iterator invalidation
* contiguous memory
* cache locality
* amortized complexity
* allocation cost

## Stage 2: Become genuinely strong at DSA

You should reach the point where these become instinctive:

Data structures:

* Arrays / vectors
* Hash tables
* Linked lists
* Stacks
* Queues
* Heaps
* Trees
* Graphs
* Tries
* Union-find

Patterns and algorithms:

* Two pointers
* Sliding window
* Binary search
* DFS / BFS
* Prefix sums
* Greedy
* Backtracking
* Dynamic programming
* Graph algorithms
* Sorting

Can you think about the actual cost of the algorithm on real hardware?

Two algorithms can both be O(n) while one is dramatically faster because of cache locality, allocation, branch prediction, or memory access patterns.

## Stage 3: Learn the machine

This is probably the biggest jump from ordinary backend development to HFT.

Learn:

* CPU caches
* L1 / L2 / L3
* cache lines
* cache misses
* false sharing
* branch prediction
* instruction pipelines
* SIMD
* virtual memory
* page faults
* TLB
* NUMA
* memory alignment
* CPU affinity
* context switching
* syscalls

Eventually you should be able to look at slow code and think:

> Is this actually an algorithm problem?
>
> Am I waiting on memory?
>
> Are these threads fighting over the same cache line?

## Stage 4: Become very good at concurrency

Go through this progression:

* `thread`
* `mutex`
* `lock_guard`
* `unique_lock`
* `condition_variable`
* `atomic`
* memory ordering
* lock-free structures
* SPSC queues
* MPSC queues
* ring buffers
* false sharing
* cache-line padding
* CPU pinning

Eventually, a producer/consumer queue should not only make sense logically. You should also be able to reason about what the CPU caches and memory ordering are doing underneath it.

## Stage 5: Networking

This becomes extremely important.

Learn:

* TCP
* UDP
* sockets
* multicast
* kernel networking
* packet structure
* serialization
* TCP latency
* UDP tradeoffs
* network buffers
* poll / epoll
* busy polling
* kernel bypass concepts

Then build something.

For example:

```text
Market-data simulator
        ↓
UDP multicast
        ↓
Market-data parser
        ↓
Order book
        ↓
Strategy
        ↓
Order gateway
```

Now you're building something that resembles the architecture of a trading system.

## Stage 6: Performance engineering

This is where I want to become unusually strong.

Learn to measure, rather than guessing.

Tools and concepts:

* `perf`
* flame graphs
* CPU performance counters
* Google Benchmark
* compiler optimization
* assembly basics
* `cachegrind`
* profilers
* microbenchmarks
* latency distributions
* p50 / p99 / p99.9

Suppose you benchmark `std::vector<Order>` against `std::list<Order>`.

Don't merely say:

`vector` is faster.

Find out why.

Then experiment.

That's exactly the kind of curiosity I want to cultivate.

## Stage 7: Learn Linux properly

You should be very comfortable living in Linux.

Not merely `cd`, `ls`, and `grep`.

Eventually, learn:

* processes
* threads
* signals
* `/proc`
* memory mapping
* file descriptors
* sockets
* `strace`
* `gdb`
* `perf`
* `taskset`
* `top` / `htop`
* network tools
* shell scripting

Current Optiver and IMC roles explicitly mention strong Linux/Unix comfort.

## Stage 8: Build an HFT-style project

This could become the centerpiece of your year.

Build your own mini exchange and trading engine:

```text
                 ┌──────────────┐
                 │ Market Feed  │
                 └──────┬───────┘
                        │ UDP
                        ▼
              ┌─────────────────┐
              │ Market Decoder  │
              └────────┬────────┘
                       ▼
              ┌─────────────────┐
              │   Order Book    │
              └────────┬────────┘
                       ▼
              ┌─────────────────┐
              │    Strategy     │
              └────────┬────────┘
                       ▼
              ┌─────────────────┐
              │ Order Gateway   │
              └─────────────────┘
```

Then progressively optimize it.

1. Version 1: Make it correct.
2. Version 2: Make it clean.
3. Version 3: Make it fast.
4. Version 4: Measure everything.

That project can teach you more than a pile of disconnected tutorials.

## Stage 9: Learn enough finance

Here's the good news:

You don't necessarily need to become a quant.

Jane Street explicitly says financial-market knowledge isn't required for its low-latency engineering role, and Optiver lists trading knowledge as a nice-to-have for some C++ positions rather than always making it mandatory.

But eventually, learn:

* bid / ask
* spread
* limit orders
* market orders
* order books
* matching engines
* market makers
* liquidity
* latency
* slippage
* positions
* PnL
* options basics

You'll understand the systems you're building much better.

## A one-year HFT roadmap

I'd structure the year approximately like this:

### Months 1–3

```text
C++ ██████████
DSA ████████
Linux ███
```

Get extremely comfortable with C++ fundamentals and core DSA.

### Months 4–6

```text
DSA ██████████
Concurrency ███████
CPU / memory █████
```

Start studying performance at the hardware level.

### Months 7–9

```text
Networking ███████
Linux ███████
Performance ████████
System design █████
```

Start your trading-engine project.

### Months 10–12

```text
Low latency ██████████
Profiling ██████████
HFT project ██████████
Interview problems ███████
```

By this stage, you should increasingly combine everything rather than study subjects separately.
