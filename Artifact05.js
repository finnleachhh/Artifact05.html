var myImages =["https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/surprises_about_dogs_and_cats_slideshow/getty_rm_photo_of_small_dog_on_pink_chair.jpg","https://www.akcpetinsurance.com/res/akc/images/icons/home/home_dog.png","https://scx2.b-cdn.net/gfx/news/hires/2020/dog.jpg","https://assistancedogsinternational.org/clientuploads/directory/callouts/Liz_Kaye_-_LKW4590R_1500pxR72.jpg, "https://www.bluecross.org.uk/sites/default/files/d8/styles/content_large_1000px_wide_/public/assets/images/Buster%20-%20dog%20myths2.jpg?itok=a7mp9ob-"];
var captionImages =["Laugh","Love","Lunch","Happiness","Family"];

var index=0; 

 function updateImage(){
 document.getElementById("slideshow").src = myImages[index];
 document.getElementById("slideshow").alt= captionImages[index];
 document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
 if (myImages.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 
function back(){
 if (index===0)
 index=myImages.length-1;
 else
 index--;
 
 updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 
