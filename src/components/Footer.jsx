import React from "react";

function Footer() {
  // a small javascript for having the current year
  var currentyear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {currentyear}</p>
    </footer>
  );
}
export default Footer;
