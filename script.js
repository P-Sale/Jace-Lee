// Get the modal
var modal = document.getElementById("myModal");
var download = document.getElementById("download")

// Get the image and insert it inside the modal
var img = document.getElementById("photo1");
var modalImg = document.getElementById("img01");
img.addEventListener("click", function(){
  modal.style.display = "block";
  modalImg.src = this.src;

})

var img = document.getElementById("photo2");
var modalImg = document.getElementById("img01");
img.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  })

var img = document.getElementById("photo3");
var modalImg = document.getElementById("img01");
img.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  })

var img = document.getElementById("photo4");
var modalImg = document.getElementById("img01");
img.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  })
/*
var img = document.getElementById("photo5");
var modalImg = document.getElementById("img01");
img.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  })
var img = document.getElementById("photo6");
var modalImg = document.getElementById("img01");
img.addEventListener("click", function(){
    modal.style.display = "block";
    modalImg.src = this.src;
  })

var img = document.getElementById("item7");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var img = document.getElementById("item8");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var img = document.getElementById("item9");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var img = document.getElementById("item10");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var img = document.getElementById("item11");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

var img = document.getElementById("item12");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}
*/
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

var spanDownload = document.getElementById("download");

 //When the user clicks on <span> (x), close the modal
 span.addEventListener("click", function() {
     modal.style.display = "none";
 })

modal.addEventListener("click", function(){
    modal.style.display = "none";
})

// document
//   .getElementById("download")
//   .addEventListener(
//     "click",
//     (event) => (event.target.href = "https://drive.google.com/uc?export=download&id=" + modalImg.alt)
//   );