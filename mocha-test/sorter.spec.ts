import assert from "assert";
import { Calculator } from "../src/calc";

let calc: any;
describe("Tests for correct calculating", () => {
    before(() => { calc = new Calculator; })
    it("should sum correct", () => {
        assert.deepEqual(calc.inputValue('12+5'), 17);
        assert.deepEqual(calc.inputValue('0.8+1.3'), 2.1);
        assert.deepEqual(calc.inputValue('-15+-16'), -31);
    });
    it("should minus correct", () => {
        assert.deepEqual(calc.inputValue('15-7'), 8);
        assert.deepEqual(calc.inputValue('0.15-0.12'), 0.03);
        assert.deepEqual(calc.inputValue('-15+-16'), -31);
        assert.deepEqual(calc.inputValue('-17--18'), 1);
    });
    it("should multiply correct", () => {
        assert.deepEqual(calc.inputValue('12*5'), 60);
        assert.deepEqual(calc.inputValue('20*0.1'), 2);
        assert.deepEqual(calc.inputValue('-3*8'), -24);
    });
    it("should divide correct", () => {
        assert.deepEqual(calc.inputValue('18/3'), 6);
        assert.deepEqual(calc.inputValue('2.4/6'), 0.4);
        assert.deepEqual(calc.inputValue('144/-12'), -12);
    });
    it("Check invalid operator", () => {
        assert.deepEqual(calc.inputValue('18_3'), Error("Invalid operator"));
        assert.deepEqual(calc.inputValue('2.4%6'), Error("Invalid operator"));
        assert.deepEqual(calc.inputValue('144$12'), Error("Invalid operator"));
    });
    it("Check invalid VALUE", () => {
        assert.deepEqual(calc.inputValue('fff+3'), Error("Invalid value"));
        assert.deepEqual(calc.inputValue('5+aaa'), Error("Invalid value"));
        assert.deepEqual(calc.inputValue('fff-fff'), Error("Invalid value"));
    });

    after(() => { calc = null; })
})