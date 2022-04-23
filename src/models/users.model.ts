import DBclient from '../database'



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
             const sql = `INSERT INTO users (name,telephone,address,email,payment_method_id) Values($1,$2,$3,$4,$5) Returning
             id,name,telephone,address,email,payment_method_id`
             const result = (await conn).query(sql,[u.name,u.telephone,u.address,u.email,u.payment_method_id]);
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
             const sql = `update users set name=$2,telephone=$3,address=$4,email=$5,payment_method_id=$6 where id=($1) Returning
             id,name,telephone,address,email,payment_method_id `
             const result = (await conn).query(sql,[u.id,u.name,u.telephone,u.address,u.email,u.payment_method_id]);
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

}