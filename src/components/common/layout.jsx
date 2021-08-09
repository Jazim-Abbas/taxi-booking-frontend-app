import Footer from "../Footer";
import Header from "../Header";

export default function AppLayout({
  children,
  hasFooter = true,
  hasHeader = true,
} = {}) {
  return (
    <>
      {hasHeader && <Header />}

      {children}

      {hasFooter && <Footer />}
    </>
  );
}
