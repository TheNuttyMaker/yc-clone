import Navbar from "@/components/Navbar";

const Layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default Layout;
