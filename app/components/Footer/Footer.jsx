import "./_footer.scss";
const Footer = () => {
  return (
    <section className="footer">
      <p>
        React course - Lab 3 - Next.js
        <br />
        Karin Ljunggren
      </p>
      <p>@ {new Date().getFullYear()}- Karin Ljunggren</p>
    </section>
  );
};
export default Footer;
