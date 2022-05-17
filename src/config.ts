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
    TOKEN_SECRET,
    ENV,
    Test_Database,
    Test_username,

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
    tokensecret:TOKEN_SECRET,
    testDB: Test_Database,
    testuser: Test_username,
    ENV: ENV

}