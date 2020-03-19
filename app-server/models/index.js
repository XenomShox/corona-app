const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(
    "mongodb+srv://xenomshox:0561182132salma@cluster0-isrir.mongodb.net/test?retryWrites=true&w=majority",
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        keepAlive: true
    }
);

module.exports.User = require("./user");
module.exports.Meeting = require("./meeting");
