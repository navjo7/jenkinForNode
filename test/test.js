const utils = require('../utils/utils')
const expect  = require('expect')
it("should sum two numbers", () => {
    const result = utils.add(1, 2)
    expect(result).toBe(3)
    // if(result!=3){
    //     throw new Error(`incorrect result, expected: 3 but got ${result}`)
    // }
})

it("testing async function result",(done)=>{
    utils.asyncAdd(1,2,(sum)=>{
        expect(sum).toBe(3)
        done()
    })
})