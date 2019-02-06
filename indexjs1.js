const taskListDOM = document.getElementById('todo-list')
let number = 1

const web = {
  nextId: 6,
  data: [],

  display: (data = web.data) => {
    taskListDOM.innerHTML = ''
    data.forEach(item => {
      const liDOM = document.createElement('li')

      const removeButton = document.createElement('BUTTON')
      const editButton = document.createElement('BUTTON')
      const taskDOM = document.createTextNode(item)
      const removebtn = document.createTextNode('remove')
      const editBtn = document.createTextNode('edit')

      removeButton.setAttribute('id', 'remove-button')
      removeButton.setAttribute('type', 'submit')
      removeButton.setAttribute('onclick', `remove (${number++}`)
      removeButton.appendChild(removebtn)

      editButton.setAttribute('id', 'edit-button')
      editButton.setAttribute('type', 'submit')
      editButton.setAttribute('onclick', 'edit')
      editButton.appendChild(editBtn)

      liDOM.appendChild(taskDOM)

      liDOM.appendChild(removeButton)
      liDOM.appendChild(editButton)
      taskListDOM.appendChild(liDOM)
    })
  },
  add: () => {
    event.preventDefault()
    const newTodo = {
      id: web.nextId,
      text: document.getElementById('add-text').value
    }
    if (newTodo !== '') {
      web.data.push(newTodo)
      web.display()
      document.getElementById('add-text').value = ''
      web.nextId++
    }
  },
  remove: id => {
    const changetask = web.data.filter(item => {
      return item.id !== id
    })
    web.data = changetask
    web.display()
  },
  search: () => {
    event.preventDefault()
    const letSearch = document.getElementById('search-text').value
    const searchtodo = web.data.filter(item => {
      return item.text.toLowerCase().includes(letSearch.toLowerCase())
    })
    web.display(searchtodo)
  },
  edit: id => {
    const textTodo = prompt('do you want change your mind?')
    if (textTodo !== null) {
      const changeTask = web.data.map(item => {
        if (item.id === id) {
          item.text = textTodo
        }
      })
      web.display(changeTask)
    }
  }
}

web.display()
