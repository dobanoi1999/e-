import React from "react";
import { Layout } from "@components/index";
import { callApi } from "@services/api";
import { getCategories } from "@services/category";
import { Category } from "@types/index";
interface HomeProps {
  categories: Category[];
}
export default function Home({ categories }: HomeProps) {
  return <Layout>hi</Layout>;
}

export const getStaticProps = async () => {
  const resp = await callApi(getCategories());

  return {
    props: {
      categories: resp?.data || [],
    },
  };
};
