$(document).ready(function(){
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

    //$(".new-address").each(function(){},


    // $("button.buttonmine").click(function(e){
    //     var myDesc = document.getElementById("five")
    //     if(myDesc.style.display === "block"){
    //         myDesc.style.display = "none"
    //         console.log("Hidden")
    //     }else{
    //         myDesc.style.display = "block"
    //         console.log("Displayed")
    //     }
    // })
})
