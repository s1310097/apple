
const updateCount = (count) => {
    const countElement = document.getElementById('count')
    countElement.innerText = count
  }
  
  const main = () => {
    let count = 0
  
    const incrementButton = document.getElementById('increment')
    incrementButton.addEventListener('click', () => {
      count += 1
      updateCount(count)
    })
  
    const decrementButton = document.getElementById('decrement')
    decrementButton.addEventListener('click', () => {
      count -= 1
      updateCount(count)
    })
  
    const resetButton = document.getElementById('reset')
    resetButton.addEventListener('click', () => {
      count = 0
      updateCount(count)
    })
  }
  
  main()