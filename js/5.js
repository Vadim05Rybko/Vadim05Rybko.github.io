var bar = document.getElementsByClassName("bar");

for(var i = 0; i<bar.length; i++){
    bar[i].onclick = function(){
        this.classList.toggle("active");
        this.nextElementSibling.classList.toggle("act");
    }
}