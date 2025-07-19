function Rectangle(a, b) {
    let length= a;
    let width= b;
    return {
        length: length,
        width: width,
        perimeter: 2 * (length + width),
        area: length * width
    };
   
    
}
console.log(Rectangle(4, 5));

