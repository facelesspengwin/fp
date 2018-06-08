import React, { Component } from 'react';
import styles from './App.scss';
import Layout from './hoc/Layout/Layout';

import Header from './components/UI/Header/Header';
import Footer from './components/UI/Footer/Footer';

import Intro from './containers/Intro/Intro';
import Pengwin from './containers/Pengwin/Pengwin';
import Info from './containers/Info/Info';

class App extends Component {
  state = {
    scene: 'intro'
  }

  render() {
    let currentScene = '';

    const beginAdventure = () => {
      this.setState({scene: 'pengwin'});
    }
    const moveToInfo = () => {
      this.setState({scene: 'info'});
    }

    switch(this.state.scene) {
      case 'intro':
          currentScene = <Layout>
                            <Header />
                            <Intro beginClick={beginAdventure} />
                            <Footer />
                          </Layout>;
          break;
      case 'pengwin':
          currentScene = <Pengwin infoClick={moveToInfo} />;
          break;
      case 'info':
          currentScene = <Info />;
          break;
      default:
          currentScene = '';
          break;
    }
    return (
      <main className={styles.App}>
        {currentScene}
      </main>
    );
  }
}

export default App;
