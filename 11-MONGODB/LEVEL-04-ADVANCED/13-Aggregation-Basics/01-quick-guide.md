# Aggregation Basics

## 1. What is it?
Aggregation pipelines process, group, and calculate calculations on collections data.

## 2. Why do we use it?
To perform complex data analytics (summing values, calculating averages, grouping entries) directly inside MongoDB before returning output summaries.

## 3. How does it work?
- **Analogy**: An assembly line in a food packing plant. Raw items go in, get sorted ($match), combined into boxes ($group), and labels updated ($project).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Calculating total monthly spendings, top-selling categories, and site metrics.

## 5. How do we build with it?
```js
db.users.aggregate([ { $group: { _id: '$major', count: { $sum: 1 } } } ]);
```

- **Expected Output**: Groups students by major and outputs count sums for each group.
- **Best Practice / Rule**: Aggregation stages pass inputs sequentially to the next stage in the pipeline array.
