# MongoDB Relationships

## 1. What is it?
Model data connections using referenced IDs or nested sub-documents.

## 2. Why do we use it?
To model connections between separate tables/collections. Embedded arrays are fast for read speeds, while Referenced IDs avoid duplicated data.

## 3. How does it work?
- **Analogy**: Referenced vs Embedded. Embedding is building a garage connected to your house (nested object). Referencing is storing your car in a nearby commercial parking lot (saving an ID link).
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Nesting comments in posts (embed) or linking author details to articles (reference).

## 5. How do we build with it?
```js
{ user_id: ObjectId('...'), profile: { bio: 'Hi' } }
```

- **Expected Output**: Enables structural schema connections.
- **Best Practice / Rule**: Embed data if the nested items belong only to that parent. Reference IDs if items are shared or change constantly.
