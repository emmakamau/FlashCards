$(document).ready(function(){
    $("button.title").click(function(e){
        let elem = `p#${e.target.value}`
        let newElem = elem.split("#")
        var hideDesc = document.getElementById(newElem[1])
        console.log(hideDesc)

        if(hideDesc.style.display === "none"){
            hideDesc.style.display = "block";
            p.style.display = "none"
        }else{
            hideDesc.style.display = "block";
        }

        //$(elem).show()
    })
})
