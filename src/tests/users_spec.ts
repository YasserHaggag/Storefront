import {user,users} from '../models/users.model'
import app from '../server'
import supertest from 'supertest'
const request=supertest(app)
const users_model=new users()
describe('Test User Model',()=>
{
    it('should have index method',()=>
    {
        expect(users_model.getall).toBeDefined();

    })

    it('index method should return a list of users',async ()=>
    {
        const result = await users_model.getall();
        expect(result).toEqual([])

    })
    it('index method should return a list of users', ()=>
    {
        
        expect(users_model.create).toBeDefined()

    })
    it('create new user',async ()=>
    {
        const response=await request.post('/user').send({
    
            "name":"Ali",
            "telephone":1005464562,
            "address":"streeeeet 2222",
            "email":"yasser@gmail.test",
            "payment_method_id":1,
            "password":"Yasser@Admin123"
        });
        expect(response.body.status).toEqual('success')
        
    })

})