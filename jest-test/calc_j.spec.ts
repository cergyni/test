import { Calculator } from "../src/calc";
let calc: any;
describe("Tests for correct calculating", () => {
    beforeAll(() => { calc = new Calculator; })
    test("should sum correct jest", () => {
        expect(calc.inputValue('12+5')).toBeCloseTo(17);
        expect(calc.inputValue('0.8+1.3')).toBeCloseTo(2.1);
        expect(calc.inputValue('-15+-16')).toBeCloseTo(-31);
    });
    test("should minus correct", () => {
        expect(calc.inputValue('15-7')).toBeCloseTo(8);
        expect(calc.inputValue('0.15-0.12')).toBeCloseTo(0.03);
        expect(calc.inputValue('-15+-16')).toBeCloseTo(-31);
        expect(calc.inputValue('-17--18')).toBeCloseTo(1);
    });
    test("should multiply correct", () => {
        expect(calc.inputValue('12*5')).toBeCloseTo(60);
        expect(calc.inputValue('20*0.1')).toBeCloseTo(2);
        expect(calc.inputValue('-3*8')).toBeCloseTo(-24);
    });
    test("should divide correct", () => {
        expect(calc.inputValue('18/3')).toBeCloseTo(6);
        expect(calc.inputValue('2.4/6')).toBeCloseTo(0.40);
        expect(calc.inputValue('144/-12')).toBeCloseTo(-12);
    });
    test("Check invalid operator", () => {
        expect(calc.inputValue('18_3')).toStrictEqual(Error("Invalid operator"));
        expect(calc.inputValue('2.4%6')).toStrictEqual(Error("Invalid operator"));
        expect(calc.inputValue('144$12')).toStrictEqual(Error("Invalid operator"));
    });
    test("Check invalid VALUE", () => {
        expect(calc.inputValue('fff+3')).toStrictEqual(Error("Invalid value"));
        expect(calc.inputValue('5+aaa')).toStrictEqual(Error("Invalid value"));
        expect(calc.inputValue('fff-fff')).toStrictEqual(Error("Invalid value"));
    });

    afterAll(() => { calc = null; })
})