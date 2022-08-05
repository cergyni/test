export class Calculator {
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() { }

    public inputValue(str: string) {
        const pasValue = this.parser(str);
        let first: any;
        let operation: any;
        let second: any;
        if (typeof (pasValue) == 'string') {
            return Error("Invalid operator");
        } else {
            [first, operation, second] = pasValue;
        }
        if (!(isNaN(first) || isNaN(second))) {
            switch (operation) {
                case '+':
                    if (operation == '+') {
                        return this.sum(first, second)
                    }
                    break;
                case '-':
                    if (operation == '-') {
                        return this.minus(first, second)
                    }
                    break;
                case '*':
                    if (operation == '*') {
                        return this.multiply(first, second)
                    }
                    break;
                case '/':
                    if (operation == '/') {
                        return this.divide(first, second)
                    }
                    break;
            }
        } else {
            return Error("Invalid value");
        }

    }
    public parser(str: string) {
        str = str.trim();
        const arrSymb = ['+', '*', '/', '-'];
        let positionOfSymbol = -1;
        for (let i = 0; i < arrSymb.length; i++) {
            const indexOfSymb = str.indexOf(arrSymb[i], 1);
            if (indexOfSymb > 0) {
                positionOfSymbol = indexOfSymb;
                break;
            }
        }

        return positionOfSymbol !== -1 ? [Number(str.slice(0, positionOfSymbol)), str.slice(positionOfSymbol, positionOfSymbol + 1), Number(str.slice(positionOfSymbol + 1))] : 'Error symbol'
    }
    public sum(first: number, second: number) {
        return (first + second).toFixed(2)
    }
    public minus(first: number, second: number) {
        return (first - second).toFixed(2)
    }
    public multiply(first: number, second: number) {
        return (first * second).toFixed(2)
    }
    public divide(first: number, second: number) {
        return (first / second).toFixed(2)
    }
}

