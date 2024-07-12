const sectionSelccionaAtaque = document.getElementById("seleccionar-ataque")
const sectionReiniciar = document.getElementById("reiniciar")
const botonCampeonjugador = document.getElementById("boton-CAMPEONES")
const botonFuego = document.getElementById("fuego")
const botonPiedra = document.getElementById("piedra")
const botonHielo = document.getElementById("hielo")
const botonAire = document.getElementById("aire")
const botoReiniciar = document.getElementById("boton-reiniciar")

const sectionSeleccionarCampeon = document.getElementById("seleccionar-campeon")

const spanNomrbeCampeonPadres = document.getElementById("nomrbe-campeon-padres")


const spanCampeonenemigo = document.getElementById("nomrbe-campeon-enmigo")


const spanvidasjugador = document.getElementById("vidas-jugador")
const spanvidasenemigo = document.getElementById("vidas-enemigo")


const nuevoMensaje = document.getElementById("resultado")
const NuevoAtaqueJugador = document.getElementById("ataque-Jugador")
const NuevoAtaqueenemigo = document.getElementById("ataque-Enemigo")
const contenedorTarjetas =document.getElementById("contenedorTarjetas")


let titans = []
let ataqueJugador
let ataqueEnemigo
let opcionTitans 
let inputfiregirl
let inputrockman
let inputicegirl
let inputstorman
let inputdiamantboy
let inputblockboy
let inputdevildark
let vidasJugador = 3
let vidasEnemigo = 3

class Titans{
    constructor(nombre, foto, vida){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataque = []
    }
}
    let firegirl = new Titans('firegirl', './Pictures/firegirl.png', 6)
    let rockman = new Titans('rockman', './Pictures/rockamn.png', 6)
    let icegirl = new Titans('icegirl', './Pictures/icegirl.png', 6)
    let storman = new Titans('storman', './Pictures/storman.png', 6)
    let diamantboy = new Titans('diamantboy', './Pictures/diamantboy.png', 6)
    let blockboy = new Titans('blockboy', './Pictures/Blockboy.png', 6)
    let devildark = new Titans('devildark','./Pictures/Devildark.png', 6)
    
    firegirl.ataque.push(
        {nombre: "🔥", id:"fuego" },
        {nombre: "🔥", id:"fuego" },
        {nombre: "🔥", id:"fuego" },

        {nombre: "🪨", id:"piedra" },
        {nombre: "🧊", id:"hielo" },
        {nombre: "🌪️", id:"aire" },
    )

    rockman.ataque.push(
        {nombre: "🪨", id:"piedra" },
        {nombre: "🪨", id:"piedra" },
        {nombre: "🪨", id:"piedra" },

        {nombre: "🔥", id:"fuego" },
        {nombre: "🧊", id:"hielo" },
        {nombre: "🌪️", id:"aire" },
    )
    
    icegirl.ataque.push(
        {nombre: "🧊", id:"hielo" },
        {nombre: "🧊", id:"hielo" },
        {nombre: "🧊", id:"hielo" },

        {nombre: "🪨", id:"piedra" },
        {nombre: "🔥", id:"fuego" },
        {nombre: "🌪️", id:"aire" },
    )

    storman.ataque.push(
        {nombre: "🌪️", id:"aire" },
        {nombre: "🌪️", id:"aire" },
        {nombre: "🌪️", id:"aire" },

        {nombre: "🪨", id:"piedra" },
        {nombre: "🧊", id:"hielo" },
        {nombre: "🔥", id:"fuego" },
    )
    diamantboy.ataque.push(
        {nombre: "🔥", id:"fuego" },
        {nombre: "🔥", id:"fuego" },
        {nombre: "🔥", id:"fuego" },
        {nombre: "🪨", id:"piedra" },
        {nombre: "🪨", id:"piedra" },
        {nombre: "🪨", id:"piedra" },

        {nombre: "🧊", id:"hielo" },
        {nombre: "🌪️", id:"aire" },
    )
    blockboy.ataque.push(
        {nombre: "🪨", id:"piedra" },
        {nombre: "🪨", id:"piedra" },
        {nombre: "🪨", id:"piedra" },
        {nombre: "🧊", id:"hielo" },
        {nombre: "🧊", id:"hielo" },
        {nombre: "🧊", id:"hielo" },

        
        {nombre: "🔥", id:"fuego" },
        {nombre: "🌪️", id:"aire" },
    )
    devildark.ataque.push(
        {nombre: "🌪️", id:"aire" },
        {nombre: "🌪️", id:"aire" },
        {nombre: "🌪️", id:"aire" },

        {nombre: "🪨", id:"piedra" },
        {nombre: "🧊", id:"hielo" },
        {nombre: "🔥", id:"fuego" },
    )

    titans.push(firegirl,rockman,icegirl,storman,diamantboy,blockboy,devildark)

