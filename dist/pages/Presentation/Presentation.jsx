import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import beer from "../../assets/beer.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";

function Presentation() {
  const redirectToExternalSite = (url) => {
    window.location.href = url;
  };

  return (
    <>
      <Header></Header>
      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
          margin: "auto",
          marginBottom: "100px",
        }}
      >
        <img
          src={beer}
          alt="Description de l'image"
          style={{ width: "10%", marginTop: "20px" }}
        />
        <h2 style={{ marginTop: "20px" }}>
          <b>3 BRASSEURS </b> - BIENVENUE DANS NOS RESTAURANTS - FABRIQUES DE
          BIÈRES
        </h2>
        <p>
          Notre fabrique de bière et notre cuisine traditionnelle et généreuse
          vous promettent un excellent moment, dans un cadre convivial et une
          ambiance unique. Nos restaurants sont avant tout des micro-brasseries
          : nos bières sont faites maisons, fabriquées sous vos yeux, et vous
          les dégustez directement depuis la cuve de garde. Dans nos
          restaurants, vous allez forcément croiser un ou une brasseur qui vous
          parlera avec passion de ses créations et vous fera déguster une gamme
          de bières exclusivement disponible ici.
        </p>
        <p>
          Côté cuisine, Les 3 Brasseurs vous proposent une cuisine authentique
          dans l esprit des anciennes brasseries. Notre carte vous invite à la
          découverte de la flammekueche, de la choucroute, de la cuisine à la
          bière ou des plats traditionnels de brasserie. Une cuisine simple et
          conviviale à déguster avec nos bières fabriquées sur place.
        </p>
        <p>
          Parler des 3 Brasseurs sans évoquer l ambiance serait une faute de
          goût. Nos restaurants vous accueillent dans un cadre où l on se sent
          tout simplement bien. Une ambiance chaleureuse et conviviale, capable
          d offrir un espace de tranquillité à ceux qui souhaitent passer un
          moment agréable en couple, autant qu un moment de franche bonne humeur
          pour les groupes ou encore de convivialité pour les familles. Les 3
          Brasseurs sont des restaurants où les enfants se sentent bien.
        </p>
        <p
          style={{
            width: "80%",
            height: "2px",
            backgroundColor: "black",
            margin: "20px auto",
          }}
        />

        <div style={{ display: "flex", justifyContent: "center" }}>
          <a
            href="https://www.facebook.com/3brasseurs/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              redirectToExternalSite("https://www.facebook.com/3brasseurs/")
            }
          >
            <img
              src={facebook}
              alt="Facebook"
              style={{
                width: "30%",
                margin: "0 10px",
                border: "1px solid #ccc",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          </a>
          <a
            href="https://twitter.com/3brasseursoffic"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              redirectToExternalSite("https://twitter.com/3brasseursoffic")
            }
          >
            <img
              src={twitter}
              alt="Twitter"
              style={{
                width: "30%",
                margin: "0 10px",
                border: "1px solid #ccc",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          </a>
          <a
            href="https://www.instagram.com/3brasseursfrance/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              redirectToExternalSite(
                "https://www.instagram.com/3brasseursfrance/"
              )
            }
          >
            <img
              src={instagram}
              alt="Instagram"
              style={{
                width: "30%",
                margin: "0 10px",
                border: "1px solid #ccc",
                borderRadius: "50%",
                cursor: "pointer",
              }}
            />
          </a>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Presentation;
