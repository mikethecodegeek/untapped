import React from 'react';
import './footer.css'

function Footer(){
 

  return (
      <>
      <div className='spacer'></div>
    <div className='footer'>
        <ul>
            <a target="_blank" href="http://michaelsanford.me"><li>Michael Sanford</li></a>
            <a target="_blank" href="https://github.com/mikethecodegeek/untapped"><li>Github</li></a>
            <a target="_blank" href='https://www.linkedin.com/in/michael-sanford-1180b3115/'><li>LinkedIn</li></a>
        </ul>
    </div>
    </>
  );
}

export default Footer;