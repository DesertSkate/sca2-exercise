
const express = require("express")
const path = require("path")
const app = express()

app.use(express.static(__dirname + "/public"))
const views = path.join(__dirname, "views")

app.get("/", (req, res) => {
  res.sendFile("index.html", { root: views })
})

app.get("/Other", (req, res) => {
  res.sendFile("Other.html", { root: views })
})

app.get("/Planets", (req, res) => {
  res.sendFile("Planets.html", { root: views })
})

app.get("/SpaceHumans", (req, res) => {
  res.sendFile("SpaceHumans.html", { root: views })
})

app.get("/Stars", (req, res) => {
  res.sendFile("Stars.html", { root: views })
})

app.listen(3000)
console.log("Running at port 3000")