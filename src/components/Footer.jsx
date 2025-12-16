import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <p className="footer-text">
                        © {currentYear} Adithya G.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
