import React from 'react';
import { Link } from 'react-router';
import NavigationHeader from '../NavigationHeader';
import NavigationBar from '../NavigationBar';
import './intervention-navigation.scss';

function InterventionNavigation() {
  return (
    <div>
      <NavigationHeader />
      <NavigationBar />
      <div className="intervention-arrow"></div>
      <div className="navigation__body">
        <div className="box__title intervention__title">Psychotherapy Techniques</div>
        <Link to="screening_overview">
          <div className="navigation-button">Behavioral Activation</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Cognitive Behavioral Therapy/Treatment</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Interpersonal Therapy/Treatment</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Motivational Interviewing</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Problem Solving Therapy/Treatment</div>
        </Link>
        <div className="box__title intervention__title">Lifestyle Inteventions</div>
        <Link to="">
          <div className="navigation-button">DASH Diet</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Mediterranean Diet</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Mindfulness</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Relaxation Training</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Sleep Hygiene</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Smoking Cessation</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Weight Management</div>
        </Link>
      </div>
    </div>
  );
}

export default InterventionNavigation;
