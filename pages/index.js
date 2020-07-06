const EMBED_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://embed-scripts.onrender.com"
    : "https://db49aa9722b5.ngrok.io";

export default function Home() {
  return (
    <div className="container">
      <div>Hiiii</div>

      {/* TODO: think about how we want to handle pages that don't handle scripts well */}
      <button
        className="zmurl-checkout-modal-button"
        type="button"
        data-event-api-id={"evt-pOLvK9iHHf3sgHZ"}
      >
        Buy Tickets
      </button>

      <script src={`${EMBED_BASE_URL}/checkout-button.js`} />

      <style jsx global>{`
        html,
        body {
          background-color: blue;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
