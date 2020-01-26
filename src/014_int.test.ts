

interface pet {
    name: string;
    age: number;
    weight: number
}

test("014_int", () => {
    var pets: pet[] = [];

    pets.push(
        {
            name: 'Rey Leon',
            age: 44,
            weight: 66
        }
    );
    pets.push(
        {
            name: 'Rey Leon 2',
            age: 44,
            weight: 66
        },
        {
            name: 'Rey Leon 3',
            age: 44,
            weight: 66
        }
    );

    console.log('pets', pets);

    for(var p of pets) {
        console.log('uno', p);
    }

})