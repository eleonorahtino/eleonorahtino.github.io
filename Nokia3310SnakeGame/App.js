document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const scoreDisplay = document.querySelector('span')
  const startBtn = document.querySelector('.start')
  const rules = document.querySelector('.rules')

  const width = 10
  let currentIndex = 0
  let appleGIndex = 0
  let appleEIndex = 0
  let currentSnake = [2, 1, 0]
  let direction = 1
  let score = 0
  let speed = 0.9
  let intervalTime = 0
  let interval = 0


  function startGame() {
    startBtn.style.display = "none";
    rules.style.display = "none";
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    squares[appleGIndex].classList.remove('appleg')
    squares[appleEIndex].classList.remove('applee')
    clearInterval(interval)
    score = 0
    randomApple()
    direction = 1
    scoreDisplay.innerText = score
    intervalTime = 1000
    currentSnake = [2, 1, 0]
    currentIndex = 0
    currentSnake.forEach(index => squares[index].classList.add('snake'))

    interval = setInterval(moveOutcomes, intervalTime)

  }


  function moveOutcomes() {
    if (
      (currentSnake[0] + width >= (width * width) && direction === width) ||
      (currentSnake[0] % width === width - 1 && direction === 1) ||
      (currentSnake[0] % width === 0 && direction === -1) ||
      (currentSnake[0] - width < 0 && direction === -width) ||
      squares[currentSnake[0] + direction].classList.contains('snake') ||
      squares[currentSnake[0]].classList.contains('applee')
    ) {
      alert("GAME OVER. Please refresh the page!")
      return clearInterval(interval)
    }

    const tail = currentSnake.pop()
    squares[tail].classList.remove('snake')
    currentSnake.unshift(currentSnake[0] + direction)

    if (squares[currentSnake[0]].classList.contains('appleg')) {
      squares[currentSnake[0]].classList.remove('appleg')
      squares[currentSnake[0]].classList.remove('applee')
      squares[appleGIndex].style.backgroundColor = null
      squares[appleEIndex].style.backgroundColor = null
      squares[tail].classList.add('snake')
      currentSnake.push(tail)
      randomApple()
      score++
      scoreDisplay.textContent = score
      clearInterval(interval)
      intervalTime = intervalTime * speed
      interval = setInterval(moveOutcomes, intervalTime)
    }
    squares[currentSnake[0]].classList.add('snake')
  }


  function randomApple() {
    do {
      appleGIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleGIndex].classList.contains('snake'))
    squares[appleGIndex].classList.add('appleg')

    do {
      appleEIndex = Math.floor(Math.random() * squares.length)
    } while (squares[appleEIndex].classList.contains('snake'))
    squares[appleEIndex].classList.add('applee')

    var i = Math.floor(Math.random() * 5)
    switch (i) {
      case 0: //purple
        var r = 153
        var g = 51
        var b = 153

        var re = 153
        var ge = 0
        var be = 153

        break;
      case 1: //red
        var r = 255
        var g = 0
        var b = 0

        var re = 204
        var ge = 0
        var be = 0

        break;
      case 2: //yellow
        var r = 255
        var g = 255
        var b = 0

        var re = 255
        var ge = 204
        var be = 0

        break;
      case 3: //pink
        var r = 255
        var g = 102
        var b = 255

        var re = 255
        var ge = 0
        var be = 255

        break;
      case 4: //blue
        var r = 0
        var g = 0
        var b = 255

        var re = 0
        var ge = 0
        var be = 204

        break;
    }
    squares[appleGIndex].style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
    squares[appleEIndex].style.backgroundColor = "rgb(" + re + "," + ge + "," + be + ")"
  }

  function control(e) {
    squares[currentIndex].classList.remove('snake')

    if (e.keyCode === 39) {
      direction = 1
    } else if (e.keyCode === 38) {
      direction = -width
    } else if (e.keyCode === 37) {
      direction = -1
    } else if (e.keyCode === 40) {
      direction = +width
    }
  }

  document.addEventListener('keyup', control)
  startBtn.addEventListener('click', startGame)
})