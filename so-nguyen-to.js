function checkNT() {
    let number = parseInt(prompt("Nhập so: "));
    let count = 0;
    let countSNT = 0;
    for (let i = 2; i < 1000; i++) {
        if (countSNT < number) {
            for (let j = 1; j <= i; j++) {
                if (i % j == 0) {
                    count += 1;
                }
            }
            if (count == 2) {
                document.write(i + "<br>"); //4
                countSNT += 1; //1
            }
            count = 0;
        } else {
            break;
        }
    }
}