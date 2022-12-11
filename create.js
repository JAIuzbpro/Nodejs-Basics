const fs = require('fs');
const path = require('path');

fs.writeFile('fresh.txt', 'I am fresh and young', (err) => {
    if (err) {
        if (err.code === 'EXIST');{
            console.error('FS operation failed');
            return;
        }

        throw err;
    }

    console.log('I am fresh and young');
    
});
