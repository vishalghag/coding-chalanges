// function lengthOfLastWord(a)        const lengthLast()
// {
//     let len = 0;
 
//     // String a is 'final'-- can
//     // not be modified So, create
//     // a copy and trim the
//     // spaces from both sides
//     x = a.trim();
 
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] == ' ') {
//             len = 0;
//         }
//         else {
//             len++;
//         }
//     }
 
//     return len;
// }
 
// // Driver code
 
// input = "Geeks For Geeks ";
// document.write("The length of last word is "+ lengthOfLastWord(input));
 
 
 
// </script>

const lengthLast =(num) =>{
    let len = 0;

    let x = num.trim();
 
    for (let i = 0; i < x.length; i++) 
    {
        if (x[i] == ' ')
         {
            len = 0;
        }
        else 
        {
            len++;
        }
    }
 
    return len;
}

let data =  "Hello World";
console.log(lengthLast(data));