const { response } = require('express');
const express = require('express');
const app = express();
app.use(express.urlencoded({extended: true})) 
const MongoClient = require('mongodb').MongoClient;
app.set('view engine', 'ejs');

let db;
MongoClient.connect('mongodb+srv://rbduschdl:love022775!@cluster0.lwlgw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useUnifiedTopology: true }, function (에러, client) {
	if (에러) return console.log(에러)
	db = client.db('todoapp');

    // db.collection('post').insertOne( {이름 : 'John', _id : 100} , function(에러, 결과){
	//     console.log('저장완료'); 
	// });




	app.listen(8080, function () {
		console.log('listening on 8080')
	});
});


// 누군가가 /pet 으로 방문을 하면..
// pet 관련된 안내문을 띄워주자

app.get('/pet', function(req, res){
    res.send('펫용품 쇼핑할 수 있는 페이지입니다.')
})

app.get('/beauty', function(req,res){
    res.send('뷰티용품을 쇼핑할 수 있는 페이지입니다.')
})
app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
})

app.get('/write', function(req,res){
    res.sendFile(__dirname + '/write.html')
})




app.post('/add', function(req,res){
    res.send('전송완료')
    db.collection('post').insertOne( {제목 : req.body.title, 날짜 :req.body.date } , function(err, res){
	    console.log('저장완료'); 
	});

})


app.get('/list', function(req, res){
    res.render('list.ejs');


})