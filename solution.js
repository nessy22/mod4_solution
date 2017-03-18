/*assignment 4 */

var text = "ychaikin containing some text for ychaikin written and developed by Mwambai";

var myName = "Hello ychaikin";

var hits = [myName];

/* assign the value of 0 to i and continue to the loop while i is less than the length of the variable 'text', and add 1 to i after executing the code block  */
for (i = 0; i < text.length + 1; i++) {
    /* if the array value of the 'text' variable is equal to the 0 point of the myName variable */
    if(text[i] === myName[0]) {
        /* then assign the value of i to j and continue the loop while j is less than the length of the myName variable plus the value of i */
        for(var j = i; j < (myName.length + i); j++) {
            /* if the array value of the variable 'text' is equal to the array value of j minus i for the 'myName' variable, push the value of j on to the hits array */
            if(text[j] === myName[j-i]) {
                hits.push(text[j]);   
            }
        }
    }
}

if(hits.length === 0){
    console.log("Your name wasn't found!");
}
else {
    console.log(hits);
}
