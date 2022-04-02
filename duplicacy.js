let arr1 = [0,0,1,1,1,2,2,3,3,4];
const getUnion = (arr1) => 
{
    const union =[];
    for (let i = 0; i < arr1.length; i++) 
    {
        if (union.indexOf(arr1[i]) === -1) 
        {
            union.push(arr1[i]);
        }
    }
    return union;
}



console.log(getUnion(arr1));