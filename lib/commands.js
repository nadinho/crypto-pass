const { readPasswords, writePasswords, writeDB } = require("./passwords");
const { hashPassword, encrypt, decrypt } = require("./crypto");

const reset = (masterPassword) => {
  const db = {
    masterPassword: hashPassword(masterPassword),
    passwords: {},
  };
  writeDB(db);
  console.log("Reseted database with new master password");
};

const get = (key) => {
  console.log("Called GET", key);

  try {
    const passwords = readPasswords();
    // Log password
    const encryptedPassword = passwords[key];
    const password = decrypt(encryptedPassword);
    console.log(key, password);
  } catch (error) {
    console.error(error);
  }
};

const set = (key, value) => {
  console.log("Called SET", key, value);
  const encryptedValue = encrypt(value);
  try {
    const passwords = readPasswords();
    // Update value by key
    passwords[key] = encryptedValue;
    // Write db.json
    writePasswords(passwords);
  } catch (error) {
    console.error(error);
  }
};

const unset = (key) => {
  console.log("Called UNSET", key, value);

  try {
    const passwords = readPasswords();

    delete passwords[key];

    writePasswords(passwords);
  } catch (error) {
    console.error(error);
  }
};

exports.get = get;
exports.set = set;
exports.unset = unset;
exports.reset = reset;
