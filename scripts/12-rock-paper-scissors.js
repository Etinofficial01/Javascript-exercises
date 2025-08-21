let score = JSON.parse(localStorage.getItem('score')) || {
            wins: 0,
            losses: 0,
            ties: 0
        };

        updateScoreElement();

        /*
        if (!score) {
            score = {
                wins: 0,
                losses: 0,
                ties: 0
            };
        }
        */

        let isAutoPlaying = false;
        let intervalId;

        function autoPlay() {
          const autoPlayButton = document.querySelector('.js-auto-play-btn');

          if (!isAutoPlaying) {
             intervalId = setInterval(function() {
              const playerMove = pickComputerMove();
              playGame(playerMove);
            }, 1000);
            isAutoPlaying = true;
            autoPlayButton.innerHTML = 'Stop play';
          } else {
            clearInterval(intervalId);
            isAutoPlaying = false;
            autoPlayButton.innerHTML = 'Auto play';
          }
          
        }

        function playGame(playerMove) {
        const computerMove = pickComputerMove();

        let result = '';

        if (playerMove === 'scissors') {
          if (computerMove === 'rock') {
            result = 'You lose.';
          } else if (computerMove === 'paper') {
            result = 'You win.';
          } else if (computerMove === 'scissors') {
            result = 'Tie.';
          }

        } else if (playerMove === 'paper') {
          if (computerMove === 'rock') {
            result = 'You win.';
          } else if (computerMove === 'paper') {
            result = 'Tie.';
          } else if (computerMove === 'scissors') {
            result = 'You lose.';
          }
          
        } else if (playerMove === 'rock') {
          if (computerMove === 'rock') {
            result = 'Tie.';
          } else if (computerMove === 'paper') {
            result = 'You lose.';
          } else if (computerMove === 'scissors') {
            result = 'You win.';
          }
        }

        if (result === 'You win.') {
            score.wins++;
        } else if (result === 'You lose.') {
            score.losses++;
        } else if (result === 'Tie.') {
            score.ties++;
        }

        localStorage.setItem('score', JSON.stringify(score));

        updateScoreElement();

        function updateResultElement() {
            document.querySelector('.js-result').innerHTML = result;
        }

        function updateMovesElement() {
            document.querySelector('.js-moves').innerHTML = `You
      <img src="images/${playerMove}-emoji.png" alt="" class="move-icon">
      <img src="images/${computerMove}-emoji.png" alt="" class="move-icon">
      Computer `;
        }
        updateResultElement();
        updateMovesElement();
      }

      function resetScore() {
        score.wins = 0;
        score.losses = 0;
        score.ties = 0;
        localStorage.removeItem('score');
        updateScoreElement();
      }

      function updateScoreElement() {
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
      }

      function pickComputerMove() {
        const randomNumber = Math.random();

        let computerMove = '';

        if (randomNumber >= 0 && randomNumber < 1 / 3) {
          computerMove = 'rock';
        } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
          computerMove = 'paper';
        } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
          computerMove = 'scissors';
        }

        return computerMove;
      }