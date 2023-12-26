require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const genAI = new GoogleGenerativeAI(process.env.GEN_API);

const generationConfig = {
  stopSequences: ["red"],
  maxOutputTokens: 200,
  temperature: 0,
  topP: 0.1,
  topK: 16,
};

app.post("/chat", async (req, res) => {
  const data = req.body;
  generationConfig.temperature = data.temperature;
  const model = genAI.getGenerativeModel({
    model: "gemini-pro",
    generationConfig,
  });
  const result = await model.generateContent(data.prompt);
  const response = result.response;
  const text = response.text();
  res.send({ output: text });
});

app.listen(8080, (req, res) => {
  console.log("Listening on port 8080");
});
