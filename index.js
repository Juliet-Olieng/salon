function toggleMobileMenu(element) {
    element.classList.toggle('active');
  }
//   document.addEventListener("DOMContentLoaded", function(event) {
//     var currentIndex = 0;
//     var images = document.querySelectorAll(".img");
    
//     function showImage(index) {
//        if (index >= images.length) {
//           index = 0;
//        } else if (index < 0) {
//           index = images.length - 1;
//        }
       
//        for (var i = 0; i < images.length; i++) {
//           images[i].style.display = "none";
//        }
       
//        images[index].style.display = "block";
//     }
    
//     function nextImage() {
//        currentIndex++;
//        showImage(currentIndex);
//     }
    
//     function previousImage() {
//        currentIndex--;
//        showImage(currentIndex);
//     }
    
//     setInterval(nextImage, 3000); // Change slide every 3 seconds
    
//     showImage(currentIndex); // Display initial image
//  });