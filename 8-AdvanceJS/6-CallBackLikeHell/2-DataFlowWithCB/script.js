function getUser(username, fn) {
  setTimeout(() => {
    fn({ id: 21, username: "ayushrayal" });
  }, 1000);
}
function getUserPosts( fn) {
  fn();
}

getUser("ayushrayal", function (dets) {
  console.log(dets);
  getUserPosts( function () {
    setTimeout(() => {
      let posts = [
        { postid: 1, content: "Hello World" },
        { postid: 2, content: "My second post" },
      ];
      posts.forEach((post) => {
        console.log(post.postid + " : " + post.content);
      });
    }, 1000);
  });
});