function iniciarjuego(){
    sectionReiniciar.style.display = "none"
    sectionSelccionaAtaque.style.display = "none"

    titans.forEach((Titans)=>{
        opcionTitans = ` 
        <input type = "radio" name= "CAMPEONES" id= ${Titans.nombre}/ >
        <label class="tarjeta-Titans" for= ${Titans.nombre}/>
            <p>${Titans.nombre}</p> 
            <img src=${Titans.foto} alt=${Titans.nombre} />
        </label>
        `
        contenedorTarjetas.innerHTML += opcionTitans

         inputfiregirl = document.getElementById("Firegirl")
         inputrockman = document.getElementById("rockman")
         inputicegirl = document.getElementById("icegirl")
         inputstorman = document.getElementById("storman")
         inputdiamantboy = document.getElementById("diamantboy")
         inputblockboy = document.getElementById("blockboy")
         inputdevildark = document.getElementById("devildark")   
    })

    botonCampeonjugador.addEventListener("click",seleccionarCampeonJugador)
    
    botonFuego.addEventListener("click",ataqueFuego)
    
    botonPiedra.addEventListener("click",ataquePiedra)
    
    botonHielo.addEventListener("click",ataqueHielo)
    
    botonAire.addEventListener("click",ataqueAire)
    
    botoReiniciar.addEventListener("click" ,reiniciarJuego)



function seleccionarCampeonJugador(){
    
    sectionSeleccionarCampeon.style.display = "none"

    
    sectionSelccionaAtaque.style.display = "flex"

    if(inputfiregirl.checked){
        spanNomrbeCampeonPadres.innerHTML = "firegirl"
    }
    else if(inputrockman.checked){
        spanNomrbeCampeonPadres.innerHTML = "rockman"    
    }
    else if(inputicegirl.checked){
        spanNomrbeCampeonPadres.innerHTML = "icegirl"
    }
    else if(inputstorman.checked){
        spanNomrbeCampeonPadres.innerHTML = "storman"
    }
    else if(inputdiamantboy.checked){
        spanNomrbeCampeonPadres.innerHTML = "diamantboy"
    }
    else if(inputblockboy.checked){
        spanNomrbeCampeonPadres.innerHTML = "blockboy"
    } 
    else if(inputdevildark.checked){
        spanNomrbeCampeonPadres.innerHTML = "devildark"
    }
    else{
        alert("Escoge campeon")
        reiniciarJuego()
    }
    seleccionarCampeonEnemigo()
        

    }
function seleccionarCampeonEnemigo(){
    let campeonaleatorio = aleatorio(1,7)
    
    if (campeonaleatorio == 1){
        spanCampeonenemigo.innerHTML = "firegirl"
    }else if(campeonaleatorio == 2){
        spanCampeonenemigo.innerHTML = "rockman"
    }else if (campeonaleatorio == 3){
        spanCampeonenemigo.innerHTML = "icegirl"
    }else if(campeonaleatorio == 4){
        spanCampeonenemigo.innerHTML = "storman"
    }else if(campeonaleatorio == 5){
        spanCampeonenemigo.innerHTML = "diamantboy"
    }else if(campeonaleatorio == 6){
        spanCampeonenemigo.innerHTML = "blockboy"
    }else {
        spanCampeonenemigo.innerHTML = "devildark"
    }
}
function ataqueFuego(){
    ataqueJugador = "fuego"
    ataqueAleatorioEnemigo()
}
function ataquePiedra(){
    ataqueJugador =  "piedra"
    ataqueAleatorioEnemigo()
}
function ataqueHielo(){
    ataqueJugador = "hielo"
    ataqueAleatorioEnemigo()
}
function ataqueAire(){
    ataqueJugador = "aire"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let juegoAleatorio = aleatorio (1,4)
    if(juegoAleatorio == 1){
        ataqueEnemigo = "fuego"
    }else if( juegoAleatorio == 2){
        ataqueEnemigo = "piedra"
    }else if (juegoAleatorio == 3){
        ataqueEnemigo = "hielo"
    }else {
        ataqueEnemigo = "aire"
    }  
    combate()
}

function combate (){
    
    

    if(ataqueJugador == ataqueEnemigo) {crearMensaje(" Empate🙊 ") 
    }
    else if(ataqueJugador == "fuego" && ataqueEnemigo == "hielo") {crearMensaje(" GANASTE 😍 ")
        vidasEnemigo --
        spanvidasenemigo.innerHTML = vidasEnemigo
     }
     else if(ataqueJugador == "fuego" && ataqueEnemigo == "piedra") {crearMensaje(" GANASTE 😍 ")
        vidasEnemigo --
        spanvidasenemigo.innerHTML = vidasEnemigo
     }
    else if(ataqueJugador == "piedra" && ataqueEnemigo == "hielo") {crearMensaje(" GANASTE 😍 ")
        vidasEnemigo --
        spanvidasenemigo.innerHTML = vidasEnemigo
    }
    else if(ataqueJugador == "piedra" && ataqueEnemigo == "aire") {crearMensaje(" GANASTE 😍 ")
        vidasEnemigo --
        spanvidasenemigo.innerHTML = vidasEnemigo
    }
    else if(ataqueJugador == "hielo" && ataqueEnemigo == "aire") {crearMensaje(" GANASTE 😍 ")
        vidasEnemigo --
        spanvidasenemigo.innerHTML = vidasEnemigo
    }
    else if(ataqueJugador == "aire" && ataqueEnemigo == "fuego") {crearMensaje(" GANASTE 😍 ")
        vidasEnemigo --
        spanvidasenemigo.innerHTML = vidasEnemigo
    }
    else {
        crearMensaje("perdiste😣")
        vidasJugador --
        spanvidasjugador.innerHTML = vidasJugador
    }
    revisarvidas()
}
function revisarvidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("Ganaste Esta Batalla😍")
    }
    else if (vidasJugador == 0){
        crearMensajeFinal("Perdiste La batalla 😣")
    }
}

function crearMensaje(resultado){

    let PrimerAtaqueJugador = document.createElement('p')
    let PrimerAtaqueEnemigo = document.createElement('p')

    nuevoMensaje.innerHTML = resultado
    NuevoAtaqueJugador.innerHTML = ataqueJugador
    NuevoAtaqueenemigo.innerHTML = ataqueEnemigo


    NuevoAtaqueJugador.appendChild(PrimerAtaqueJugador)
    NuevoAtaqueenemigo.appendChild(PrimerAtaqueEnemigo)

}
function crearMensajeFinal(resultadoFinal){
    let nuevoMensaje = document.getElementById("resultado")

    nuevoMensaje.innerHTML = resultadoFinal

    
    botonFuego.disabled = true
    
    botonPiedra.disabled = true
    
    botonHielo.disabled = true
    
    botonAire.disabled = true
    
    sectionReiniciar.style.display = "block"
}
function reiniciarJuego(){
    location.reload()
}
function aleatorio(min, max) {return Math.floor(Math.random() * (max - min + 1) + min)}
}
window.addEventListener("load",iniciarjuego)