document.getElementById("pform").addEventListener("submit",function(event){
    event.preventDefault();
    console.log("test");
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
    xhr.open("GET", "submit.json", true);

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log("AJAX success");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById('pForm').innerHTML = '';
            document.getElementById('message').innerText = response.message;
        } else if (xhr.readyState === 4){
            console.log("AJAX error", xhr.status);
            alert("Error submitting form");
        }
    };

    xhr.send(); // no need to send JSON for a GET request
});
