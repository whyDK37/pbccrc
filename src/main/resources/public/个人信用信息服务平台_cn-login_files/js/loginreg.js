function changkb1() {
    var pwd = document.getElementById("password");
    _skb1.showSoftKB(pwd);
}


//ҳ��Ԫ���û���¼����ʽ����
/*  Ҫ�󣺵�¼����6-16λ���֡���ĸ����_������-������/�����    */
function checkLoginName(){
    var loginName = $.trim($("#loginname").val());
    var reg = new RegExp("^[a-zA-Z0-9\-_/]*$");
    if(loginName.length < 1 ){
        $("#loginNameInfo").text("��¼������Ϊ�ջ�ո�");
        $("#loginNameInfo").removeClass("yes").addClass("no");
        return false;
    }if(loginName.length < 6   ){
        $("#loginNameInfo").text("��¼������С��6λ�ַ�");
        $("#loginNameInfo").removeClass("yes").addClass("no");
        return false;
    }else if(loginName.length > 16){
        $("#loginNameInfo").text("��¼�����ܴ���16λ�ַ�");
        $("#loginNameInfo").removeClass("yes").addClass("no");
        return false;
    }else if(!reg.test(loginName)){
        $("#loginNameInfo").text("��¼��ֻ�ܰ�����ĸ�����֡�_��-��/");
        $("#loginNameInfo").removeClass("yes").addClass("no");
        return false;
    }else{
        $("#loginNameInfo").text(" ");
        $("#loginNameInfo").removeClass("no").addClass("yes");
        return true;
    }
}

//ҳ��Ԫ���û���½�����ʽ����
/*Ҫ�����볤����6-20���ַ����������֡�Сд��ĸ�ʹ�д��ĸ,���ٰ�������  */
function checkPassword(){
    var password =  $.trim($("#password").val());
    var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]+$/;
    if(password.length < 1 ){
        $("#passwordInfo").text("���벻��Ϊ�ջ�ո�");
        $("#passwordInfo").removeClass("yes").addClass("no");
        return false;
    }else if(password.length < 6){
        $("#passwordInfo").text("���벻��С��6λ�ַ�");
        $("#passwordInfo").removeClass("yes").addClass("no");
        return false;
    }else if(password.length > 20){
        $("#passwordInfo").text("���벻�ܳ���20λ�ַ�");
        $("#passwordInfo").removeClass("yes").addClass("no");
        return false;
    }/*else if(!reg.test(password)){
     $("#passwordInfo").text("����ֻ��ʹ�����ֺ���ĸ���ұ���ͬʱ�������ֺ���ĸ");
     $("#passwordInfo").removeClass("yes").addClass("no");
     return false;
     }*/
    $("#passwordInfo").text("");
    $("#passwordInfo").removeClass("no").addClass("yes");
    return true;
}

//ҳ��Ԫ�� ͼ����֤�����
function checkImageCode(){
    if (document.getElementById('_@IMGRC@_').value == '') {
        $("#imageCodeInfo").text("��֤�벻��Ϊ�ջ�ո�");
        $("#imageCodeInfo").removeClass("yes").addClass("no");
        return false;
    }
    $("#imageCodeInfo").text("");
    $("#imageCodeInfo").removeClass("no").addClass("yes");
    return true;
}

//���ύǰ����
function check(obj){
    return checkLoginName() && checkPassword() && checkImageCode();
}