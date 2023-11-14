// const keysList = Object.keys(localStorage).length > 0 ? Object.keys(localStorage) : []

// const keyInput = document.getElementById('keyInput')
// const valueInput = document.getElementById('valueInput')
// const addBtn = document.getElementById('createItem')
// const root = document.getElementById('root')

// addBtn.addEventListener('click', () => {
//   const key = keyInput.value
//   const value = valueInput.value
//   if (!key || !value || keysList.includes(key)) {
//     return alert('key or value should be present or uniqe')
//   }
//   keysList.push(key)
//   localStorage.setItem(key, value)
//   renderList()
// })

// function renderList() {
//   root.innerHTML = ''
//   keysList.forEach((item) => {
//     const br = document.createElement('br')
//     const p = document.createElement('p')
//     p.innerText = item

//     const showBtn = document.createElement('button')
//     showBtn.innerText = 'Show Value'
//     showBtn.addEventListener('click', () => {
//       console.log(localStorage.getItem(item))
//     })
//     const wrapper = document.createElement('div')

//     wrapper.appendChild(p)
//     wrapper.appendChild(showBtn)
//     wrapper.appendChild(br)

//     root.appendChild(wrapper)
//   })
// }
// renderList()



// const arr = [1, 2, 3, 4, 5, 6, 7]
// console.log(arr.filter((item) => item > 3))


// const arr = ['Ngdfh', 'Hbf', 'hdsdh', 'Gdsjds']
// console.log(arr.map((item) => item.toLowerCase()))


// const arr = ['Ngdfh', 'Hbf', 'hdsdh', 'Gdsjds']
// console.log(arr.map((item) => item[0]))


// const arr = ['Ngdfh', 'Hbf', 'hdsdh', 'Gdsjds']
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 8]
// console.log(arr1.every((item) => item > 4))


// const arr = ['Ngdfh', 'Hbf', 'hdsdh', 'Gdsjds']
// const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 8]
// console.log(arr1.some((item) => item > 4))


// const arr = ['Ngdfh', 'Hbf', 'hdsdh', 'Gdsjds']
// const arr1 = [10, 22, 3, 4, 5, 6, 7, 8, 8]
// console.log(arr1.sort((a, b) => a - b))


// const arr = ['Ngdfh', 'Hbf', 'hdsdh', 'Gdsjds']
// const arr1 = [10, 22, 3, 4, 5, 6, 7, 8, 8]
// console.log(arr1.sort((a, b) => b - a))


// const arr = ['aNgdfhrrr', 'Hbf', 'hdsdh', 'Gdfffsjds', 'brrrrrrrrr']
// const arr1 = [10, 22, 3, 4, 5, 6, 7, 8, 8]
// console.log(arr.filter((item) => item.length > 4).sort((a, b) => a < b ? -1 : 1))


// const arr = ['aNgdfhrrr', 'Hbf', 'hdsdh', 'Gdfffsjds', 'brrrrrrrrr']
// const arr1 = [10, 22, 3, 4, 5, 6, 7, 8, 8]
// console.log(arr1.reduce((acc, cur) => {
//   return acc + cur
// }, 0))


// const arr = ['aNgdfhrrr', 'Hbf', 'hdsdh', 'Gdfffsjds', 'brrrrrrrrr']
// const arr1 = [10, 22, 3, 4, 5, 6, 7, 8, 8]
// const arr2 = [
//   {
//     name: 'Boris',
//     age: 30
//   },
//   {
//     name: 'Alex',
//     age: 32
//   },
//   {
//     name: 'Vasile',
//     age: 31
//   }
// ]
// const sortFunc = (list, key, sortDirection) => {
//   switch (sortDirection) {
//     case 'ASC':
//       return list.sort((a, b) => a[key] < b[key] ? -1 : 1)
//     case 'DSC':
//       return list.sort((a, b) => a[key] > b[key] ? -1 : 1)
//   }
// }
// console.log(sortFunc(arr2, 'age', 'DSC'))


// const arr = ['aNgdfhrrr', 'Hbf', 'hdsdh', 'Gdfffsjds', 'brrrrrrrrr']
// const arr1 = [10, 22, 3, 4, 5, 6, 7, 8, 8]
// const arr2 = [
//   {
//     name: 'Boris',
//     age: 30
//   },
//   {
//     name: 'Alex',
//     age: 32
//   },
//   {
//     name: 'Vasile',
//     age: 31
//   }
// ]
// const obj = {
//   city: 'gdfdj',
//   zipCode: 33,
//   name: 'fkd',
//   maio: 'dvghcb@'
// }
// console.log(Object.keys(obj).length)


