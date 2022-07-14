import React from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import Feeds from '../../../components/seonghunEom/Feeds/Feeds';
import Story from '../../../components/seonghunEom/Story/Story';
import Footer from '../../../components/seonghunEom/Footer/Footer';

const Main = () => {
  return (
    <div className="main-wrap">
      <Nav />
      <main className="main">
        <Feeds />
        <aside>
          <Story />
          <Footer />
        </aside>
      </main>
    </div>
  );
};

export default Main;
