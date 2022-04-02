import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";

import AllQuotes from "./pages/AllQuotes";
import NewQuote from "./pages/NewQuote";
import QuoteDetail from "./pages/QuoteDetail";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="quotes" />} />
        <Route path="quotes/" element={<AllQuotes />} />
        <Route path="quotes/:quoteID/*" element={<QuoteDetail />} />
        <Route path="new-quote" element={<NewQuote />} />
      </Routes>
    </Layout>
  );
}

export default App;
