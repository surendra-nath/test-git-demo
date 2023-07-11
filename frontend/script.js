document.getElementById('validationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var uname = document.getElementById('username').value;
    var pass = document.getElementById('password').value;

    if(uname.trim() == '' && pass.trim() == ''){
    document.getElementById('message').textContent = "Username and Password fields are empty";
    document.getElementById('username').style.border = "solid 3px red";
    document.getElementById('password').style.border = "solid 3px red";
    
    }

    else if( uname.trim() == '' ){
      //document.getElementById('message').textContent = "Username field is empty";
      document.getElementById('lbluser').style.visibility= "visible";
      document.getElementById('username').style.border = "solid 3px red";
    }

    else if (pass.trim() == '') {
      //document.getElementById('message').textContent = "Password field is empty";
      document.getElementById('lblpass').style.visibility = "visible";
      document.getElementById('password').style.border = "solid 3px red";
    }

    else{
    API_BASE_URL="http://localhost:3000";
    fetch(API_BASE_URL+'/api/login', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        
      body: JSON.stringify({ username: uname, password: pass })
    })
    .then(response => response.json())
    .then(x => {
      if (x.success) {
        window.location.href = '/frontend/users.html';
        //document.getElementById('message').textContent = "Form validated";
      } else {
        document.getElementById('message').textContent = "Username and Password are different";
      }
    });
  }
   
  });
