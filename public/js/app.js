console.log('Client sode Javascript file is loaded');


fetch('http://localhost:3000/weather?address=Wellington').then((res) => {
    res.json().then((data) => {
        
        if (data.error) {
            console.log('An Error Occured');
        } else {
            console.log(data);
        }
    })
})