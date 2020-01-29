
interface person {
    fn: string;
    ln: string;
    [key: string]: string | number;

}


test("024_interfaces", () => {

    let p: person = {fn: 'John', ln: 'Doe', age: 24}
    console.log( p );

    let p2 = {fn: 'Joe'} as person;

    console.log( p2 );
})