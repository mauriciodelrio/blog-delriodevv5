import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, locale = 'en' }) {
  return (
    <div id="root" className="min-h-screen flex flex-col">
      <Header locale={locale} />
      <main className="flex-1">
        {children}
      </main>
      <Footer locale={locale} />
    </div>
  );
}
