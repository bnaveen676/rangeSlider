document.querySelector('#custom-slider').addEventListener('input',function(event){
let value = event.target.value;
document.getElementById('current-value').innerHTML = value;
document.getElementById('current-value').classList.add('active');
document.getElementById('current-value').style.left = `${value/2}%`
});

document.querySelector('#custom-slider').addEventListener('blur',function(event){
    document.getElementById('current-value').classList.remove('active');
});