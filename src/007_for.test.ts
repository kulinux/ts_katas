

test("007_for", () => {
    var items = ['Juan', 'Pepe', 'Luis']

    for(let item in items) {
        console.log(item);
    }


    for(let item of items) {
        console.log(item);
    }

})