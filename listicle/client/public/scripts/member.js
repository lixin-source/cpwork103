const renderMember = async () => {
    const requestedID = parseInt(window.location.href.split('/').pop())
  
    const response = await fetch('/members')
    const data = await response.json()
  
    const memberContent = document.getElementById('member-content')
  
    let member
  
    member = data.find(member => member.id === requestedID)
  
    if (member) {
      document.getElementById('image').src = member.image
      document.getElementById('name').textContent = member.name
      document.getElementById('position').textContent = 'Position: ' + member.position
      document.getElementById('bounty').textContent = 'Bounty: ' + member.bounty
      document.getElementById('description').textContent = member.description
      document.title = `Crewmate - ${member.name}`
    }
    else {
      const message = document.createElement('h2')
      message.textContent = 'Info not Available 😞'
      memberContent.appendChild(message)   
    }
  }
  
  renderMember()