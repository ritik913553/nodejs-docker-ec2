import express from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 4000;
import path from "path";


app.use(
    cors({
        origin: ["https://github-actions.ritikg.space","http://13.233.236.94"],
    })
);
app.use(express.json());

 const profileData = {
    name: "Ritik Gupta",
    title: "Full Stack Developer || Generative AI Developer",
    imageUrl: "https://avatars.githubusercontent.com/u/158819496?v=4",
    links: [
      { name: "Portfolio", url: "https://ritikg.space", icon: "🌐" },
      { name: "GitHub", url: "https://github.com/ritik913553", icon: "💻" },
      { name: "LinkedIn", url: "https://www.linkedin.com/in/ritik-gupta-52aa982a7/", icon: "🔗" },
      { name: "X", url: "https://x.com/RitikGu24346807", icon: "X" },
      { name: "YouTube", url: "https://youtube.com/@ritikgupta8634", icon: "▶️" },
      { name: "Blog", url: "https://ritikgupta913.hashnode.dev/", icon: "✍️" },
    ]
  };
app.get("/api/socials", (req, res) => {
    res.json(profileData);
});

app.get('/api/:id',(req,res)=>{
  res.send(`Hey ${req.params.id}`);
})



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
