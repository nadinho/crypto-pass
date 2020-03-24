const readline = require("readline");

const askQuestion = (question, { hideAnswer }) => {
  const readlineInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    readlineInterface.question(question, (answer) => {
      resolve(answer);

      // Add line break
      readlineInterface.output.write("\n");

      readlineInterface.close();
    });

    // Override default output to hide password
    if (hideAnswer) {
      readlineInterface._writeToOutput = () => {
        readlineInterface.output.write("");
      };
    }
  });
};

const askForPassword = (key) => {
  return askQuestion(`Enter password for ${key}: `);
};

const askForMasterPassword = () => {
  return askQuestion("Enter master password: ", {
    hideAnswer: true,
  });
};

exports.askForPassword = askForPassword;
exports.askForMasterPassword = askForMasterPassword;
