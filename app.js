const { readPasswords, writePasswords } = require("./lib/passwords");

const [command, key, value] = process.argv.slice(2);

function get() {
  console.log("Called GET", key);

  try {
    const passwords = readPasswords();
    console.log(key, passwords[key]);
  } catch (error) {
    console.error(error);
  }
}

function set() {
  console.log("Called SET", key, value);

  try {
    const passwords = readPasswords();
    // Update value by key
    passwords[key] = value;
    // Write db.json
    writePasswords(passwords);
  } catch (error) {
    console.error(error);
  }
}

function unset() {
  console.log("Called UNSET", key, value);

  try {
    const passwords = readPasswords();

    delete passwords[key];

    writePasswords(passwords);
  } catch (error) {
    console.error(error);
  }
}

if (command === "get") {
  get();
} else if (command === "set") {
  set();
} else if (command === "unset") {
  unset();
} else {
  console.error("Unkown command");
}
