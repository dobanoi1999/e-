import React from "react";
import Link from "@components/ui/link";
import { Category } from "src/types";

interface Props {
  data: Category[];
}
const MenuCategory = ({ data }: Props) => {
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
    <div className="menuCategory">
      {fakeData.map((item) => (
        <Link
          key={item._id}
          className=" block text-sm py-1.5 text-gray-700 font-semibold px-6 2xl:px-10 hover:text-heading hover:bg-gray-300"
          href={item?.href}
        >
          {item?.name}
        </Link>
      ))}
    </div>
  );
};

export default MenuCategory;
