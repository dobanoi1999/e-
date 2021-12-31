import { NextSeo } from "next-seo";
import Header from "@components/layout/header/header";
import Footer from "@components/layout/footer/footer";

//import Search from "@components/common/search";

const Layout: React.FC = ({ children }) => (
  <div className="flex flex-col min-h-screen">
    <NextSeo
      additionalMetaTags={[
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0",
        },
      ]}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "logo.png",
        },
      ]}
      title="DobanoiShop"
      description="Trang web bán đồ vip nhất việt nam"
      canonical="logo.png"
      openGraph={{
        url: "logo.png",
        title: "DobanoiShop",
        description: "Trang web bán đồ vip nhất việt nam",
        images: [
          {
            url: "logo.png",
            width: 800,
            height: 600,
            alt: "Og Image Alt",
          },
          {
            url: "logo.png",
            width: 900,
            height: 800,
            alt: "Og Image Alt Second",
          },
        ],
      }}
    />
    <Header />
    <main
      className="relative flex-grow"
      style={{
        minHeight: "-webkit-fill-available",
        WebkitOverflowScrolling: "touch",
      }}
    >
      {children}
    </main>
    <Footer />

    {/* <Search /> */}
  </div>
);

export default Layout;
