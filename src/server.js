import express from 'express'
import profileRouter from './routers/profileRouter.js'
import productRouter from './routers/productRouter.js'
import supplierRouter from './routers/supplierRouter.js'
import carRouter from './routers/carRouter.js'

const app = express()
const port = 3000

app.use(express.json())//Converter oJSON que chegou na requisição em um objeto js e vai salvar


app.use('/profile', profileRouter) 

app.use('/profile', productRouter) 

app.use('/profile', supplierRouter) 

app.use('/profile', carRouter) 

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`)
} );