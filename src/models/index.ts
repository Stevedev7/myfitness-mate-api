import mongoose from 'mongoose';
mongoose.set("debug", true)
mongoose.Promise = Promise;
mongoose.connect("mongodb://localhost:27017/Pokemon", {
    keepAlive: true
})