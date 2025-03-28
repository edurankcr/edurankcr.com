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

const isValidAge = (dateString: string) => {
  const date = new Date(dateString);
  const today = new Date();
  const age = today.getFullYear() - date.getFullYear();
  const monthDiff = today.getMonth() - date.getMonth();
  return age > 18 || (age === 18 && monthDiff >= 0);
};

export { isValidAge, isValidEmailDomain, isValidEmailFormat, isValidUsername };
