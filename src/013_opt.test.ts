

var profile = function(fName: string, lName: string = 'Desconocido',
    age?: number, height?: number, weight?: number): string {
        console.log(`name: ${fName} ${lName} age: ${age} height: ${height} weight: ${weight}`)
        return '';
    }

test("013_opt", () => {
    profile('Juan', 'Nadie')
    profile('Juan', 'Nadie', 44)
    profile('Juan', 'Nadie', 44)
    profile('Pepe')


})