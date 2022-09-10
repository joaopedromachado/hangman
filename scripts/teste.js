const input = document.querySelector("#respostas > form > label > input");
const form = document.querySelector("#respostas > form");

document.body.addEventListener("keydown", (ev)=>{
    if(ev.keyCode === 49){
        input.value = "bola bolo doce suco"
        form.requestSubmit();
        input.value = "";
    }
    else if(ev.keyCode === 50){
        input.value = "lima coco crem cald"
        form.requestSubmit();
        input.value = "";
    }
    else if(ev.keyCode === 51){
        input.value = "rina choc orta anja"
        form.requestSubmit();
        input.value = "";
    }
    else if(ev.keyCode === 52){
        input.value = "bana rapa anjo inho"
        form.requestSubmit();
        input.value = "";
    }
    else if(ev.keyCode === 53){
        input.value = "inha anha alha ilho"
        form.requestSubmit();
        input.value = "";
    }
    else if(ev.keyCode === 54){
        input.value = "olho ango anga ment"
        form.requestSubmit();
        input.value = "";
    }
    else if(ev.keyCode === 55){
        input.value = "eiro eite eito ante"
        form.requestSubmit();
        input.value = "";
    }
    else if(ev.keyCode === 56){
        input.value = "ente tegr ambo cada"
        form.requestSubmit();
        input.value = "";
    }
    else if(ev.keyCode === 57){
        input.value = "empa ouve raba arro"
        form.requestSubmit();
        input.value = "";
    }
    else if(ev.keyCode === 48){
        input.value = "chá sal pão ovo"
        form.requestSubmit();
        input.value = "";
    }
    else if(ev.keyCode === 57){
        input.value = "mel paod chad mara"
        form.requestSubmit();
        input.value = "";
    }
    else{console.log("error")}

})