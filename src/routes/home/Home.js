import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Home.less';
import Header from './header/Header';
import Social from './social/Social';

class Home extends React.Component {
  render() {
    return (
      <div className={s.home}>
        <div className={classNames(s.bg, s.right)} />
        <div className={classNames(s.bg, s.left)} />
        <Header />
        <Social />
      </div>
    );
  }
}

export default withStyles(s)(Home);
