// Import the 'worker_threads' module
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads');

// Check if the current script is the main thread or a worker thread
if (isMainThread) {
  // This code runs in the main thread
  
  // Create a new worker thread and pass some data to it
  const worker = new Worker(__filename, {
    workerData: { input: 10 },
  });

  // Listen for messages from the worker thread
  worker.on('message', (message) => {
    console.log(`Result from worker: ${message.result}`);
  });

  // Send a message to the worker thread
  worker.postMessage({ action: 'multiply', value: 5 });
} else {
  // This code runs in the worker thread
  
  // Listen for messages from the main thread
  parentPort.on('message', (message) => {
    if (message.action === 'multiply') {
      const result = message.value * workerData.input;
      
      // Send the result back to the main thread
      parentPort.postMessage({ result });
    }
  });
}
