$(document).ready(function(){

    $("img.flash-card-img").tooltip()

    $("button.title").click(function(e){
        let elem = `p#${e.target.value}`
        let newElem = elem.split("#")
        let newImg = "img-"+newElem[1]
        var showDesc = document.getElementById(newElem[1]) //What we want to show
        console.log(newImg)
        
        if(showDesc.style.display === "block"){
            showDesc.style.display = "none"
        }else{
            $("p").hide()
            $("img").addClass("centered")
            $("img#"+newImg).removeClass("centered")
            showDesc.style.display = "block" //Display selected button
        }
    })
})
