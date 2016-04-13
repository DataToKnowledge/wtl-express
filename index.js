var express = require('express');
var SearchkitExpress = require("searchkit-express");

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

app.use("/articles-search", searchkitRouter);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
