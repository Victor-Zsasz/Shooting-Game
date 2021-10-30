let btn = document.getElementById('btn');
const PlayerOneId = document.getElementById('P1id');
const PlayerTwoId = document.getElementById('P2id');
const Reset = document.getElementById('reset');
let Round = document.getElementById('round');

let RoundCount = 1;
let PlayerOneWinCount = 0;
let PlayerTwoWinCount = 0;

function updatePlayerData(Panel, PlayerOneHealth) {
    let [FirstElement, SecondElement] = Panel.children;

    if (PlayerOneHealth <= 0) {
        PlayerTwoWinCount++;
        SecondElement.querySelector('#P2id').innerText = String(PlayerTwoWinCount);
    } else {
        PlayerOneWinCount++;
        FirstElement.querySelector('#P1id').innerText = String(PlayerOneWinCount);
    }
    if (PlayerOneWinCount < 3 && PlayerTwoWinCount < 3)
        return;
    
    let Result = document.createElement('div');
    Result.className = 'margin';
    let h4 = document.createElement('h4');
    h4.id = 'winner';
    Result.appendChild(h4);

    if (PlayerOneWinCount == 3) {
        h4.innerHTML = 'Player 1 won the match!';
    } else if (PlayerTwoWinCount == 3) {
        h4.innerHTML = 'Player 2 won the match!';
    }

    Panel.appendChild(Result);
}

btn.addEventListener('click', function () {

    if (PlayerOneWinCount <= 2 && PlayerTwoWinCount <= 2) {
        let PlayerOneHealth = 100;
        let PlayerTwoHealth = 100;
         
        while (PlayerOneHealth > 0 && PlayerTwoHealth > 0) {
            let PlayerOneDamageGiven = Math.floor(Math.random() * 5);
            PlayerTwoHealth = PlayerTwoHealth - PlayerOneDamageGiven;
            let PlayerTwoDamageGiven = Math.floor(Math.random() * 5);
            PlayerOneHealth = PlayerOneHealth - PlayerTwoDamageGiven;
        }

        let PanelContainer = document.getElementById('panel-container');
        let ChildElementCount = PanelContainer.childElementCount;
        let Panel = PanelContainer.lastElementChild;
        let Clone = Panel.cloneNode(true);
        Clone.id = `panel-${ChildElementCount}`;
        PanelContainer.appendChild(Clone);

        updatePlayerData(Clone, PlayerOneHealth);

        Round.innerHTML = RoundCount;
        RoundCount = RoundCount + 1;

    }

});

Reset.addEventListener('click', function () {
    location.reload();
});