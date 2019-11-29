var oLogin = document.getElementsByClassName('btn-login')[0],
    oUser = document.getElementsByClassName('user')[0],
    oKey = document.getElementsByClassName('key')[0],
    oError = document.getElementsByClassName('error')[0],
    regUser = /^[1]\d{10}$/g,
    regKey = /^[A-Z]\w{5,16}$/g;
oLogin.addEventListener('click', function () {
    var username = oUser.value;
    var password = oKey.value;
    if (regUser.test(username) && regKey.test(password)) {
        oLogin.innerText = "登录中...";
        window.alert('恭喜你，登录成功！');
    } else {
        oError.classList.remove('hide');                    
    }
    if (regUser.test(username) || regKey.test(password)) {
        oError.classList.remove('hide');
    }
    document.getElementsByTagName('ul')[0].addEventListener('click',function(){
        oLogin.innerText="登录";
        oError.classList.add('hide');
    })

})
