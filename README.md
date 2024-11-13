# CredGen
The purpose of this project is to build a standard Node.js module password generator with customizable options.

## Installation
```bash
npm install credgen
```

## Usage
```bash
const generatePassword = require('credgen');

// Generate a random password of default length 12
console.log(generatePassword()); 

// Generate a 16-character password with custom options
console.log(generatePassword(16, { uppercase: true, numbers: true }));
```

## Options
- length: The length of the password (default is 12).
- uppercase: Include uppercase letters (default is true).
- lowercase: Include lowercase letters (default is true).
- numbers: Include numbers (default is true).
- symbols: Include symbols (default is true).
