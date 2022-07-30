import DefaultContainer from "../../components/DefaultContainer";
import NavBar from "../../components/NavBar";

const Home = (props: any) => {
  return (
    <>
      <DefaultContainer light={false}>
        <NavBar></NavBar>
      </DefaultContainer>
    </>
  );
};

export default Home;
