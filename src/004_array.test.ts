
test("004_array", () => {
    console.log('starting 004');

    var list1: number[] = [1, 2, 3, 4];
    console.log(list1);

    var list2: Array<number> = [1, 2, 3, 4];
    console.log(list2);

    var list3: Array<any> = [1, '2', true];
    console.log(list3);

    var list4 = new Array(10);
    console.log(list4, 'list4=' + list4);

})