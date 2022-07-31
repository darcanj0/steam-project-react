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
    </SecondaryContainer>
  );
};

export default Settings;
