var http = require('http');
let users = require("./state").users;
let products = require("./state").products;
let server = http.createServer(messageReceived);
server.listen(8080, console.log(" i am working "));


function messageReceived(req, res) {
res.writeHead(200, {'Content-Type': 'text/plain'});

//Code for users
if(req.method === "GET" && req.url === "/users"){
    let usersJSON = JSON.stringify(users);
    res.write(usersJSON);
    }

else if(req.method === "GET" && req.url.indexOf("/users") > -1){
    let id = req.url.split("/");
    let user = users.find(p=>p["_id"] == id[2]);
    let usersJSON = JSON.stringify(user);
    res.write(usersJSON);
    }

else if(req.method === "GET" && req.url === "/products"){
    let productsJSON = JSON.stringify(products);
    res.write(productsJSON);
    }
    
else if(req.method === "GET" && req.url.indexOf("/products") > -1){
    let id = req.url.split("/");
    let product = products.find(p=>p["id"] == id[2]);
    let productsJSON = JSON.stringify(product);
    res.write(productsJSON);
    }


else{
    res.write("Not Found");
}

res.end();
}
