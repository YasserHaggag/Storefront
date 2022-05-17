import { orders } from '../models/orders.model'
import app from '../server'
import supertest from 'supertest'
const request=supertest(app)
const orders_model=new orders()
describe('Test User Model',()=>
{
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
    it('create new user',async ()=>
    {
        const response=await request.post('/order').send({
    
            
                "user_id":7,
                "comments":"User comments in that area"
            
        });
        expect(response.body.status).toEqual('success')
        
    })

})