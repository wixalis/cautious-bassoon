var random, tempOut;
random = Math.floor((Math.random() * 100) + 1);
console.log(random);
var tries = 10;
 
function game() {
    var guess, answer;
    // tries = document.getElementById('tries').value;
    // tries = 10;
    guess = document.getElementById('guess').value;
    answer = document.getElementById('answer');


    if (guess == random && tries > 0) {
        answer.innerHTML = 'You have won';
        document.getElementById('start').style.display = "none";
        document.getElementById('restart').style.display = "block";
    }
    else if (guess > 100 || guess < 0) {
        answer.innerHTML = 'Enter number from 0 to 100'
    }
    else if (guess > random && tries > 0) {
        answer.innerHTML = 'Your number is too high';
    }
    else if (guess < random && tries > 0) {
        answer.innerHTML = 'Your number is too low';
    }

    tries--;

    if (tries == 0) {
        answer.innerHTML = 'You have lost';
        document.getElementById('start').style.display = "none";
        document.getElementById('restart').style.display = "block";
      }
    console.log(tries);
    document.getElementById('tries').innerHTML = tries;
}

function restart() {
    location.reload();
}