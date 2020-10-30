// Singleton pattern (Creational)
// Useful when one wants to limit the number of instances
//   of an object to AT MOST ONE.

const Singleton = (function () {
  // We want to limit number of instances of ProcessManager
  //   to at most one
  function ProcessManager() {
    this.numProcesses = 0;
  }

  // Variable to store the one instace of ProcessManager
  let processManager;

  function createProcessManager() {
    processManager = new ProcessManager();
    return processManager;
  }

  return {
    getProcessManager() {
      if (processManager) {
        // If we don't have an instace yet, create one
        return createProcessManager();
      } else {
        // If we already have an instace, return that
        return processManager;
      }
    },
  };
})();

// Freshly created instance of ProcessManager
const processManager1 = Singleton.getProcessManager();

// Returns existing instace, nothing is being created
const processManager2 = Singleton.getProcessManager();

// Check if they points to same memory space
// If true that means only one instance of processManager created
console.log(processManager1 === processManager2); // true
