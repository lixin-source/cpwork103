const header = document.querySelector('header')

const headerContainer = document.createElement('div')
headerContainer.className = 'header-container'

const headerLeft = document.createElement('div')
headerLeft.className = 'header-left'

const headerLogo = document.createElement('img')
headerLogo.src = '/header.png'

const headerTitle = document.createElement('h4')
headerTitle.textContent = 'The Strawhat Crew'

headerLeft.appendChild(headerLogo)
headerLeft.appendChild(headerTitle)

const headerButton = document.createElement('button');
headerButton.textContent = 'View All Members';

// Add the "btn" and "btn-primary" classes
headerButton.classList.add('btn', 'btn-primary');

headerButton.addEventListener('click', (event) => {
  window.location = '/';
});

// Append the button to your document or a specific container
// For example:
document.body.appendChild(headerButton);


const headerRight = document.createElement('div')
headerRight.className = 'header-right'

headerRight.appendChild(headerButton)

headerContainer.appendChild(headerLeft)
headerContainer.appendChild(headerRight)

header.appendChild(headerContainer)