function doanso() {
    let number1 = prompt('nhap so trong khoang');
    let number2 = prompt('nhap so ban doan');
    let number_random = Math.floor(Math.random()*number1);
    console.log(number_random);
    let count = 0;
    while (number2 !== number_random) {
        count++;
        if(count ==4 ) {
            alert('het so lan doan')
        }else if(number2<number_random) {
            alert('so ban doan nho hon')
        }else {
            alert('so ban doan lon hon')
        }
        number2 = prompt('nhap so ban doan');
    }
    if(count==4) {
        document.write('ban het so lan doan')
    }else {
        document.write('ban da doan dung')
    }
}