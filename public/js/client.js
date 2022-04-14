// POST variables
const apiBase = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const clientPostForm = document.querySelector('#clientPostForm')
clientPostForm.classList.add('clientPostForm-show')
const serverPostForm = document.querySelector('#serverPostForm')
serverPostForm.classList.add('serverPostForm-dissapear')

clientPostForm.addEventListener('submit', () => {

let data = {
   name: document.querySelector('#name').value,
   town: document.querySelector('#town').value,
   location: document.querySelector('#location').value,
   function: document.querySelector('#function').value,
   time: document.querySelector('#time').value,
   size: document.querySelector('#size').value,
   utilization: document.querySelector('#utilization').value,
   description: document.querySelector('#description').value,
   image: document.querySelector('#image').value,
}

   fetch(apiBase, {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
   })
})