const url = require('url');

const myUrl = new URL('http:mywebsite.com:8000/hello.html?id=500&status=active');

// Serialized Url
console.log(myUrl.href)
console.log(myUrl.toString())

// Host(root domain)
console.log(myUrl.host)
console.log(myUrl.hostname)

// Pathname
console.log(myUrl.pathname)

// Serializzed Query
console.log(myUrl.search)

// Params Object
console.log(myUrl.searchParams)

// Add Param
myUrl.searchParams.append('abc','123')
console.log(myUrl.searchParams)

// Loop Through params
myUrl.searchParams.forEach((value,name) => console.log(name + ' : ' +value));