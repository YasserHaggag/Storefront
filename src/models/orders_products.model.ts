import DBclient from "../database";

export type order_products=
{
    id?:string,
    product_id:string,
    order_id:string,
    quantity: number

}
export class orders_products
{
    async getall():Promise<order_products[]>
    {
        try {
            //Open connection with database
            const conn=DBclient.connect()
            //select data from database
            const sql = 'select * from orders_products'
            const result = (await conn).query(sql);
            //close the connection
            (await conn).release
            //return the result
            return  (await result).rows
            
        } catch (error) {
            throw new Error(`An error occurred ${error}`);
            
        }

    }

    async create(op:order_products):Promise<order_products>
    {
        try {
             //Open connection with database
             const conn=DBclient.connect()
             //select data from database
             const sql = `INSERT INTO orders (order_id,product_id,quantity) Values($1,$2,$3) Returning
             order_id,product_id,quantity,id`
             const result = (await conn).query(sql,[op.order_id,op.product_id,op.quantity]);
             //close the connection
             (await conn).release
             //return the result
             return  (await result).rows[0]

            
        } catch (error) {
            throw new Error(`An error occurred ${error}`)
            
        }
        
    }

    async getone(id:string):Promise<order_products>
    {
        try {
             //Open connection with database
             const conn=DBclient.connect()
             //select data from database
             const sql = `select * from orders_products where id=($1)`
             const result = (await conn).query(sql,[id]);
             //close the connection
             (await conn).release
             //return the result
             return  (await result).rows[0]

            
        } catch (error) {
            throw new Error(`An error occurred ${error}`)
            
        }
        
    }

    async updateRecord(op:order_products):Promise<order_products>
    {
        try {
             //Open connection with database
             const conn=DBclient.connect()
             //select data from database
             const sql = `UPDATE orders_products set order_id=$1,product_id=$2,quantity=$3 where id=($4) Returning 
             id,product_id,order_id,quantity,comments`
             const result = (await conn).query(sql,[op.order_id,op.product_id,op.quantity]);
             //close the connection
             (await conn).release
             //return the result
             return  (await result).rows[0]

            
        } catch (error) {
            throw new Error(`An error occurred ${error}`)
            
        }
        
    }
    async deleteone(id:string):Promise<order_products>
    {
        try {
             //Open connection with database
             const conn=DBclient.connect()
             //select data from database
             const sql = `Delete from orders_products where order_id=($1)`
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

