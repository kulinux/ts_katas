
test("002_vars", () => {
    console.log('starting 002');

    var variableA: boolean = true;
    var variableB: string = "3";
    var variableC: number = 4;

    var variableAA: any = "Bob";
    var variableBB: any = 5;
    var variableCC: any = true;

    console.log(variableA, variableB, variableC);
    console.log(variableAA, variableBB, variableCC);

    expect(1).toBe(1);

})