const API_KEY = '8UeVabnCijMZ81bVRIvXUB5OPdHTKj1MPhmiFOg6'; // reemplaza con tu propia API key


export async function getAstronomyPictureOfTheDay(params = {}) {
  let url = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;

  // Agrega los parámetros a la URL
  for (let key in params) {
    url += `&${key}=${params[key]}`;
  }

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('There was a problem fetching data:', error);
    throw error;
  }
}


