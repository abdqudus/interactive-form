var clickedButton=document.querySelectorAll(".btn");
var rating

for (var i = 0; i < clickedButton.length; i++) {
    clickedButton[i].addEventListener("click", function () {
        rating=parseInt(this.innerHTML)-1;
        console.log(rating)
   clickedButton[rating].classList.add("selected"); 
    });
}
var submit=document.querySelector(".submit");
    submit.addEventListener("click", function () {
        if (rating != undefined) {
        document.querySelector(".inner-div").classList.add("hide");
           document.querySelector(".inner-div2").classList.remove("hidden");
           document.querySelector(".main-div").classList.add("grid");
          
           document.querySelector("#Output").innerHTML="You selected "+`${rating+1}`+" out of 5";
           
    }});
   
   