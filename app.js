let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset-button");
let newGameBtn=document.querySelector(".new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;
let count=0;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () => {
    turnO=true;
    count=0;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO)
        {
            box.innerText="0";
            turnO=false;   
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
       
        count++;
        if(count==9)
        {
            showWinner();
        }
        checkWinner();
    });
});

const showWinner = (winner= null) =>{
    if(winner){
        msg.innerText=`Congratulations, Winner is ${winner}`; 
    }
    else{
        msg.innerText="Match is draw!";
    }
    msgContainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled=true;
    }
};

const enableBoxes = () => {
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
};

const checkWinner = () => {
    for(let pattern of winpatterns)
    {
        let pos1Val=boxes[pattern[0]].innerText;
        let pos2Val=boxes[pattern[1]].innerText;
        let pos3Val=boxes[pattern[2]].innerText;
        
        if(pos1Val !="" && pos2Val !=""&&pos3Val !="")
        {
            if(pos1Val===pos2Val && pos2Val ===pos3Val)
            {
                showWinner(pos1Val);
                return;
            }
        }
    }
    if(count==9)
    {
        showWinner();
    }
};

newGameBtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);




