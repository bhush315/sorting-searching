function insertionSort(arr) {

    for (let i = 1; i < arr.length; i++) {
        let key = arr[i]; 
        let j = i - 1; 

       
       
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j]; 
            j--; 
        }
        arr[j + 1] = key; 
    }

    return arr; 
}


let array = [5, 2, 9, 1, 5, 6];
console.log("Original array:", array);
let sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);