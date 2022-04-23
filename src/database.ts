import {Pool} from 'pg';
import dotenv from 'dotenv';

dotenv.config()
const {
    P_host,
    P_Database,
    P_port,
    P_Username,
    P_password,

} = process.env
const DBclient= new Pool(
    {
        
        host:P_host,
        database:P_Database,
        port:Number(P_port),//process.env.port,
        user: P_Username,
        
        
        password:P_password,
       
        
        
    }
    
)
console.log(P_password);
console.log(process.env.P_password);

export default DBclient