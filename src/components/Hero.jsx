import React from 'react';


const Hero = () => {
    const logo = 'https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png'
    return (
        <header className="w-full flex justify-center items-center flex-col">
            {/* <nav className="flex justify-between items-center flex-col ">
                <img src={logo} alt="summary logo"  className="w-20 object-contain size-12"/>
            </nav> */}
            <h1 className="head_text orange_gradient">
                Summarize Articles
            </h1>
            <h2>This app summarises the web articles and web pages pages effectively using power of AI.</h2>

        </header>
    );
};

export default Hero;