//Неявне повертання обєкта
// const newPost = (post, addeaAt = Date()) => ({
//   ...post,
//   addeaAt,
// });

const newPost = (post, addeaAt = Date()) => {
  return { ...post, addeaAt };
};

const firstPost = {
  id: 1,
  author: "Vasyl",
};

console.log(newPost(firstPost));
