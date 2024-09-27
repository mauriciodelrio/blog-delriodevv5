import Layout from "../app/components/layout";
import "../styles/globals.css";

export const metadata = {
  title: 'Mauricio Del Río',
  description: 'A Personal Web for Mauricio Del Río',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  )
}
