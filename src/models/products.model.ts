import DBclient from "../database";

export type product=
{
    id?:string,
    pname:string,
    price:number,
    pdescription:string

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
             const sql = `INSERT INTO products (pname,price,pdescription) Values($1,$2,$3) Returning
             pname,price,pdescription,id`
             const result = (await conn).query(sql,[p.pname,p.price,p.pdescription]);
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
             const sql = `UPDATE products set pname=$1,price=$2,pdescription=$3 where id=($4) Returning 
             id,pname,price,pdescription`
             const result = (await conn).query(sql,[p.pname,p.price,p.pdescription,p.id]);
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
             const sql = `Delete from products where id=($1)`
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

