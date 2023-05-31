// mark all as read function
const markAllAsRead = (
  data,
  postContainer,
  unreads,
  displayPosts,
  displayUnreads
) => {
  data.forEach((item) => {
    item.read = true;
  });
  postContainer.innerHTML = "";
  displayPosts(data, postContainer);
  displayUnreads(data, unreads);
};

export default markAllAsRead;
