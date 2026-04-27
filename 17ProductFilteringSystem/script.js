function filterProducts(category){
    let items = document.querySelectorAll(".product");

    items.forEach(function(item){
        if(category==="all"){
            item.style.display = "block";
        }
        else if(item.classList.contains(category)){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }
    });
}