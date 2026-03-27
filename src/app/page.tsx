import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <footer style={{ textAlign: 'center', padding: '24px', backgroundColor: 'var(--background)', borderTop: '1px solid var(--border-color)', color: 'var(--text-muted)', fontFamily: 'var(--font-inter), sans-serif', transition: 'background 0.3s, color 0.3s, border 0.3s' }}>
        © 2026 Moltea
      </footer>
    </main>
  );
}
