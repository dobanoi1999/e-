import Link from "@components/ui/link";
import MenuCategory from "@components/ui/MenuCategory";
import { HeaderMenuStyled } from "./style";
import { FaChevronDown } from "react-icons/fa";
import { Category } from "src/types";
interface MenuProps {
  data: Category[];
}

const HeaderMenu = ({ data }: MenuProps) => {
  return (
    <HeaderMenuStyled>
      <div className="linkItem">
        <Link className="linkItem__menuTitle" href="/">
          <span>Category</span>
          <FaChevronDown />
        </Link>
        <MenuCategory className="linkItem__listMenu" data={data} />
      </div>

      <div>
        <Link href="/search">
          <span>Search</span>
        </Link>
      </div>
    </HeaderMenuStyled>
  );
};

export default HeaderMenu;
