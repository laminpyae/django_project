// Restart Game Button
var restart = document.querySelector('#restart')
// Grabs all Square
var squares = document.querySelectorAll('td')
// Clear all Square
function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = '';
    }
}

restart.addEventListener('click', clearBoard)
// Check the Square marker
function changeMarker() {
    if (this.textContent === '') {
        this.textContent = 'X';
    } else if (this.textContent === 'X') {
        this.textContent = 'O';
    } else {
        this.textContent = ''
    }
}

for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('click', changeMarker)
}
// For Loop to add event listeners to all the squares