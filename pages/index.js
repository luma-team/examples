import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">

      <div>
        Hiiii
      </div>

      {/* TODO: think about how we want to handle pages that don't handle scripts well */}
      <button id="zmurl-checkout-modal-button" type="button">Buy Tickets</button>

      <script src="https://embed-scripts.onrender.com/checkout-button.js" />

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
  )
}
