

test("021_callback", () => {

    var cons = function(str: string) {
        console.log(str);
    }

    function sum(a: number, b: number, cns: (nu: string) => void) {
        cns('res: ' + a + b)
    }

    sum(5, 6, cons);

})