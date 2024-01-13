import Header from "./Header";
import PatchNotes from "./PatchNotes";
import Footer from "./Footer";

const Panel = () => {
  return (
    <div className="Panel">
      <Header />
      <PatchNotes />
      <Footer />
    </div>
  );
};

export default Panel;
