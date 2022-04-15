> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# Titel
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Wireflow
Ik heb Figma gebruikt om meer te oefenen met Figma.

![Desktop - 8 (1)](https://user-images.githubusercontent.com/69635977/163650341-7b659065-c6a1-49fc-830d-3b8288c012db.png)

## Breakdown

![Desktop - 8 (2)](https://user-images.githubusercontent.com/69635977/163651563-cf99eb91-7ce3-470d-858c-0191d878f2ce.png)

## Code
<!-- Toon hier de verschillende technieken die je gebruikt en hoe je dit met de CSS cascade en/of JS feature detect hebt gecodeerd -->
<!-- documenteer het onderzoek met de browser ondersteuning in de WIKI van de leertaak -->

### JavaScript form loading state
Wanneer JavaScript uitstaat krijg je deze loading state niet te zien.
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
Wanneer JavaScript uitstaat wordt het formulier verstuurd met de server side.
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

### Form success en error state
De success state is niet gelukt, maar ik heb hier wel een ontwerp voor gemaakt (zie [https://github.com/DphnZwp/the-web-is-for-everyone-PE-crud-form/wiki/2.-Ontwerpen#success-state](https://github.com/DphnZwp/the-web-is-for-everyone-PE-crud-form/wiki/2.-Ontwerpen#success-state)). Ik had ook geen tijd meer om een error state te maken.

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
