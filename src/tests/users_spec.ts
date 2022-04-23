import {user,users} from '../models/users.model'
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

})