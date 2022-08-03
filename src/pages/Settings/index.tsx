import ContentBox from "../../components/ContentBox";
import NavBar from "../../components/NavBar";
import SecondaryContainer from "../../components/SecondaryContainer";

const Settings = (props: any) => {
  return (
    <SecondaryContainer light={false}>
      <NavBar
        currentPage={{
          home: false,
          admin: false,
          profiles: false,
          settings: true,
        }}
      ></NavBar>

      <ContentBox>o</ContentBox>
    </SecondaryContainer>
  );
};

export default Settings;
