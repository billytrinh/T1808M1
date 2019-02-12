var x="";
function display(id) {
    return document.getElementById(id);
}
function set_num(num) {
    x+=num;
    display('kq').value=x
}
function xoa() {
    x="";
    display('kq').value=x;
}
function ketqua() {
    display('kq').value=eval(display('kq').value);
}