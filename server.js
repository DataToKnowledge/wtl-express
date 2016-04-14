var express = require('express');
var SearchkitExpress = require('searchkit-express');
var cors = require('cors');

var app = express();

var corsOptions = {
  origin: '*'
};
app.use(cors(corsOptions));

SearchkitExpress({
  host:process.env.ELASTIC_URL || "http://es-data-3:9200",
  index:'wtl/articles',
  queryProcessor: function(query, req, res){
    console.log("got query " + JSON.stringify(query))
    console.log(req.body)
    return query;
  }
 }, app)

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
