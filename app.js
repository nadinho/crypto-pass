const fs = require("fs");

const [command, key, value] = process.argv.slice(2);

function get() {
  console.log("Called GET", key);

  try {
    const dbJSON = fs.readFileSync("./db.json", "utf8");
    const passwords = JSON.parse(dbJSON);
    console.log(key, passwords[key]);
  } catch (error) {
    console.error(error);
  }
}

function set() {
  console.log("Called SET", key, value);

  try {
    // Read db.json
    const dbJSON = fs.readFileSync("./db.json", "utf8");
    const passwords = JSON.parse(dbJSON);
    // Update value by key
    passwords[key] = value;
    // Write db.json
    fs.writeFileSync("./db.json", JSON.stringify(passwords, null, 2));
  } catch (error) {
    console.error(error);
  }
}

function unset() {
  console.log("Called UNSET", key, value);

  try {
    const dbJSON = fs.readFileSync("./db.json", "utf8");
    const passwords = JSON.parse(dbJSON);

    delete passwords[key.value];

    fs.writeFileSync("./db.json", JSON.stringify(passwords, null, 2));
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
