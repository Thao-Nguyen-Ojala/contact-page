import React from 'react';
import { GiTechnoHeart } from 'react-icons/gi';
import { MdContactPhone } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

export default function Header() {
  return (
    <div className='header'>
      <div className='header__container'>
        <NavLink to='/users' className='header__logo'>
          <GiTechnoHeart className='header__icon' />
          Thao Nguyen-Ojala
        </NavLink>

        <NavLink to='/users' exact className='header__appName'>
          <MdContactPhone className='header__icon' />
          Contact app
        </NavLink>
      </div>
    </div>
  );
}
