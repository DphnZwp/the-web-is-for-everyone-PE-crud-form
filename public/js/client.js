const loadingButton = document.querySelector('#loading-button')
const loadingMessage = document.querySelector('.loading-text')
// POST variables
const apiBase = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
// const smartzonePostForm = document.querySelector('form#smartzonePostForm')

loadingButton.addEventListener('click', () => {
      loadingMessage.classList.add('loading-show')
  }
 )

 smartzonePostForm.addEventListener('submit', (post) => {
   post.preventDefault()
 
   let data = {
     smartzoneId: document.querySelector('#smartzoneId').value,
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