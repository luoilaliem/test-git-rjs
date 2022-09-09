var button = document.getElementById("button1").onclick = function(){
    var change = document.getElementById("change");
change.textContent = " em em";
change.style.color = "red";
}
var person = {
    name: "loc",
    age: 18,
}
function tong(n){
    var tong=0;
    for(let i=0; i<n; i++){
        if(i%2 != 0){
            tong+=i;
        }
    }
}
var arr1 = [1,2,3,4];
var arr2 = arr1.filter(arr => arr%2 ==0);
console.log(arr2);
function human(name){}
human.prototype.age = "18";
var human1 = new human();
console.log(human1.age); 
