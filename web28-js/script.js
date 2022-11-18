//1, Viết 1 function đảo ngược một số.
//VD: 111722 --> 227111
function reverce(n) {
  const string = n.toString();
  var result = ``;
  for (let i = 0; i <= string.length; i++) {
    result += string.charAt(string.length - i);
  }
  return Number(result);
}
console.log(reverce(1117220));

//2, Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
//Sample function : Longest_Country_Name([“Australia”, “Germany”, “United States of America”])
//Expected output : “United States of America”
function getLongestCountryName(countries) {
  var maxLength = countries[0].length;
  var maxIndex = 0;
  for (let i = 1; i < countries.length; i++) {
    if (maxLength < countries[i].length) {
      maxIndex = i;
    }
  }
  return countries[maxIndex];
}
console.log(
  getLongestCountryName(["Australia", "Germany", "United States of America"])
);

//3, Write a JavaScript function to extract unique characters from a string.
//Example string : “thequickbrownfoxjumpsoverthelazydog”
//Expected Output : “thequickbrownfxjmpsvlazydg”
function getUniqueCharInString(str) {
  var result = "";
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str.charAt(i)) == i) {
      result += str.charAt(i);
    }
  }
  return result;
}
console.log(getUniqueCharInString("thequickbrownfoxjumpsoverthelazydog"));

//4, There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
//Sample array :
//array1 = [1,0,2,3,4];
//array2 = [3,5,6,7,8,13];
//Expected Output :
//[4, 5, 8, 10, 12, 13]

function computeSumArray(array1, array2) {
  var sumArr = [];
  if (array1.length <= array2.length) {
    for (let i = 0; i < array2.length - array1.length; i++) {
      array1.push(0);
    }
  } else {
    for (let i = 0; i < array1.length - array2.length; i++) {
      array2.push(0);
    }
  }
  for (let j = 0; j < array2.length; j++) {
    sumArr.push(array1[j] + array2[j]);
  }
  return sumArr;
}

console.log(computeSumArray([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));

//5, Write a JavaScript function to repeat a string a specified times.
//Test Data :
//console.log(repeat_string(‘a’, 4));
//console.log(repeat_string(‘a’));
//Output :
//“aaaa”
//“Error in string or count.”

function repeatString(s, time) {
  var result = "";
  if (!s || !time) {
    return "Error in string or count.";
  } else {
    for (let i = 0; i < time; i++) {
      result += s;
    }
    return result;
  }
}
console.log(repeatString("a", 4));
console.log(repeatString("a"));

//6.Write a JavaScript program to count number of words in string. Go to the editor
//Note :
//Remove white-space from start and end position.
//Convert 2 or more spaces to 1.
//Exclude newline with a start spacing.
//input: " The quick brown fox "
//output: 4

function countWord(str) {
  var newStr = str.trim().replace(/  +/g, " ");
  var splitStrToArr = newStr.split(" ");
  return splitStrToArr.length;
}
console.log(countWord(" the quick   brown fox  "));
