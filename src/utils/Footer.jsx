const Footer = ()=>{

    const imgSize = '60px';

    return(
        <section className="footer">
            
            <span className='footLogo'>
            <img alt='sitelogo' src="https://www.svgrepo.com/show/519560/swiggy.svg" width={imgSize} height={imgSize}/>
            <h1>Swiggy Clone</h1>
            </span>
            
            <ul className='footul'>
                <li className='liHead'>Legal</li>
                <li className='liItem'>Terms & Conditions</li>
                <li className='liItem'>Privacy Policy</li>
                <li className='liItem'>Cookie Policy</li>
            </ul>

            <ul className='footul'>
                <li className='liHead'>Legal</li>
                <li className='liItem'>Terms & Conditions</li>
                <li className='liItem'>Privacy Policy</li>
                <li className='liItem'>Cookie Policy</li>
            </ul>

            <ul className='footul'>
                <li className='liHead'>Legal</li>
                <li className='liItem'>Terms & Conditions</li>
                <li className='liItem'>Privacy Policy</li>
                <li className='liItem'>Cookie Policy</li>
            </ul>

            <ul className='footul'>
                <li className='liHead'>Legal</li>
                <li className='liItem'>Terms & Conditions</li>
                <li className='liItem'>Privacy Policy</li>
                <li className='liItem'>Cookie Policy</li>
            </ul>
        </section>
    )
}

export default Footer;