import * as fs from "fs";

export default async function handler(req, res) {
  console.log(req.query.count);
  let data = await fs.promises.readdir("blogdata");
  data = data.slice(0, Number.parseInt(req.query.count));
  let allBlogs = [];
  for (let i = 0; i < data.length; i++) {
    let myFile = await fs.promises.readFile(`blogdata/${data[i]}`, "utf-8");

    allBlogs.push(JSON.parse(myFile));
  }

  res.status(200).json(allBlogs);
}