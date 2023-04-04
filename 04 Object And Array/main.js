
// Ajax 
var xmlhtp = new XMLHttpRequest(); 
xmlhtp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200)
    {
    console.log(this.responseText);
    }
}
xmlhtp.open("Get", "data.json", true); 
xmlhtp.send(); 
