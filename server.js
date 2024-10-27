// server.js
import app from './src/routes/app.js'

const PORT = 3000

app.listen(PORT, () => {
    console.log(`Example app listening on http://localhost:${PORT}`)
  })
  