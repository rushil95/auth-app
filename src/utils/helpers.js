export const validateEmail = (email) => {
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  let result = true;
  /*
    Length should atleast be 8
    Should contain one Upper, Lower, Special(@#$%)
    */
  //Length check
  if (password.length < 7) result = false;
  //Check atlest one Uppercase
  if (!(/[A-Z]/.test(password) || /[a-z]/.test(password))) result = false;

    if (!/[0-9]/.test(password)) result = false;

  return result;
};
