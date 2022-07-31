import DefaultContainer from "../../components/DefaultContainer";
import NavBar from "../../components/NavBar";

const Home = (props: any) => {
  return (
    <>
      <DefaultContainer light={false}>
        <NavBar
          currentPage={{
            admin: false,
            home: true,
            profiles: false,
            settings: false,
          }}
        ></NavBar>
      </DefaultContainer>
    </>
  );
};

export default Home;
