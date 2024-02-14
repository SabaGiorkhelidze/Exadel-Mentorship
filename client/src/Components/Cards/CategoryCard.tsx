import { CiMonitor } from "react-icons/ci";

interface CategoryCardPropTypes {
  title: string;
}
const CategoryCard = ({ title }: CategoryCardPropTypes) => {
  return (
    <div className="flex flex-col cursor-pointer justify-center items-center px-10 py-5 border-2 border-gray-300 mx-3">
      <div>
        <CiMonitor size={72} />
      </div>
      <div className="my-1">
        <h1 className="text-lg">{title}</h1>
      </div>
    </div>
  );
};

export default CategoryCard;
