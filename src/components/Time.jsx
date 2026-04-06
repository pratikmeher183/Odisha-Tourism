import Navbar from "./Navbar.jsx";

function Time() {
  return (
    <div>
      <Navbar />

      {/* Why Visit */}
      <div className="section1">
        <div className="para">
          <h3>Why Odisha Should Be Your Next Travel Destination</h3>
          <p>
            Odisha is one of India’s most culturally rich and naturally
            diverse states, offering an unforgettable blend of spirituality,
            heritage architecture, beaches, wildlife, and tribal traditions.
            From the sacred aura of Jagannath Temple to the architectural brilliance of Konark Sun Temple, the state
            presents a journey through centuries of history and devotion. Travel bloggers often describe Odisha as
            “India’s best kept secret” because it remains less crowded compared to other tourist hotspots. The calm
            beaches of Puri and Chandrabhaga offer peaceful sunrise views that many travelers call soul-refreshing.
            Nature lovers admire the breathtaking boat rides at Chilika Lake, especially during winter when migratory
            birds arrive. The temple city of Bhubaneswar impresses visitors with its ancient stone carvings and
            spiritual atmosphere. Bloggers frequently mention the warmth and hospitality of Odia people as one of the
            highlights of their trip. The state offers authentic cultural experiences rather than commercialized
            tourism. Whether you seek devotion, adventure, photography, or relaxation, Odisha provides a balanced travel
            experience. Its untouched beauty and slow-paced charm make every journey meaningful.

          </p>
        </div>
        <div className="image1">
          <img src="/Jungle-Safari.jpg" />
        </div>
      </div>

      {/* Tips */}
      <div className="section">
        <div className="image">
          <img src="/STB1.jpg" />
        </div>
        <div className="para">
          <h3>Smart Travelling Tips</h3>
          <p>
            When planning a trip to Odisha, choosing the right season is
            essential for a comfortable experience. The best time to visit
            is between October and March, when the weather remains pleasant
            for sightseeing and outdoor activities. Summers can be quite hot,
            especially in inland districts, so carrying sunscreen and staying
            hydrated is important. Many travel bloggers recommend covering the
            “Golden Triangle” of Puri, Bhubaneswar, and Konark in at least three days to explore properly without
            rushing. If you are visiting wildlife destinations like Simlipal National Park, booking safari permits in
            advance is advisable. Travelers often suggest trying local transport such as auto-rickshaws or renting bikes
            in coastal towns for flexible movement. It is important to dress modestly while visiting temples and respect
            local customs. During the famous Rath Yatra festival, hotel bookings should be made months earlier due to
            heavy crowds. Exploring local markets is highly recommended to purchase authentic handicrafts and Sambalpuri
            textiles. Carrying some cash is helpful in rural areas where digital payments may not always work. Keeping
            emergency numbers saved and following basic travel safety guidelines ensures a smooth journey.

          </p>
        </div>
      </div>

      {/* Blogs */}
      <div className="section1">
        <div className="para">
          <h3>Travel Stories & Blogger Reviews</h3>
          <ol>
            <li><a href="https://lakshmisharath.com">lakshmisharath.com</a></li>
            <li><a href="https://breathedreamgo.com">breathedreamgo.com</a></li>
            <li><a href="https://the-shooting-star.com">the-shooting-star.com</a></li>
            <li><a href="https://inditales.com">inditales.com</a></li>
            <li><a href="https://beontheroad.in">beontheroad.in</a></li>
          </ol>
        </div>
        <div className="image3">
          <img src="/bloggers.png" />
        </div>
      </div>
    </div>
  );
}

export default Time;