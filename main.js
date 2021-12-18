function loadjson(file,callback){
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET",file,true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200"){
            callback(xhr.responseText);
        }
        
    };
    xhr.send(null);
}
loadjson("data.json",function(text){
    var data = JSON.parse(text);
    console.log(data);
    display(data.cards)
})

function display(mb){
    var deck=document.querySelector(".card-deck")
    deck.classList.add("text-center")
console.log(deck)


for(var i in mb){
    // console.log(mb[i])
    var caddiv=document.createElement("div")
    caddiv.classList.add("card")
    var cadimg=document.createElement("img")
    
        cadimg.src=mb[i].img
        caddiv.appendChild(cadimg)
        deck.appendChild(caddiv)
     
        // NAME AREA
        var cname=document.createElement("h2")
        cname.textContent=mb[i].name;
        caddiv.appendChild(cname)

        //OS AREA
        var rate=document.createElement("h3")
        rate.textContent=mb[i].OS;
        caddiv.appendChild(rate)

        //RATE AREA
        var rate=document.createElement("h3")
        rate.textContent=mb[i].RATE;
        caddiv.appendChild(rate)

        //OFFER AREA
        var rate=document.createElement("h3")
        rate.textContent=mb[i].OFFER;
        caddiv.appendChild(rate)

        //BUTTON AREA
        var btn=document.createElement("button")
        btn.classList.add("btn-success")
        btn.textContent=mb[i].BUTTON;
        caddiv.appendChild(btn)
}
}