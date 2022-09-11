let count = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 4000)

function nextImage(){
    count++;
    if(count>4){
       count = 1;
    }

    document.getElementById("radio"+count).checked = true;
}

let count1 = 11;
document.getElementById("radio11").checked = true;

setInterval( function(){
    nextImage2();
}, 4000)

function nextImage2(){
    count1++;
    if(count1>30){
       count1 = 11;
    }

    document.getElementById("radio"+count1).checked = true;
}