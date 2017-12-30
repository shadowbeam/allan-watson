/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import classNames from 'classnames';
import s from './Home.less';

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <div className={classNames(s.bg, s.right)} />
        <div className={classNames(s.bg, s.left)} />
      </div>
    );
  }
}

export default withStyles(s)(Home);
