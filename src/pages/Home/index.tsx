import ContentBox from "../../components/ContentBox";
import DefaultContainer from "../../components/DefaultContainer";
import Footer from "../../components/Footer";
import HomeHeading from "../../components/HomeHeading";
import NavBar from "../../components/NavBar";

const Home = (props: any) => {
  return (
    <DefaultContainer light={true}>
      <NavBar
        currentPage={{
          admin: false,
          home: true,
          profiles: false,
          settings: false,
        }}
      />
      <ContentBox>
        <HomeHeading>New Release</HomeHeading>
        <HomeHeading>All Games</HomeHeading>
        <HomeHeading>Favorite Games</HomeHeading>
      </ContentBox>

      <Footer />
    </DefaultContainer>
  );
};

export default Home;
