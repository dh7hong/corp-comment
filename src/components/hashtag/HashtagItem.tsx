type HashtagItemProps = {
  company: string;
  onSelectCompany: (company: string) => void;
};

export default function HashtagItem({ onSelectCompany, company }: HashtagItemProps) {
  return (
    <li>
      <button onClick={() => onSelectCompany(company)} >#{company}</button>
    </li>
  );
}
