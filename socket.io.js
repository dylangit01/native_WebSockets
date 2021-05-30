const http = require('http');

const server = http.createServer((req, res) => {
	res.end('I am connected');
});

// Handle cors
const io = require('socket.io')(server, {
	cors: {
		origin: '*',
		methods: ['GET', 'POST'],
	},
});

io.on('connection', (socket, req) => {
	socket.emit('welcome', 'Welcome to the websocket server!!!');
	socket.on('message', (msg) => {
		console.log(msg);
	});
});

server.listen(4000);
