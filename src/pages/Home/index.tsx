import { useEffect, useState } from "react";
import api from "../../api";
import ContentBox from "../../components/ContentBox";
import DefaultContainer from "../../components/DefaultContainer";
import Footer from "../../components/Footer";
import HomeHeading from "../../components/HomeHeading";
import NavBar from "../../components/NavBar";
import SwiperContainer from "../../components/SwiperContainer";

interface HomeProps {
  inLightMode: boolean;
}

const Home = (props: HomeProps) => {
  const [games, setGames] = useState([]);

  const getAllBoots = async () => {
    try {
      const response = await api.get("/game");
      setGames(response.data);
      games.forEach((game) => console.log(game));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllBoots();
  }, []);

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
        <SwiperContainer></SwiperContainer>
        <HomeHeading inLightMode={props.inLightMode}>
          Favorite Games
        </HomeHeading>
      </ContentBox>

      <Footer />
    </DefaultContainer>
  );
};

export default Home;
