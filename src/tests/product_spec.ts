import { products } from '../models/products.model'
import app from '../server'
import supertest from 'supertest'
const request=supertest(app)
const products_model=new products()
describe('Test User Model',()=>
{
    it('should have index method',()=>
    {
        expect(products_model.getall).toBeDefined();

    })

    it('index method should return a list of orders',async ()=>
    {
        const result = await products_model.getall();
        expect(result).toEqual([])

    })
    it('index method should return a list of orders', ()=>
    {
        
        expect(products_model.create).toBeDefined()

    })
    it('create new user',async ()=>
    {
        const response=await request.post('/product').send({
            "pname":"Pepsi",
            "price":1,
            "pdescription":"streeeeet 2222"
        });
        expect(response.body.status).toEqual('success')
        
    })

})