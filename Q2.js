// Create an array of strings and print the longest string.

const strings= ["Abu Bakar","Ali","Usman"];

const maxlength= strings.reduce((len,obj) => {
    if(len.length>obj.length)
    {
        return len;
    }
    else
    {
        return obj;
    }
});
console.log(maxlength);