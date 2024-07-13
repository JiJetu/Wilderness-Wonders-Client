import { Layout } from "antd";
import Navbar from "../share/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../share/Footer";

const { Content } = Layout;

const MainLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh", backgroundColor: "white" }}>
      <div className="container mx-auto">
        <Navbar />
      </div>
      <Content>
        <div className="container mx-auto">
          <Outlet />
        </div>
      </Content>
      <Footer />
    </Layout>
  );
};

export default MainLayout;
