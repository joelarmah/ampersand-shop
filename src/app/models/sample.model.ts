export class Sample {
    private _foo: number;
    private _bar: string;

    get foo(): number {
        return this.foo;
    }

    set foo(newFoo: number) {
        this._foo = newFoo;
    }

    constructor(foo: number, bar: string) {
        this._foo = foo;
        this._bar = bar;
    }
}
