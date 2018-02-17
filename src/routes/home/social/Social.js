import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Social.less';
import SocialItemComponent from './social-item/SocialItem';
import SocialItem from './social-item/SocialItem.model';

class Social extends React.Component {
  social = [
    new SocialItem(
      'linkedin',
      'https://www.linkedin.com/profile/view?id=52957269',
      '#0077b5',
    ),
    new SocialItem('github', 'https://github.com/shadowbeam/', '#4078c0'),
    new SocialItem(
      'facebook',
      'https://www.facebook.com/watson.allan',
      '#3b5998',
    ),
    new SocialItem('twitter', 'https://twitter.com/shadowbeam_', '#1da1f2'),
    new SocialItem(
      'nike',
      'https://secure-nikeplus.nike.com/plus/profile/shadowbeam/',
      '#e2142d',
      true,
    ),
    new SocialItem(
      'google-plus',
      'https://plus.google.com/u/0/110066024819374028528',
      '#dd4b39',
    ),
    new SocialItem('lastfm', 'http://www.last.fm/user/shadowbeam', '#d51007'),
    new SocialItem(
      'spotify',
      'https://play.spotify.com/user/shadowbeam',
      '#2ebd59',
    ),
    new SocialItem(
      'songkick',
      'https://www.songkick.com/users/shadowbeam',
      '#f80046',
      true,
    ),
    new SocialItem(
      'instagram',
      'http://www.instagram.com/watson.allan',
      '#405de6',
    ),
  ];

  socialItems() {
    return this.social.map(socialItem => (
      <SocialItemComponent value={socialItem} key={socialItem.icon} />
    ));
  }

  render() {
    return <div className="social-items">{this.socialItems()}</div>;
  }
}

export default withStyles(s)(Social);
