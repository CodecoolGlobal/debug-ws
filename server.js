
const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const people = [
    {
        id: 0,
        name: "john",
        email: "john@asdf.com"
    }
];

app.get("/api/people", (_req, res) => {
    res.json(people);
})

const PORT = 3005;
app.listen(PORT, () => {
    console.log("listening on", PORT);
});
