const texts = ['developer', 'designer', 'speaker', 'teacher'];
var count = 0;
const text = document.getElementById('text');
function type(){
    if(count < texts.length){
        text.innerHTML = texts[count];
        count++;
    }
    else{
        count=0;
    }
}
setInterval(type, 1000);
