const isProd = process.env.NODE_ENV === "production"
const EMBED_BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://embed.lu.ma"
    : "http://127.0.0.1:333";

const eventId = isProd ? "evt-QDi9j97FsQl9O2h" : 'evt-free-event'
const paidEventId = isProd ? "evt-EneEKDWiCZ7IADf" : 'evt-paid-event'

export default function Home() {
  return (
    <div className="container">
      <h1>Luma Examples</h1>

      <hr />
      <h2>Checkout Button</h2>
      <p>Click on the button below to launch Luma checkout widget:</p>
      <a
        href={`https://lu.ma/event/${eventId}`}
        className="luma-checkout--button"
        type="button"
        data-luma-action="checkout"
        data-luma-event-id={eventId}
      >
        Register for Event
      </a>

      <div style={{marginTop: 40}}>
        <a
          href={`https://lu.ma/event/${paidEventId}`}
          className="luma-checkout--button"
          type="button"
          data-luma-action="checkout"
          data-luma-event-id={paidEventId}
        >
          Register for Paid Event
        </a>
      </div>


      <script
        id="luma-checkout"
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
