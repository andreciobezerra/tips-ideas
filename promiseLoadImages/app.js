const loadImage = (url) => {
  return new Promise((resolve, reject) => {
    let image = new Image()
    image.src = url

    image.onload = () => resolve(image)
    image.onerror = () => reject(new Error('Could not load image at ' + url))
  })
}

const addImage = (img) => {
  let newImage = document.createElement('img')
  newImage.src = img.src
  newImage.style = 'width: 100px; height:200px'
  document.body.appendChild(newImage)
}

let images = ['./images/01.jpg', './images/02.jpg', './images/03.jpg','./images/04.jpg']

images.forEach(img => {
    loadImage(img)
    .then(resolvedImg => addImage(resolvedImg))
    .catch((error) => console.error(error))
})
