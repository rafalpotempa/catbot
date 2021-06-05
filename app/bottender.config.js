module.exports = {
  session: {
    driver: 'memory',
    stores: {
      memory: {
        maxSize: 500,
      },
    },
  },
  initialState: {},
  channels: {
    messenger: {
      enabled: true,
      path: '/webhooks/messenger',
      fields: ['messages'],
      pageId: process.env.MESSENGER_PAGE_ID,
      accessToken: process.env.MESSENGER_ACCESS_TOKEN,
      appId: process.env.MESSENGER_APP_ID,
      appSecret: process.env.MESSENGER_APP_SECRET,
      verifyToken: process.env.MESSENGER_VERIFY_TOKEN,
      catApiToken: process.env.CAT_API_TOKEN,
    },
  },
};
