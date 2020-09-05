async function editPostHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('#new-post-title').value;
    const content = document.querySelector('#new-post-content').value;
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
  
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
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
  };

  async function deletePostHandler(event){
      event.preventDefault();
      const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

      const response = await fetch(`/api/posts/${id}`,{
          method: 'DELETE',
      });
      if(response.ok){
          document.location.replace('/dashboard');
      } else {
          alert(response.statusText);
      }
  };


  document.querySelector('#edit-post').addEventListener('submit', editPostHandler);

  document.querySelector('#delete-post').addEventListener('click', deletePostHandler);