import ConfigContentBox from "../../components/ConfigContentBox";
import ContentBox from "../../components/ContentBox";
import Footer from "../../components/Footer";
import HomeHeading from "../../components/HomeHeading";
import NavBar from "../../components/NavBar";
import OptionsList from "../../components/OptionsList";
import SecondaryContainer from "../../components/SecondaryContainer";

const Admin = (props: any) => {
  return (
    <SecondaryContainer light={false}>
      <NavBar
        currentPage={{
          admin: true,
          home: false,
          profiles: false,
          settings: false,
        }}
      ></NavBar>

      <ContentBox>
        <HomeHeading>Manager Settings</HomeHeading>
        <ConfigContentBox>
          <OptionsList options={["Manage games", "Manage genres"]} />
        </ConfigContentBox>
      </ContentBox>
      <Footer />
    </SecondaryContainer>
  );
};

export default Admin;
