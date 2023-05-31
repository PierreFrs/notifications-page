// display all posts through map function

const displayPosts = (data, postContainer) => {
  data.map((item) => {
    const post = document.createElement("div");
    post.classList.add(
      "post",
      "grid",
      "auto-rows-auto",
      "grid-cols-[60px_1fr_60px]",
      "gap-4",
      "rounded-lg",
      "p-6"
    );
    if (!item.read) {
      post.classList.add("bg-neutralVeryLightGrayishBlue");
    }
    post.innerHTML = `<img
            src=${item.portrait}
            alt="user picture"
            class="user-picture col-start-1 cursor-pointer"
          />
          <div class="text col-start-2 text-left">
            <a
              href="#"
              class="user-name font-bold text-neutralVeryDarkBlue hover:text-primaryBlue"
            >
              ${item.name}
            </a>
            <p class="user-action inline text-neutralDarkGrayishBlue">
              ${item.action}
            </p>
            ${
              item.link
                ? `<a href="#" class="user-link text-neutralDarkGrayishBlue font-bold over:text-primaryBlue">${item.link}</a>`
                : ""
            }
            ${
              !item.read
                ? '<span class="unread-mark w-3 h-3 bg-primaryRed inline-block rounded-full ml-1"></span>'
                : ""
            }
            
            <p class="time text-neutralGrayishBlue">${item.time} ago</p>
          </div>
          ${
            item.picture
              ? `<img src="${item.picture}" alt="commented-picture" class="commented-picture col-start-3"/>`
              : ""
          }
          ${
            item.message
              ? `<p class="user-message border border-neutralLightGrayishBlue2 rounded-lg p-3 text-neutralDarkGrayishBlue cursor-pointer hover:bg-neutralLightGrayishBlue1 col-start-2 row-start-2 col-span-2">${item.message}</p>`
              : ""
          }`;
    postContainer.appendChild(post);
    return postContainer;
  });
};

export default displayPosts;
