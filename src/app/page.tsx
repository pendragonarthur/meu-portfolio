import MainHeader from "./components/MainHeader";
import MainPage from "./components/MainPage";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <MainHeader />
      <MainPage />
      <About />
      <Projects />
      <Footer />
    </>
  );
}
