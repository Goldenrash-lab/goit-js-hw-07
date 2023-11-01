import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");

function imageItems(items) {
  return items.map(
    ({ preview, original, description }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </li>
    `
  );
}
function renderItems(items) {
  const markup = imageItems(items).join("");
  listEl.insertAdjacentHTML("afterbegin", markup);
}
function onImgClick(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") return;
  else {
    const urlPic = e.target.dataset.source;
    basicLightbox
      .create(
        `
		<img width="1400" height="900" src="${urlPic}">
	`
      )
      .show();
    // console.log(urlPic);
  }
}

renderItems(galleryItems);
listEl.addEventListener("click", onImgClick);

// console.log(galleryItems);
