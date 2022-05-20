import { orders } from '../models/orders.model'
import app from '../server'
import supertest from 'supertest'
const request=supertest(app)
const orders_model=new orders()
let accessToken:string 
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
        expect(orders_model.getall).toBeDefined();

    })

    it('index method should return a list of orders',async ()=>
    {
        const result = await orders_model.getall();
        expect(result).toEqual([])

    })
    it('index method should return a list of orders', ()=>
    {
        
        expect(orders_model.create).toBeDefined()

    })
    it('create new order',async ()=>
    {
        const response=await request.post('/api/order').set("Authorization", "Bearer " + accessToken).send({
    
            
                "user_id":7,
                "comments":"User comments in that area"
            
        });
        expect(response.body.status).toEqual('success')
        
    })

})