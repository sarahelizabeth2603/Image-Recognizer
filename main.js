//https://teachablemachine.withgoogle.com/models/pABi3vsnG/

Webcam.set({
    width : 350,
    height : 300,
    image_format : "png",
    png_quality : 90
});

Webcam.attach("#camera");

function Take_snapShot(){
    Webcam.snap(function(data_uri){
        document.getElementById("Result").innerHTML = "<img id='captured_image' src="+data_uri+">"

    });
}

console.log("ml5 version : ", ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/pABi3vsnG/model.json" , modelloaded);

function modelloaded(){
    console.log("Model Is Loaded ");
}

function check(){
    img = document.getElementById("captured_image");
    classifier.classify(img,Gotresult);
}

function Gotresult(error , result){
    if(error){
        console.log(error);

    }
    else{
        console.log(result);
        document.getElementById("Object_name").innerHTML = result[0].label;
        document.getElementById("Object_accuracy").innerHTML = result[0].confidence.toFixed(3);
    }

}