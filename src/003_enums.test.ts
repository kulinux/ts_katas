
test("003_enums", () => {
    console.log('starting 003');

    enum Color {Red, Green, Blue};
    enum ColorStr {Red = "Red", Green = "Green", Blue = "Blue"};

    var myColor: Color = Color.Green;

    console.log('myColor', myColor, myColor + 1);
    console.log('myColorStr', ColorStr.Red);


    expect(1).toBe(1);

})