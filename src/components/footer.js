import React from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import '../utilities/fontawesome'

function Footer() {
    return(
        <footer className="dark:text-gray-100">

            <nav className="flex justify-between max-w-4xl p-4 mx-auto md:p-8 mb-8 px-16 py-8">

                <p>
                ✍🏻 by Joe Henson
                </p>

                <p>
                    <a className="font-medium no-underline p-2 no-styling" href="https://instagram.com/joehensonn/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'instagram']} />
                    </a>
                    <a className="font-medium no-underline p-2 no-styling" href="https://twitter.com/joehensonn/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'twitter']} />
                    </a>
                    <a className="font-medium no-underline p-2 no-styling" href="https://www.linkedin.com/in/joehensonn/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'linkedin']} />
                    </a>
                    <a className="font-medium no-underline p-2 no-styling" href="https://github.com/joehensonn/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={['fab', 'github']} />
                    </a>
                </p>

            </nav>

        </footer>
    );
}

export default Footer;
