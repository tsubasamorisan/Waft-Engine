module.exports = {
  smtp: {
    protocal: 'SMTP',
    email: 'wafttech.test@gmail.com',
    password: 'Test@1234',
    server: 'smtp.gmail.com',
    port: '465 ',
    secure: true,
    security: 'STARTTLS',
  },
  channel: 'smtp', // ['smtp','mailgun','sendgrid']
  mailgun: {
    api_key: '0391cff60b8a595e86752d61e2fcef80-e51d0a44-15f41c11',
    domain: 'sandbox3849acd6a28f4db0b3bad9d6eeac17ac.mailgun.org',
  },
  sendgrid: {
    api_key: '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',
  },
};
