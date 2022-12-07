import * as fs from "fs";

//http:localhost:3000/api/getBlog?slug=how-to-learn-javascript
export default function handler(req, res) {
  const { slug } = req.query;

  fs.readFile(`blogdata/${slug}.json`, "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({
        error: err.message,
      });
    }
    res.status(200).json(JSON.parse(data));
  });
}