import ContentBox from "../../components/ContentBox";
import NavBar from "../../components/NavBar";
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

      <ContentBox>o</ContentBox>
    </SecondaryContainer>
  );
};

export default Admin;
