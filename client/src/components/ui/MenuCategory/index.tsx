import React from "react";
import Link from "@components/ui/link";
import { Category } from "src/types";
import { MenuCateStyled } from "./style";
interface Props {
  data: Category[];
  className?: string;
}
const MenuCategory = ({ data, className }: Props) => {
  if (!data) return null;
  const fakeData = [
    {
      _id: 1,
      name: "telephone dfasdfdf",
      href: "/",
    },
    {
      _id: 2,
      name: "abc",
      href: "/",
    },
    {
      _id: 3,
      name: "abc",
      href: "/",
    },
    {
      _id: 4,
      name: "abc",
      href: "/",
    },
    {
      _id: 5,
      name: "abc",
      href: "/",
    },
  ];
  return (
    <MenuCateStyled className={className}>
      {fakeData.map((item) => (
        <Link key={item._id} href={item?.href}>
          {item?.name}
        </Link>
      ))}
    </MenuCateStyled>
  );
};

export default MenuCategory;
