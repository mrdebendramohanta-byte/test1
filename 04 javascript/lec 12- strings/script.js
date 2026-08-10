// const str = "javascript"
// console.log(str);
// console.log(typeof str);
// console.log(str[4])
// console.log("size of",str.length);//10

// console.log("uppercase",str.toUpperCase());
// console.log("lowercase",str.toLowerCase());

// const trimstring = "     JT    "
// console.log("trimstring length",trimstring.length);
// const trim1 = trimstring.trim()
// console.log("trim1 length",trim1.length,trim1)
//  const trim2 = trimstring.trimStart()
// console.log("trim2 length",trim2.length,trim2)
//  const trim3 = trimstring.trimEnd()
// console.log("trim3 length",trim3.length,trim3)

// //================method with arguments
// const newString = "Java Technocrat"
// console.log("character at 5th index",newString.charAt(5));//T
// console.log("character  code at 5th index",newString.charCodeAt(5));//84

// const toBeMergerdString = "is famous for Rashmi Sir"
// const mergedString = newString.concat("  ",toBeMergerdString)
// console.log("mergedString",mergedString);

// const isJavaIncluded = newString.includes("java",1)
// console.log("is java included",isJavaIncluded);

// const idxOfJava = newString.indexOf("java",1)
// console.log("index of java",idxOfJava);

// const lastIndexOfA = newString.lastIndexOf("a")
// console.log("last index of java",lastIndexOfA);

// const replacedString = newString.replace("c","b")
// console.log("replaced string",replacedString);

// const replacedAllString = newString.replaceAll("c","d")
// console.log("repalced all string ",replacedAllString);

// // const replacedString =newString.replacedString("java","python")
// // console.log("replaced string ",replacedString);

// const repeatedString = newString.repeat(3)
// console.log("repeated string",repeatedString);

// const padStart = newString.padStart(20,"-")
// console.log("pad start", padStart);

// const padEnd = newString.padEnd(20,"-")
// console.log("pad end    ", padEnd);

// const words = newString.split("  ")
// console.log("after split", words);

// const isStartsWithjava = newString.startsWith("java")
// console.log("starts with java",isStartsWithjava);


// const isEndsWithscript = newString.endsWith("script")
// console.log("End with java",isEndsWithscript);



// "java".padStart(6,"-")
// "javascript"


//=============diff betn slice & substring
const s = 'we are developers'
console.log((s.length));//17

console.log(s.slice());
console.log(s.substring());

console.log(s.slice(10));//elopers
console.log(s.slice(10));//elopers

console.log(s.slice(-9));//evelopers
console.log(s.substring(-9));//-9=>//we are developers

console.log(s.slice(17));//as max length is 17, maxidx can be 16 //""
console.log(s.substring(17));//""

console.log(s.slice(10,13));//elo(as endidx is not included)
console.log(s.substring(10,13));//elo(as endidx is not included)

console.log(s.slice(13,10));// st > en //""(empty string)
console.log(s.substring(13,10));//st > en //swap = >substring (10,13)//elo

console.log(s.slice(-8, -2));//velope
console.log(s.substring(-8,-2));//substring(0,0)//""

console.log(s.slice(13, -6));//""
console.log(s.substring(13, -6));//substring(2, 0)// substring(0, 2)// we


//======== s.substr(start,length)

console.log(s.substr());//we are developers
console.log(s.substr(5));//e developers
console.log(s.substr(8,5));//evelo
console.log(s.substr(-4,-10));//""
console.log(s.substr(10,-5));//""


