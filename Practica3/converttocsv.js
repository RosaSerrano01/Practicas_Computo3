var fs = require("fs");
var stringify =require("csv-stringify");

//jsaon 

var data=[
    {"country": "El Salvador", "official languajes(s)": "Spanish"},
    {"country": "India", "official languajes(s)": "Hindi, English"}
];

stringify.stringify(data,{
    header:true
}, function (err, output) {
    fs.writeFileSync(__dirname+"/data.csv", output);
});