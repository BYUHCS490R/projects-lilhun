document.getElementById("pform").addEventListener("submit",function(event){
    event.preventDefault();
    console.log("test");
    const name = document.getElementById("fname").value;
    // const pass = document.getElementById("pass").value;
    const email = document.getElementById("email").value;
    const style = document.getElementById("style").value;
    const pref = document.getElementById("pref").value;
    const duration = document.getElementById("trip_dur").value;
    const agree = document.getElementById("agree");

    if(!name){
        alert("Please provide your name.");
        return;
    }
    // if(!email){
    //     alert("Please provide your email adress.");
    //     return;
    // }
    // if(!style){
    //     alert("Please select an option.");
    //     return;
    // }
    // if(!pref){
    //     alert("Please select an option.");
    //     return;
    // }
    if(!duration|| duration < 1 ){
        alert("you must at least one day.");
        return;
    }
  
    if(!agree.checked){
        alert("you must agree to the terms to submit this form.");
        return;
    }
    const data = {
        fname: name,
        // password: pass,
        trip_dur: duration,
        agree: agree.checked
    }
    console.log(data);
  

    
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("content-Type","application/json;charset=UTF-8");

    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            console.log("AJAX success");
            const response = JSON.parse(xhr.responseText);
            console.log(response);
            document.getElementById('pform').innerHTML = '';
            
            const main = document.querySelector('.form_main');
            main.style.backgroundImage = 'none';
            
            const messageDiv = document.getElementById('message');
            messageDiv.innerText = response.message;
            messageDiv.style.display = 'block';
            messageDiv.style.textAlign = 'center';
            messageDiv.style.fontWeight = 'bold';
            messageDiv.style.fontSize = '1.2em';
            messageDiv.style.padding = '20px';
            messageDiv.style.borderRadius = '10px';
            messageDiv.style.backgroundColor = 'rgba(255,255,255,0.9)';
            messageDiv.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';

            // Show the image
            // document.querySelector('.sub_image').style.display = 'block';
            const image = document.getElementById('sub_image').style.display = 'block';

         //remove background image
            const contentWrapper = document.querySelector('.content-wrapper');
            contentWrapper.style.backgroundImage = 'none'; // remove background
           
        } else if (xhr.readyState === 4){
            console.log("AJAX error", xhr.status);
            alert("Error submitting form");
        }
    };

    xhr.send(JSON.stringify(data));
});
