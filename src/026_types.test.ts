
interface First {
    first: string
}

interface Second {
    second: string
}

type MyPerson = First & Second;

test("026_types", () => {

    var myP: MyPerson = {first: 'John', second: 'Doe'}


})