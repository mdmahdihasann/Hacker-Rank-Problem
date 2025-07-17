function getLetter(s) {
     let letter;
    let first =s[0];
     switch (true) {
        case ["a", 'e', 'i', 'o', 'u'].includes(first):
            letter="A";
        break;
        case ['b', 'c', 'd', 'f', 'g'].includes(first):
            letter="B";
        break;
        case ['h', 'j', 'k', 'l', 'm'].includes(first):
            letter="C";
        break;
        default:
            letter="D"
     }
     return letter;
}
console.log(getLetter('bdfgt'));
