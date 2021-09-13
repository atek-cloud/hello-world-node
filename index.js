import http from 'http'

const SOCKETFILE = process.env.ATEK_ASSIGNED_SOCKET_FILE
http.createServer((req, res) => {
  res.writeHead(200).end('Hello, world!')
}).listen(SOCKETFILE, e => {
  console.log(`Hello World HTTP webserver running at:`, SOCKETFILE)
})