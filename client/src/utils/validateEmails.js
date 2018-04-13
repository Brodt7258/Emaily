const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export default (emails) => {
  const invalid = emails
    .split(',')
    .map(email => email.trim())
    .filter(email => email.length && !re.test(email));

  if (invalid.length) {
    return `These emails are invalid: ${invalid}`;
  }

  return;
};