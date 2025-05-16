import Home from "./Home"
import About from "./About"
import Movies from "./Movies"

const MainPage = () => {
  return (
    <div className="flex flex-col gap-20">
      <section id="home" className=" bg-blue-500 p-4">
        <Home/>
      </section>

      <section id="about" className="min-h-screen p-4 bg-green-500">
        <About/>
      </section>

      <section id="movies" className="min-h-screen p-4 bg-purple-500">
        <Movies/>
      </section>
    </div>
  );
};

export default MainPage;
