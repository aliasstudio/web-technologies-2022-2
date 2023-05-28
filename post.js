function renderPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');

  const getPost = async () => {
    try {
      const response =  await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);

      if (response.status === 200) {
        return await response.json();
      }
    } catch(error) {
      console.log(error);
    }
  }

  getPost().then(post => {
    document.querySelector('#post').innerHTML = `
        <div>
            <div><b>ID:</b> ${post.id}</div>
            <div><b>Titile:</b> ${post.title}</div>
            <div><b>Description:</b> ${post.body}</div>
        </div>`;
  });

  const getComments = async () => {
    try {
      const response =  await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);

      if (response.status === 200) {
        return await response.json();
      }
    } catch(error) {
      console.log(error);
    }
  }

  getComments().then(comments => {
    document.querySelector('#comments').innerHTML =
      '<h3>Comments</h3>'
      + comments.map(comment => {
        return `<div>
                  <div><b>Name:</b> ${comment.name}</div>
                  <div><b>Email:</b> ${comment.email}</div>
                  <div><b>Comment:</b> ${comment.body}</div>
                  <br>
              </div>`;
      }).join('');
  });
}

renderPost();