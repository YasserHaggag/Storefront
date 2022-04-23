import DBclient from "../database";

export type product=
{
    id:string,
    pname:string,
    price:number,
    pdescription:string,
    order_id:string

}
export class products
{
    async getall():Promise<products[]>
    {
        try {
            //Open connection with database
            const conn=DBclient.connect()
            //select data from database
            const sql = 'select * from products'
            const result = (await conn).query(sql);
            //close the connection
            (await conn).release
            //return the result
            return  (await result).rows
            
        } catch (error) {
            throw new Error(`An error occurred ${error}`);
            
        }

    }

    async create(p:product):Promise<product>
    {
        try {
             //Open connection with database
             const conn=DBclient.connect()
             //select data from database
             const sql = `INSERT INTO products (pname,price,pdescription,orderid) Values($1,$2,$3,$4) Returning
             id,pname,price,pdescription,orderid`
             const result = (await conn).query(sql,[p.id,p.order_id,p.pdescription,p.pname,p.price]);
             //close the connection
             (await conn).release
             //return the result
             return  (await result).rows[0]

            
        } catch (error) {
            throw new Error(`An error occurred ${error}`)
            
        }
        
    }

    async getone(id:string):Promise<product>
    {
        try {
             //Open connection with database
             const conn=DBclient.connect()
             //select data from database
             const sql = `select * from products where id=($1)`
             const result = (await conn).query(sql,[id]);
             //close the connection
             (await conn).release
             //return the result
             return  (await result).rows[0]

            
        } catch (error) {
            throw new Error(`An error occurred ${error}`)
            
        }
        
    }

    async updateproduct(p:product):Promise<product>
    {
        try {
             //Open connection with database
             const conn=DBclient.connect()
             //select data from database
             const sql = `update products set pname=$1,pdescription=$2,price=$3,orderid=$4 where id=($5)`
             const result = (await conn).query(sql,[p.pname,p.pdescription,p.price,p.order_id,p.id]);
             //close the connection
             (await conn).release
             //return the result
             return  (await result).rows[0]

            
        } catch (error) {
            throw new Error(`An error occurred ${error}`)
            
        }
        
    }
    async deleteone(id:string):Promise<product>
    {
        try {
             //Open connection with database
             const conn=DBclient.connect()
             //select data from database
             const sql = `select * from users where id=($1)`
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

