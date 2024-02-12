import express from 'express'
import cors from 'cors'
const app = express();

app.use(express.json());
app.use(cors());


app.get('/', async (request, response) => {
    response.status(200).send('hello')
})

app.listen(8080, () => {
    console.log('app is listening to post 8080')
})