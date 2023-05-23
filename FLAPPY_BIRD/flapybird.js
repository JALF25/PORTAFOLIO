//Variables
var contexto=document.getElementById("lienzoflapybird").getContext("2d")
var FPS=60
var score=0
var gravedad = 1.5
var personaje={
    x:25,
    y:150,
    w:50,
    h:50
}

var tuberias= new Array()
tuberias[0]={
    x:contexto.canvas.width,
    y:0
}
//personalizaciones
contexto.canvas.width=300 
contexto.canvas.height=530

//Audios
var punto=new Audio()
punto.src="audios/punto.mp3"

//Imagenes
var bird= new Image()
bird.src="imagenes/bird.png"

var fondo= new Image()
fondo.src="imagenes/fondo.png"

var tuberia= new Image() 
tuberia.src="imagenes/tuberia.png"

var tuberia2= new Image()
tuberia2.src="imagenes/tuberia2.png"

var suelo= new Image()
suelo.src="imagenes/suelo.png"


//Funciones
    //Saltar
function subir(){
    personaje.y-=35
}

    //Blucle
setInterval(loop,1000/FPS)
function loop(){
    contexto.clearRect(0,0,300,530)
    //Fondo
    contexto.drawImage(fondo,0,0)
    contexto.drawImage(suelo,0,contexto.canvas.height-suelo.height)
    //Personaje
    contexto.drawImage(bird,personaje.x,personaje.y )
    //Tuberias
    for(var i=0;i<tuberias.length;i++){
        var constante=tuberia.height+80
        contexto.drawImage(tuberia,tuberias[i].x,tuberias[i].y)
        contexto.drawImage(tuberia2,tuberias[i].x,tuberias[i].y+constante)
        tuberias[i].x--
        if(tuberias[i].y+tuberia.height< 80){
            tuberias[i].y=0
        }
        if(tuberias[i].x==150){
            tuberias.push({
                x:contexto.canvas.width,
                y:Math.floor(Math.random()*tuberia.height)-tuberia.height
            })
        }

        //Colision
        if(personaje.x+bird.width>=tuberias[i].x && 
            personaje.x<=tuberias[i].x+tuberia.width && 
            (personaje.y<=tuberias[i].y+tuberia.height || 
                personaje.y+bird.height>=tuberias[i].y+constante)||
                personaje.y+bird.height>=contexto.canvas.height-suelo.height){
            location.reload()
        }

        if(tuberias[i].x==50){
            score++
            punto.play()
        }
    }
    //Condiciones
    personaje.y+=gravedad
    contexto.fillStyle="rgba(0,0,0,1)"
    contexto.font="25px Arial"
    contexto.fillText("Score: "+score,0,contexto.canvas.height-40)

}


//Eventos
window.addEventListener("keydown",subir)
