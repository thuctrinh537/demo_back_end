const app = require("./src/app");

const PORT = process.env.PORT || 3000

const sever = app.listen(PORT, () =>{
    console.log('Open server with', PORT )
})

// process.on('SIGINT', () => {
//     server.close(() => console.log( 'Exit' ))
// })