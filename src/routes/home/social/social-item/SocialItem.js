import React, { Component } from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import PropTypes from 'prop-types';
import s from './SocialItem.less';

/* @noflow */
import SocialItemModel from './SocialItem.model';

class SocialItem extends Component {
  constructor(props) {
    super(props);
    this.socialItem = props.value;
    this.enableHover = this.enableHover.bind(this);
    this.disableHover = this.disableHover.bind(this);

    if (this.socialItem.icomoon) {
      this.clazzName = `fa icon-${this.socialItem.icon}`;
    } else {
      this.clazzName = `fa fa-${this.socialItem.icon}`;
    }
  }

  hover: boolean;
  hex: string = '';
  socialItem: SocialItemModel;
  clazzName: string = '';

  enableHover() {
    this.hover = true;
    this.hex = this.socialItem.hex;
    this.forceUpdate();
  }

  disableHover() {
    this.hex = '';
    this.forceUpdate();
  }

  render() {
    return (
      <a href={this.socialItem.url} className={s.icon}>
        <div
          className={`icon ${this.hover ? 'hover' : ''}`}
          style={{ backgroundColor: this.hex }}
          onMouseEnter={this.enableHover}
          onMouseLeave={this.disableHover}
        >
          <i className={this.clazzName} aria-hidden="true" />
        </div>
      </a>
    );
  }
}

export default withStyles(s)(SocialItem);

SocialItem.propTypes = {
  value: PropTypes.element.isRequired,
};
