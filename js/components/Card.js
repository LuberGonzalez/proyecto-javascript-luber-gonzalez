export function Card(props) {


    let {date,explanation,title,url} = props;

const $card = document.createElement("div");

$card.classList.add("card");

$card.innerHTML = `
  <img src="${url}" alt="${title}">
  <a href="#/articulo/${title.replace(/\s+/g, '-')}">
  <h2 data-date="${date}" class="title">${title}</h2>
  </a>
  <p>${explanation}</p>
`

 return $card;

}