export function Pages (props) {

    const $page = document.createElement("div");


let {date,
    explanation ,
    title, 
    url } = props;

    console.log(props);

    $page.innerHTML = `
    
    <article id="apod-detail">
        <div class="apod-image">
        <img id="apod-image" src="${url}" alt="${title}">
        </div>
        <div class="apod-details">
        <h2 id="apod-title">${title}</h2>
        <p id="apod-date">${date}</p>
        <p id="apod-explanation">${explanation}</p>
        </div>
     </article>
    `;


    return $page;


}