'use strict';

const http = require('http');
const server = http.createServer((req, res) => {
  const now = Date.now();
  res.setHeader('Set-Cookie', 'last_access=' + now + ';expires=Mon, 07 Jan 2036 00:00:00 GMT;');
  const lastAccessTime = req.headers.cookie
    ? parseInt(req.headers.cookie.split('last_access=')[1]) // できたとき (true)
    : now; // できないとき（false)
  res.end(new Date(lastAccessTime).toString());
});
const port = 8000;
server.listen(port, () => {
  console.info('Listening on ' + port);
})
