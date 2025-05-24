document.addEventListener('DOMContentLoaded', () => {
  // Form elements
  const lostForm = document.getElementById('lostForm');
  const formMessage = document.getElementById('formMessage');

  const contactForm = document.getElementById('contactForm');
  const contactMessageStatus = document.getElementById('contactMessageStatus');

  // Archive Search
  const searchInput = document.getElementById('searchInput');
  const archiveList = document.getElementById('archiveList');
  const archiveItems = archiveList.querySelectorAll('.archive-item');

  // Lost Content Form submit handler
  lostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessage.textContent = '';
    formMessage.style.color = '';

    // Simple validation check
    if (!lostForm.title.value.trim()) {
      formMessage.textContent = 'Please enter the Title / Name of Content.';
      formMessage.style.color = 'red';
      lostForm.title.focus();
      return;
    }
    if (!lostForm.category.value) {
      formMessage.textContent = 'Please select a Category.';
      formMessage.style.color = 'red';
      lostForm.category.focus();
      return;
    }
    if (!lostForm.description.value.trim()) {
      formMessage.textContent = 'Please enter a Description or Memories.';
      formMessage.style.color = 'red';
      lostForm.description.focus();
      return;
    }

    // Simulate form submission
    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you! Your submission has been received.';

    lostForm.reset();
  });

  // Contact Form submit handler
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactMessageStatus.textContent = '';
    contactMessageStatus.style.color = '';

    if (!contactForm.contactEmail2.value.trim()) {
      contactMessageStatus.textContent = 'Please enter your Email.';
      contactMessageStatus.style.color = 'red';
      contactForm.contactEmail2.focus();
      return;
    }
    if (!contactForm.contactMessage.value.trim()) {
      contactMessageStatus.textContent = 'Please enter a Message.';
      contactMessageStatus.style.color = 'red';
      contactForm.contactMessage.focus();
      return;
    }

    // Simulate form submission
    contactMessageStatus.style.color = 'green';
    contactMessageStatus.textContent = 'Thank you! Your message has been sent.';

    contactForm.reset();
  });

  // Archive Search functionality
  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();

    archiveItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      if (text.includes(filter)) {
        item.style.display = '';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Wait until DOM loads
document.addEventListener('DOMContentLoaded', () => {
  const darkModeToggle = document.getElementById('darkModeToggle');
  const body = document.body;
  const tags = document.querySelectorAll('.filter-tags .tag');
  const archiveItems = document.querySelectorAll('.archive-item');

  // Dark mode preference load
const savedMode = localStorage.getItem('darkMode');
if (savedMode === 'enabled') {
  body.classList.add('dark-mode');
  darkModeToggle.checked = true;
}

// Dark mode toggle handler
darkModeToggle.addEventListener('change', () => {
  if (darkModeToggle.checked) {
    body.classList.add('dark-mode');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    body.classList.remove('dark-mode');
    localStorage.setItem('darkMode', 'disabled');
  }
});


  // Filter tags click handler
  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      // Remove active class from all tags, add to clicked one
      tags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');

      const filter = tag.textContent.toLowerCase();

      // Show/hide archive items based on filter
      archiveItems.forEach(item => {
        const statusIcon = item.querySelector('.status-icon');
        if (!statusIcon) {
          // Show items without status icons always
          item.style.display = '';
          return;
        }

        const statusClass = statusIcon.classList.contains('planned') ? 'planned' :
                            statusIcon.classList.contains('in-progress') ? 'in progress' :
                            statusIcon.classList.contains('completed') ? 'completed' : '';

        if (filter === 'all' || filter === statusClass) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

