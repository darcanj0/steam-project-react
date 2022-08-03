import { useEffect, useState } from "react";
import api from "../../api";
import ContentBox from "../../components/ContentBox";
import DefaultContainer from "../../components/DefaultContainer";
import Footer from "../../components/Footer";
import HomeHeading from "../../components/HomeHeading";
import NavBar from "../../components/NavBar";
import SwiperContainer from "../../components/SwiperContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectCoverflow } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import GameHomeCard from "../../components/GameHomeCard";
import Game from "../../types/game";

interface HomeProps {
  inLightMode: boolean;
}

const Home = (props: HomeProps) => {
  const [games, setGames] = useState<Game[]>([]);

  const getAllBoots = async () => {
    try {
      const response = await api.get("/game");
      setGames(response.data);
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
        <SwiperContainer>
          <Swiper
            effect={"coverflow"}
            spaceBetween={0}
            slidesPerView={4}
            centeredSlides={true}
            rewind={true}
            modules={[Navigation, EffectCoverflow, Autoplay]}
            autoplay={{
              disableOnInteraction: false,
              delay: 3000,
              pauseOnMouseEnter: true,
              waitForTransition: false,
            }}
            navigation
            grabCursor={true}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 70,
              modifier: 1,
              slideShadows: false,
            }}
          >
            {games.map((game) => {
              return (
                <SwiperSlide key={game.id}>
                  <GameHomeCard game={game} key={game.id}>
                    o
                  </GameHomeCard>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </SwiperContainer>

        <HomeHeading inLightMode={props.inLightMode}>
          Favorite Games
        </HomeHeading>
      </ContentBox>

      <Footer />
    </DefaultContainer>
  );
};

export default Home;
