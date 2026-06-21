# NodeJS Events

## 1. What is it?
Events allow you to write event-driven code by triggering and listening to custom events.

## 2. Why do we use it?
To implement decoupled, event-driven architectures where different parts of the system can emit signals (e.g. 'user_registered') and other modules can listen and react without tight coupling.

## 3. How does it work?
- **Analogy**: A door bell chime sensor system. You mount a sensor (event listener) that waits; pressing the bell (emitting event) rings the chime.
- **Mechanism**: The feature parses inputs or operations synchronously or asynchronously, executing compiled instructions and returning output responses or state modifications.

## 4. Where is it used?
Loggers, email dispatch systems, and chat message triggers.

## 5. How do we build with it?
```js
emitter.on('bell', () => chime());
```

- **Expected Output**: Registers a listener callback for the 'bell' event key.
- **Best Practice / Rule**: You must instantiate the EventEmitter class before you can listen to or emit events.
