
const imagen = document.querySelector("#imagen");

imagen.addEventListener("click", () => { 
    if (imagen.style.borderStyle === "solid"){ 
        
    imagen.style.border ="none";
        
    }else(imagen.style.border="red 2px solid")
    
});



//segunda parte

let stikeruno = document.querySelector('#stikeruno');
let stikerdos = document.querySelector('#stikerdos');
let stikertres = document.querySelector('#stikertres');
let totalstiker = document.querySelector('#totalstiker');
const btnstikers = document.querySelector('#btnstikers');

btnstikers.addEventListener('click',() =>{
    let primero = Number(stikeruno.value);
    let segundo = Number(stikerdos.value);
    let tercero = Number(stikertres.value);
    let numerostikers = primero+segundo+tercero;
    
    if (numerostikers <= 10){
        totalstiker.innerHTML= `<b>¡Excelente! Has elegido ${numerostikers} stickers </b>` ;
        totalstiker.style.color = "white";
    return;
}
    if (numerostikers > 10){
        totalstiker.innerHTML= `<b>Has elegido ${numerostikers} stickers. Debes llevar menos de 10.</b>`;
        totalstiker.style.color = "Black";
    return;
}
});

//tercera parte 


let option1 =document.querySelector("#option1")
let option2 =document.querySelector("#option2")
let option3 =document.querySelector("#option3")
let resultadopassword =document.querySelector("#resultadopassword")
let btnpassword =document.querySelector("#btnpassword")


btnpassword.addEventListener('click',() =>{
    let passuno = option1.value;
    let passdos = option2.value;
    let passtres = option3.value;
    let password = passuno + passdos + passtres;


    if (password === "911"){
        resultadopassword.innerHTML = "<b>Password Correcto</b>";
        resultadopassword.style.color = "white";
    return; 
    }
    if (password === "714" ){
        resultadopassword.innerHTML = "<b>Password Correcto</b>";
        resultadopassword.style.color = "white";
    return;
    }
    if (password != "911" || "714"){
        resultadopassword.innerHTML = "<b>Password  Incorrecto</b>";
        resultadopassword.style.color = "black";
    return;
    }
})