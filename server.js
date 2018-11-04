// console.log('Server is starting...1');

const express=require('express');
var app=express();
const hbs=require('hbs');
app.set('view engine',hbs);
app.use(express.static(__dirname+'/public'));
const port=process.env.PORT || 3000;
const data={
		project: 'boloo',
		team:[
		'Amit',
		'Ankit',
		'Nandu',
		'Apurv'
		]
	};

var arr=new Array();
for (var i = 0; i <= 10; i++) {
	arr[i]=data;
}
app.get('/',(req,res)=>{
	res.render('home.hbs',{
		title: 'home',
		currentYear: new Date().getFullYear()
	});
	// res.send(arr);
})
 
app.get('/bad',(req,res)=>{
	res.send('bad');
})
app.get('/about',(req,res)=>{
	res.render('about.hbs',{
		title: 'about dynamic',
		currentYear: new Date().getFullYear()
	});
})


app.listen(port,()=>{
	console.log(`Server is hoting on port: ${port}`);
});