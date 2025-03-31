require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const Station = mongoose.model("Station", new mongoose.Schema({
    name: String,
    latitude: Number,
    longitude: Number,
    address: String
}));

const stations = [
    { name: "EV Station 1", latitude: 28.7041, longitude: 77.1025, address: "Delhi, India" },
    { name: "EV Station 2", latitude: 28.5355, longitude: 77.3910, address: "Noida, India" },
    { name: "EV Station 3", latitude: 28.4595, longitude: 77.0266, address: "Gurgaon, India" }
];

Station.insertMany(stations)
    .then(() => {
        console.log("Stations inserted successfully");
        mongoose.connection.close();
    })
    .catch(err => console.log("Error inserting stations:", err));
