import React from "react";
import Layout from "src/components/layout/layout";
import { callApi } from "@services/api";
import { getCategories } from "@services/category";
import { Category } from "@types";
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
