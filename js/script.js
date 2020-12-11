//zadacha1
let name= prompt('Ваше имя?'),
	 age= prompt('Ваш возраст?'),
	 city= prompt('Ваш город проживания?'),
	 phone= prompt('Ваш номер телефона?'),
	 email= prompt('Ваш email?'),
	 company= prompt('В какой компании вы работаете?');
document.write(' Меня зовут:', name);
document.write('. Мне:', age);
document.write('. Я проживаю в городе ', city);
document.write(' и работаю в компании ', company);
document.write('. Мои контактные данные: ', phone, ', ', email, '. ');

//zadacha2 
let dr= 2020 - age;
document.write(name, ' Родился в ', dr, ' году');

//zadacha3
let A= 3,
	 B= 5,
	 C= 33,
	 D= 3
	 E= 1,
	 F= 33,
	 sum1= A + B + C,
	 sum2= D + E + F;
(sum1 == sum2) ? console.log('Да') : console.log('Нет');

//zadacha4
let e= 33;
(e > 0) ? console.log('Верно') : console.log('Неверно');

//zadacha5
let a= 10,
	 b= 2,
	 su= a + b;
console.log(su);
console.log(a - b);
console.log(a * b);
console.log(a / b);
(su > 1) ? console.log(su * su) : console.log(su);

//zadacha6 
(a > 2 && a < 11 && b >= 6 && b < 14) ? console.log('Верно') : console.log('Неверно');

//zadacha7
let n= 63;
if (n >= 0 && n <= 15) console.log('Первая четверть часа');
if (n > 15 && n <= 30) console.log('Вторая четверть часа');
if (n > 30 && n <= 45) console.log('Третья четверть часа');
if (n > 45 && n <= 59) console.log('Четвёртая четверть часа');
if (n < 0 || n > 59) console.log('Неверное значение!');

//zadacha8
let day= 3.5;
if (day >= 1 && day <= 10) console.log('Первая декада');
if (day > 10 && day <= 20) console.log('Вторая чдекада');
if (day > 20 && day <= 31) console.log('Третья декада');
if (day < 0 || day > 31) console.log('Неверное значение!');

//zadacha9
let z= prompt('Введите количество дней:');
	 god= z / 365;
	 mes= z / 31;
	 ned= z / 4;
	 ch= z * 24;
	 min= ch * 60;
	 sec= min * 60;
if (god < 1) {
	console.log('Меньше года');
}else {
	console.log('В годах', god);
}
if (mes < 1) {
	console.log('Меньше месяца');
} else {
	console.log('В меесяцах', mes);
}
if (ned < 1) {
	console.log('Меньше недели');
} else {
	console.log('В неделях', ned);
}
console.log('В часах', ch);
console.log('В минутах', min);
console.log('В секундах', sec);

//zadacha10
if (z >= 1 && z <= 59) console.log('Зима');
if (z > 59 && z <= 150) console.log('Весна');
if (z > 150 && z <= 242) console.log('Лето');
if (z > 242 && z <= 333) console.log('Осень');
if (z > 333 && z <= 365) console.log('Зима');
if (z >= 1 && z <= 30) console.log('1 месяц');
if (z > 30 && z <= 58) console.log('2 месяц');
if (z > 58 && z <= 89) console.log('3 месяц');
if (z > 89 && z <= 119) console.log('4 месяц');
if (z > 119 && z <= 150) console.log('5 месяц');
if (z > 150 && z <= 181) console.log('6 месяц');
if (z > 181 && z <= 211) console.log('7 месяц');
if (z > 211 && z <= 242) console.log('8 месяц');
if (z > 242 && z <= 272) console.log('9 месяц');
if (z > 272 && z <= 303) console.log('10 месяц');
if (z > 303 && z <= 333) console.log('11 месяц');
if (z > 333 && z <= 365) console.log('12 месяц');
if (z < 1 || z > 365) console.log('Проверьте введённое значение!');









