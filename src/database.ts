import {Pool} from 'pg';
import config from '../src/config'

let DBclient!:Pool

if(config.ENV==='dev')
{
    DBclient= new Pool(
    {
        
        host:config.host,
        database:config.database,
        port:Number(config.port),//process.env.port,
        user: config.user,
        
        
        password: config.password,

       
        
        
    }

    
    
)
}
if(config.ENV==='test')
{
     DBclient= new Pool(
    {
        
        host:config.host,
        database:config.testDB,
        port:Number(config.port),//process.env.port,
        user: config.testuser,
        
        
        password: config.password,

       
        
        
    }

    
    
)
}


console.log(process.env.P_password);



export default DBclient