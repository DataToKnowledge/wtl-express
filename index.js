var express = require('express');
var SearchkitExpress = require('searchkit-express');
var cors = require('cors');

var app = express();

var searchkitRouter = SearchkitExpress.createRouter({
  host:process.env.ELASTIC_URL || "http://es-data-3:9200",
  index:'wtl/articles',
  maxSockets:500, // defaults to 1000
  queryProcessor: function(query, req, res){
    console.log("got query " + query)
    return query;
  }
});

var corsOptions = {
  origin: 'http://http://api_node.datatoknowledge.it'
};

app.use(cors(corsOptions));

app.use("/articles-search", searchkitRouter);

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
});
