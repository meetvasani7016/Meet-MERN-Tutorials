# Challenge Task: Reverse a Singly LinkedList

## Objective
Traverse a LinkedList in-place and reverse the next pointer references.

## Challenge Instructions
1. Write a function `reverseLinkedList(list)` that reverses a singly LinkedList in-place.
   - Example: `Head -> 1 -> 2 -> 3 -> Null` becomes `Head -> 3 -> 2 -> 1 -> Null`.
2. Do not create new node instances or copy values to a new list. You must mutate the next pointer of each node in-place.
3. Use three variables (`prev`, `current`, and `next`) to keep track of nodes as you traverse and reverse the list pointers in a loop.
