import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import useHttp from "../../hooks/use-http";

import { getAllComments } from "../../lib/api";

import LoadingSpinner from "../UI/LoadingSpinner";
import NewCommentForm from "./NewCommentForm";
import CommentsList from "./CommentsList";
import classes from "./Comments.module.css";

const Comments = () => {
  const params = useParams();
  const {
    sendRequest,
    status,
    data: allComments,
    error,
  } = useHttp(getAllComments, true);
  const [isAddingComment, setIsAddingComment] = useState(false);

  const { quoteID } = params;

  let comments;

  useEffect(() => {
    sendRequest(quoteID);
  }, [sendRequest, quoteID, isAddingComment]);

  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  if (status === "pending") {
    comments = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (status === "completed" && allComments && allComments.length > 0) {
    comments = <CommentsList comments={allComments} />;
  }

  if (status === "completed" && (!allComments || allComments.length === 0)) {
    comments = <p className="centered">No comments were added yet!</p>;
  }

  if (error) {
    comments = <p className="centered">{error}</p>;
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {comments}
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          showTextArea={setIsAddingComment}
          quoteID={params.quoteID}
        />
      )}
    </section>
  );
};

export default Comments;
