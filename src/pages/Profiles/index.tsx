import NavBar from "../../components/NavBar";
import SecondaryContainer from "../../components/SecondaryContainer";

const Profiles = (props: any) => {
  return (
    <SecondaryContainer light={false}>
      <NavBar
        currentPage={{
          admin: false,
          home: false,
          profiles: true,
          settings: false,
        }}
      ></NavBar>
    </SecondaryContainer>
  );
};

export default Profiles;
