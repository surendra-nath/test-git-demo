API_BASE_URL="http://localhost:3000";
fetch(API_BASE_URL+'/api/users')
  .then(response => { 
    console.log("after api call : ", response);
    return response.json(); })
  .then(users => {
    //console.log(users);
    const userList = document.getElementById('userDiv');

   // users.forEach(user => {
    //   const listItem = document.createElement('li');
    //   listItem.textContent = `ID: ${user.id}, Username: ${user.username}, Address: ${user.address.street}`;

    //   userList.appendChild(listItem);
    // });
  //});

  users.forEach(user => {
    const userDiv = document.createElement('div');
    userDiv.classList.add('user');

    const idElement = document.createElement('p');
    idElement.textContent = `ID: ${user.id}`;

    const usernameElement = document.createElement('p');
    usernameElement.textContent = `Username: ${user.username}`;

    const addressElement = document.createElement('p');
    addressElement.textContent = `Address: ${user.address.street}`;

    userDiv.appendChild(idElement);
    userDiv.appendChild(usernameElement);
    userDiv.appendChild(addressElement);

    userList.appendChild(userDiv);
  });
});
