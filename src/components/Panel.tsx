import Header from "./Header";
import PatchNotes from "./PatchNotes";
import Footer from "./Footer";
import panelBg from "../assets/panel.svg";

const Panel = () => {
  return (
    <div className="Panel">
      <div className="panel-bg">
        <img src={panelBg} alt="" />
      </div>
      <Header />
      <PatchNotes />
      <Footer />
    </div>
  );
};

export default Panel;
