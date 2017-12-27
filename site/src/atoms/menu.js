import React from 'react';
import DecoratedLink from './DecoratedLink';
import Link from 'gatsby-link'

export default () => {
  return (
    <menu className='mainMenu'>
      <ul className='mainMenu__list'>
        <li>
          <Link to='/'>
            <DecoratedLink>Main</DecoratedLink>
          </Link>
        </li>

        <li>
          <Link to='/about'>
            <DecoratedLink>About</DecoratedLink>
          </Link>
        </li>

        <li>
          <a
            target='_blank'
            href='http://feeds.soundcloud.com/users/soundcloud:users:201515747/sounds.rss'>
            <DecoratedLink>RSS</DecoratedLink>
          </a>
        </li>
      </ul>
    </menu>
  );
};
