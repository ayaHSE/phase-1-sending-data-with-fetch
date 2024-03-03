export function submitData(name, email) {
    const url = 'http://localhost:3000/users';
    const data = {
      name: name,
      email: email
    };
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data)
    };
  
    return fetch(url, options)
      .then(response => response.json())
      .then(jsonData => {
        const id = jsonData.id;
        document.body.append(id);
      })
      .catch(error => {
        document.body.append(error.message);
      });
  }
  