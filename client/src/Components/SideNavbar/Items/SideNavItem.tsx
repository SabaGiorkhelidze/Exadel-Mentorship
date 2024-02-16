import { AiOutlineRight } from "react-icons/ai";
interface SideNavItemPropTypes {
  title: String;
  dropdown?: boolean;
}

const SideNavItem = ({ title, dropdown }: SideNavItemPropTypes) => {
  return (
    <div className="cursor-pointer  flex flex-row items-center justify-between gap-20">
      <h1 className="ml-2 text-lg">{title}</h1>
      {dropdown && <AiOutlineRight className="text-lg font-bold" />}
    </div>
  );
};

export default SideNavItem;
