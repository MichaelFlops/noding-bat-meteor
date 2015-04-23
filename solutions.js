// Coding Bat Answers for warmup-1

// Java > Warmup-1 > sleepIn
// The parameter weekday is True if it is a weekday, and the parameter vacation is True if we are on vacation. We sleep in if it is not a weekday or we're on vacation. Return True if we sleep in.
// We have two monkeys, a and b, and the parameters a_smile and b_smile indicate if each is smiling. We are in trouble if they are both smiling or if neither of them is smiling. Return True if we are in trouble.
// Given two int values, return their sum. Unless the two values are the same, then return double their sum.

var sleepIn = function(weekday, vacation) {
	if (weekday == true || vacation == true){
		return true;
	}
	return false;
}

// Java > Warm-up1 > diff21
// Given an int n, return the absolute difference between n and 21,
// except return double the absolute difference if n is over 21.
var diff21 = function(n) {
  if (n <= 21)
    return 21 - n;
  else
    return (n - 21) * 2;
}

// Java > Warm-up1 > nearHundred
// Given an int n, return True if it is within 10 of 100 or 200.
//Note: abs(num) computes the absolute value of a number.
var nearHundred = function(n) {
  if (Math.abs(100) - n <= 10 || Math.abs(200) - n <= 10){
    return true;
  }
    return false;
}
// console.log(nearHundred(93));
// console.log(nearHundred(90));
// console.log(nearHundred(89));

// Java > Warm-up1 > missingChar
//Given a non-empty string and an int n, return a new string where the char at
//index n has been removed. The value of n will be a valid index of a char in the
//original string (i.e. n will be in the range 0..str.length()-1 inclusive).
var missingChar = function(str, n) {
	front = str.substring(0,n);
	back = str.substring(n+1, str.length);
	return front + back;
}
// console.log(missingChar("kitten", 1));
// console.log(missingChar("kitten", 0));

// Java > Warm-up1 > backAround
//Given a string, take the last char and return a new string with the last char added at
//the front and back, so "cat" yields "tcatt". The original string will be length 1 or more.
var backAround = function(str){
	last = str.substring(str.length-1);
	return last + str + last;
}
// console.log(backAround("cat"));
// console.log(backAround("Hello"));
// console.log(backAround("a"));

// Java > Warm-up1 > startHi
// Given a string, return true if the string starts with "hi" and false otherwise.
var startHi =  function(str){
	if (str.length < 2){
		return false;
	}
	front = str.substring(0,2);
	if (front == "hi"){
		return true;
	}
	else {
		return false;
	}
}
// console.log(startHi("hi there"));
// console.log(startHi("hi"));
// console.log(startHi("hello hi"));

// Java > Warm-up1 > hasTeen
// We'll say that a number is "teen" if it is in the range 13..19 inclusive.
// Given 3 int values, return true if 1 or more of them are teen.
var hasTeen = function(a, b, c){
	return (a>=13 && a<=19) ||
			(b>=13 && b<=19) ||
			(c>=13 && c<=19);
}
// console.log(hasTeen(13, 20, 10));
// console.log(hasTeen(20, 19, 10));
// console.log(hasTeen(20, 10, 13));

// Java > Warm-up1 > mixStart
// Return true if the given string begins with "mix", except the 'm' can be anything,
//so "pix", "9ix" .. all count.
var mixStart = function(str){
	if (str.length<3){
		return false;
	}
	two = str.substring(1,3);
	if (two == "ix"){
		return true;
	}
	else{
		return false;
	}
}
// console.log(mixStart("mix snacks"));
// console.log(mixStart("piz snacks"));

// Java > Warm-up1 > close10
// Given 2 int values, return whichever value is nearest to the value 10,
// or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value
// of a number.
var close10 = function(a, b){
	aDiff = Math.abs(a-10);
	bDiff = Math.abs(b-10);

	if (aDiff < bDiff){
		return a;
	}
	if (bDiff < aDiff){
		return b;
	}
	return 0;
}
// console.log(close10(8,13));
// console.log(close10(13,8));

