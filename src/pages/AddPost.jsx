import React from "react";
import { Container, PostForm } from "../components";

function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <div className="flex justify-center">
          <div className="w-full md:w-3/4 lg:w-1/2">
            <h1 className="mb-8 text-2xl font-bold text-center md:text-3xl lg:text-4xl">
              Create a New Post
            </h1>
            <PostForm />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default AddPost;
