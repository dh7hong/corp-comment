import { useFeedbackItemsStore } from "../../stores/feedbackItemsStore";
import HashtagItem from "./HashtagItem";

export default function HashtagList() {

  // const { companyList, handleSelectCompany } = useFeedbackItemsContext();
  const companyList = useFeedbackItemsStore((state) => state.getCompanyList());
  const selectCompany = useFeedbackItemsStore(
    (state) => state.selectCompany
  );
  return (
    <ul className="hashtags">
      {companyList.map((company) => (
        <HashtagItem
          company={company}
          key={company}
          onSelectCompany={selectCompany}
        />
      ))}
      {/* returns a list of HashtagItem components without the return keyword because it's a single line expression */}
    </ul>
  );
}
