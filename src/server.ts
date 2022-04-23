import express,{Request,Response} from 'express';
import bodyParser from 'body-parser';
import { users } from './models/users.model';
import routes from './routes';
import errormid from './middlewares/error.middleware';
const user=new users()
const app= express();
const port=3000;

app.use(express.json());

app.use('/api',routes)
app.get('/api',  async function(req:Request,res:Response)
{//res.send('hello');
    const resu=  await user.getall();
 
 res.send(resu)

});

app.listen(port,()=>
{
    console.log(`Server started at localhost: ${port}`)
})


app.use(errormid)
