import { Layout } from "antd";
import { FooterPage } from "../../components/FooterPage/FooterPage";
import { TopRegister } from "../../components/MenuComponents/TopRegister/TopRegister";
import './Login_SignUp.scss'

export const Login_SignUp = (props) => {
  const { children } = props;
  const { Header, Footer, Content } = Layout;

  return (
    <Layout className="register-layout">
      <Header className="register-layout-header">
        <TopRegister></TopRegister>
      </Header>
      <br></br>
      <Content className="register-layout-content">{children}</Content>
      <Footer>
        <FooterPage className="register-layout-footer"></FooterPage>
      </Footer>
    </Layout>
  );
};