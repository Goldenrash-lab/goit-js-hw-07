import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");

function imageItems(items) {
  return items.map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>
    `
  );
}
function renderItems(items) {
  const markup = imageItems(items).join("");
  listEl.insertAdjacentHTML("afterbegin", markup);
}
renderItems(galleryItems);

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