// Java > Warm-up1 > stringE
// Return true if the given string contains between 1 and 3 'e' chars.
var stringE = function(str){
	count = 0;
	for(var i=0; i<str.length; i++){
		if(str.charAt(i) == "e"){
			count++;
		}
	}
	return (count >= 1 && count <= 3);
}
// console.log(stringE("Hello"));
// console.log(stringE("Heelle"));
// console.log(stringE("Heelele"));

// Java > Warm-up1 > everyNth
// Given a non-empty string and an int N, return the string made starting with char 0,
// and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on.
// N is 1 or more.
var everyNth = function(str, n){
	result = "";
	for(var i=0; i<str.length; i = i + n){
		result = result + str.charAt(i);
	}
	return result;
}
// console.log(everyNth("Miracle", 2));
// console.log(everyNth("abcdefg", 2));
// console.log(everyNth("abcdefg", 3));

// Java > Warm-up1 > monkeyTrouble
// We have two monkeys, a and b, and the parameters aSmile and bSmile indicate if each
// is smiling. We are in trouble if they are both smiling or if neither of them is smiling.
// Return true if we are in trouble.
var monkeyTrouble = function(aSmile, bSmile){
	if(aSmile && bSmile){
		return true;
	}
	if(!aSmile && !bSmile){
		return true;
	}
	return false;
}
// console.log(monkeyTrouble(true, true));
// console.log(monkeyTrouble(false, false));
// console.log(monkeyTrouble(true, false));

// Java > Warm-up1 > parrotTrouble
// We have a loud talking parrot. The "hour" parameter is the current hour time in the range 0..23.
//We are in trouble if the parrot is talking and the hour is before 7 or after 20.
//Return True if we are in trouble.
function parrotTrouble(talking, hour) {
 if (talking === true && (hour < 7 || hour > 20)) {
    return true;
 }
 else {
   return false;
 }
}
// console.log(parrotTrouble(true, 6));
// console.log(parrotTrouble(true, 7));
// console.log(parrotTrouble(false, 6));

// Java > Warm-up1 > posNeg
//Given 2 int values, return True if one is negative and one is positive.
//Except if the parameter "negative" is True, then return True only if
//both are negative.
var posNeg = function(a, b, negative) {
  if (negative === true) {
    return true;
  }
  if ((a < 0 && b > 0) || a > 0 && b < 0) {
    return true;
  } else {
    return false;
  }
};
// console.log(posNeg(1, -1, false));
// console.log(posNeg(-1, 1, false));
// console.log(posNeg(-4, -5, true));

// Java > Warm-up1 > frontBack
// Given a string, return a new string where the first and last chars have been exchanged.
var frontBack = function(str){
	if (str.length <= 1){
		return str;
	}
	mid = str.substring(1, str.length-1);

	return (str.length-1) + mid + str.charAt(0);
}
console.log(frontBack("code"));
console.log(frontBack("a"));
console.log(frontBack("ab"));

// Java > Warm-up1 > or35
// Return true if the given non-negative number is a multiple of 3 or a multiple of 5.
//Use the % "mod" operator
var or35 = function(n){
	if(n % 3 == 0 || n % 5 == 0){
		return true;
	}
	else{
		return false;
	}
}
// console.log(or35(3));
// console.log(or35(10));
// console.log(or35(8));

// Java > Warm-up1 > icyHot
// Given two temperatures, return true if one is less than 0 and the other is greater than 100.
var icyHot = function(temp1, temp2){
	if (temp1 < 0 && temp2 > 100 || temp2 < 0 && temp1 > 100){
		return true;
	}
	return false;
}
// console.log(icyHot(120, -1));
// console.log(icyHot(-1, 120));
// console.log(icyHot(2, 120));

// Java > Warm-up1 > loneTeen
// We'll say that a number is "teen" if it is in the range 13..19 inclusive.
// Given 2 int values, return true if one or the other is teen, but not both.
// var loneTeen = function(a, b){
// 	if ((a >= 13 || a <= 19){
// 		return true;
// 		}
// 	else{
// 		return false;
// 	}
// }
// console.log(loneTeen(13, 99));
// console.log(loneTeen(21, 19));
// console.log(loneTeen(13, 13));

