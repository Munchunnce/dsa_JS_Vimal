const insertData = () => {
    const data = [23, 43, 21, 45, 65];
    const position = parseInt(document.querySelector('#position').value);
    const newElement = parseInt(document.querySelector('#newElement').value);

    const beforeDiv = document.querySelector('#before'); // Div for before insertion
    const outputDiv = document.querySelector('#output'); // Div for after insertion

    console.log('Before insertion:', data);

    // Show the array before insertion
    beforeDiv.innerHTML = `Before Insertion: [${data.join(', ')}]`;

    // Check if the input position is valid
    if (isNaN(position) || position < 0 || position > data.length) {
        alert('Please enter a valid position (0 to ' + data.length + ')!');
        return;
    }

    // Insert the new element at the specified position
    for (let i = data.length - 1; i >= 0; i--) {
        if (i >= position) {
            data[i + 1] = data[i];
            if (i === position) {
                data[i] = newElement;
            }
        }
    }

    console.log('After insertion:', data);
    // Highlight the newly inserted element in the output
    const outputArray = data.map((item, index) => {
        if (index === position) {
            return `<span style="color: red; font-weight: bold;">${item}</span>`;
        }
        return item;
    });
    // Show the array after insertion
    outputDiv.innerHTML = `After Insertion: [${data.join(', ')}]`;
};



// function insertData(){
//     let data = [23, 12, 33, 11, 21];
//     let position = parseInt(document.querySelector('#position').value);
//     let newElement = parseInt(document.querySelector('#newElement').value);

//     // Check if the input position is valid
//     if (isNaN(position) || position < 0 || position > data.length) {
//         alert('Please enter a valid position! or negative ');
//         return;
//     }
//     console.log('befor insertion', data);
//     for(let i = data.length - 1; i >= 0; i--){
//         if(i >= position){
//             data[i + 1] = data[i];
//             if(i == position){
//                 data[i] = newElement;
//             }
//         }
//     }
//     console.log('after Insertion', data);
// }






// let data = [23, 12, 33, 11, 21];
// let newData = 55;
// let position = 2;

// console.log('befor insertion',data);
// for(let i = data.length - 1; i >= 0; i--){
//     if(i >= position){
//         data[i + 1] = data[i];
//         if(i == position){
//             data[i] = newData;
//         }
//     } 
// }
// console.log('after insertion',data);

// second method

// let data = [23, 12, 33, 11, 21];
// let newData = 55;
// let position = 2;

// console.log('befor insertion',data)
// for(let i = data.length - 1; i >= 0; i--){
//     data[i + 1] = data[i];
// }

// data[position] = newData;
// console.log('after insertion',data);