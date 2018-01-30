var lati;
var long;
var x = document.getElementById("curPos");
var pString;

window.onload= function() {
dropBox =  document.getElementById("dropB");


	dropBox.ondragenter = enterDrag;
        dropBox.ondragleave = leaveDrag;
	dropBox.ondragover = ignoreDrag;
	dropBox.ondrop = drop;
}
function enterDrag(e){
        e.preventDefault();
	filter: "#dropB.hover";
}
function leaveDrag(e){
        e.preventDefault();

}
function ignoreDrag(e) {
	e.stopPropagation();
	e.preventDefault();
}

function drop(e){
	e.stopPropagation();
	e.preventDefault();

	var data = e.dataTransfer;
	var files = data.files;

	processFiles(files);

}

function processFiles(files){
	var file = files[0];
	var textType = /text.*/;

	if (file.type.match(textType)) {
		var reader = new FileReader();
		reader.onload = function(e){
			pString = reader.result;

dropBox.innerHTML = "Entered Location:" + pString;






		};
		reader.readAsText(file);
	}


}

function distanceWorker() {
var count++;
var array = pString.split(',');
if(count==1){
            document.getElementById("distance").innerHTML = "<strong><h3>Distance </h3></strong>";
}

    if(typeof(Worker) !== "undefined") {
        if(typeof(distCalc) == "undefined") {
            distCalc = new Worker("haversine.js");
        }
        distCalc.postMessage({"args": [array[0], array[1], lati, long]});

            distCalc.onmessage = function(event) {
            document.getElementById("distance").innerHTML += " "+"["+count+"]: " + Math.round(event.data * 100) / 100+" km<br>";
        };

    } else {
        document.getElementById("distance").innerHTML = "Sorry! No Web Worker support.";
    }
}

function stopWorker() {
    distCalc.terminate();
    distCalc = undefined;
}
