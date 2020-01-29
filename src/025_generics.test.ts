function identity<T>(arg: T): T {
    return arg;
}

let identity2: <T>(arg: T) => T = identity;

interface HasLength {
    length: number;
}

function getLength<T extends HasLength>(arg: T) {
    return arg.length;
}


test("025_generics", () => {

    identity(44);
    identity2("44");

    getLength("44");
    getLength({length: 44});

})