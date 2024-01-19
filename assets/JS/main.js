//fruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani! Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
//  -Trovare l'orario da cui  si parte con una variabile.
//  -Capire da quella come trovare i millisecondi che mi staccano dalle 9:30
//  -Da li andare ad usare setInterval per creare il conto alla rovescia  utlizzando un ciclo for con il "--"

const dayTomorrow = new Date("jan 20, 2024 9:30:00").getTime();

console.log(dayTomorrow);

const countdown = setInterval(function(){
    const dayToday = new Date().getTime()

    let timeMinus = dayTomorrow - dayToday

    let hours = Math.floor(timeMinus % (1000*60*60*24) / (1000*60*60))
    let minutes = Math.floor(timeMinus % (1000*60*60) / (1000*60))
    let seconds = Math.floor(timeMinus % (1000*60) / 1000)

    console.log("ore: " + hours, "minuti: " + minutes, "secondi: " + seconds)

    if (timeMinus < 0){
        clearInterval(countdown)
    }
}, 1000)


