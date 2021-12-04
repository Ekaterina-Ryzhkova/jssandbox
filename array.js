
/**
*ДОБАВЛЕНИЕ И УДАЛЕНИЕ ЭЛЕМЕНТОВ МАССИВА
*/

const array = [1,2,3];
array.push(4); // добавляет новый элемент в конец массива 1,2,3,4
array.unshift(5); // добавляет новый элемент в начало массива 5,1,2,3,4
array[5] = 7; // добавляет новый элемент с индексом 5 5,1,2,3,4,7
array.shift(); // удаляет первый элемент массива 1,2,3,4,7
array.pop() // удаляет последний элемент массива 1,2,3,4

/**
*ВЫВОД МАССИВА НА ЭКРАН
*/

const array1 = [1,2,3] //вывод массива на экран
for (let i = 0; i < array1.length; i++) {
  console.log( array1[i] );
}

const array2 =  [4,5,6]
for (let item in array2) {
  console.log( array2[item] )
}

/**
*ПЕРЕБОР ЭЛЕМЕНТОВ МАССИВА
*/

//1. forEach
const array3 = [1,2,3,4]
array3.forEach(function(item, index) {
  console.log(item, index,item + index);
})

//2.map
const array4 = [1, 4, 9];
let doubleValue = array4.map(num => {
  return num * 2; //1 8 18 в качестве аргумента принимает функцию
});
console.log(doubleValue);

//3.filter
const array5 = [1,2,3,5,7,8];
let devideTo = array5.filter(num => {
  return num%2==0; //2 8 здесь должно быть указано какое-то булевое значение
});
console.log(devideTo);

//4.every
const array6 = [-2, -1, 0, 1];
console.log( array6.every(num => {
  return num > 0; //false
}) ); //true если каждый элемент подходит под условие

//5.some
const array7 = [-2, -1, 0, 1];
function IsCheck(num)
{
  return num > 0;
}
console.log( array7.some(IsCheck)); //true
// true если хотя бы один элемент подходит под условие

//6.reduce
const array8 = [1, 2, 3];
let res = array8.reduceRight((total, current) => {
 return total + current; //суммирует весь массив, выдает только одно значение
} )
console.log(res); //6

/**
*ПОИСК В МАССИВЕ
*/

//1. IndexOf
let groceries =["Milk", "Eggs", "Bread", "Salami", "Juice"]; //проверка сначала
let resultIndex = groceries.indexOf("Eggs",0); //0 это индекс с которого нужно начать поиск
console.log(resultIndex); // 1

//2. LastIndexOf
const arra3y = [1, 2, 3, 0, 3] //проверка с конца
console.log(arra3y.lastIndexOf(3)) // 4
console.log(arra3y.lastIndexOf(10)) // -1

//3. includes
const names = ["Jane","Jack","Wilson"];
console.log(names.includes("Jack")); //true

//4. find and findIndex
const cities = ["Moscow","New-York","Praga"];
console.log(cities.find(n => n === "Praga")); //Praga
console.log(cities.find(n => n === "London")); //undefind
console.log(cities.findIndex(n => n === "Praga")); //2 Индекс элемент

/**
*ДОПОЛНИТЕЛЬНЫЕ МЕТОДЫ
*/
// 1) Получение последнего элемента массива
const numb = [1, 2, 3]
console.log(numb[numb.length - 1]); // 3

// 2) slice - Создание копии массива
const colors = ["blue","yellow","red"];
const copycolors = colors.slice();
console.log(copycolors); //blue, yellow, red

// 3) splice - Модицификация массива
const tree = ["oak","pine","willow"];
tree.splice(2,0,"palm");
console.log(tree);//oak pine palm willow

// 4) sort - Сортировка массива
const arraysort = [4, 5, 2, 1];
console.log(arraysort.sort()); // 1, 2, 4, 5

// 5) reverse - Изменение порядка массива
const array9 = [1,2,3];
array9.reverse();
console.log(array9); // 3 2 1

// 6) concat - Создание нового массива на основе переданных значений из предыдущего массива
let a = [1,2,3];
console.log(a.concat([4,5])); // 1,2,3,4,5

// 7) join - Склеивание элементов в один массив
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let text = fruits.join(" and ");
console.log(text); // Banana and Orange and Apple and Mango
