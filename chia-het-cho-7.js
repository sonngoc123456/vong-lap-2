let i =0;
let count = 0;
let sum = 0;
while(count<10) {
    if(i % 7 ==0){
        document.write(i + ' ')
        count++;
        sum +=i;
    }
    i++;
}
document.write('<br>')
document.write(sum)