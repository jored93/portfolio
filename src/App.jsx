import Header from "./sections/header/Header";
import Nav from "./components/nav/Nav";
import Experience from "./sections/experience/Experience";
import Portfolio from "./sections/portfolio/Portfolio";
import Contact from "./sections/contact/Contact";
import Footer from "./sections/footer/Footer";
import Resume from "./sections/resume/Resume";

function App() {
    return (
        <>
            <Header />
            <Nav />
            <Experience />
            <Resume />
            <Portfolio />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
