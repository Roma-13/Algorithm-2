function findIndex(arr, element) {
    return arr.indexOf(element);
}
var array1 = ["Red", "blue", "Blue", "Green"];
var array2 = ["hi", "edabit", "fgh", "abc"];
var index1 = findIndex(array1, "blue");
var index2 = findIndex(array2, "fgh");
console.log("წევრის ინდექსი (array1):", index1);
console.log("წევრის ინდექსი (array2):", index2);
