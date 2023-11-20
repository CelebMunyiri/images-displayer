"use strict"
const imageContainer=document.querySelector('.image-container')
axios
.get(
  "https://pixabay.com/api/?key=40785606-baaa6c0a5821ddefc23a49697",
 
)
.then((response) => {
    
  console.log(response.data.hits);
  const images=response.data.hits
  let html=''
  images.forEach(image => {
    const thisImageHeight=`image-${image.id}`
    html+=`
    <div class='image-item'>
    <img class='image' src=${image.previewURL} alt=''image/>
    </div>
    `
    console.log(image.imageHeight)
   // thisImageHeight.height=`${image.imageHeight}`
    imageContainer.innerHTML=html

  });
}
)