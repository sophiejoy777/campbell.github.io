var Kick;
var Beat = ["kick.mp3", "kick.mp3", "snare.mp3", "hihat.mp3"];
var record = false;
window.addEventListener("load", function () {
    document.querySelector("#Button1").addEventListener("mousedown", function () { playSample("kick.mp3"); });
    document.querySelector("#Button2").addEventListener("mousedown", function () { playSample("snare.mp3"); });
    document.querySelector("#Button3").addEventListener("mousedown", function () { playSample("hihat.mp3"); });
    document.querySelector("#Button4").addEventListener("mousedown", function () { playSample("F.mp3"); });
    document.querySelector("#Button5").addEventListener("mousedown", function () { playSample("G.mp3"); });
    document.querySelector("#Button6").addEventListener("mousedown", function () { playSample("A.mp3"); });
    document.querySelector("#Button7").addEventListener("mousedown", function () { playSample("C.mp3"); });
    document.querySelector("#Button8").addEventListener("mousedown", function () { playSample("laugh-1.mp3"); });
    document.querySelector("#Button9").addEventListener("mousedown", function () { playSample("laugh-2.mp3"); });
    document.querySelector("#Play").addEventListener("click", PlayBeat);
    document.querySelector("#Record").addEventListener("click", RecordBeat);
    document.querySelector("#Delete").addEventListener("click", DeleteBeat);
});
function playSample(myMP3) {
    var sound = new Audio(myMP3);
    sound.play();
    if (record == true) {
        Beat.push(myMP3);
    }
}
function PlayBeat() {
    var index = 0;
    /* Start */
    if (document.getElementById("Play").classList.contains("fa-play")) {
        document.getElementById("Play").classList.remove("fa-play");
        document.getElementById("Play").classList.add("fa-pause");
        Kick = setInterval(myBeat, 300);
        record = false;
        console.log("Play");
        /* Stop */
    }
    else {
        document.getElementById("Play").classList.remove("fa-pause");
        document.getElementById("Play").classList.add("fa-play");
        clearInterval(Kick);
        console.log("Pause");
    }
    /* Beat */
    function myBeat() {
        playSample(Beat[index]);
        index += 1;
        if (index > (Beat.length - 1))
            index = 0;
        console.log(Beat[index]);
    }
}
function DeleteBeat() {
    Beat.length = 0;
    console.log("This is deleting the Beat");
}
function RecordBeat() {
    record = true;
    console.log("This is recording a new Beat");
}
//# sourceMappingURL=A8.js.map