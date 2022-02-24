import express from 'express';
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const data = [
    {name: 'Andrea', age: 25},
    {name: 'Carlos', age: 10},
    {name: 'Marcos', age: 45}
]

app.get('/', (req, res)=> {
    res.send(data)
})

app.post('/', (req, res)=> {
    const newData = req.body
    console.log(newData)
    data.push(newData)
    res.send(data)
})

app.listen(8000, ()=>{
    console.log('server on')
})