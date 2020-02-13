let index = 1;

const transistion = (step = 1) => {
  let card = document.querySelectorAll('.card')
  if (index === card.length || index > card.length ) {
    index = 0;
  }

  if(index < 0){
    index= step + card.length
  }

  
  card.forEach(img => img.style.display = "none")

  card[index].style.display = "block"
  index += step
};

let trans = setInterval(transistion, 5000)
