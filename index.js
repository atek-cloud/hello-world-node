import http from 'http'

const SOCKETFILE = process.env.ATEK_ASSIGNED_SOCKET_FILE
http.createServer((req, res) => {
  if (req.url === '/test') {
    return res.writeHead(200, {'Content-Type': 'text/html'}).end(`<!doctype html><h1>Yes it work</h1>`)
  }
  res.writeHead(200, {'Content-Type': 'text/html'}).end(`<!doctype html>
<html>
  <head><title>Hello, world!</title></head>
  <body style="background: #fafafa; font-family: sans-serif">
    <div style="background: #fff; max-width: 800px; margin: 2rem auto; border: 1px solid #e5e7eb; border-radius: 0.25rem; padding: 0 1.5rem 1rem;">
      <h1>Hello, Atek world!</h1>
      <p>This is an example application.</p>
      <p>If you'd like to learn more, <a href="https://atek.cloud/docs/manual/index" target="_blank">check out the docs</a>.</p>
    </div>
  </body>
</html>
`)
}).listen(SOCKETFILE, e => {
  console.log(`Hello World HTTP webserver running at:`, SOCKETFILE)
})