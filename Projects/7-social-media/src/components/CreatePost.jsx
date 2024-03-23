import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  const handleSubmit = (event) => {};

  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your userId
        </label>
        <input
          type="text"
          className="form-control"
          id="userId"
          name="userId"
          placeholder="Your user Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          className="form-control"
          name="title"
          id="title"
          placeholder="How are you feeling today"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text"
          rows="4"
          name="body"
          className="form-control"
          id="body"
          placeholder="Tell us more"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Number of reactions
        </label>
        <input
          type="text"
          className="form-control"
          name="reactions"
          id="reactions"
          placeholder="How many people reacted"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Enter your hashtags here
        </label>
        <input
          type="text"
          className="form-control"
          name="tags"
          id="tags"
          placeholder="Please enter tags using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </Form>
  );
};

export const createPostAction = async (data) => {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);

  postData.tags = postData.tags.split(" ");
  console.log(postData);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => {
      // addPost(post);
      // navigate("/");
      console.log(post);
    });
  return redirect("/");
};

export default CreatePost;
