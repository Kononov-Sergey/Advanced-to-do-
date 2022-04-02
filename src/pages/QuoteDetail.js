import { Route, Routes, useParams } from "react-router-dom";

import HighlightedQuote from "../components/quotes/HighlightedQuote";
import Comments from "../components/comments/Comments";

const data = [
  { id: "q1", author: "Max", text: "I love React!" },
  { id: "q2", author: "Sarra", text: "I love Vue!" },
];

const QuoteDetail = () => {
  const params = useParams();

  const currentQuote = data.find((el) => el.id === params.quoteID);
  return (
    <>
      <HighlightedQuote text={currentQuote.text} author={currentQuote.author} />
      <Routes>
        <Route path="comments" element={<Comments />}></Route>
      </Routes>
    </>
  );
};

export default QuoteDetail;
