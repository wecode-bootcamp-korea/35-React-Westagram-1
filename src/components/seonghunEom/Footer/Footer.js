import React from 'react';
import { INFO_LIST } from '../../../pages/seonghunEom/Main/FooterData';

const Footer = () => {
  return (
    <footer>
      <ul>
        {INFO_LIST.map(info => {
          return <li key={info.id}>{info.content}</li>;
        })}
      </ul>
      <div className="copy">© 2022 INSTAGRAM FROM FACEBOOK</div>
    </footer>
  );
};

export default Footer;
