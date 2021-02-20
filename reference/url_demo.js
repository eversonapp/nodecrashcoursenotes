const url = require('url')

const myUrl = new URL('http://www.mywebsite.com/hello.html?id=100&status=active')

//Serialized URL
console.log(myUrl.href);

//Host (root domain)
console.log(myUrl.host);

//Hostname (does not get port)
console.log(myUrl.hostname);

//Path name
console.log(myUrl.pathname);

//Serialized query
console.log(myUrl.search);

//Params object
console.log(myUrl.searchParams);

//Add Params
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams);

//Loop through Params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))