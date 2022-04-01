import QuoteList from "../components/quotes/QuoteList";

const data = [
  { id: "q1", author: "Max", text: "I love React!" },
  { id: "q2", author: "Sarra", text: "I love Vue!" },
];
const AllQuotes = () => {
  return <QuoteList quotes={data} />;
};

export default AllQuotes;
