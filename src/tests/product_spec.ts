import { products } from '../models/products.model'
import app from '../server'
import supertest from 'supertest'
const request=supertest(app)
const products_model=new products()
let accessToken: string
describe('Test User Model',()=>
{
    beforeAll(async () => {
        const res = (await request.post("/api/user/authenticate").send({
            
            "email":"yasser@gmail.test",
            "password":"Yasser@Admin123"
        }));
      console.log(res.body.data.token)
         accessToken = res.body.data.token;
      });
    it('should have index method',()=>
    {
        expect(products_model.getall).toBeDefined();

    })

    it('index method should return a list of orders',async ()=>
    {
        const result = await products_model.getall();
        expect(result.length).toBeGreaterThan(1)

    })
    it('index method should return a list of orders', ()=>
    {
        
        expect(products_model.create).toBeDefined()

    })
    it('create new Product',async ()=>
    {
        const response=await request.post('/api/product').set("Authorization", "Bearer " + accessToken).send({
            "pname":"Pepsi",
            "price":1,
            "pdescription":"streeeeet 2222"
        });
        expect(response.body.status).toEqual('success')
        
    })

})