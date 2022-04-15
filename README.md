> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Wireflow
<!-- Toon hier de Wirefllow -->

## Breakdown
<!-- Toon hier de Breakdown met de pseudo code en de verschillende lagen van Progressive enhancement -->

## Code
<!-- Toon hier de verschillende technieken die je gebruikt en hoe je dit met de CSS cascade en/of JS feature detect hebt gecodeerd -->
<!-- documenteer het onderzoek met de browser ondersteuning in de WIKI van de leertaak -->

### JavaScript form loading message
```javascript
const loadingButton = document.querySelector('#loading-button')
const loadingMessage = document.querySelector('.loading-text')

loadingButton.addEventListener('click', () => {
   loadingMessage.classList.add('loading-show')
})
```

### Javascript server side post
```javascript
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
```

### JavaScript client side post
```javascript
const apiBase = 'https://codingthecurbs.api.fdnd.nl/v1/smartzone'
const smartzonePostForm = document.querySelector('#smartzonePostForm')

smartzonePostForm.addEventListener('submit', () => {

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
```

### Form success state
De success state is niet gelukt, maar ik heb hier wel een ontwerp voor gemaakt (zie []()).

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
