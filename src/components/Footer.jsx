import React from "react";

function Footer () {
    let d = new Date();
    let currentYear = d.getFullYear();
    return (
        <footer>
            <p>Copyright {currentYear}</p>
        </footer>
    );
}

export default Footer;