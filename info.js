// Функция для обработки нажатия на кнопку "Home Page"
function onHomeButtonClick() {
    var newHomePageLink = document.createElement('a');
    newHomePageLink.href = 'index.html';
    document.body.appendChild(newHomePageLink);
    newHomePageLink.click();
  }
  
  // Добавляем обработчик события для кнопки "Home Page"
  document.getElementById('homeButton').addEventListener('click', onHomeButtonClick);
  

  document.getElementById('dataForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    fetch('https://script.google.com/macros/s/AKfycbyHpz4uXDTEdJrNN76kYbxjgM8-UltUK80i3o4LMKZN7vjKFHFwmuTrX39QXWyWzx_5/exec', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({name: name, email: email, message: message})
    })
    .then(response => response.json())
    .then(data => {
      if (data.result === 'success') {
        alert('Data submitted successfully!');
      } else {
        alert('There was an error submitting your data.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  });
  