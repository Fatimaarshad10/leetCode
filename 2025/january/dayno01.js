// Recursion
function pushButton() {
    let mainArray = document.querySelector('.main-array')
    let item = mainArray.querySelectorAll('li')
    const totalItem = item.length
    if (totalItem === 10) {
        return alert("Can't Exceed more...")
        
    }
    const newItem = document.createElement('li')
    const newbtn = document.createElement('button')
    newbtn.textContent = `${totalItem + 1}`
    newItem.appendChild(newbtn)
    mainArray.appendChild(newItem)
    newbtn.classList.add('animate')
    newbtn.addEventListener('animationend', () => {
    })
}

function popButton() {
    let mainArray = document.querySelector('.main-array')
    let item = mainArray.querySelectorAll('li')
    const totalItem = item.length
    if (totalItem === 0) {
        alert("Please Fill the array with number....")
        return
    }
    const value = item[totalItem - 1]
    value.classList.add('animate-pop')
    value.classList.add('dust');
    const offsetX = Math.random() * 30 - 15; 
    const offsetY = Math.random() * 30 - 15; 
    value.style.left = `${offsetX}px`;
    value.style.top = `${offsetY}px`;
    value.addEventListener('animationend', () => {
        value.remove()
        dust.remove();

    })
}
function reversebtn() {
    let mainArray = document.querySelector('.main-array')
    let item = mainArray.querySelectorAll('li')
    let btn = mainArray.querySelectorAll('button')
    const totalItem = item.length
    let count = 1
    if (totalItem === 0) {
        alert("Array is empty nothing to reverse....")
        return
    }
    if (parseInt(btn[0].textContent) === totalItem) {
        for (let i = 0; i < totalItem; i++) {
            btn[i].textContent = count
            count++
        }
    }
    else {
        for (let i = totalItem; i >= 1; i--) {
            btn[i - 1].textContent = count
            count++
        }
    }
}
