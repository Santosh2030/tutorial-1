import Card from "./components/Card";
import img1 from "./img/Charlottes-Web.jpg";
import img2 from "./img/Wings-of-Fire-An-Autobiography-by-APJ-Abdul-Kalam.jpg";
import img3 from "./img/The name of the wind.jpg";

function App() {
  return (
    <>
      <h2 className="text-center my-5">The Book List</h2>
      <div className="d-flex justify-content-around row center">
        <Card title={"Charlotte's Web"} author={"E.B. White"} imglink={img1} />
        <Card
          title={"Wings-of-fire"}
          author={"APJ-Abdul-Kalam"}
          imglink={img2}
        />
        <Card
          title={"The Name Of The Wind"}
          author={"Patrick Rothfuss"}
          imglink={img3}
        />
      </div>
    </>
  );
}

export default App;
