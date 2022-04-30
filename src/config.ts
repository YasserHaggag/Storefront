import dotenv from 'dotenv';
import { defaults } from 'pg';

dotenv.config()
const {
    P_host,
    P_Database,
    P_port,
    P_Username,
    P_password,
    BCRYPT_PASSWORD,
    SALT_ROUNDS,
    

} = process.env


export default
{
    port:P_port,
    host:P_host,
    user:P_Username,
    database:P_Database,
    password:P_password,
    pepper:BCRYPT_PASSWORD,
    salt:SALT_ROUNDS,

}