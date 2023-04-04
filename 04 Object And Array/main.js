
// Ajax 
var xmlhtp = new XMLHttpRequest(); 
xmlhtp.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200)
    {
        var data = (this.responseText);
      
        jsonData(data);
    }
}
xmlhtp.open("Get", "data.json", true); 
xmlhtp.send(); 

function jsonData(json_object)
{
    var javascript_object = JSON.parse(json_object);
    // console.log(javascript_object);
    for(x in javascript_object.person){
        var persons = javascript_object.person; 
        for (y in persons[x]) {
            console.log(persons[x][y]);
        }
    }
}