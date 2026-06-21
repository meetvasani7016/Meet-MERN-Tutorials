# Visual Guide: Sessions vs JWT (Token) Authentication

```text
Session-based Authentication (Stateful):
[Client] --- 1. POST Login Credentials ---> [Express Server]
[Client] <--- 3. Send back session_id Cookie --- [Express Server] (Saves Session in DB/Store)
[Client] --- 4. GET /dashboard (Cookie sent) --> [Express Server] (Looks up session_id in DB)

JWT Token-based Authentication (Stateless):
[Client] --- 1. POST Login Credentials ---> [Express Server]
[Client] <--- 3. Send back JWT (Token String) --- [Express Server] (Signs JWT with Secret Key)
[Client] --- 4. GET /dashboard (Header: Bearer) -> [Express Server] (Verifies Signature locally)
```
