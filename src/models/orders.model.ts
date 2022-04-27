import DBclient from "../database";

export type order=
{
    id?:string,
    user_id:string,
    comments:string

}
export class orders
{
    async getall():Promise<orders[]>
    {
        try {
            //Open connection with database
            const conn=DBclient.connect()
            //select data from database
            const sql = 'select * from orders'
            const result = (await conn).query(sql);
            //close the connection
            (await conn).release
            //return the result
            return  (await result).rows
            
        } catch (error) {
            throw new Error(`An error occurred ${error}`);
            
        }

    }

    async create(o:order):Promise<order>
    {
        try {
             //Open connection with database
             const conn=DBclient.connect()
             //select data from database
             const sql = `INSERT INTO orders (user_id,comments) Values($1,$2) Returning
             user_id,comments,id`
             const result = (await conn).query(sql,[o.user_id,o.comments]);
             //close the connection
             (await conn).release
             //return the result
             return  (await result).rows[0]

            
        } catch (error) {
            throw new Error(`An error occurred ${error}`)
            
        }
        
    }

    async getone(id:string):Promise<order>
    {
        try {
             //Open connection with database
             const conn=DBclient.connect()
             //select data from database
             const sql = `select * from orders where id=($1)`
             const result = (await conn).query(sql,[id]);
             //close the connection
             (await conn).release
             //return the result
             return  (await result).rows[0]

            
        } catch (error) {
            throw new Error(`An error occurred ${error}`)
            
        }
        
    }

    async updateproduct(o:order):Promise<order>
    {
        try {
             //Open connection with database
             const conn=DBclient.connect()
             //select data from database
             const sql = `UPDATE orders set user_id=$1,comments=$2 where id=($3) Returning 
             id,user_id,comments`
             const result = (await conn).query(sql,[o.user_id,o.comments,o.id]);
             //close the connection
             (await conn).release
             //return the result
             return  (await result).rows[0]

            
        } catch (error) {
            throw new Error(`An error occurred ${error}`)
            
        }
        
    }
    async deleteone(id:string):Promise<order>
    {
        try {
             //Open connection with database
             const conn=DBclient.connect()
             //select data from database
             const sql = `Delete from orders where id=($1)`
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

