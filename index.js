const server = require('./api/server')
const PORT = process.env.port || 5000

server.listen(PORT, () => {
	console.log(`Server is hereby listening I denounce on port ${PORT}`)
})
