import React, { Component } from 'react';

const Social = (({ mod, link }) => {
    const socialMod = `social__link--${mod}`
    let node;

    if(mod == 'vcangel'){
        node = <p>vcangel</p>;
    }else{
        node = <p>fontawesome</p>
    }

    return (
        <li className="social">
            <a href={link} target="_blank" className="social__link">
                <span className={socialMod}>
                    {node}
                </span>
            </a>
        </li>
    );
});

const dynamicImports = async (mod) => {
    //TODO Dynamic import of svgs
    // let module = await import('')
    // console.log(module);
}

export default Social;