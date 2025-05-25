document.addEventListener('DOMContentLoaded', () => {
  const lostForm = document.getElementById('lostForm');
  const formMessage = document.getElementById('formMessage');

  const contactForm = document.getElementById('contactForm');
  const contactMessageStatus = document.getElementById('contactMessageStatus');

  const inputs = Array.from(document.querySelectorAll('form input, form textarea, form select'));
inputs.forEach((input, i) => {
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const nextInput = inputs[i + 1];
      if (nextInput) {
        nextInput.focus();
      } else {
        input.form.submit();
      }
    }
  });
});

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrolled = (scrollTop / docHeight) * 100;
  document.getElementById('progressBar').style.width = `${scrolled}%`;
});




const submitBtn = document.querySelector('form button[type="submit"]');
const requiredFields = Array.from(document.querySelectorAll('form [required]'));

function checkFormValidity() {
  const allFilled = requiredFields.every(field => field.value.trim() !== '');
  submitBtn.disabled = !allFilled;
}



requiredFields.forEach(field => {
  field.addEventListener('input', checkFormValidity);
});

checkFormValidity(); 

const scrollBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    scrollBtn.style.display = 'block';
  } else {
    scrollBtn.style.display = 'none';
  }
});

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});



 
  const searchInput = document.getElementById('searchInput');
  const archiveList = document.getElementById('archiveList');
  const archiveItems = archiveList.querySelectorAll('.archive-item');


const likeButtons = document.querySelectorAll('.like-btn');

likeButtons.forEach((btn, index) => {
  const countSpan = btn.querySelector('.like-count');
  const storageKey = `likes-${index}`;
  let storedLikes = parseInt(localStorage.getItem(storageKey)) || 0;

  countSpan.textContent = storedLikes;

  btn.addEventListener('click', () => {
    storedLikes++;
    countSpan.textContent = storedLikes;
    localStorage.setItem(storageKey, storedLikes);
  });
});

const bookmarkButtons = document.querySelectorAll('.bookmark-btn');

bookmarkButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    alert('Saved! You can implement a saved list feature with localStorage.');
  });
});



function formatLikes(num) {
  return num >= 1000 ? (num / 1000).toFixed(1) + 'K' : num.toString();
}



function formatLikes(num) {
  return num >= 1000 ? (num / 1000).toFixed(1) + 'K' : num.toString();
}




  const tags = document.querySelectorAll('.filter-tags .tag');

  
  lostForm.addEventListener('submit', (e) => {
    e.preventDefault();
    formMessage.textContent = '';
    formMessage.style.color = '';

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

    formMessage.style.color = 'green';
    formMessage.textContent = 'Thank you! Your submission has been received.';
    lostForm.reset();
  });

 
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

    contactMessageStatus.style.color = 'green';
    contactMessageStatus.textContent = 'Thank you! Your message has been sent.';
    contactForm.reset();
  });

  searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();

    archiveItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(filter) ? '' : 'none';
    });
  });

  const formFields = ['title', 'category', 'description']; 

formFields.forEach(id => {
  const field = document.getElementById(id);
  if (field) {
    field.value = localStorage.getItem(id) || '';
    field.addEventListener('input', () => {
      localStorage.setItem(id, field.value);
    });
  }
});


 document.addEventListener('DOMContentLoaded', () => {
    const lostForm = document.getElementById('lostForm');
    const formMessage = document.getElementById('formMessage');

    lostForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Stop default form behavior

      // Basic required field check
      const title = lostForm.querySelector('#title').value.trim();
      const category = lostForm.querySelector('#category').value;
      const description = lostForm.querySelector('#description').value.trim();

      if (!title || !category || !description) {
        formMessage.textContent = '❌ Please fill out all required fields.';
        formMessage.style.color = 'red';
        return;
      }

      // Show confirmation message
      formMessage.textContent = '✅ You have submitted lost content! Thank you.';
      formMessage.style.color = 'green';

      // Clear the form
      lostForm.reset();
    });
  });


const shareBtn = document.getElementById('sharePageBtn');
if (shareBtn) {
  shareBtn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      shareBtn.textContent = '✔ Copied!';
      setTimeout(() => shareBtn.textContent = 'Share This Page', 2000);
    } catch (err) {
      alert('Could not copy the link');
    }
  });
}

document.querySelectorAll('.comment-form').forEach((form, index) => {
  const commentList = form.parentElement.querySelector('.comments-list');

  const saved = localStorage.getItem('comments-' + index);
  if (saved) {
    commentList.innerHTML = saved;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const input = form.querySelector('input');
    const commentText = input.value.trim();
    if (!commentText) return;

    const li = document.createElement('li');
    li.textContent = commentText;
    commentList.appendChild(li);

    localStorage.setItem('comments-' + index, commentList.innerHTML);
    input.value = '';
  });
});


const lostItems = [
  {
    id: 1,
    title: 'Old Distracted Boyfriend Meme',
    clues: ['meme', 'copyright', 'variant', 'disappeared', 'viral'],
  },
  {
    id: 2,
    title: 'Dancing Cat 2012 Video',
    clues: ['video', 'cat', 'dancing', 'viral', 'pop music'],
  },
  {
    id: 3,
    title: 'Lost Movie: The Silent Forest',
    clues: ['movie', 'forest', 'silent', 'horror', '1990s'],
  }
];

function getMatchScores(lostItems, foundClues) {
  return lostItems.map(item => {
    const score = item.clues.reduce((acc, clue) => {
      return acc + (foundClues.includes(clue.toLowerCase()) ? 1 : 0);
    }, 0);
    return { id: item.id, title: item.title, score };
  }).filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score);
}

const cluesInput = document.getElementById('cluesInput');
const matchBtn = document.getElementById('matchBtn');
const matchesList = document.getElementById('matchesList');

matchBtn.addEventListener('click', () => {
  const inputText = cluesInput.value.trim().toLowerCase();
  if (!inputText) {
    alert('Please enter some clues.');
    return;
  }
  const foundClues = inputText.split(',').map(s => s.trim()).filter(Boolean);

  const matches = getMatchScores(lostItems, foundClues);

  matchesList.innerHTML = '';

  if (matches.length === 0) {
    matchesList.innerHTML = '<li>No matches found. Try different clues!</li>';
    return;
  }

  matches.forEach(match => {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${match.title}</strong> — <span class="score">${match.score} clue(s) matched</span>`;
    matchesList.appendChild(li);
  });
});



  tags.forEach(tag => {
    tag.addEventListener('click', () => {
      tags.forEach(t => t.classList.remove('active'));
      tag.classList.add('active');

      const filter = tag.textContent.toLowerCase();

      archiveItems.forEach(item => {
        const statusIcon = item.querySelector('.status-icon');
        if (!statusIcon) {
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





