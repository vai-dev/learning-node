const URL = require('url')
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')


// Serialized URL
console.log(myUrl.href)
console.log(myUrl.host)
console.log(myUrl.hostname)