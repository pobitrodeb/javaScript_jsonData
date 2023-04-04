// json object formet 
var student = {
    'name': 'Pobitro Debnath', 
    'roll':  '12',
    'depatment' : 'CSE'
}


//json forment 

var student_json = {
    'name' : 'keyamoni', 
    'roll' : 301983, 
    'depatment' : 'CSE'
}

//Convert Object to Json 

var convert_student_json_data = JSON.stringify(student); 
console.log(convert_student_json_data);


// Convert to Json 
var convert_student_object = JSON.parse(convert_student_json_data); 
console.log(convert_student_object);