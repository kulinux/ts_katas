
function showT(a: any) {
    if(typeof a === 'object') {
        console.log('number[]')
    }
    if(typeof a === 'number') {
        console.log('number')
    }
}

test("006_union", () => {
    console.log('starting 006');

    var myUni: string | number;

    myUni = 3;

    console.log('set number', typeof myUni);

    myUni = '3';

    console.log('set string', typeof myUni);

    //compile error
    //myUni = true;

    var oneOrMore: number | number[];

    oneOrMore = 3;
    showT(oneOrMore);


    oneOrMore = [3];
    showT(oneOrMore);


})