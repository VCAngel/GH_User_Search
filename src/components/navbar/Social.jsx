import React from 'react';


const Social = (({ mod, link }) => {
    const socialMod = `fa-brands fa-${mod}`
    let node;

    if (mod == 'vcangel') {
        node = <span className='social__link--portfolio' aria-hidden="true">AV</span>
    } else {
        node = <span className={socialMod} aria-hidden="true"></span>
    }

    return (
        <li className="social">
            <a href={link} target="_blank" className="social__link">
                {node}
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