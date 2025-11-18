document.getElementById("myForm").addEventListener("submit",function(event){
    event.preventDefault();
    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;
    const pass = document.getElementById("password").value;
    const age = document.getElementById("age").value;

    if(!first|| !last){
        alert("Please provide your full name.");
        return;
    }
    if(!age|| age < 18 ){
        alert("you must be 18 years or older to submit this form.");
        return;
    }

    const data = {
        firstName: first,
        lastName: last,
        password: pass,
        age: age
    }
    // logs the data object to the console.
    console.log(data);
    // setting up xhr object to send data to the server.
    //no server will recive the data
    const xhr = new XMLHttpRequest();
    // submit.json=fake server response
    //getting data from the data object in form.js
    //javascript processes data ajax only retrives response
    //json is a data fromat for sending and storing information
    xhr.open("Get", "submit.json",true);
    //this is a http header but dosen't matter for this assignment because we are requestiong a local json file and not sending data to a server that reads headers.
    xhr.setRequestHeader("content-Type","application/json;charset=UTF-8");
    // an ajax request goes through 5 states
    //will run every time the request's state changes
    xhr.onreadystatechange = function(){
        // the request is done and the response loaded succesfully
        if(xhr.readyState === 4 && xhr.status === 200){
            alert("Form submitted successfully");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            // temporaily pulls everything from inside the form
            document.getElementById('myForm').innerHTML = '';
            document.getElementById('message').innerText = response.message;
    
        }
        // the request finished but we did not get a success code.
        //runs when techical errors happen
        else if (xhr.readyState === 4){
            alert("error submitting form");
        }

    };
    // convert data object into json string data and send to a processing server(no real server is receiving this data)
    xhr.send(JSON.stringify(data));
});