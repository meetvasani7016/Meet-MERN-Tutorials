// 1. Embedded Relationship (Self-contained comments)
db.posts.insertOne({
  title: "React Guide",
  comments: [
    { author: "Alice", text: "Nice post" },
    { author: "Bob", text: "Very helpful" }
  ]
});

// 2. Referenced Relationship (Separate collections)
db.authors.insertOne({ _id: ObjectId("603d2"), name: "John Doe" });
db.articles.insertOne({
  title: "NodeJS Secrets",
  authorId: ObjectId("603d2") // Link to Author document
});