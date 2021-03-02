import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { postDeleted } from "./postsSlice";

export const SinglePostPage = ({ match }) => {
  const { postId } = match.params;
  const dispatch = useDispatch();

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

  const clickDelete = () => {
    dispatch(postDeleted(postId));
  };

  return (
    <>
      <section>
        <article className="post">
          <h2>{post.title}</h2>
          <p className="post-content">{post.content}</p>
        </article>
      </section>
      <Link to={`/posts/${post.id}/edit`} className="button muted-button">
        Edit
      </Link>
      <button onClick={clickDelete}>Delete</button>
    </>
  );
};
