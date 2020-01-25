
test("005_scope", () => {
    console.log('starting 004');

    var myVar = "var";
    const myConst = "const";
    let myLet = "let";

    if(true) {
        var myVar = "varInside";
        const myConst = "constInside";
        let myLet = "letInside";
    }

    console.log('var=' + myVar,
    " myLet=" + myLet,
    " myConst=" + myConst);


})