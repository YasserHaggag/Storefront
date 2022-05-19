import express,{Request,Response} from 'express';

import { users } from './models/users.model';
import routes from './routes';
import errormid from './middlewares/error.middleware';
import validateTokenMiddleware from './middlewares/authentication.middleware';
import morgan from 'morgan';
import { authenticate } from './controllers/user.controllers';
const user=new users()
const app= express();
const port=3000;

app.use(express.json(),validateTokenMiddleware);

app.use('/api',routes)


app.listen(port,()=>
{
    console.log(`Server started at localhost: ${port}`)
})
app.use(morgan('common'))

app.use(errormid)
export default app