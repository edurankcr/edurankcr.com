const allowedEmailDomains = ['gmail.com', 'yahoo.com', 'hotmail.com', 'icloud.com', 'outlook.com'];

const isValidEmailFormat = (email: string) => /^[\w.%+-]+@(?:[a-z0-9-]+\.)+[a-z]{2,}$/i.test(email);

const isValidEmailDomain = (email: string) => {
  const domain = email.split('@').pop()?.toLowerCase();
  return domain ? allowedEmailDomains.includes(domain) : false;
};

const isValidUsername = (username: string) => {
  const usernamePattern = /^(?!.*\.\.)(?!.*__)(?!.*\.$)(?!.*_$)[\w.]{1,30}$/;
  return usernamePattern.test(username);
};

const isValidAge = (dateString: string): boolean => {
  const birthDate = new Date(dateString);
  const today = new Date();

  let age = today.getFullYear() - birthDate.getFullYear();
  const hasHadBirthdayThisYear
    = today.getMonth() > birthDate.getMonth()
      || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

  if (!hasHadBirthdayThisYear) {
    age--;
  }

  return age >= 18 && age <= 100;
};

export { isValidAge, isValidEmailDomain, isValidEmailFormat, isValidUsername };
