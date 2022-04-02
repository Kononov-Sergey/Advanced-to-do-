import { useEffect } from "react";
import QuoteList from "../components/quotes/QuoteList";
import NoQuotesFound from "../components/quotes/NoQuotesFound";
import { getAllQuotes } from "../lib/api";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const AllQuotes = () => {
  const {
    sendRequest,
    status,
    data: quotes,
    error,
  } = useHttp(getAllQuotes, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

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

  if (status === "completed" && (quotes.length === 0 || !quotes)) {
    return <NoQuotesFound />;
  }

  return <QuoteList quotes={quotes} />;
};

export default AllQuotes;
