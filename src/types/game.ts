interface Game {
  id: string;
  score: number;
  year: number;
  title: string;
  trailer_url: string;
  gameplay_utl: string;
  cover_image_url: string;
  description: string;

  updated_at?: Date;
  created_at?: Date;
}

export default Game;
