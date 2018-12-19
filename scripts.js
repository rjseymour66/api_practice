// Create a request variable and assign a new XMLHttpRequest object
const request = new XMLHttpRequest()

// Open a new connection, using the GET request on the URL endpoint (true is whether it is async or not)
request.open('GET', 'https://ghibliapi.herokuapp.com/films', true)


// Access JSON data using the onload function
request.onload = function () {
  // parse JSON resposne and save in variable that contains JSON as an array of JS objects
  const data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    data.forEach(movie => {
      // log each movie title to test
      // console.log(movie.title);

      // Create a div with a card class
      const card = document.createElement('div')
      card.setAttribute('class', 'card')

      // Create an h1 and set the text content to the film's title
      const h1 = document.createElement('h1')
      h1.textContent = movie.title

      // Create a p and set the text content to the film's description
      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300) // limits to 300 characters
      p.textContent = `${movie.description}...` // end with ellipses

      // Append the cards to the container element
      container.appendChild(card)

      // Each card will contain an h1 and a p
      card.appendChild(h1)
      card.appendChild(p)

    });
  } else {
    const errorMessage = alert('Error')
  }
}

// Send request
request.send()


////////////////////////    DOM    /////////////////////////////////

const app = document.getElementById('root')

const logo = document.createElement('img')
logo.src = '/images/logo.png'

const container = document.createElement('div')
container.setAttribute('class', 'container')

app.appendChild(logo)
app.appendChild(container)