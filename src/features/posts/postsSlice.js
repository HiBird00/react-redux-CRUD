const { createSlice } = require("@reduxjs/toolkit");

const initialState = [
  { id: "1", title: "First Post!", content: "Hello!" },
  { id: "2", title: "Second Post!", content: "More text" }
];

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: (state, action) => {
      state.push(action.payload);
    },
    postUpdated: (state, action) => {
      const { id, title, content } = action.payload;
      const existingPost = state.find((post) => post.id === id);
      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    },
    postDeleted: (state, action) =>
      state.filter((post) => post.id !== action.payload)
  }
});

export const { postAdded, postUpdated, postDeleted } = postSlice.actions;

export default postSlice.reducer;
