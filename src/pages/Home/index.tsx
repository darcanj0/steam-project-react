import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Autoplay, EffectCoverflow, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import api from "../../api";
import ContentBox from "../../components/ContentBox";
import DefaultContainer from "../../components/DefaultContainer";
import Footer from "../../components/Footer";
import GameHomeCard from "../../components/GameHomeCard";
import HomeHeading from "../../components/HomeHeading";
import NavBar from "../../components/NavBar";
import NewRelease from "../../components/NewRelease";
import SwiperContainer from "../../components/SwiperContainer";
import { useAuth } from "../../contexts/auth";
import { useGenres } from "../../contexts/genres";
import Favorite from "../../types/favorite";
import Game from "../../types/game";
import Genre from "../../types/genres";
import Profile from "../../types/profiles";
import ToastStyle from "../../types/toastStyle";

interface HomeProps {
  inLightMode: boolean;
  currentProfile: Profile | undefined;
}

const Home = ({ inLightMode, currentProfile }: HomeProps) => {
  const [games, setGames] = useState<Game[]>([]);
  const { genres, getAllGenres } = useGenres();
  const [favorites, setFavorites] = useState<Favorite[]>([]);

  const { logged } = useAuth();

  const getAllGames = async () => {
    try {
      const response = await api.get("/game");
      setGames(response.data);
    } catch (error) {
      toast.error("We couldn't load our games", ToastStyle);
      console.log(error);
    }
  };

  const getProfileFavorites = async () => {
    if (!logged) return;

    const headers = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("steamProjectToken")}`,
      },
    };
    api
      .get(`/favorite/${currentProfile?.id}`, headers)
      .then((res) => {
        setFavorites(res.data);
      })
      .catch((err) => {
        console.error(err);
        toast.error("We couldn't load your favorite games", ToastStyle);
      });
  };

  useEffect(() => {
    getAllGenres();
    getAllGames();
    getProfileFavorites();
  }, []);

  return (
    <DefaultContainer light={inLightMode}>
      <NavBar
        currentPage={{
          admin: false,
          home: true,
          profiles: false,
          settings: false,
        }}
      />
      <ContentBox inLightMode={inLightMode}>
        <HomeHeading inLightMode={inLightMode}>New Release</HomeHeading>
        <NewRelease />

        <HomeHeading inLightMode={inLightMode}>All Games</HomeHeading>
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
              delay: 8000,
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
            {games
              .sort((a, b) => a.title.localeCompare(b.title))
              .map((game) => {
                return (
                  <SwiperSlide key={game.id}>
                    <GameHomeCard game={game} key={game.id} />
                  </SwiperSlide>
                );
              })}
          </Swiper>
        </SwiperContainer>

        {logged && favorites.length >= 3 && (
          <>
            <HomeHeading inLightMode={inLightMode}>Favorite Games</HomeHeading>
            <SwiperContainer>
              <Swiper
                effect={"coverflow"}
                spaceBetween={0}
                slidesPerView={3}
                centeredSlides={true}
                rewind={true}
                modules={[Navigation, EffectCoverflow, Autoplay]}
                autoplay={{
                  disableOnInteraction: false,
                  delay: 8000,
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
                {favorites.map((favorite) => {
                  const game: Game | undefined = games.find(
                    (game) => game.title === favorite.game_title
                  );
                  return (
                    game && (
                      <SwiperSlide>
                        <GameHomeCard game={game} />
                      </SwiperSlide>
                    )
                  );
                })}
              </Swiper>
            </SwiperContainer>
          </>
        )}

        {genres.map((genre) => {
          return (
            <>
              <HomeHeading>{genre.genre_title}</HomeHeading>
              <SwiperContainer>
                <Swiper
                  effect={"coverflow"}
                  spaceBetween={0}
                  slidesPerView={3}
                  centeredSlides={true}
                  rewind={true}
                  modules={[Navigation, EffectCoverflow, Autoplay]}
                  autoplay={{
                    disableOnInteraction: false,
                    delay: 8000,
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
                  {games
                    .filter((game) =>
                      game.genres.some(
                        (genreObj) => genreObj.genre_title === genre.genre_title
                      )
                    )
                    .map((filteredGame) => {
                      return (
                        <SwiperSlide>
                          <GameHomeCard game={filteredGame} />
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
              </SwiperContainer>
            </>
          );
        })}
      </ContentBox>

      <Footer />
    </DefaultContainer>
  );
};

export default Home;
