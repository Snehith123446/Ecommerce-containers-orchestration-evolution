module.exports = {
 // mongoURI: "<INSERT DATABASE URI>",
  //  mongoURI: "mongodb://emongo:27017/epoc",
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY
};
