const express = require('express');
const bodyparser = require('body-parser');
const app = express();

let port = process.argv[2];

app.use(express.urlencoded({extended: false}));

app.post('/form', function(req, res){
	let str = req.body.str;
	let reversedStr = str.split('').reverse().join('');
	res.send(reversedStr);
})

app.listen(port);
