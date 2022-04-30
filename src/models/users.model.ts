import DBclient from '../database'
import config from '../config'
import bcrypt from 'bcrypt'

const hash=(password:string)=>
{
    const salt=parseInt(config.salt as string,10);
    return bcrypt.hashSync(`${password}${config.pepper}`,salt)
}

export type user=
{
    id?:Number;
    name:string;
    telephone:Number;
    address:string;
    email:string;
    payment_method_id:Number;
    password:string;



}
export class users
{
    async getall():Promise<user[]>
    {
        try {
            //Open connection with database
            const conn=DBclient.connect()
            //select data from database
            const sql = 'select id,name,telephone,address,email,payment_method_id from users'
            const result = (await conn).query(sql);
            //close the connection
            (await conn).release
            //return the result
            return  (await result).rows
            
        } catch (error) {
            throw new Error(`An error occurred ${error}`);
            
        }

    }

    async create(u:user):Promise<user>
    {
        try {
             //Open connection with database
             const conn=DBclient.connect()
             //select data from database
             const sql = `INSERT INTO users (name,telephone,address,email,payment_method_id,password) Values($1,$2,$3,$4,$5,$6) Returning
             id,name,telephone,address,email,payment_method_id`
           
             const result = (await conn).query(sql,[u.name,u.telephone,u.address,u.email,u.payment_method_id,hash(u.password)]);
             //close the connection
             (await conn).release
             //return the result
             return  (await result).rows[0]

            
        } catch (error) {
            throw new Error(`An error occurred ${error}`)
            
        }
        
    }

    async getone(id:string):Promise<user>
    {
        try {
             //Open connection with database
             const conn=DBclient.connect()
             //select data from database
             const sql = `select id,name,telephone,address,email,payment_method_id from users where id=($1)`
             const result = (await conn).query(sql,[id]);
             //close the connection
             (await conn).release
             //return the result
             return  (await result).rows[0]

            
        } catch (error) {
            throw new Error(`An error occurred ${error}`)
            
        }
        
    }

    async updateuser(u:user):Promise<user>
    {
        try {
             //Open connection with database
             const conn=DBclient.connect()
             //select data from database
             const sql = `update users set name=$2,telephone=$3,address=$4,email=$5,payment_method_id=$6,password=$7 where id=($1) Returning
             id,name,telephone,address,email,payment_method_id `
             const result = (await conn).query(sql,[u.id,u.name,u.telephone,u.address,u.email,u.payment_method_id,hash(u.password)]);
             //close the connection
             (await conn).release
             //return the result
             return  (await result).rows[0]

            
        } catch (error) {
            throw new Error(`An error occurred ${error}`)
            
        }
        
    }
    async deleteone(id:string):Promise<user>
    {
        try {
             //Open connection with database
             const conn=DBclient.connect()
             //select data from database
             const sql = `delete from users where id=($1)`
             const result = (await conn).query(sql,[id]);
             //close the connection
             (await conn).release
             //return the result
             return  (await result).rows[0]

            
        } catch (error) {
            throw new Error(`An error occurred ${error}`)
            
        }
        
    }

    async authentication(email:string,password:string):Promise<user|null>
    {
        try {
            const connection=await DBclient.connect();
            const sql='select password from users where email=$1'
            const result= await connection.query(sql,[email]);
            console.log(result.rows.length)
            if(result.rows.length)
            {
                console.log(password)
                const {password: hash}=result.rows[0];
                console.log(hash)
                const isPasswordValid=bcrypt.compareSync(`${password}${config.pepper}`,hash);
                console.log(isPasswordValid)
                if(isPasswordValid)
                {
                    const userInfo= await connection.query('select id,name,telephone,address,email,payment_method_id from users where email=($1)',[email]);
                    console.log(userInfo.rows[0])
                    return userInfo.rows[0]
                    
                }
            }
            connection.release();
            return null;
            
        } catch (error) {
            throw new Error("");
            
            

        }
    }

}