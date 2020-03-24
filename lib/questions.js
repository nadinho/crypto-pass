const readline = require("readline");

function askForPassword(key) {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    readlineInterface.question(`Enter password of ${key}:`, (password) => {
      resolve(password);

      // Add line break
      readlineInterface.output.write("\n");

      readlineInterface.close();
    });
    // Override default output to hide password
    readlineInterface._writeToOutput = function () {
      readlineInterface.output.write("");
    };
  });
}

function askForMasterPassword() {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  return new Promise((resolve) => {
    readlineInterface.question(`Enter Masterpassword: `, (password) => {
      resolve(password);
      readlineInterface.close();
    });
    // Override default output to hide password
    readlineInterface._writeToOutput = function () {
      readlineInterface.output.write("");
    };
  });
}

exports.askForPassword = askForPassword;
exports.askForMasterPassword = askForMasterPassword;
