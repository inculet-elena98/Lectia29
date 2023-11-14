const keysList = Object.keys(localStorage).length > 0 ? Object.keys(localStorage) : []

const keyInput = document.getElementById('keyInput')
const valueInput = document.getElementById('valueInput')
const addBtn = document.getElementById('createItem')
const root = document.getElementById('root')

addBtn.addEventListener('click', () => {
  const key = keyInput.value
  const value = valueInput.value
  if (!key || !value || keysList.includes(key)) {
    return alert('key or value should be present or uniqe')
  }
  keysList.push(key)
  localStorage.setItem(key, value)
  renderList()
})

function renderList() {
  root.innerHTML = ''
  keysList.forEach((item) => {
    const br = document.createElement('br')
    const p = document.createElement('p')
    p.innerText = item

    const showBtn = document.createElement('button')
    showBtn.innerText = 'Show Value'
    showBtn.addEventListener('click', () => {
      console.log(localStorage.getItem(item))
    })
    const wrapper = document.createElement('div')

    wrapper.appendChild(p)
    wrapper.appendChild(showBtn)
    wrapper.appendChild(br)

    root.appendChild(wrapper)
  })
}
renderList()
