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
});