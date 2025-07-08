const data = [43, 12, 32, 22, 31, 55, 23];
searchItem = 32;
let index;

for(let i = 0; i <= data.length - 1; i++){
    if(data[i] === searchItem){
        index = i;
    }
}

console.log(index);