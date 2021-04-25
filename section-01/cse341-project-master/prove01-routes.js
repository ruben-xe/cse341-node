const fs = require('fs')


const requestHandler = (req, res) => {
    const url = req.url
    const method = req.method

    if (url === '/') {
        res.write('<html>')
        res.write('<head><title>Create a User</title></head>')
        res.write('<body><h1>Sing up</h1><form action="/create-user" method="POST"><input type="text" name="userName"><button type="submit">Sign up</button></form></body>')
        res.write('</html>')
        return res.end();
    }
    if (url === '/create-user' && method === 'POST'){
        const body = []
        
        req.on('data', (chunk) => {
            body.push(chunk)
        })
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString() //recibing text
            const userName = parsedBody.split('=')[1]
            console.log(userName)
            const userNameLi = `<li>${userName}</li>`
            fs.appendFile('listOfUsers.html', userNameLi, err => {
                res.statusCode = 302
                res.setHeader('Location', '/users')
                return res.end()
            })
        })
    }
    if (url === '/users'){

        fs.readFile('listOfUsers.html', function(err, data) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            res.write('</ol></body></html>')
            return res.end();
        })
    }
    // res.setHeader('Content-Type', 'text/html');
    // res.write('<html>')
    // res.write('<head><title>User List</title></head>')
    // res.write('<body><h1>User List</h1> <h4> </h4></body>')
    // res.write('</html>')
    // res.end()
}

module.exports = requestHandler;