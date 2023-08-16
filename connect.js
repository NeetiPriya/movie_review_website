const mongoose = require('mongoose')

const connectionString = 
'mongodb+srv://ragul:123qwe456@cluster0.elh0vxx.mongodb.net/MEANsample?retryWrites=true&w=majority'

const connectDB = (url) => {
    return mongoose
        .connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        })
}

module.exports = connectDB
