function shout(string){
    return string.toUpperCase();    
}
function whisper(string){
    return string.toLowerCase();
}
function logShout (string){
    console.log(string.toUpperCase());
}
function logWhisper (string){
    console.log(string.toLowerCase());
}

function sayHiToHeadphonedRoommate (string) {
    let lowercase = "hello";
    let uppercase = "HELLO";
    console.log(string);
    if (string === lowercase) {
        return `I can\'t hear you!`;
    }
    else if (string === uppercase) {
        return `YES INDEED!`;
    }
    else if (string === "Let's have dinner together!") {
        return`I would love to!`;
    }
}



