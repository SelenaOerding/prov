// 6. Hämta och visa foton. (3p)
// Ladda ner foton med fetch från denna url: https://jsonplaceholder.typicode.com/photos
// Visa dom första 10 fotona på sidan.
// När man klickar på ett foto ska dess titel visas i en popup med `alert`

async function fetchPhotos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/photos");
  const photos = await response.json();

  const photosContainer = document.getElementById("photos");

  photos.slice(0, 10).forEach((photo) => {
    const photoElement = document.createElement("img");
    photoElement.src = photo.thumbnailUrl;
    photoElement.onclick = () => alert(photo.title);

    photosContainer.appendChild(photoElement);
  });
}

fetchPhotos();
