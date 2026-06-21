// SQL Table Row representation:
// ID | Name  | Role
// 1  | Alice | Lead

// MongoDB BSON Document representation:
{
  "_id": "66762f026a7e...",
  "name": "Alice",
  "role": "Lead",
  "skills": ["React", "Express"], // Nested arrays allowed!
  "status": { "active": true }     // Nested objects allowed!
}