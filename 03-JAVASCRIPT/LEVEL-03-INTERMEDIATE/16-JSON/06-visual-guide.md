# Visual Guide: JavaScript JSON

```text

+---------------------------------------------------------+
| JSON TRANSFORMATION FLOW                                |
|                                                         |
|   JS Object:  { age: 20 }                               |
|                     |                                   |
|               JSON.stringify()                          |
|                     v                                   |
|   JSON String: '{"age": 20}'                            |
|                     |                                   |
|               JSON.parse()                              |
|                     v                                   |
|   JS Object:  { age: 20 }                               |
+---------------------------------------------------------+

```
