const data1 = [21, 12, 23, 22, 44, 55];
const data2 = [4, 41, 34, 55, 16];
const data3 = [];

for(let i = 0; i <= data1.length; i++){
    data3[i] = data1[i];
}

for(let i = 0; i <= data2.length; i++){
    data3[data2[i].length + i] = data2[i];
}
console.log(data3);