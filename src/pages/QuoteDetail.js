import { Route, Routes, useParams, Link } from "react-router-dom";
import { useEffect } from "react";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";

import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

const QuoteDetail = () => {
  const params = useParams();
  const {
    sendRequest,
    status,
    data: quote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(params.quoteID);
  }, [sendRequest, params.quoteID]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="centered">
        <h1>{error}</h1>
      </div>
    );
  }

  if (!quote.text) {
    return (
      <div className="centered">
        <h1>Not quote found!</h1>
      </div>
    );
  }

  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Routes>
        <Route
          path=""
          element={
            <div className="centered">
              <Link className="btn--flat" to="comments">
                Add comment
              </Link>
            </div>
          }
        />
        <Route path="comments" element={<Comments />} />
      </Routes>
    </>
  );
};

export default QuoteDetail;
