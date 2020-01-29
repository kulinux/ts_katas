
class Person {
    private _fn: string;
    ln: string;

    constructor(fn: string, ln: string) {
        this._fn = fn;
        this.ln = ln;
    }

    get fn(): string {
        return this._fn;
    }

    set fn(nn: string) {
        this._fn = nn.toUpperCase();
    }

    fullName(): string {
        return `${this.fn} ${this.ln}`
    }
}

test("023_class", () => {

    let p = new Person('John', 'Doe');

    p.fn = 'Cambiado';

    console.log( p.fullName() );

})