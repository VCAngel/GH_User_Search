import React, { Component } from 'react';

const Social = (({ mod, link, direction }) => {
    const socialDir = `social__svg ${direction}`;
    const socialMod = `social__svg--${mod}`

    // dynamicImports(mod)

    return (
        <a href={link} className={socialDir} target="_blank">
            <div className={socialMod}>
                {mod}
            </div>
        </a>
    );
});

const dynamicImports = async (mod) => {
    //TODO Dynamic import of svgs
    // let module = await import('')
    // console.log(module);
}

export default Social;