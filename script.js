
const arr = [{ id: 1, name: "john", age: "18", profession: "developer" }, { id: 2, name: "jack", age: "20", profession: "developer" }, { id: 3, name: "karen", age: "19", profession: "admin" },{ id: 4, name: "Rohan", age:"20",profession: "admin"}]


function toggel() {
    document.getElementById('profession').className = "professional";
}


function changeAction1(){
    document.getElementById('filter').setAttribute("onclick","filterDeveloper()");
}

function changeAction2(){
    document.getElementById('filter').setAttribute('onclick','filterAdmin()');
}


const newArr1 = arr.filter(arrItem => {
       return arrItem.profession =='developer';
});
console.log(newArr1);

const newArr2 = arr.filter(arrItem => {
    return arrItem.profession =='admin';
});
console.log(newArr2);

function filterDeveloper(){
    document.getElementById('profession').className = "profession-list";
    for(let i=0;i<newArr1.length;i++){
        document.getElementById('result'+i).className="displayActive";
        let output=i+1+"."+" "+"Name:"+newArr1[i].name+" "+"Profession:"+newArr1[i].profession+"  "+"Age:"+newArr1[i].age;
        document.getElementById('result'+i).innerHTML=output;
    }
}

function filterAdmin(){
    document.getElementById('profession').className = "profession-list";
    for(let i=0;i<newArr2.length;i++){
        document.getElementById('result'+i).className="displayActive";
        let output=i+1+"."+" "+"Name:"+newArr2[i].name+"   "+"Profession:"+newArr2[i].profession+"   "+"Age:"+newArr2[i].age;
        document.getElementById('result'+i).innerHTML=output;
    }
}





