const taskListDOM = document.getElementById('todo-list')
let nextIdNumber = 1 // nextIdNumber

const web = {
  nextId: 1, // web.nextId
  data: [], // web.data

  // ---------------------------------------------------------------------------
  display: (data = web.data) => {
    taskListDOM.innerHTML = ''

    data.forEach(item => {
      const liDOM = document.createElement('li')

      const removeButton = document.createElement('BUTTON')
      const editButton = document.createElement('BUTTON')
      const taskDOM = document.createTextNode(item.text)
      const removebtn = document.createTextNode('remove')
      const editBtn = document.createTextNode('edit')

      removeButton.setAttribute('id', 'remove-button')
      removeButton.setAttribute('type', 'submit')
      removeButton.setAttribute('onclick', `web.remove(${item.id})`)
      removeButton.appendChild(removebtn)

      editButton.setAttribute('id', 'edit-button')
      editButton.setAttribute('type', 'submit')
      editButton.setAttribute('onclick', `web.edit(${item.id})`)
      editButton.appendChild(editBtn)

      liDOM.appendChild(taskDOM)

      liDOM.appendChild(removeButton)
      liDOM.appendChild(editButton)
      taskListDOM.appendChild(liDOM)
    })
  },

  // ---------------------------------------------------------------------------
  add: () => {
    event.preventDefault()

    const newTodo = {
      id: web.nextId,
      text: document.getElementById('add-text').value
    }

    if (newTodo.text !== '') {
      web.data.push(newTodo)
      web.display()
      document.getElementById('add-text').value = ''
      web.nextId++
    }
  },

  // ---------------------------------------------------------------------------
  remove: id => {
    const changetask = web.data.filter(item => {
      return item.id !== id
    })
    web.data = changetask
    web.display()
  },

  // ---------------------------------------------------------------------------
  search: () => {
    event.preventDefault()

    const letSearch = document.getElementById('search-text').value
    const searchtodo = web.data.filter(item => {
      return item.text.toLowerCase().includes(letSearch.toLowerCase())
    })
    web.display(searchtodo)
  },

  // ---------------------------------------------------------------------------
  edit: id => {
    const textTodo = prompt('Do you want to change your mind?')

    if (textTodo !== null) {
      const changeTask = web.data.map(item => {
        if (item.id === id) {
          item.text = textTodo
        }
        return item
      })
      web.display(changeTask)
    }
  }
}

web.display()
