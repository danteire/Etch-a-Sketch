const creationButton = document.createElement("button");
creationButton.setAttribute("style"," font-size: 20px;");
creationButton.innerText = "Generate Grid";

const bodyPointer = document.querySelector("body");

bodyPointer.setAttribute("style","display: flex; flex-flow: column wrap; justify-content: center; align-items: center;gap: 30px;margin: 30px")
bodyPointer.appendChild(creationButton);

let gridSize = Number; 
creationButton.addEventListener("click", () =>{
    while(true){
       gridSize = prompt("Enter Grid Size:");
       if(gridSize>0 && gridSize<=100){
        break;
       }else{
        alert("Wrong Grid Size");
       }
    }
    
    GridCreation(gridSize);
    
    
});

function ScetchControl(){
    const divControl = document.querySelectorAll(".smallerInnerDiv");
    divControl.forEach((okno)=>{
        okno.addEventListener("mouseenter",(event)=>{
            event.target.setAttribute("style","background-color: black;");
        })
    })
}

function GridCreation(gridSize){
    const gridDiv = document.createElement("div");

    gridDiv.setAttribute("class","app");

    bodyPointer.appendChild(gridDiv);
    for(let i=0;i<gridSize;i++){
        const biggerInnerDiv = document.createElement("div");
        biggerInnerDiv.setAttribute("class","biggerInnerDiv");
        gridDiv.appendChild(biggerInnerDiv);

        for(let j=0;j<gridSize;j++){
            const smallerInnerDiv = document.createElement("div");
            smallerInnerDiv.setAttribute("class","smallerInnerDiv");
            biggerInnerDiv.appendChild(smallerInnerDiv);
        }
    }
    ScetchControl();
}

function RemoveGrid(){
    
    const delNode = document.querySelectorAll(".biggerInnerDiv");
    delNode.forEach((node)=>{
        node.remove();
    })
    const appNode = document.querySelector(".app");
    appNode.remove();
}

