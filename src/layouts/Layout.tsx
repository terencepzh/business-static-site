import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

function Layout({ children }: any) {
  return (
    <div className="flex flex-col">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}

export default Layout;
