const request = require('supertest')
const expect = require('expect')
const {app} = require('../server')

it('should return hello',(done)=>{
    request(app)
    .get('/')
    .expect(200)
    .expect({name:"navjot"})
    // .expect((res)=>{
    //     expect(res.body).toInclude({
    //         name:"navjot"
    //     })
    // })
    .end(done)
})
