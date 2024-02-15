const Footer = () => {
    return(
        <footer className="bg-black justify-between">
            <div className="mx-auto pt-10">
                <p className="text-center text-lg text-white">
                Copyright © {new Date().getFullYear()} schade. All rights reserved.
                </p>
            </div>
            <div className="flex pt-2 pb-9 justify-center text-center text-lg text-darkgray">
                <span>
                    <a
                    href="https://github.com/marouaneK02/schade"
                    rel="noopener"
                    target="_blank">
                        {" "}Made by{" "}marouaneK02
                    </a>
                </span>
            </div>
        </footer>
    );
}

export default Footer;