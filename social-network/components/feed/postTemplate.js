let postTemplate = function(post) {
  let user = firebase.auth().currentUser;
  let date = new Date(post.date);
  let formattedDate = `${date.getFullYear()}/${date.getMonth() +
    1}/${date.getDate()}`;
  let newsPostTemplate = String.raw`
    <article id=${post.id} class="post news-post">
    <div class="meta-data">
    <span>
    ${formattedDate}
    </span>
    <span>
    ${post.displayName}
    </span>
    </div>
    <div class="content">
    <span class="post-text">  ${post.text} </span>
      <br/>
      <a class="url" href="${
        post.url
      }" target="_blank" rel="noopener noreferrer">Enlace noticia</a>
          ${post.userId === user.uid ?
             String.raw`<input type="button" doc-id="${post.id}"  class="btn-delete" value="eliminar" >
             <input type="button" class="btn-edit" doc-id="${post.id}" value="editar" >
             ` : ""}
         </div>
        </article>
  
    `;
  return newsPostTemplate;
};
export default postTemplate;
