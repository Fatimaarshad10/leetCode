// Push Button
function pushButton() {
    let mainArray = document.querySelector('.main-array')
    let item = mainArray.querySelectorAll('li')
    const totalItem = item.length
    if (totalItem === 10) {
        alert("Can't Exceed more...")
        return
    }
    const newItem = document.createElement('li')
    const newbtn = document.createElement('button')
    newbtn.textContent = `${totalItem + 1}`
    newItem.appendChild(newbtn)
    mainArray.appendChild(newItem)
    newbtn.classList.add('animate')
}

// Pop Button

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
    value.addEventListener('animationend', () => {
        value.remove()

    })
}

// Reverse Button

function reversebtn() {
    let mainArray = document.querySelector('.main-array')
    let item = mainArray.querySelectorAll('li')
    const totalItem = item.length
    let cache_array = []
    for (let i = totalItem - 1; i >= 0; i--) {
        cache_array.push(item[i])
    }
    mainArray.innerHTML = ''
    cache_array.forEach(item => {
        mainArray.appendChild(item)
    })
}
// Slice Button 
function slicebtn() {
    const mainArray = document.querySelector('.main-array');
    const items = document.querySelectorAll('.main-array li'); 
    const totalItem = items.length
    const start = parseInt(document.getElementById('start').value); 
    const end = parseInt(document.getElementById('end').value); 
    mainArray.innerHTML = '';
    for (let i = start; i < end; i++) {
        mainArray.appendChild(items[i]);
    }
    const button = document.createElement('button')
    button.textContent = `Total length ${totalItem}`
    document.body.append(button)
}

// const data = [1,2,3,4,4]
// const newData = data.slice(0,3)
// console.log(newData);
// let count = 1
// if (totalItem === 0) {
//     alert("Array is empty nothing to reverse....")
//     return
// }
// if (parseInt(btn[0].textContent) === totalItem) {
//     for (let i = 0; i < totalItem; i++) {
//         btn[i].textContent = count
//         count++
//     }
// }
// else {
//     for (let i = totalItem; i >= 1; i--) {
//         btn[i - 1].textContent = count
//         count++
//     }
// }