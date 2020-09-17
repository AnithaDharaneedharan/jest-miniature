
const {sum, subtract} = require('./math.js')

let result;

test("should add", async () => {
   result = await sum(3, 7);
   expect(result).toBe(10);
   
});

test("should subtract", async () => {
   result = await subtract(9, 7);
   expect(result).toBe(2);
});
