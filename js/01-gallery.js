import { galleryItems } from "./gallery-items.js";
// Change code below this line

const listEl = document.querySelector(".gallery");
let instance = null;

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

    instance = basicLightbox.create(
      `
		<img width="1400" height="900" src="${urlPic}">
	`,
      {
        onShow: (instance) => {
          document.addEventListener("keydown", onInstanceKeydown);
        },
        onClose: (instance) => {
          document.removeEventListener("keydown", onInstanceKeydown);
        },
      }
    );
    instance.show();
  }
}

function onInstanceKeydown(e) {
  if (e.code !== "Escape") return;
  else {
    instance.close();
  }
}

renderItems(galleryItems);
listEl.addEventListener("click", onImgClick);
