import { Layout } from "antd";
import Navbar from "../share/Navbar";
import { Outlet } from "react-router-dom";

const { Content, Footer } = Layout;

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
      <Footer style={{ textAlign: "center" }}>
        <span className="text-[#70E6D2] font-extrabold">Wilderness</span>
        Wonders ©{new Date().getFullYear()} Created by{" "}
        <span className="text-[#06b99e]">Md Jaoadul Islam </span>
      </Footer>
    </Layout>
  );
};

export default MainLayout;
