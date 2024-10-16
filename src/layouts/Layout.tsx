import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SocialPopover from "@/components/SocialPopover";

function Layout({ children }: any) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {children}
      <SocialPopover />
      <Footer />
    </div>
  );
}

export default Layout;
