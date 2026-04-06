import Navbar from "./Navbar.jsx";

function Home() {
  return (
    <div>
      <h1>Welcome to the Odisha Tourism Portal</h1>

      <Navbar />

      <h3>About</h3>

      <div className="section">
        <div className="image">
          <img src="/pic3.jpg" />
        </div>

        <div className="para">
          <p>
            The historical monuments of Odisha stand testament to the glorious architectural
                heritage of the state. The Kalinga Architecture as it is known came into existence
                in the 6th century AD and continued unabated till the 16th Century AD.
                The Kings or Gajapati’s of Kalinga irrespective of dynasty encouraged
                the architects to express their creativity by infusing life into stone.
                What makes the Kalinga Architecture so distinctive and pleasing to the eye is its,
                structural details, plan, elevation and skillfully crafted figurines which adorns the
                outer walls of the monuments. The other notable thing about the monuments of Odisha is
                that the architectural style wasn’t rigid and throughout its history it continued
                to evolve incorporating new styles and aspects which added to their legend.

          </p>
        </div>
      </div>

      <h3>Getting There</h3>

      <div className="section1">
        <div className="para">
          <p>
            Odisha is well connected with major cities of India and South East Asia. By virtue of its demography,
                the state
                comes under the East Coast Railway Division. Also, with Bhubaneswar having a full-fledged International
                airport,
                Odisha is directly connected to major cities of India, and internationally with Kuala Lumpur as well as
                Bangkok.Odisha with its beautiful landscape and well-paved roads provide a delightful experience to
                bikers,
                cyclists and car enthusiasts.

          </p>
        </div>

        <div className="image1">
          <img src="/pic2.jpg" />
        </div>
      </div>
    </div>
  );
}

export default Home;