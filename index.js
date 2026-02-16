const express = require("express");

const app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

// 🔹 Global Portfolio Object (ADDED)
const portfolioData = {
  id: 1,
  name: "Uday Santosh Sawant",
  role: "Web Developer",
  email: "udaysawant6651@gmail.com",
  location: "Pune, Maharashtra",
  skills: ["JavaScript", "Python", "React.js", "Node.js"],
  projects: [
    {
      title: "Auto Q&A Generative AI",
      desc: "NLP based AI using BERT & T5",
    },
    {
      title: "Pandit AI Chatbot",
      desc: "AI religious assistant with Dialogflow",
    },
    {
      title: "Cloud Kitchen Website",
      desc: "Responsive React food ordering app",
    },
  ],
};

// 🔹 HOME
app.get("/", (req, res) => {
  res.render("home.ejs", { data: portfolioData });
});

// 🔹 ABOUT
app.get("/about", (req, res) => {
  const obj = {
    id: 1,
    username: "swaraj@123.gmail.com",
  };

  res.render("about.ejs", { data: portfolioData, user: obj });
});

// 🔹 CONTACT
app.get("/contact", (req, res) => {
  res.render("contact.ejs", { data: portfolioData });
});

// 🔹 SKILLS
app.get("/skills", (req, res) => {
  res.render("skills.ejs", { data: portfolioData });
});

// 🔹 PROJECT
app.get("/projects", (req, res) => {
  res.render("project.ejs", { data: portfolioData });
});

// 🔹 fallback
app.use((req, res) => {
  res.send("404 Page not found");
});

// 🔹 SERVER CONFIG (FIXED)
const PORT = 3000;
const HOST = "127.0.0.1";

app.listen(PORT, HOST, () => {
  console.log(`server is running on http://${HOST}:${PORT}`);
});
