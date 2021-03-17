//Question 01
console.log("Hello World");

//Question 02
const os=require('os');
console.log('Architecture '+os.arch());
console.log('CPUs '+os.cpus().length);
console.log('OS '+os.platform());

//Question 03
const fs=require('fs');

const fileName=__dirname+'/test.txt';
//Asynchronous way
fs.readFile(fileName,(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data.toString());
})
//Synchronous way
const  data=fs.readFileSync(fileName);
console.log(data.toString());


//Question 04
const fileName1=__dirname+'/test.txt';
const  outFileName=__dirname+'/test-copy.txt';

const readStream=fs.createReadStream(fileName1);
const writeStream=fs.createWriteStream(outFileName);

readStream.pipe(writeStream);


readStream.on(`data`,function(data){
    console.log(data.toString);
});






//part D
const http1=require('http');

http1.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    switch (req.method) {
        case 'GET':
            res.write('<h1>Hello World</h1>');
            res.end();
            break;
        case 'POST':
            req.on('data', data => {
                res.write('<h1>Hello ' + data + '</h1>');
                res.end();
            });
            break;
    }
}).listen(3000, (err) => {
    console.log('Server is listening to port 3000');
    return;
});