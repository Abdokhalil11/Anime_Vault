import "./hero.css";
export default function Hero({ children }) {
  return (
    <div className="hero-component">
      <div className="container">{children}</div>
    </div>
  );
}
