import "../styles/Package.css";

function Packages() {
  return (
    <div className="container-pack-travel">
      <div className="header">
        <h2>CHOOSE YOUR PACKAGES</h2>
        <hr />
      </div>
      <div className="pack-travel-flex">
        <div className="pack-travel-card">
          <img src="images/paket-travel-indonesia.png" alt="indonesia" />
          <h3>Indonesia</h3>
          <p>$1,500</p>
          <button className="bttn-indo">GO Traveling</button>
        </div>
        <div className="pack-travel-card">
          <img src="images/paket-travel-japan.png" alt="japan" />
          <h3>Japan</h3>
          <p>$1,812</p>
          <button className="bttn-jpn">GO Traveling</button>
        </div>
        <div className="pack-travel-card">
          <img src="images/paket-travel-india.png" alt="india" />
          <h3>India</h3>
          <p>$1,933</p>
          <button className="bttn-india">GO Traveling</button>
        </div>
        <div className="pack-travel-card">
          <img src="images/paket-travel-china.png" alt="china" />
          <h3>China</h3>
          <p>$2,114</p>
          <button className="bttn-chna">GO Traveling</button>
        </div>
        <div className="pack-travel-card">
          <img src="images/paket-travel-autralia.png" alt="autralia" />
          <h3>Australia</h3>
          <p>$1,933</p>
          <button className="bttn-ausi">GO Traveling</button>
        </div>
        <div className="pack-travel-card">
          <img src="images/paket-travel-korea.png" alt="korea" />
          <h3>Korea</h3>
          <p>$2,235</p>
          <button className="bttn-korea">GO Traveling</button>
        </div>
      </div>
    </div>
  );
}

export default Packages;
