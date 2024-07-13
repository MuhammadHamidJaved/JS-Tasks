// Create an array of objects and print the object with the highest value.
const objects = [
    { Fname: 'Abu Bakar', Lname : 'Saddique', value: 10 },
    { Fname: 'Ali', Lname : 'Raza', value: 15 },
    { Fname: 'Usman', Lname : 'Umer', value: 5 }
    ];

    const maxObject = objects.reduce((max, obj) => {
        if (obj.value > max.value) {
            return obj;
        } else {
            return max;
        }
    });
console.log(maxObject);