// Java > Warm-up1 > startOz
// Given a string, return a string made of the first 2 chars (if present),
// however include first char only if it is 'o' and include the second only if it is 'z',
// so "ozymandias" yields "oz".
var startOz = function(str){
	result = "";

	if(str.length >= 1 && str.charAt(0) == "o"){
		result += str.charAt(0);
	}
	if(str.length >= 2 && str.charAt(1) == "z"){
		result += str.charAt(1);
	}
	return result;
}
// console.log(startOz("ozymandias"));
// console.log(startOz("bzoo"));
// console.log(startOz("oxx"));



//Given 2 ints, a and b, return True if one of them is 10 or if their sum is 10.
// var intTener = function(a, b) {
//   if (a === 10 || b === 10 || a + b === 10){
//     return true;
//   }
//   else {
//     return false;
//   }
// }
// console.log(intTener(9, 10));
// console.log(intTener(9, 9));
// console.log(intTener(1, 9));







// Java > Warmup-1 > in3050
// Given 2 int values, return true if they are both in the range 30..40 inclusive,
// or they are both in the range 40..50 inclusive.
var in3050 = function(a, b) {
	if ((a >= 30 && a<=40 && b>=30 && b<=40) || (a >=40 && a<=50 && b>=40 && b<=50)){
		return true;
	}
	else {
		return false;
		}
}
// console.log(in3050(30, 31));
// console.log(in3050(30, 41));
// console.log(in3050(40, 50));

// Java > Warmup-1 > lastDigit
// Given two non-negative int values, return true if they have the same last digit,
// such as with 27 and 57. Note that the % "mod" operator computes remainders, so 17 % 10 is 7.
var lastDigit = function(a, b){
	return (a % 10 == b % 10);
}
// console.log(lastDigit(7,17));
// console.log(lastDigit(6,17));
// console.log(lastDigit(3,113));

// Java > Warmup-1 > sumDouble
// Given two int values, return their sum. Unless the two values are the same,
// then return double their sum.
var sumDouble = function(a, b){
	if(a == b){
		return 2*(a+b);
	}
	else {
		return a + b;
	}
}
// console.log(sumDouble(1,2));
// console.log(sumDouble(3,2));
// console.log(sumDouble(2,2));

// Java > Warmup-1 > makes10
// Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
var makes10 = function(a,b){
	if((a == 10 || b == 10) || (a + b == 10)){
		return true;
	}
	else{
		return false;
	}
}
// console.log(makes10(9,10));
// console.log(makes10(9,9));
// console.log(makes10(1,9));

// Java > Warmup-1 > notString
// Given a string, return a new string where "not " has been added to the front.
// However, if the string already begins with "not", return the string unchanged.
// Note: use .equals() to compare 2 strings.
var notString = function(str){
	if (str.length <= 3 && str.substring(0,3).localeCompare("not")){
		return str;
	}
	return "not " + str;
}
// console.log(notString("candy"));
// console.log(notString("x"));
// console.log(notString("not bad"));

// Java > Warmup-1 > front3
// Given a string, we'll say that the front is the first 3 chars of the string. 
// If the string length is less than 3, the front is whatever is there. 
// Return a new string which is 3 copies of the front. 

var front3 = function(str){
	front = "";
	if (str.length >= 3){
		front = str.substring(0,3);
	}
	else {
		front = str;
	}
	return front + front + front;
}
// console.log(front3("Java"));
// console.log(front3("Chocolate"));
// console.log(front3("abc"));

// Java > Warmup-1 > front22
// Given a string, take the first 2 chars and return the string with the 2 chars added at both the front and back,
//  so "kitten" yields"kikittenki". If the string length is less than 2, use whatever chars are there.

var front22 = function(str){
	front = "";
	var take = 2;
	if (take > str.length){
		take = str.length;
	}
	front = str.substring(0,take);
	return front + str + front;
}

// console.log(front22("kitten"));
// console.log(front22("Ha"));
// console.log(front22("abc"));


// Java > Warmup-1 > in1020
// Given 2 int values, return true if either of them is in the range 10..20 inclusive. 

var in1020 = function(a,b){
	return ((a >= 10 && a <= 20 || b >= 10 && b <= 20));
}

// console.log(in1020(12,99));
// console.log(in1020(21,12));
// console.log(in1020(8,99));