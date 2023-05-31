// dinamycally display unread if unreads
const displayUnreads = (data, unreads) => {
  let unreadCount = 0;
  data.forEach((item) => {
    if (!item.read) {
      unreadCount++;
    }
  });
  unreads.textContent = unreadCount;
};

export default displayUnreads;
