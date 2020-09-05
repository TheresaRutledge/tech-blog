async function newPostHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#new-post-title').value;
    const content = document.querySelector('#new-post-content').value;
  
    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        content
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

  document.querySelector('#new-post').addEventListener('submit', newPostHandler);
