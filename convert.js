import fs from "fs"
import { marked } from "marked"

const md = fs.readFileSync("README.md", "utf-8")
const html = marked(md)

fs.writeFileSync("README.html", html)
console.log("README.md → README.html erfolgreich konvertiert!")
