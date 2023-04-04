var person = {
    name    : "pobitro",  //Data-type : string
    age     : 23,  //Data-type : number
    town    : 'Thakurgon',   //Data-type : string
    marrid  : false,  //Data-type : bollen
    dob     : '1-98-2001',  //Data-type : date -formet
    test_null : null,  //Data-type : null
    test_undifiend : undefined,  //Data-type : undifined 

    great:function(){
        console.log(`Hello' ${this.name}`)
    }
};

var person_json = JSON.stringify(person);
console.log(person_json)