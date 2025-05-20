// Smooth Scroll for Navigation Links
document.querySelectorAll('.topnav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Lightbox for Project Images
document.querySelectorAll('.project img').forEach(image => {
  image.addEventListener('click', function() {
    // Create the modal
    const modal = document.createElement('div');
    modal.classList.add('modal');
    const img = document.createElement('img');
    img.src = this.src;
    img.alt = this.alt;
    modal.appendChild(img);
    
    // Close button
    const closeButton = document.createElement('span');
    closeButton.textContent = '×';
    closeButton.classList.add('close');
    closeButton.addEventListener('click', () => {
      document.body.removeChild(modal);
    });
    modal.appendChild(closeButton);
    
    // Append modal to body
    document.body.appendChild(modal);
  });
});

// Form Validation for Contact Page
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
  const name = document.querySelector('input[name="name"]');
  const email = document.querySelector('input[name="email"]');
  const message = document.querySelector('textarea[name="message"]');
  
  // Simple validation
  if (name.value.trim() === '') {
    alert('Please enter your name.');
    e.preventDefault();
    return;
  }
  
  if (email.value.trim() === '' || !/\S+@\S+\.\S+/.test(email.value)) {
    alert('Please enter a valid email address.');
    e.preventDefault();
    return;
  }
  
  if (message.value.trim() === '') {
    alert('Please enter a message.');
    e.preventDefault();
    return;
  }
  
  alert('Form submitted successfully!');
});

// Modal Style (Lightbox)
const style = document.createElement('style');
style.innerHTML = `
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
  }
  .modal img {
    max-width: 90%;
    max-height: 90%;
  }
  .modal .close {
    position: absolute;
    top: 20px;
    right: 20px;
    font-size: 30px;
    color: white;
    cursor: pointer;
  }
  .modal .close:hover {
    color: #ff4081;
  }
`;
document.head.appendChild(style);
