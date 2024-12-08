import { Link } from "react-router-dom";
import { TagIcon } from "@heroicons/react/24/outline";
import TopicList from "./TopicList";

const TopicSelector = ({ onSelect }) => (
  <>
    <div className="flex pb-2 text-white">
      <Link
        className="text-nowrap text-lg hover:text-brand-secondary hover:underline"
        onClick={onSelect}
        to="/browse"
      >
        <TagIcon className="inline-block text-white h-6 pb-1 pr-4 text-gray-900" />
        All topics
      </Link>
    </div>
    <TopicList onSelect={onSelect} />
  </>
);

export default TopicSelector;
