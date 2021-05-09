const path = require('path');
const fs = require('fs');

const p = path.join(path.dirname(process.mainModule.filename), 
'data', 
'books.json'
);
const getBooksFromFile = cb => {
    fs.readFile(p, (error, fileContent) => {
        if (error) {
            cb([]);
        } else {
            cb(JSON.parse(fileContent));
        }
    });
};

module.exports = class Book {
    constructor(data) {
        this.title = data.title;
        this.summary = data.summary;

    }

    save() {
        getBooksFromFile( books => {
            books.unshift(this);
            console.log(`saving ${this}`)
            fs.writeFile(p, JSON.stringify(books), error => console.log(error))
        })
    }
    static fetchAll(cb) {
        getBooksFromFile(cb);
    }
};

