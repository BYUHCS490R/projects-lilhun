document.getElementById("pForm").addEventListener("submit",function(event){
    event.preventDefault();
    console.log("Hello");
    const name = document.getElementById("fname").value;
    const pass = document.getElementById("pass").value;
    const age = document.getElementById("age").value;
    const agree = document.getElementById("agree");

    if(!name){
        alert("Please provide your full name.");
        return;
    }
    if(!age|| age < 18 ){
        alert("you must be 18 years or older to submit this form.");
        return;
    }
  
    if(!agree.checked){
        alert("you must agree to the terms to submit this form.");
        return;
    }
    const data = {
        fname: name,
        password: pass,
        age: age,
        agree: agree.checked
    }
    console.log(data);
      const xhr = new XMLHttpRequest();
    // submit.json=fake server response
    //getting data from the data object in form.js
    //javascript processes data ajax only retrives response
    //json is a data fromat for sending and storing information
    xhr.open("Get", "submit.json",true);
    //this is a http header but dosen't matter for this assignment because we are requestiong a local json file and not sending data to a server that reads headers.
    xhr.setRequestHeader("content-Type","application/json;charset=UTF-8");
    console.log("1");
    // an ajax request goes through 5 states
    //will run every time the request's state changes
    xhr.onreadystatechange = function(){
        // the request is done and the response loaded succesfully
        if(xhr.readyState === 4 && xhr.status === 200){
             console.log("2");
            alert("Form submitted successfully");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            // temporaily pulls everything from inside the form
            document.getElementById('pform').innerHTML = '';
            document.getElementById('message').innerText = response.message;
    
        }
        // the request finished but we did not get a success code.
        //runs when techical errors happen
        else if (xhr.readyState === 4){
             console.log("3");
            alert("error submitting form");
        }

    };
    // convert data object into json string data and send to a processing server(no real server is receiving this data)
    xhr.send(JSON.stringify(data));
});
