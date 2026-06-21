# DSA Queues

## 1. What is it?
Queues are First-In, First-Out (FIFO) structures where items are added at the rear and removed from the front.

## 2. Why do we use it?
To process asynchronous tasks in the order they arrive (FIFO), maintaining smooth backend request pipelines.

## 3. How does it work?
- **Analogy**: A line of people at a movie ticket counter. The first person in line gets ticket service first (FIFO).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Job runner queues, socket messages dispatch, and emails senders pools.

## 5. How do we build with it?
```js
Print jobs processing or email delivery pipelines.
```

- **Expected Output**: Enables sequential task scheduling architectures.
- **Best Practice / Rule**: Use queues when tasks must run in the exact order they arrive.
