# CredsGen
The purpose of this project is to build a standard Node.js module password generator with customizable options.

## Installation
```bash
npm install credsgen
```

## Usage
```bash
import credGen from 'credsgen'

// Generate a random password of default length 12
console.log(credGen()); 

// Generate a 16-character password with custom options
console.log(credGen(16, { uppercase: true, numbers: true }));
```

## Options
- length: The length of the password (default is 12).
- uppercase: Include uppercase letters (default is true).
- lowercase: Include lowercase letters (default is true).
- numbers: Include numbers (default is true).
- symbols: Include symbols (default is true).
