const renderMembers = async () => {
    
    const response = await fetch('/members')
    const data = await response.json()
  
    
    const mainContent = document.getElementById('main-content')
  
    if (data) {
        data.map(member => {
            const card = document.createElement('div')
            card.classList.add('card')
  
            const topContainer = document.createElement('div')
            topContainer.classList.add('top-container')
  
            const bottomContainer = document.createElement('div')
            bottomContainer.classList.add('bottom-container')
  
            topContainer.style.backgroundImage = `url(${member.image})`
  
            const name = document.createElement('h3')
            name.textContent = member.name
            bottomContainer.appendChild(name)
  
            const position = document.createElement('p')
            position.textContent = 'Position: ' + member.position
            bottomContainer.appendChild(position)

            const bounty = document.createElement('p')
            bounty.textContent = 'Bounty: ' + member.bounty
            bottomContainer.appendChild(bounty)
  
            const link = document.createElement('a')
            link.textContent = 'Read More >'
            link.setAttribute('role', 'button')
            link.href = `/members/${member.id}`
            bottomContainer.appendChild(link)
  
            card.appendChild(topContainer)
            card.appendChild(bottomContainer) 
            mainContent.appendChild(card)
        })
    }
    else {
        const message = document.createElement('h2')
        message.textContent = 'No Members! 😞'
        mainContent.appendChild(message)
    }
  }
  
    
    const requestedUrl = window.location.href.split('/').pop()
    
    if (requestedUrl) {
      window.location.href = '../404.html'
    }
    else {
      renderMembers()
    }