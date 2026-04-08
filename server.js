    const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json());

// API
app.post("/send-whatsapp", (req, res) => {

    const data = req.body;

    // message format
    let message = `
🔥 NEW MODEL APPLICATION

Name: ${data.name}
Age: ${data.age}
City: ${data.city}
Phone: ${data.phone}
Email: ${data.email}

Height: ${data.height}
Weight: ${data.weight}
Experience: ${data.exp}
`;

    let phone = "91 8824570982";

    let whatsappURL = "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);

    res.json({
        url: whatsappURL
    });
});

// server start
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
