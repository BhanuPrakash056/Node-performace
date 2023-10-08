
# Performance Testing Node

Firstly, I have added a delay function of 9 seconds for the testing.

# In-Built Cluster Module

we can use the Cluster to a create a master and worker model. This can be done my fork() method.

# PM2 

PM2 is an advanced process manager for NodeJS applications that allows you quickly start, control, or stop your node processes. 

## Basic Commands
* `pm2 start <script>`: Start a script.
* `pm2 stop <id>`: Stop a script by ID.
* `pm2 restart <id>`: Restart a script by ID.
* `pm2 reload <id>`: Reload a script by ID.
* `pm2 logs <id>`: Show logs for a script by ID.
* `pm2 list`: List all running scripts.
* `pm2 status`: Show status of all running scripts.
* `pm2 kill`: Kill all running scripts.
## Configuration
PM2 can be configured using a configuration file. The default configuration file is located at `~/.pm2/conf.json`.
## Documentation
For more information, see the [PM2 documentation](https://pm2.keymetrics.io/docs/).

## Worker Thread
The Worker thread is a fundamental building block in concurrent programming. It allows developers to offload tasks from the main thread, which is responsible for handling user interactions and updating the UI.

To create a Worker thread, you can use the following code:
```javascript
const worker = new Worker('worker.js');
```

In this example, `worker.js` is the script that the Worker thread will execute. This script should contain the code that you want to offload from the main thread.

To communicate between the main thread and the Worker thread, you can use the `postMessage` method to send messages from the main thread to the Worker thread, and the `onmessage` event to receive messages from the Worker thread.

Here, an example of how to send a message from the main thread to the Worker thread:

```javascript
worker.postMessage('Hello, Worker!');
```
And here's an example of how to receive a message from the Worker thread in the main thread:

```javascript
worker.onmessage = (event) => {
 console.log('Received:', event.data);
};
```

n this example, the `event.data` property contains the data that was sent from the Worker thread.

To terminate a Worker thread, you can use the `terminate` method:

```javascript
worker.terminate();
```
