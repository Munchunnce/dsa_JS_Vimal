let data = [23, 12, 54, 32, 14, 24, 44];

for(let i = 0; i < data.length; i++){
    for(let j = 0; j < data.length - i - 1; j++){
        if(data[j] > data[j + 1]){
            let temp = data[j];
            data[j] = data[j + 1];
            data[j + 1] = temp;
        };
    };
};

console.log(data);