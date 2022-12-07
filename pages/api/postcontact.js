import fs from "fs";

export default async function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);

    const data = await fs.promises.readdir("contactdata");
    await fs.promises.writeFile(
      `contactdata/${data.length + 1}.json`,
      JSON.stringify(req.body)
    );

    res.status(200).json({
      message: "post request",
    });
  } else {
    res.status(404).json({
      message: "Not Found",
    });
  }
}