import { Outlet } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useLanguage } from "@/hooks/useLanguage";

const MainLayout = () => {
  const { direction } = useLanguage();

  return (
    <div dir={direction} className="min-h-screen flex flex-col bg-[#f5f0eb]">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
