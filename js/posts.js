const POST_TITLE_INPUT = document.querySelector(".blog__input");
const POST_TEXT_INPUT = document.querySelector(".blog__textarea");

const POSTS_ELEMENT = document.querySelector(".blog__posts");

function createPost() {
  const title = POST_TITLE_INPUT;
  const text = POST_TEXT_INPUT;

  if (!title.value || !text.value) {
    validationFields([title, text]);

    return;
  }

  const currentDate = () => {
    const date = new Date();

    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
  };

  POSTS_ELEMENT.innerHTML += `
    <div class="post">
      <div class="post__header">
        <div class="post__header-info">
          <img
            class="post__avatar"
            src="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
            width="40"
            height="40"
            alt="avatar"
          />

          <div class="post__title">${title.value}</div>
        </div>

        <div class="post__date">
          ${currentDate()}
        </div>
      </div>

      <div class="post__text">
        ${text.value}
      </div>
    </div>
  `;
}
