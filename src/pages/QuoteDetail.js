import { Route, Routes, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <>
      <h1>QuoteDetail</h1>
      <p>{params.quoteID}</p>
      <Routes>
        <Route path="comments" element={<Comments />}></Route>
      </Routes>
    </>
  );
};

export default QuoteDetail;
