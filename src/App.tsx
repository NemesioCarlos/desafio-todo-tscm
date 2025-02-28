import CardContentTodo from "./components/CardContentTodo/Index";
import Footer from "./components/Footer.tex/Index";
import Header from "./components/Header/Index";

function App() {
  return (
    <>
    <Header />
    {/* <main className="flex  max-md:flex-col max-md:gap-4">
    </main> */}
    <main>
      <CardContentTodo />
    </main>
    <Footer />
    </>
  );
}

export default App;
