$(document).ready(function(){

    $("img.flash-card-img").tooltip()

    $("button.title").click(function(e){
        let elem = `p#${e.target.value}`
        let newElem = elem.split("#")
        var showDesc = document.getElementById(newElem[1]) //What we want to show
        
        if(showDesc.style.display === "block"){
            showDesc.style.display = "none"
        }else{
            $("p").hide()
            showDesc.style.display = "block" //Display selected button
        }
    })
})
