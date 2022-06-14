let number = prompt('nhap nhiet do');
while (number<20 || number>100) {
    if(number<20) {
        alert('tang nhiet do')
    }else {
        alert('giam nhiet do');
    }
    number= prompt('nhap nhiet do');
}