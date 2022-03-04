module.exports = {
  mongodbMemoryServerOptions: {
    instance: {
      dbName: 'test',
      port: 8000,
    },
    binary: {
      version: '4.2.3', // Version of MongoDB
      skipMD5: true
    },
    autoStart: false
  }
};