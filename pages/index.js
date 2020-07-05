import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">

      <div>
        Hiiii
      </div>

      {/* TODO: think about how we want to handle pages that don't handle scripts well */}
      <button id="zmurl-checkout-modal-button" type="button">Buy Tickets</button>

      <script src="https://www.eventbrite.com/static/widgets/eb_widgets.js" />
      <script
        dangerouslySetInnerHTML={{ __html:
            `
            function handleClick() { 
              console.log('fuck');
              let ifrm = document.createElement("iframe");
              ifrm.setAttribute('src', 'https://zmurl.com');
              ifrm.setAttribute('id', 'ifrm');
              ifrm.setAttribute('allowfullscreen', 'true');
              ifrm.setAttribute('allowfullscreen', 'true');
              ifrm.setAttribute('style', 'z-index: 2147483647; position: fixed; top: 100px; left: 0px; right: 0px; bottom: 0px; margin: 0px; border: 0px; width: 100%; height: 100%;')

              document.body.appendChild(ifrm);

            }
            
            document.getElementById("zmurl-checkout-modal-button").onclick = handleClick;
            `
        }}
      />



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
