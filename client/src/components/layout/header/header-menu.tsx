import Link from "@components/ui/link";
import MenuCategory from "@components/ui/MenuCategory";
import { FaChevronDown } from "react-icons/fa";
import { Category } from "src/types";
interface MenuProps {
  data: Category[];
}

const HeaderMenu = ({ data }: MenuProps) => {
  return (
    <nav>
      <div>
        <Link href="/">
          <span>Category</span>
          <span>
            <FaChevronDown />
          </span>
        </Link>
        <MenuCategory data={data} />
      </div>

      <div>
        <Link href="/search">
          <span>Search</span>
        </Link>
      </div>
    </nav>
  );
};

export default HeaderMenu;
