let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let newBtn = document.querySelector("#new-btn");

let moveO = true;
let moves = 0;

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];



const showWinner = (winner) => {
        msgContainer.classList.remove("hide");
        msg.innerText = `Congrulations! The winner is ${winner}`;
        disableBoxes();
};
const gameDraw = () => {
    msgContainer.classList.remove("hide");
    msg.innerText = `Tie! Try out new game`;
    disableBoxes();
};

const newGame = () => {
    moves=0;
    msgContainer.classList.add("hide");
    moveO = true;
    enableBoxes();
};

const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("The box was clicked");

        if(moveO){
            box.innerText = "O";
            moveO = false;
        }
        else{
            box.innerText = "X";
            moveO = true; 
        }

        box.disabled = true;
        checkWinner();
       moves++;
    //    console.log(moves);
        let isWinner = checkWinner();

        if(!isWinner && moves === 9){
            gameDraw();
        }
    });
});

const checkWinner = () => {
    for(let pattern of winPattern){
        // console.log(pattern[0], pattern[1], pattern[2]);
        // // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                // console.log(`winner is ${pos1val}`);
                showWinner(pos1val);
                return true;
            }
        }
    }
};

newBtn.addEventListener("click", newGame);
resetBtn.addEventListener("click", newGame);