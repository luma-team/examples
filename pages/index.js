const EMBED_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://embed-scripts.onrender.com"
    : "https://f62e728b0b33.ngrok.io";

export default function Home() {
  return (
    <div className="container">
      <h1>ZmURL Examples</h1>

      <hr />
      <h2>Checkout Button</h2>
      <p>Click on the button below to launch ZmURL checkout widget:</p>
      <button
        className="zmurl-checkout--button"
        type="button"
        data-zmurl-action="checkout"
        data-zmurl-event-id="evt-QDi9j97FsQl9O2h"
      >
        Buy Tickets
      </button>

      <script
        id="zmurl-checkout"
        src={`${EMBED_BASE_URL}/checkout-button.js`}
      />

      <style jsx global>{`
        html,
        body {
          background-color: #f5f8fa;
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          color: #123;
        }

        * {
          box-sizing: border-box;
        }

        .container {
          max-width: 1000px;
          padding: 1rem;
          margin: auto;
        }

        hr {
          border-color: #bfcbda44;
          margin: 2rem 0;
        }
      `}</style>
    </div>
  );
}
