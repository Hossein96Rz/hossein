// validateFormData.js

// Utility function to validate email format
function validateEmail(email: string) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Main validation function
export function validateFormData({
  name,
  email,
  message,
}: {
  name: string;
  email: string;
  message: string;
}) {
  if (!name || name.trim().length < 3) {
    return false;
  }

  if (!validateEmail(email)) {
    return false;
  }

  if (!message || message.trim().length < 8) {
    return false;
  }

  return true;
}
