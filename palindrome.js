

const isPalindrome = (str) =>
{
    let values = JSON.stringify(str)
    resv = ''
    for(let i = values.length -1; i >=0; i--)
    {
        resv = resv + values[i]
    }
    return (values === resv) ? true:false;
}

console.log(isPalindrome(111));