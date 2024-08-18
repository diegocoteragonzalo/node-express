let express = require("express")
let app = express()


app.use(express.static("public"))


app.get("/", (req, res) => {
	res.send("Diego")
})


app.get("/prueba", (req, res) => {
	res.send("<h1>Prueba</h1>")
})


app.get("/prueba2", (req, res) => {
	res.send("<h1>Prueba 2</h1>")
})


app.listen(8081, () => {
	console.log("Server in 8081")
})