import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryPictures = document.querySelector('.gallery')

const pictures = []

galleryItems.forEach(element => {
	const galleryElements = document.createElement('div')
	galleryElements.className = 'gallery__item'
	const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = element.original
	const galleryImage = document.createElement('img')
    galleryImage.className = 'gallery__image'
    galleryImage.src = element.preview;
    galleryImage.setAttribute('data-source', element.original)
    galleryImage.alt = element.description;

	galleryElements.append(galleryLink)
	galleryLink.append(galleryImage)
	pictures.push(galleryElements)
})

galleryPictures.append(...pictures)

galleryPictures.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
		return
	}

    const selectedImage = e.target.getAttribute('data-source')

    const instance = basicLightbox.create(`
    <img src="${selectedImage}" width="800" height="600">
`)
    instance.show()
    
    galleryPictures.addEventListener('keydown', e => {
		if (e.key === 'Escape') {
			instance.close()
		}
	}, {once: true})
	// galleryPictures.removeEventListener('keydown', e => {
	// 	if (e.key === 'Escape') {
	// 		instance.close()
	// 	}
	// })

})
