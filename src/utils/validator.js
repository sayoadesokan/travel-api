module.exports.validation = (input) => {
  if (typeof input !== 'string') {
    return false;
  }

  if (input.length < 5) {
    return false;
  }

  const alphanumericRegex = /^[a-zA-Z0-9]+$/;
  if (!alphanumericRegex.test(input)) {
    return false;
  }

  return true;
};
