const menuItems = document.querySelectorAll('.team-content .team');
const contactItems = document.querySelectorAll('.contact-items li');

// Add event listeners for hover effects on team members
menuItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.classList.add('hovered');
  });
  item.addEventListener('mouseout', () => {
    item.classList.remove('hovered');
  });
});

// Add event listener for clicking on contact items
contactItems.forEach((item) => {
  item.addEventListener('click', (e) => {
    // Get the target element and show its content
    const target = e.target;
    if (target.tagName === 'LI') {
      const detailDiv = document.getElementById('detail-' + target.textContent);
      detailDiv.style.display = 'block';
    }
  });
});

// Add event listener for scrolling to section
document.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrolledPosition = window.scrollY;

  // Check if we've scrolled past the first section
  if (scrolledPosition > 500) {
    // Add a class to indicate we're in the second section
    document.body.classList.add('second-section');
  } else {
    // Remove the class
    document.body.classList.remove('second-section');
  }
});