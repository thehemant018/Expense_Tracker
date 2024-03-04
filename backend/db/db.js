const mongoos = require('mongoose');
const connectDB = async()=>{
    try {
        await mongoos.connect('mongodb://localhost:27017/redmi')
            console.log("Connected!!!")
    } catch (error) {
        console.log("Not Connected!!")
    }
}
module.exports = connectDB