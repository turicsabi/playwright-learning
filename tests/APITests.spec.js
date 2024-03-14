import{expect, test} from '@playwright/test';
let userId;

test('Get users', async ({request})=>{
    const response = await request.get('https://reqres.in/api/users?page=2');
    console.log(await response.json());
    expect(response.status()).toBe(200);
   
})


test('Create users', async ({request})=>{
    const response = await request.post('https://reqres.in/api/users', 
    {
        data:{"name":'morpheus', "job":'leader'}
    }, 
    {
        headers:{"Accept":'application/json'}
    });
   
    console.log(await response.json());
    expect(response.status()).toBe(201);
    let responseBody = await response.json();
    userId=responseBody.id;
    console.log(userId);
})

test('Update users', async ({request})=>{
    const response = await request.put('https://reqres.in/api/users/'+userId, 
    {
        data:{"name":'morpheus', "job":'engineer'}
    }, 
    {
        headers:{"Accept":'application/json'}
    });
   
    console.log(await response.json());
    expect(response.status()).toBe(200);

})

test('Delete users', async ({request})=>{
    const response = await request.delete('https://reqres.in/api/users/'+userId); 
   
    expect(response.status()).toBe(204);

})