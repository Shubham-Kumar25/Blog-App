import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, PostForm } from "../components";
import { useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";

function EditPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      appwriteService
        .getPost(slug)
        .then((post) => {
          if (post) {
            setPost(post);
          }
        })
        .catch((error) => {
          console.error("Error fetching post:", error);
          navigate("/"); // Redirect to home page on error
        })
        .finally(() => setLoading(false));
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return (
    <div className="py-8">
      <Container>
        {loading ? <p>Loading...</p> : post ? <PostForm post={post} /> : null}
      </Container>
    </div>
  );
}

export default EditPost;
