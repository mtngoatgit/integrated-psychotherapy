import React from 'react';
import { Link } from 'react-router';
import NavigationHeader from '../NavigationHeader';
import NavigationBar from '../NavigationBar';
import './screening-navigation.scss';

function ScreeningNavigation() {
  return (
    <div>
      <NavigationHeader />
      <NavigationBar />
      <div className="screening-arrow"></div>
      <div className="navigation__body">
        <Link to="screening_overview">
          <div className="navigation-button">General Information on Screening</div>
        </Link>
        <div className="navigation__link-spacer"></div>
        <Link to="">
          <div className="navigation-button">Physical Health</div>
        </Link>
        <div className="navigation__link-spacer"></div>
        <Link to="">
          <div className="navigation-button">Multi-Condition</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Multi-Substance Use</div>
        </Link>
        <div className="navigation__link-spacer"></div>
        <Link to="">
          <div className="navigation-button">ADHD</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Alcohol Use</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Anxiety</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Bipolar</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Depression</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Drug Use</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Insomnia</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Pain</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Post-Traumatic Stress Disorder</div>
        </Link>
        <div className="footnote">
          *Please note that screening measures are not diagnostic tools and should
          be used in combination with formal diagnostic assessment procedures.
        </div>
      </div>
    </div>
  );
}

export default ScreeningNavigation;
