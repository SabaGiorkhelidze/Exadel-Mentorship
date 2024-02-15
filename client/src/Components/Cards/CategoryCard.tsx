// this are icons for the layout compoennt data

interface CategoryCardPropTypes {
  title: string;
  Icon: IconType,
}
const CategoryCard = ({ title, Icon }: CategoryCardPropTypes) => {
  return (
    <div className="flex flex-col cursor-pointer justify-center items-center px-10 py-5 border-2 border-gray-300 mx-3">
      <div>
        <Icon size={72} />
      </div>
      <div className="my-1">
        <h1 className="text-lg">{title}</h1>
      </div>
    </div>
  );
};

export default CategoryCard;
