# Visual Guide: MERN Stack Deployment

```text
                   +---------------------------+
                   |    [ Client Browser ]     |
                   +-------------+-------------+
                                 |
           Loads Assets          | Calls API
                 +---------------+---------------+
                 |                               |
                 v                               v
    +------------+------------+     +------------+------------+
    | Static Hosting (Vercel)  |     | API Web Service (Render)|
    | Serves: HTML, CSS, JS   |     | Runs: Node / Express    |
    +-------------------------+     +------------+------------+
                                                 |
                                     Queries DB  | (URI String)
                                                 v
                                    +------------+------------+
                                    | Cloud Database (Atlas)  |
                                    | Stores: NoSQL Documents |
                                    +-------------------------+
```
