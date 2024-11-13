function credGen(length = 12, options = {}) {
  const defaultOptions = {
    uppercase: true,
    lowercase: true,
    numbers: true,
    symbols: true
  };

  // Merge default options with provided options
  const finalOptions = { ...defaultOptions, ...options };

  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const lowerCaseChars = 'abcdefghijklmnopqrstuvwxyz';
  const numberChars = '0123456789';
  const symbolChars = '!@#$%^&*()_+[]{}|;:,.<>?';

  let characters = '';

  // Build the character set based on options
  if (finalOptions.uppercase) characters += upperCaseChars;
  if (finalOptions.lowercase) characters += lowerCaseChars;
  if (finalOptions.numbers) characters += numberChars;
  if (finalOptions.symbols) characters += symbolChars;

  // If no characters selected
  if (characters === '') {
    throw new Error('At least one option must be selected (uppercase, lowercase, numbers, or symbols).');
  }

  // Generate the password
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  return password;
}

// Export the function
export default credGen;
  