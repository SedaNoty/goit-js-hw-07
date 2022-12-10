import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryPictures = document.querySelector('.gallery')
const pictures = []

galleryItems.forEach(element => {
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = element.original
	const galleryImage = document.createElement('img')
	galleryImage.className = 'gallery__image'
	galleryImage.src = element.preview
	galleryImage.setAttribute('title', element.description)
	galleryImage.alt = element.description

	galleryLink.append(galleryImage)
	pictures.push(galleryLink)
})
galleryPictures.append(...pictures)

new SimpleLightbox('.gallery a', {
    captionsData: `alt`,
	captionDelay: 250,
});
