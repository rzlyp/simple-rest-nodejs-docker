const db_port = process.env.MONGODB_ADDRESS || '127.0.0.1';
module.exports = {
  db: {
      production: "mongodb://"+db_port+":27017/product",
      development: "mongodb://"+db_port+":27017/product",
  }
};
