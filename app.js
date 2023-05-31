import data from "./data/data.js";
import displayPosts from "./utils/displayPosts.js";
import displayUnreads from "./utils/displayUnreads.js";
import markAllAsRead from "./utils/markAllAsRead.js";

const markAllAsReadBtn = document.querySelector(".mark-all-as-read-btn");
const unreads = document.querySelector(".unreads");
const postContainer = document.querySelector(".posts-container");

displayPosts(data, postContainer);

displayUnreads(data, unreads);

markAllAsReadBtn.addEventListener(
  "click",
  markAllAsRead(data, postContainer, unreads, displayPosts, displayUnreads)
);
