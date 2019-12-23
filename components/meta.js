import Head from 'next/head'

export default function Meta() {
    return (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>
    <style jsx global>{`
    * { box-sizing: border-box; margin: 0; padding: 0 }
    @font-face {font-family: "Neue Einstellung Bold";
  src: url("fonts/51fdf8021065497210ca54837e1601e9.eot"); /* IE9*/
  src: url("fonts/51fdf8021065497210ca54837e1601e9.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
  url("fonts/51fdf8021065497210ca54837e1601e9.woff2") format("woff2"), /* chrome、firefox */
  url("fonts/51fdf8021065497210ca54837e1601e9.woff") format("woff"), /* chrome、firefox */
  url("fonts/51fdf8021065497210ca54837e1601e9.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
  url("fonts/51fdf8021065497210ca54837e1601e9.svg#Neue Einstellung Bold") format("svg"); /* iOS 4.1- */
}
.MuiButton-containedPrimary {
  background-color: #f1592a!important;
}
.MuiButton-containedSecondary {
background-color:#fff!important;
color:#f1592a!important;
border:1px solid #f1592a!important;
}
    `}</style>
  </div>
)
    }