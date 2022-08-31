import { FC } from "react";
import Layout from "../../components/Layout/Layout";
import CustomTitle from "../../elements/CustomTitle/CustomTitle";

const HomePage: FC = () => {
  return (
    <Layout>
      <CustomTitle level="1">Home Page</CustomTitle>
    </Layout>
  );
};

export default HomePage;
