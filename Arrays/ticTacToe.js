//TODO: Doestn't work in judge.
function ticTacToe(moves) {
    let board = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ];
    let messages = [];
    let player = 'X';
    let isFree = (x, y) => {
        return board[x][y] === false;
    }

    let checkWin = (symbol) => {
        for (let i = 0; i < board.length; i++) {

            if (board[i][0] == symbol && board[i][1] == symbol && board[i][2] == symbol) {
                return true;
            } else if (board[0][i] == symbol && board[1][i] == symbol && board[2][i] == symbol) {
                return true;
            }
        }

        if (board[0][0] == symbol && board[1][1] == symbol && board[2][2] == symbol) {
            return true;
        } else if (board[0][2] == symbol && board[1][1] == symbol && board[2][0] == symbol) {
            return true;
        }

        return false;
    }

    let printMap = (map) => {
        let output = ''
        map.forEach(element => {
            output = output.concat(element.join('\t') + '\n');
        });
        return output;
    }
    let switchPlayer = () => {
        return (player === 'X') ? 'O' : 'X';
    };

    while (moves.length > 0) {
        let temp = moves.shift();
        let x = Number(temp[0][0])
        let y = Number(temp[0][2]);
        if (isFree(x, y)) {
            board[x][y] = player;
            player = switchPlayer();
        } else {
            messages.push("This place is already taken. Please choose another!");

        }
        if (checkWin('X')) {
            messages.push("Player X wins");
            break;
        } else if (checkWin('O')) {
            messages.push("Player O wins");
            break;
        }
    }
    if (moves.length === 0) {
        messages.push("The game ended! Nobody wins :(");
    }

    let output = messages.join('\n') + '\n' + printMap(board);
    return output;
}


let moves = [
    ["0 1"],
    ["0 0"],
    ["0 2"],
    ["2 0"],
    ["1 0"],
    ["1 2"],
    ["1 1"],
    ["2 1"],
    ["2 2"],

    ["0 0"]
];
console.log(ticTacToe(moves));

let noOne = [
    ["0 1"],
    ["0 0"],
    ["0 2"],
    ["2 0"],
    ["1 0"],
    ["1 2"],
    ["1 1"],
    ["2 1"],
    ["2 2"],
    ["0 0"],
];

let more = [
    ["0 0"],
    ["0 0"],
    ["1 1"],
    ["0 1"],
    ["1 2"],
    ["0 2"],
    ["2 2"],
    ["1 2"],
    ["2 2"],
    ["2 1"]
];