// const testObj = {
//   city: 'gdfdj',
//   zipCode: 33,
//   name: 'fkd',
//   maio: 'dvghcb@'
// }
// const testObj1 = {
//   city: 'gdfdj',
//   zipCode: 33,
//   name: 'fkd',
//   maio: 'dvghcb@',
//   b: 'a'
// }
// const compareObj = (obj1, obj2) => {
//   return JSON.stringify(obj1) === JSON.stringify(obj2)
// }
// console.log(compareObj(testObj, testObj1))


// const arr = ['aNgdfhrrr', 'Hbf', 'hdsdh', 'Gdfffsjds', 'brrrrrrrrr', 'ggg']
// const newArr = ['aNgdfhrrr', 'Hbf', 'hdsdh', 'Gdfffsjds', 'brrrrrrrrr']
// const arr2 = [
//   {
//     name: 'Boris',
//     age: 30
//   },
//   {
//     name: 'Alex',
//     age: 32
//   },
//   {
//     name: 'Vasile',
//     age: 31
//   }
// ]
// const obj = {
//   city: 'gdfdj',
//   zipCode: 33,
//   name: 'fkd',
//   maio: 'dvghcb@'
// }
// const compareArr = (list, list2) => {
//   return list.filter((item) => !list2.includes(item))
// }
// console.log(compareArr(arr, newArr))


// const arr = ['aNgdfhrrr', 'Hbf', 'hdsdh', 'Gdfffsjds', 'brrrrrrrrr', 'ggg']
// const newArr = ['aNgdfhrrr', 'Hbf', 'hdsdh', 'Gdfffsjds', 'brrrrrrrrr']
// const arr1 = [10, 22, 3, 4, 5, 6, 6, 7, 8]
// const arr2 = [
//   {
//     name: 'Boris',
//     age: 30
//   },
//   {
//     name: 'Alex',
//     age: 32
//   },
//   {
//     name: 'Vasile',
//     age: 31
//   }
// ]
// const obj = {
//   city: 'gdfdj',
//   zipCode: 33,
//   name: 'fkd',
//   maio: 'dvghcb@'
// }
// const minAndMax = (list) => {
//   return list.reduce((acc, cur) => {
//     if (acc.min > cur) acc.min = cur
//     if (acc.max < cur) acc.max = cur
//     return acc
//   }, {
//     min: list[0],
//     max: list[0]
//   })
// }

// console.log(minAndMax(arr1))


// const arr = ['aNgdfhrrr', 'Hbf', 'hdsdh', 'Gdfffsjds', 'brrrrrrrrr', 'ggg']
// const newArr = ['aNgdfhrrr', 'Hbf', 'hdsdh', 'Gdfffsjds', 'brrrrrrrrr']
// const arr1 = [10, 22, 3, 4, 5, 6, 6, 7, 8]
// const arr2 = [
//   {
//     name: 'Boris',
//     age: 30
//   },
//   {
//     name: 'Alex',
//     age: 32
//   },
//   {
//     name: 'Vasile',
//     age: 31
//   }
// ]
// const obj = {
//   city: 'gdfdj',
//   zipCode: 33,
//   name: 'fkd',
//   maio: 'dvghcb@'
// }
// const minAndMax = (list) => {
//   return list.reduce((acc, cur) => {
//     if (acc.min.length > cur.length) acc.min = cur
//     if (acc.max.length < cur.length) acc.max = cur
//     return acc
//   }, { min: list[0], max: list[0] })
// }

// console.log(minAndMax(arr))


const arr = ['aNgdfhrrr', 'Hbf', 'hdsdh', 'Gdfffsjds', 'brrrrrrrrr', 'ggg']
const newArr = ['aNgdfhrrr', 'Hbf', 'hdsdh', 'Gdfffsjds', 'brrrrrrrrr']
const arr1 = [10, 22, 3, 4, 5, 6, 6, 7, 8]
const arr2 = [
  {
    name: 'Boris',
    age: 30
  },
  {
    name: 'Alex',
    age: 32
  },
  {
    name: 'Vasile',
    age: 31
  }
]
const obj = {
  city: 'gdfdj',
  zipCode: 33,
  name: 'fkd',
  maio: 'dvghcb@'
}
const showNthElements = (list, nth) => {
  return list.filter((item, idx) => (idx + 1) % 3 === 0)
}

console.log(showNthElements(arr, 3))