import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <section className="layout">
      <Header />
      {children}
      <Footer />
    </section>
  );
};

export default Layout;
