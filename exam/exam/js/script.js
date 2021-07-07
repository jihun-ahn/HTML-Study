function signup(){
    var pwd = document.getElementById('pwd').value;
    var cPwd = document.getElementById('cPwd').value;
    if(pwd==cPwd){
        return true;
    }else{
        alert('비밀번호가 일치 하지 않습니다.');
        return false;
    }
}

function edit(){
    alert('수정페이지로 이동합니다.');
    location.href='write.html';
}

function remove(){
    alert('게시글을 삭제합니다.');
    location.href='fboard.html';
}

function goback(){
    alert('게시글 목록으로 이동합니다.');
    location.href='fboard.html';
}


function gugudan(){
    var dan = document.getElementById('dan').value;
    var gugudan = document.getElementById('gugudan');
    gugudan.innerHTML='';
    for(var i=1;i<10;i++){
        gugudan.innerHTML+=dan+'X'+i+'='+(dan*i)+'<br>';
    }
}