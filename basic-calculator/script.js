const displayHistory = document.querySelector(".displayHistory");
const clearAll = document.querySelector(".clearAll");
const clearLast = document.querySelector(".lastClear");
const display = document.querySelector(".displayInput");
const tempResult = document.querySelector(".tempResult");
const number = document.querySelectorAll(".number");
const operation = document.querySelectorAll(".operation");
const equal = document.querySelector(".equal");

let dis1NUB = "";
let dis2NUB = "";
let result = null;
let lastOperation= "";
let haveDot = false;

number.forEach((number) => {
    number.addEventListener("click", (e) =>{
        if(e.target.innerText === "." && !haveDot){
            console.log(e.target.innerText)
            haveDot = true
        }
        else if(e.target.innerText === "." && haveDot){
            console.log('sudah adaa dot',e.target.innerText)
            return;
        }
        dis2NUB += e.target.innerText
        display.innerText = dis2NUB
    } )
});

operation.forEach((operation) =>{
    operation.addEventListener("click", (e) =>{
        if (!dis2NUB) return;
        haveDot = false;
        const operationName = e.target.innerText;
        if (dis1NUB && dis2NUB && lastOperation){
            mathOperation()
        }
        else {
            result= parseFloat (dis2NUB)
        }
        
        clearVar(operationName)
        lastOperation = operationName
    })
    
})

function clearVar(name = ""){
    dis1NUB +=  dis2NUB + " " + name + " ";
    displayHistory.innerText = dis1NUB
    display.innerText = " "
    dis2NUB = " "
    tempResult.innerText = result;
}

function mathOperation (){
    if (lastOperation=== "X"){
        result = parseFloat (result) * parseFloat(dis2NUB)
    } else if (lastOperation === "+"){
        result = parseFloat (result) + parseFloat(dis2NUB)
    } else if (lastOperation === "-"){
        result = parseFloat (result) - parseFloat(dis2NUB)
    }  else if (lastOperation === "/"){
        result = parseFloat (result) / parseFloat(dis2NUB)
    }  else if (lastOperation === "%"){
        result = parseFloat (result) % parseFloat(dis2NUB)
    }        
    
}

equal.addEventListener("click", () =>{
    if (!dis1NUB || !dis2NUB) return;
    haveDot=false;
    mathOperation()
    clearVar();
    display.innerText = result;
    tempResult.innerText = " ";
    dis2NUB = result;
    dis1NUB = " ";
} );

clearAll.addEventListener("click", () =>{
    dis1NUB = "";
    dis2NUB = "";
    haveDot = false;
    displayHistory.innerText = ""
    display.innerText = ""
    tempResult = ""
    result = ""
    lastOperation= ""

})

clearLast.addEventListener("click", () => {
    display.innerText= ""
    dis2NUB = ""

} )

window.addEventListener("keydown", (e) => {
    if(
        e.key==="0"||
        e.key==="1"||
        e.key==="2"||
        e.key==="3"||
        e.key==="4"||
        e.key==="5"||
        e.key==="6"||
        e.key==="7"||
        e.key==="8"||
        e.key==="9"
    ){
        clickButton(e.key);
    } else if (e.key === "+"|| e.key === "-"|| e.key === "/"|| e.key === "%"){
        clickOperation (e.key);
    } else if (e.key === "*"){
        clickOperation("X");
    } else if (e.key === "Enter" || e.key === "="){
        clickEqual();
    } else if (e.key === "Backspace"){
        clickClearLast()
    } else if (e.key === "Delete"){
        clickClearAll()
    }
    

})

function clickButton(key){
    number.forEach((button)=>{
        if(button.innerText === key){
            button.click()
        }
    })
}

function clickOperation(key){
    operation.forEach((operation)=>{
        if (operation.innerText === key){
            operation.click()
        }
    })
}

function clickEqual(){
    equal.click()
}

function clickClearLast (){
    clearLast.click()
}

function clickClearAll(){
    clearAll.click()
} 