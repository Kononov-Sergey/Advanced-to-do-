import { Route, Routes } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
function App() {
  return (
    <div>
      <Routes>
        <Route path="quotes" element={<AllQuotes />}></Route>
        <Route path="quotes/:quotesID" element={<QuoteDetail />}></Route>
        <Route path="new-quote" element={<NewQuote />}></Route>
      </Routes>
    </div>
  );
}

export default App;
