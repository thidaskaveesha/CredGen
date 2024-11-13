# PassGen
The purpose of this project is to build a standard Node.js module password generator with customizable options.

## Installation

```bash
npm install random-password-generator
```

## Usage
```bash
const generatePassword = require('passGen');

// Generate a random password of default length 12
console.log(generatePassword()); 

// Generate a 16-character password with custom options
console.log(generatePassword(16, { uppercase: true, numbers: true }));
```
