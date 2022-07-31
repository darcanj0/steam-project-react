import ContentBox from "../../components/ContentBox";
import DefaultContainer from "../../components/DefaultContainer";
import HomeHeading from "../../components/HomeHeading";
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
        />
        <ContentBox>
          <HomeHeading>New Release</HomeHeading>
          <HomeHeading>All Games</HomeHeading>
          <HomeHeading>Favorite Games</HomeHeading>
        </ContentBox>
      </DefaultContainer>
    </>
  );
};

export default Home;
