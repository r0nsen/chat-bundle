document.addEventListener('DOMContentLoaded', function() {
  if (window.createChat) {
    window.createChat({
      webhookUrl: 'https://automationen.webdosis-projects.de/webhook/f406671e-c954-4691-b39a-66c90aa2f103/chat',
      target: '#chat-container',
      initialMessages: ['Hallo! Wie können wir dir helfen?'],
      showButton: false,
      buttonStyle: { display: 'none' }
    });
  } else {
    console.error('n8n Chat-Skript nicht geladen!');
  }
});
