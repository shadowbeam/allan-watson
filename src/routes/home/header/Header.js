import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Header.less';

class Header extends React.Component {
  render() {
    return (
      <div className={s.header}>
        <span className={s['line-one']}>Allan</span>
        <span className={s['line-two']}>
          W&lt;tson
          <span className={s.dot}>■</span>
        </span>
      </div>
    );
  }
}

export default withStyles(s)(Header);
