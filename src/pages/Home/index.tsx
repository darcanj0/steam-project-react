import ContentBox from "../../components/ContentBox";
import DefaultContainer from "../../components/DefaultContainer";
import Footer from "../../components/Footer";
import HomeHeading from "../../components/HomeHeading";
import NavBar from "../../components/NavBar";

interface HomeProps {
  inLightMode: boolean;
}

const Home = (props: HomeProps) => {
  return (
    <DefaultContainer light={props.inLightMode}>
      <NavBar
        currentPage={{
          admin: false,
          home: true,
          profiles: false,
          settings: false,
        }}
      />
      <ContentBox inLightMode={props.inLightMode}>
        <HomeHeading inLightMode={props.inLightMode}>New Release</HomeHeading>
        <HomeHeading inLightMode={props.inLightMode}>All Games</HomeHeading>
        <HomeHeading inLightMode={props.inLightMode}>
          Favorite Games
        </HomeHeading>
      </ContentBox>

      <Footer />
    </DefaultContainer>
  );
};

export default Home;
