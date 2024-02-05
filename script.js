const POST_TITLE_INPUT = document.querySelector(".blog__input");
const POST_TEXT_INPUT = document.querySelector(".blog__textarea");

const POSTS_ELEMENT = document.querySelector(".blog__posts");

function createPost() {
  const title = POST_TITLE_INPUT.value;
  const text = POST_TEXT_INPUT.value;

  if (!title || !text) {
    return;
  }

  POSTS_ELEMENT.innerHTML += `
    <div class="post">
      <div class="post__header">
        <img
          class="post__avatar"
          src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
          width="40"
          height="40"
          alt="avatar"
        />

        <div class="post__title">${title}</div>
      </div>

      <div class="post__text">
        ${text}
      </div>
    </div>
  `;
}
