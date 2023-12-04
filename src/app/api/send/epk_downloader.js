import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "public", "Expansion_Project_EPK_2023.pdf");
  const stat = fs.statSync(filePath);

  res.writeHead(200, {
    "Content-Length": stat.size,
    "Content-Type": "application/pdf",
    "Content-Disposition": "attachment; filename=Expansion_Project_EPK_2023.pdf",
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
}
