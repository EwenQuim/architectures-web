const express = require('express');

const app = express();

app.get('/', (req, res) => {
	res.header('Content-Type', 'text/html');

	console.log('Request received on server:', req.query);

	res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>SSR</title>
			</head>
			<body>
				<nav>
					<a href="/">Home</a>
					<a href="/about">About</a>
				</nav>
				<h1>Server Side Rendering</h1>

				${req.query.name ? `<h2>Hello, ${req.query.name}</h2>` : ''}

				<p id="server-time">Server Time: ${new Date().toISOString()}</p>
				<p id="client-time">Client Time: </p>
				<script>
					document.getElementById('client-time').innerText += new Date().toISOString();
				</script>

				<form action="/" method="GET">
					<label for="name">Name:</label>
					<input type="text" id="name" name="name" />
					<button id="submit">Submit</button>
				</form>

			</body>
		</html>`);

	// replace line 29 by
	// <input type="text" id="name" name="name" value="${req.query.name || ''}">
	// if you want the website to "remember" the name.
	// SSR does not know any "state" of the client, because the HTTP protocol is stateless, so it will not remember the name.
	// The only way to remember the name is to send it back to the server, by storing it in the URL, the cookies, or a DB.
});

app.get('/about', (req, res) => {
	res.header('Content-Type', 'text/html');

	res.send(`
		<!DOCTYPE html>
		<html>
			<head>
				<title>About</title>
			</head>
			<body>
				<nav>
					<a href="/">Home</a>
					<a href="/about">About</a>
				</nav>
				<h1>About</h1>
				<p>This is the about page.</p>
			</body>
		</html>`);
});

app.listen(3000, () => {
	console.log('Server is listening on http://localhost:3000');
})
