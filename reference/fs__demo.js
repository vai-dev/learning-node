const fs = require('fs')
const path = require('path')

// Create folder
// .mkdir:  it's asynchronous
// fs.mkdir(path.join(__dirname, '/test'), {}, err => {
//     if (err) throw err
//     console.log('Folder created...')
// })


// Create folder & Write to file
// fs.writeFile(path.join(__dirname, '/test', 'test.html'), 'Hello World', err => {
//     if (err) throw err
//     console.log('Folder and file are created!')
// })


// File appeded
// fs.appendFile(path.join(__dirname, '/test', 'test.html'), ' The text is been added', err => {
//     if (err) {
//         throw err
//     }
// })

// Read file
// fs.readFile(path.join(__dirname, '/test', 'test.html'), 'utf8', (err, data) => {
//     if (err) throw err
//     console.log(data)
// })

// renameFile
// fs.rename(
//     path.join(__dirname, '/test', 'test.html'),
//     path.join(__dirname, '/test', 'test2.html'),
//     err => {
//         if (err) throw err
//     }
// )