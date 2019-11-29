var user = document.getElementById("user");
var errPhone = document.getElementById("errorPhone");
var pwd = document.getElementById("pwd");
var errPwd = document.getElementById("errorPwd");
var repwd = document.getElementById("repwd")
var errorRepwd = document.getElementById("errorRepwd")
var email = document.getElementById("email");
var errormail = document.getElementById("errorMail");
var place = document.getElementById("place");
var errorplace = document.getElementById("errorPlace");
var login = document.getElementById("login");
var text = document.getElementById("text");
var a=document.getElementsByTagName("a")[0];
    login.onclick=function(){
        if (inpblur() && pwdblur() && repwdblur() && mailblur() && placeblur()) {
            alert("恭喜你！登录成功");
            text.innerText = "登录中..."
            a.href='https://www.baidu.com';
        } else {
            alert("对不起,请重新登录！");
        }
    }
function inpfocus() {
    if (user.value == '请输入手机号') {
        user.value = ''
    }
    user.style.color = "#424242";
}

function inpblur() {
    var reg = /^1\d{10}$/;
    if (user.value == '') {
        errPhone.innerHTML = '手机号不能为空';
        return false;
    } else {
        errPhone.innerHTML = '';
    }
    if (reg.test(user.value) == false) {
        errPhone.innerHTML = '手机号格式不正确';
        return false;
    } else {
        errPhone.innerHTML = '';
    }
    return true;
}

function pwdfocus() {
    if (pwd.value == '请输入密码') {
        pwd.value = ''
    }
    pwd.style.color = "#424242";
}

function pwdblur() {
    var reg = /^\w{6,12}$/;
    if (pwd.value == '') {
        errPwd.innerHTML = '密码不能为空';
        return false;
    } else {
        errPwd.innerHTML = '';
    }
    if (reg.test(pwd.value) == false) {
        errPwd.innerHTML = '密码格式不正确';
        return false;
    } else {
        errPhone.innerHTML = '';
    }
    return true;
}

function repwdfocus() {
    if (repwd.value == '请再次确认密码') {
        repwd.value = ''
    }
    repwd.style.color = "#424242";
}

function repwdblur() {
    var reg = /^\d{6,12}$/;
    if (repwd.value == '') {
        errorRepwd.innerHTML = '确认密码不能为空';
        return false;
    } else {
        errorRepwd.innerHTML = '';
    }
    if (repwd.value != pwd.value && reg.test(repwd.value) == true) {
        errorRepwd.innerHTML = '两次密码不一致';
        return false;
    } else {
        errorRepwd.innerHTML = '';
    }
    if (reg.test(repwd.value) == false) {
        errorRepwd.innerHTML = '密码格式不对哦';
        return false
    } else {
        errorRepwd.innerHTML = '';
    }
    return true;
}

function mailfocus() {
    if (email.value == '请输入邮箱') {
        email.value = ''
    }
    email.style.color = '#424242';
}

function mailblur() {
    var reg = /^\w+@\w+(\.\w+){1,2}$/;
    if (email.value == '') {
        errormail.innerHTML = '邮箱不能为空';
        return false;
    } else {
        errormail.innerHTML = '';
    }
    if (reg.test(email.value) == false) {
        errormail.innerHTML = '邮箱格式不正确';
        return false;
    } else {
        errormail.innerHTML = ''
    }
    return true;
}

function placefocus() {
    if (place.value == '请输入区号') {
        place.value = '';
    }
    place.style.color = '#424242';
}

function placeblur() {
    var reg = /^\d{1,3}-\d{4,8}$/;
    if (place.value == '') {
        errorplace.innerHTML = '区号不能为空';
        return false
    } else {
        errorplace.innerHTML = '';
    }
    if (reg.test(place.value) == false) {
        errorplace.innerHTML = '区号格式不正确';
        return false;
    } else {
        errorplace.innerHTML = '';
    }
    return true;
}