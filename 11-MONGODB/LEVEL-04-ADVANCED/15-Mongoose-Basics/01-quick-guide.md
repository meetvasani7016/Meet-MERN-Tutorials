# Mongoose Basics

## 1. What is it?
Mongoose is an Object Data Modeling (ODM) library that adds schema validation to MongoDB in Node.

## 2. Why do we use it?
MongoDB is schemaless by default. Mongoose brings structural schema validations, default attributes, hooks, and clean object-data-mapping (ODM) query helpers to Node.

## 3. How does it work?
- **Analogy**: Adding a blueprint quality check inside your factory. It ensures all profile pages contain matching fields before saving them.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Connecting Node/Express services to MongoDB databases.

## 5. How do we build with it?
```js
const User = mongoose.model('User', new Schema({ name: String }));
```

- **Expected Output**: Enables schema validating connections to MongoDB database.
- **Best Practice / Rule**: Mongoose compiles models off schemas. Models act as active database query objects (User.find()).
