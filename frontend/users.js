API_BASE_URL="http://localhost:3000";
fetch(API_BASE_URL+'/api/users')
.then(response => { 
       console.log("after api call : ", response);
       return response.json(); })
.then(users => {
       //console.log(users);
       const userList = document.getElementById('userDiv');

    users.forEach(user => {
      const userDiv = document.createElement('div');
      userDiv.classList.add('user');

      const userLink = document.createElement('a');
      userLink.href = '#';
      userLink.textContent = `User ID: ${user.id}`;

      userLink.addEventListener('click', () => {
        displayUserProperties(user);
      });

      userDiv.appendChild(userLink);
      userList.appendChild(userDiv);
    });
  })

function displayUserProperties(user) {
  const userList = document.getElementById('userDiv');
  userList.innerHTML = '';

  const userDiv = document.createElement('div');
  userDiv.classList.add('user');

  const idElement = document.createElement('p');
  idElement.textContent = `ID: ${user.id}`;

  const usernameElement = document.createElement('p');
  usernameElement.textContent = `Username: ${user.username}`;

  const addressElement = document.createElement('p');
  addressElement.textContent = `Address: ${user.address}`;

  userDiv.appendChild(idElement);
  userDiv.appendChild(usernameElement);
  userDiv.appendChild(addressElement);

  userList.appendChild(userDiv);
}

