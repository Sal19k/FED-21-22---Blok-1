var hamburger = document.querySelector("ol li:first-of-type button");
var menu = document.querySelector("#page1 section")
var zoekmenu = document.querySelector("#page1 section:nth-of-type(2)")
var zoek = document.querySelector("ol li:nth-of-type(2) button ");


hamburger.addEventListener("click", uitklap);
zoek.addEventListener("click", uitklapzoek);



function uitklap() {
        console.log("Uitklapmenu");
        menu.classList.toggle("anders");
        hamburger.classList.toggle("kruis");
}

function uitklapzoek() {
        console.log("Uitklapzoek");
        zoekmenu.classList.toggle("zoekuitklap");
        zoek.classList.toggle("kruis");
}



addEventListener("keyup", getInputValue);

function getInputValue(){
        // Selecting the input element and get its value 
        var inputVal = document.getElementById("veld").value;
        var sectiondansen1 = document.querySelector("ol li:nth-of-type(2) button.kruis");
        var sectiondansen2 = document.querySelector("ol li:first-of-type button");
        var body = document.querySelector("body")
        var main = document.querySelector("main")
        var audio = new Audio('music.mp3');
        var laser = new Audio('laser.mp3');
        var laservorm = document.querySelector("div")

        

        
    
    if(inputVal == "doei")
    {
         zoekmenu.classList.toggle("zoekuitklap");
            console.log("ja");
    }

    if(inputVal == "blingbling")
    {
        document.documentElement.style.setProperty('--psblue', '#FFC0CB');
        document.documentElement.style.setProperty('--light', '#FFC0CB');
        document.documentElement.style.setProperty('--dark', '#e75480');
        body.classList.toggle("bling");
        main.classList.toggle("bling");
        console.log("blingbling");
    }

    if(inputVal == "normaal")
    {
        document.documentElement.style.setProperty('--light', '#FFFFFF');
        document.documentElement.style.setProperty('--dark', '#000000');
        document.documentElement.style.setProperty('--psblue', '#07439D');
        document.documentElement.style.setProperty('--psblue2', '#3DAEFC');
        document.documentElement.style.setProperty('--psgray', '#1f1f1f');
        sectiondansen1.classList.remove("dansen");
        sectiondansen2.classList.remove("dansen");
        body.classList.remove("bling");
        main.classList.remove("bling");
        audio.pause();
        console.log("normaal");
    }
    if(inputVal == "dansen")
    {
        sectiondansen1.classList.toggle("dansen");
        sectiondansen2.classList.toggle("dansen");
        console.log("dansen");
        audio.play();
    }
    if(inputVal == "laser")
    {
        laservorm.classList.toggle("vlieg");
        console.log("dansen");
        laser.play();
    }

    }

    
    