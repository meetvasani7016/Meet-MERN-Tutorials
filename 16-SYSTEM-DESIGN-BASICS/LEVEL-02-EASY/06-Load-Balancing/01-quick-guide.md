# Load Balancing

## 1. What is it?
A Load Balancer distributes incoming network traffic across multiple backend servers to prevent overload and ensure uptime.

## 2. Why do we use it?
To distribute heavy traffic loads across a cluster of server nodes, ensuring high availability and preventing single servers from crashing.

## 3. How does it work?
- **Analogy**: A traffic coordinator at a toll station directing cars to different open lanes to prevent long backups.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
API gateways and scaling multi-server architectures.

## 5. How do we build with it?
```js
NGINX load balancing requests across three running Express API instances.
```

- **Expected Output**: Prevents server crashes by distributing query volumes.
- **Best Practice / Rule**: Load balancers use strategies like Round Robin (rotating server indexes sequentially) or Least Connections.
