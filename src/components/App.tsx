import Footer from "./layout/Footer";
import Container from "./layout/Container";
import HashtagList from "./hashtag/HashtagList";
import { useEffect } from "react";
import { useFeedbackItemsStore } from "../stores/feedbackItemsStore";

function App() {

  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Container />
      <HashtagList />
      <Footer />
    </div>
  );
}

export default App;
