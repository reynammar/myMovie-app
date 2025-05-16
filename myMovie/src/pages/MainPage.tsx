import Home from "./Home"
import About from "./Favorite"
import Movies from "./Movies"

const MainPage = () => {
  return (
    <div className="flex flex-col gap-20">
      <section id="home" className="p-4">
        <Home/>
      </section>

      <section id="about" className="min-h-screen p-4">
        <About/>
      </section>

      <section id="movies" className="min-h-screen p-4">
        <Movies/>
      </section>
    </div>
  );
};

export default MainPage;
