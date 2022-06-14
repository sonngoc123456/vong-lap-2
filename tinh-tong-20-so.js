function inso() {
    i = 0
    a = 0;
    b = 1;
    let sum = a + b;
    let temp = sum
    while (i < 20) {
        document.write(a + " ")
        sum = a + b;
        a = b;
        b = sum;
        temp += sum
        i++
    }
    document.write('<br>')
    document.write(sum)
}
inso()