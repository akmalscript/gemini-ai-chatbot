const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const userMessage = input.value.trim();
  if (!userMessage) return;

  appendMessage('user', userMessage);
  input.value = '';

  const thinkingMsg = appendMessage('bot', 'Gemini is thinking...');

  fetch('/api/chat', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ message: userMessage }),
  })
    .then(res => {
      if (!res.ok) {
        return res.json().then(err => { throw new Error(err.reply) });
      }
      return res.json();
    })
    .then(data => {
      const cleanHTML = DOMPurify.sanitize(marked.parse(data.reply));
      thinkingMsg.innerHTML = cleanHTML;
    })
    .catch(error => {
      console.error('Error:', error);
      thinkingMsg.textContent = `Error: ${error.message || 'Could not get a response.'}`;
    });
});

function appendMessage(sender, text) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);

  if (sender === 'bot') {
    const cleanHTML = DOMPurify.sanitize(marked.parse(text));
    msg.innerHTML = cleanHTML;
  } else {
    msg.textContent = text;
  }

  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
  return msg;
}