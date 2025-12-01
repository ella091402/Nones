const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My Own Profile</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background: linear-gradient(135deg, #b03915ff, #bc5c25ff);
            color: white;
          }

          .card {
            background: rgba(255, 255, 255, 0.15);
            padding: 40px;
            border-radius: 20px;
            text-align: center;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
            backdrop-filter: blur(10px);
            width: 450px;
            border: 2px solid rgba(255, 255, 255, 0.3);
            position: relative;
          }


          .volleyball:before, .volleyball:after {
            content: "";
            position: absolute;
            background: white;
            opacity: 0.9;
          }

          .volleyball:before {
            width: 60px;
            height: 12px;
            top: 38px;
            left: 15px;
            transform: rotate(25deg);
            border-radius: 10px;
          }

          .volleyball:after {
            width: 60px;
            height: 12px;
            top: 38px;
            right: 15px;
            transform: rotate(-25deg);
            border-radius: 10px;
          }

          h1 {
            margin-bottom: 10px;
            font-size: 32px;
            font-weight: bold;
          }

          p {
            font-size: 18px;
            margin: 0 0 15px 0;
          }

          blockquote {
            font-style: italic;
            font-size: 18px;
            margin-top: 20px;
            background: rgba(255,255,255,0.2);
            padding: 15px;
            border-radius: 10px;
          }
        </style>
      </head>

      <body>
        <div class="card">

          <div class="volleyball"></div>

          <h1>ELLA AUDREY M. NONES</h1>
          <p>Class Section: BSIT BA 4102</p>

          <blockquote>" Always do your best and God will do the rest."</blockquote>

        </div>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});