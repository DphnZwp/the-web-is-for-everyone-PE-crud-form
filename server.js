const express = require('express')
const app = express()
const port = process.env.PORT || 9050
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args))
const url = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
// POST
const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({extended:false})

// Serve public files
app.use(express.static('public'))

// Hook up a template engine
app.set('view engine', 'ejs')
app.set('views', 'views')

app.get('/', (request, response) => {
  fetchJson(url).then(function (jsonData) {
    response.render('index', {
      title: 'Smart Zones',
      smartzones: jsonData.data,
    })
  })
})

// POST form
app.post('/toevoegen', urlencodedParser, (request,response) =>{
  const postData = {
    method: 'post',
    body: JSON.stringify(request.body),
    headers: {'Content-Type': 'application/json'}
  }
  fetchJson(url, postData).then(function () {
    response.render('add', {
      title: 'Smart zone toevoegen',
    })
  })
})

app.get('/toevoegen', (request, response) => {
    response.render('add', {
      title: 'Smart zone toevoegen',
    })
})

// Server port
const server = app.listen(port, () => {
  console.log(`Application started on port: ${port}`)
})

// Fetch
async function fetchJson(url, postData = {}) {
  return await fetch(url, postData)
    .then((response) => response.json())
    .catch((error) => error)
}