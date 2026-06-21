# Visual Guide: MongoDB Installation Modes

```text
Local Development Setup (Part A):
+--------------------+                   +----------------------------+
|  Local PC / App    | == localhost:27017 ==> | Local mongod Background  |
|  (Client/VS Code)  |                   | Service (Stores on Disk)   |
+--------------------+                   +----------------------------+

Cloud Production Setup (Part B):
+--------------------+                   +----------------------------+
|  API Server        | == TLS Encrypted ==> | MongoDB Atlas Cloud        |
|  (Render/Vercel)   |    Connection     | Cluster (Automatic Scales) |
+--------------------+                   +------------+---------------+
                                                      |
                                         +------------v---------------+
                                         | IP Access Table (0.0.0.0/0)|
                                         +----------------------------+
```
