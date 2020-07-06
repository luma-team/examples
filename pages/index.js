const EMBED_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://embed-scripts.onrender.com"
    : "https://d19092153533.ngrok.io";

export default function Home() {
  return (
    <div className="container">
      <div>Hiiii</div>

      {/* TODO: think about how we want to handle pages that don't handle scripts well */}
      <button
        className="zmurl-checkout-modal-button"
        type="button"
        data-event-api-id={"evt-paid-event"}
      >
        Buy Tickets
      </button>

      <script src={`${EMBED_BASE_URL}/checkout-button.js`} />

      <div className={"modal-container"} style={{ display: "none" }}>
        <div className="modalhttps://e3a0a934d6fb.ngrok.io">
          <p>hi</p>
          <p>hi</p>
        </div>
      </div>

      <style jsx global>{`
        .modal-container {
          width: 100%;
          height: 100%;

          overflow: hidden;

          display: flex;
          justify-content: center;
          align-items: center;

          top: 0;
          left: 0;

          z-index: 2147483647;

          position: fixed;
          background: rgba(57, 54, 79, 0.8);
        }

        .modal-body {
          width: 95%;
          height: 95%;
          max-width: 1080px;
          max-height: 720px;

          background-color: white;

          position: relative;

          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

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
