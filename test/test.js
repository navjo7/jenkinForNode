const utils = require('../utils/utils')
it("should sum two numbers", () => {
    const result = utils.add(1, 2)
    if(result!=3){
        throw new Error(`incorrect result, expected: 3 but got ${result}`)
    }
})