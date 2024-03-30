import http from "http"
import fs from "fs"

const pagesFolder = "pages"
const pageFileName = "page.html"

let notFoundPage = fs.readFileSync(`${pagesFolder}/404.html`, "utf-8")

const server = http.createServer((req, res) => {
	fs.readFile(`${pagesFolder}/${req.url?.split("/").filter(Boolean).join("/")}/${pageFileName}`, (err, data) => {
		if (err) {
			res.writeHead(404)
			res.end(notFoundPage)
		} else {
			res.writeHead(200)
			res.end(data)
		}
	})
})

server.listen(3000, () => {
	console.log("server listening on port 3000")
})
