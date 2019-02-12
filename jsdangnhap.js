function getInfo() {
    var ho = document.getElementById("ho").value;;
    var ten = document.getElementById("ten").value;;
    var email = document.getElementById("email").value;;
    var mk = document.getElementById("mk").value;;
    var mkhai = document.getElementById("mkhai").value;;
    // kiem tra ho
    if (ho == ""){
        document .getElementById("errorho").innerHTML="Bạn chưa nhập họ";
    }else {
        document .getElementById("errorho").innerHTML="";
    }
    if (ten == ""){
        document .getElementById("errorten").innerHTML="Bạn chưa nhập Tên";
    }else {
        document.getElementById("errorten").innerHTML = "";
    }
    if (email == ""){
        document .getElementById("erroremail").innerHTML="Bạn chưa nhập email";
    }else {

        document.getElementById("erroremail").innerHTML = "";
    }
    if (mk == ""){
        document .getElementById("errormk").innerHTML="Bạn chưa nhập Mật Khẩu";
    }else {
        document.getElementById("errormk").innerHTML = "";
    }
    // kiem tra hai mat khau
    if(mk === mkhai){
        document.getElementById("erroemkhai").innerHTML="";
    }else {
        document.getElementById("errormkhai").innerHTML="Nhập lại mật khẩu chưa chính xác!"
    }

}
function removeCheckForm (id){
    document.getElementById(id).style.border="1px solid #000000";
    contentPropover(id);
}
function checkForm(id) {
    var ho = document.getElementById(id).value;;
    if(ho == ""){
      document.getElementById(id).style.border = color;

    }else {
        document.getElementById(id).style.border = "1px solid #000000";
    }
    // var email = document.getElementById(id).value;;
    // if (email == "@"){
    //     document.getElementById(id).style.border = "1px solid #000000";
    // }else{
    //     document.getElementById(id).style.border = color;
    // }
}

function contentPropover(id) {
    switch (id) {
        case "ho":
            propoverCheckForm(id, 'Họ bạn là gì ?');
            break;
        case "email":
            propoverCheckForm(id, 'Email or số điện thoại là gì');
            break;
        case "mk":
            propoverCheckForm(id, 'Mật khẩu là gì');
            break;
        case "ten":
            propoverCheckForm(id ,'Tên bạn là gì?');
        case "mkhai":
            propoverCheckForm(id, 'nhập lại mật khẩu')
        default:
            break;
    }

}

var color = "1px solid #FF0000";
function propoverCheckForm(id,content) {
    $("#" + id).popover({content: content, placement:'bottom', trigger: 'focus'})
}
function checkmk() {
    var count = 0;

    var patternNotNumber = /[^0-9]/g;
    var password = document.getElementById("mk").value;
    if(password.charAt(0) === password.charAt(0).toUpperCase() && password.charAt(0).length > 0 && password.charAt(0).match(patternNotNumber)){
        count ++ ;

    }else{
        // count --;
        // document.getElementById("red").classList.remove("do");
    }
    if(password.length > 8){
        count ++ ;
        // document.getElementById("cam").classList.add("cam");
    }else {
        // count --;
        // document.getElementById("cam").classList.remove("cam");
    }
    var patternNumber = /[0-9]/g;
    if(password.match(patternNumber) && password.charAt(0).match(patternNotNumber)){
        // document.getElementById("vang").classList.add("vang");
        count ++ ;
    }else {
        // count -- ;
        // document.getElementById("vang").classList.remove("vang");
    }
    if(password.match(/\W/)){
        // document.getElementById("xanh").classList.add("xanh");
        count ++ ;
    }else {
        // document.getElementById("xanh").classList.remove("xanh");
    }
    document.getElementById("cam").classList.remove("cam");
    document.getElementById("vang").classList.remove("vang");
    document.getElementById("red").classList.remove("do");
    document.getElementById("xanh").classList.remove("xanh");
    if(count == 1){
        document.getElementById("red").classList.add("do");
    }else if(count == 2){
        document.getElementById("cam").classList.add("cam");
        document.getElementById("red").classList.add("do");
    }else if(count == 3){
        document.getElementById("vang").classList.add("vang");
        document.getElementById("cam").classList.add("cam");
        document.getElementById("red").classList.add("do");
    }else if(count == 4){
        document.getElementById("xanh").classList.add("xanh");
        document.getElementById("vang").classList.add("vang");
        document.getElementById("cam").classList.add("cam");
        document.getElementById("red").classList.add("do");
    }
}

