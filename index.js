function shout(string){
    return string.toUpperCase();
}

function whisper(string){
    return  string.toLowerCase();
}

function logShout(string){
    let upper = string.toUpperCase();  
    console.log(upper)
      
}

function logWhisper (string){
    let lower = string.toLowerCase();
    console.log(lower)
}

function sayHiToHeadphonedRoommate(string){
    if (string === string.toLowerCase()){
        return "I can't hear you!"
    }
    else if (string === string.toUpperCase()){
        return "YES INDEED!"
    }
    else if (string === "Let's have dinner together!"){
        return "I would love to!"
    }
}
