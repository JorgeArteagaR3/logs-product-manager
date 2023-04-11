import express from "express";
const app = express();

app.get("/", (req, res) => {
    console.log("HELLO FROM EXPRESS");
    res.status(200);
    res.json({ message: "HELLO ZAWARUDO" });
});

export default app;
