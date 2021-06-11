import React from "react";

let d = new Date();
let currentYear = d.getFullYear();

function Footer () {
    return (
        <footer>
            <p>Copyright {currentYear}</p>
        </footer>
    );
}

export default Footer;