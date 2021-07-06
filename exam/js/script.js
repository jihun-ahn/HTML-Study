function gugudan(){
    var gugudan = document.getElementById('dan').value;
    var output = document.getElementById('output');
    output.innerHTML = '';
    for(var i=1;i<=9;i++){
        output.innerHTML += gugudan+'X'+i+'='+(gugudan*i)+"<br>";
    }
}