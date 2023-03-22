const isProd = process.env.NODE_ENV === "production"
const BASE_URL =
    process.env.NODE_ENV === "production"
        ? "https://lu.ma"
        : "http://127.0.0.1:5499";

const eventId = isProd ? "evt-QDi9j97FsQl9O2h" : 'evt-free-event'

export default function Home() {
    return (
        <div className="container">
            <h1>Embed iFrame Examples</h1>

            <hr/>

            <h2>Event Embed</h2>

            <iframe
                src={`${BASE_URL}/embed-checkout/${eventId}`}
                width="600"
                height="450"
                frameBorder="0"
                style={{border: '1px solid #bfcbda88', borderRadius: '4px'}}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            ></iframe>

            <h2>Page Not Allowed</h2>

            <iframe
                src={`${BASE_URL}/signin`}
                width="600"
                height="450"
                frameBorder="0"
                style={{border: '1px solid #bfcbda88', borderRadius: '4px'}}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex="0"
            ></iframe>

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
