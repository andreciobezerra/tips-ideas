let index = 1;

const transistion = () => {
    let images = document.querySelectorAll('.photos')
    if(index === images.length){
        index = 0;
    }
    
    images.forEach( img => img.style.display = "none")

    images[index].style.display = "block"
    index+=1
};

let trans = setInterval(transistion, 3000)