
function add(a: number, b: number): number {
    return a + b;
}

var add2 = function(a: number, b: number): number {
    return a + b;
}

var add3 = (a: number, b: number): number => a + b;

var add4 = (a: number, b: number) => a + b;


test("012_func", () => {

    console.log('add', add(2, 3));
    console.log('add2', add2(2, 3));
    console.log('add3', add3(2, 3));
    console.log('add4', add4(2, 3));

})