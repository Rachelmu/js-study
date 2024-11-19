
function myCreate(obj){
    function Foo() {};
    Foo.prototype = obj;
    return new Foo()
}


let people = {
    myName: 'chailo',
    age: 12,
    sex: 'female'
}
let me = Object.create(people)
for(key in me){
    console.log(key+':'+me[key])
}