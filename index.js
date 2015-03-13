var express = require('express')
var app = express();

app.set('port', (process.env.PORT || 8080))
app.use(express.static(__dirname + '/public'))

var fs = require('fs')

app.get('/', function(request, response) {
  response.send(fs.readFileSync("index.html", encoding="utf8"))
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
