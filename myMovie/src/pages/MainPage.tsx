import Home from "./Home"
import Movies from "./Movies"
import Favorite from "./Favorite";

const MainPage = () => {
  return (
    <div className="flex flex-col gap-20">
      <section id="home" className="p-4">
        <Home/>
      </section>

      <section id="favorite" className="min-h-screen p-4">
        <Movies/>
      </section>

      <section id="movies" className="min-h-screen p-4">
        <Favorite/> 
      </section>
    </div>
  );
};

export default MainPage;
