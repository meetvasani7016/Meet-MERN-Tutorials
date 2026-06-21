# Summary: Stateful vs Stateless Auth

Here is a quick cheat sheet of what we covered in this lesson:

* Stateful: Server stores session IDs in DB; client sends ID cookie.
* Stateless: Server signs JWT; client attaches token in headers.
* Stateless JWTs scale better across distributed microservice servers.
