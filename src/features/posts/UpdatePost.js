import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUpdated } from "./postsSlice";

export const UpdatePost = ({ match }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );
  const [newTitle, setNewTitle] = useState(post.title);
  const [newContent, setNewContent] = useState(post.content);
  if (!post) {
    return <h2>Not Found Post!</h2>;
  }

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(
      postUpdated({
        id: postId,
        title: newTitle,
        content: newContent
      })
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
      />
      <textarea
        value={newContent}
        onChange={(e) => setNewContent(e.target.value)}
      />
      <input type="submit" value="Update!" />
    </form>
  );
};

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;

  const post = useSelector((state) =>
    state.posts.find((post) => post.id === postId)
  );
  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    );
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>
        <p className="post-content">{post.content}</p>
      </article>
    </section>
  );
};
