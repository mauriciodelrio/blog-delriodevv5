import Layout from "./components/layout";
import "../styles/globals.css";

export const metadata = {
  title: 'Mauricio Del Río',
  description: 'A Personal Web for Mauricio Del Río',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div id="root" className="mobile:w-fit">
          <Layout>{children}</Layout>
        </div>
      </body>
    </html>
  )
}
