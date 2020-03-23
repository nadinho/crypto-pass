const fs = require("fs");

const readPasswords = () => {
  // Read db.json
  const dbJSON = fs.readFileSync("./db.json", "utf8");
  const passwords = JSON.parse(dbJSON);
  return passwords;
};

const writePasswords = (passwords) => {
  fs.writeFileSync("./db.json", JSON.stringify(passwords, null, 2));
};

exports.readPasswords = readPasswords;
exports.writePasswords = writePasswords;
