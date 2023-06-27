
const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const people = [
    {
        id: 0,
        name: "John",
        email: "john@asdf.com",
        puppies: [{name: "Goofy", weight: 2}, {name: "Lucky", weight: 2.4}]
    },
    {
        id: 1,
        name: "Anna",
        email: "anna@asdf.com",
        puppies: [{name: "Brian", weight: 2}]
    },
];

app.get("/api/people", (_req, res) => {
    res.json(people);
})

app.get("/api/people/:id", (req, res) => {
    let target = null;
    for (const person of people) {
        if (person.id == req.params.id) {
            target = person;
        }
    }
    res.json(target);
})

app.post("/api/people/:id/puppies", (req, res) => {
    let target = null;
    for (const person of people) {
        if (person.id === req.params.id) {
            target = person;
        }
    }
    target.puppies.push(req.body);
    return res.json(target);
});

const PORT = 3005;
app.listen(PORT, () => {
    console.log("listening on", PORT);
});
