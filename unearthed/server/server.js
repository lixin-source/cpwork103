import express from 'express'
import giftsRouter from './routes/gifts.js'

const app = express()

// Middleware function used to handle static files in public directory
app.use('/public', express.static('./public'))
app.use('/scripts', express.static('./public/scripts'))
app.use('/gifts', giftsRouter)

// route for server
// status 200 = successful response
app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
  })

//  the server will first check to see if there is a PORT environment variable and use the 3001 port otherwise
  const PORT = process.env.PORT || 3001
    
  app.listen(PORT, () => {
    console.log(`🚀 Server listening on http://localhost:${PORT}`)
  })

