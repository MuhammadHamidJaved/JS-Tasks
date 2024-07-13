//Write a sync and Async funtion to fetch data from 3 APIs with delays 10000, 5000 and 7000 respectively.

// Sync function    
function fetchDataSync() {
    const data1 = fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
    const data2 = fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json());
    const data3 = fetch('https://jsonplaceholder.typicode.com/albums').then(response => response.json());
    return Promise.all([data1, data2, data3]);
}

fetchDataSync().then(data => {
    console.log(data);
});

// Async function
async function fetchDataAsync() {
    const data1 = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());
    const data2 = await fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json());
    const data3 = await fetch('https://jsonplaceholder.typicode.com/albums').then(response => response.json());
    return [data1, data2, data3];
}

fetchDataAsync().then(data => {
    console.log(data);
});





