import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { createPost } from "./../redux/features/PostSlice";
import Spinner from "./Spinner";
const CreatePost = () => {
  const [values, setValues] = useState({ title: "", body: "" });
  const [showPost, setShowPost] = useState(false);
  const { title, body } = values;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, post } = useSelector((state) => ({ ...state.app }));

  //   handle post function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost({ values }));
    setValues({ title: "", body: "" });
    setShowPost(true);
  };
  //   show create post
  const showCreatePost = () => {
    return (
      <>
        {loading ? (
          <Spinner />
        ) : (
          <div className="card mt-4">
            <div className="card-body">
              <h5 className="card-title">{post[0].title}</h5>
              <p className="card-text">{post[0].body}</p>
              <div className="d-flex align-items-end justify-content-end">
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  return (
    <div>
      <h1 className="text-center bg-dark text-white p-2 mt-4">Create Post</h1>
      <form>
        <div className="mb-3 mt-4">
          <input
            value={title}
            onChange={(e) => setValues({ ...values, title: e.target.value })}
            placeholder="Enter Post Title"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="form-floating">
          <textarea
            value={body}
            onChange={(e) => setValues({ ...values, body: e.target.value })}
            className="form-control"
            placeholder="Add Post Description"
            id="floatingTextarea"
          ></textarea>
          <label for="floatingTextarea">Description</label>
        </div>
        <div className="mt-4 d-flex align-items-end justify-content-end">
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            Go Home
          </button>
          <button
            className="btn btn-danger ms-4"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </form>
      <div className="mt-4">{showPost && <> {showCreatePost()} </>}</div>
    </div>
  );
};

export default CreatePost;
