import { arrChetNechet } from "./11.2.1.js" ;

describe('test schetchik', () => {
    it ('schet elementov massiva', ()=>{
        expect(arrChetNechet([1, 2, 3, "kj", 0])).toBe("Количество нулевых элементов в массиве - 1, количество четных элементов - 1, количество четных элементов - 2.");
    })
});