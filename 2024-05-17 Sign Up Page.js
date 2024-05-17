const http = require('http');
const fs = require('fs');

// if문 단축 시키는 거는 나중에.

const server = http.createServer(function(request, response){
  if(request.method === "GET") {
    if(request.url === "/") {

      const first = fs.readFileSync("./public/index.html", "utf8");
      //  ()안에 minam.html -> index.html 로 바꾸니 해결 되었다. 해당 파일을 적어야 한다..

      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/html; charset=utf-8');
      response.write(first);
      //  first  대신에, 따로 만든 html 문서 끌어와서 쓰기
      // response.write("<html><body><h1>I want to go home</h1></body></html>");
      response.end();
    }
    if(request.url === "/style.css") {
      const second = fs.readFileSync("./public/style.css");
      
      response.statusCode = 200;
      // response.setHeader('Content-Type', 'text/css; charset=utf-8');
      response.setHeader('Content-Type', '; charset=utf-8');
      response.write(second);
      response.end();
    }
    // if(request.url === "/script.js") { <- script아니고 이름이 index 여야 하고
      if(request.url === "/index.js") {
      // const third = fs.readFileSync("./public/script.js"); //여기도 script아니고 이름이 index 여야 한다
      const third = fs.readFileSync("./public/index.js");

      response.statusCode = 200;
      response.setHeader('Content-Type', 'text/javascript; charset=utf-8');
      response.write(third);
      response.end();
    }
    console.log(request.url);
  }
});
server.listen(3000);
