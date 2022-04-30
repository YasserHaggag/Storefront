import {Pool} from 'pg';
import config from '../src/config'



const DBclient= new Pool(
    {
        
        host:config.host,
        database:config.database,
        port:Number(config.port),//process.env.port,
        user: config.user,
        
        
        password: config.password,

       
        
        
    }

    
    
)

console.log(process.env.P_password);



export default DBclient