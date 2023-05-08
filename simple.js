const crypto = require('crypto');
const fs = require('fs');

// Encryption function
function encryptFile(key, inputFile, outputFile) {
  const input = fs.createReadStream(inputFile);
  const output = fs.createWriteStream(outputFile);
  const cipher = crypto.createCipher('aes-256-cbc', key);

  input.pipe(cipher).pipe(output);
}

// Decryption function
function decryptFile(key, inputFile, outputFile) {
  const input = fs.createReadStream(inputFile);
  const output = fs.createWriteStream(outputFile);
  const decipher = crypto.createDecipher('aes-256-cbc', key);

  input.pipe(decipher).pipe(output);
}

// Usage
const key = 'my secret key';
const inputFile = 'input.txt';
const encryptedFile = 'encrypted.txt';
const decryptedFile = 'decrypted.txt';

encryptFile(key, inputFile, encryptedFile);
decryptFile(key, encryptedFile, decryptedFile);
