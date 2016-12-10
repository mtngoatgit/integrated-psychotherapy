import React from 'react';
import { Link } from 'react-router';
import NavigationHeader from '../NavigationHeader';
import NavigationBar from '../NavigationBar';
import './diagnosis-navigation.scss';

function DiagnosisNavigation() {
  return (
    <div>
      <NavigationHeader />
      <NavigationBar />
      <div className="diagnosis-arrow"></div>
      <div className="navigation__body">
        <Link to="screening_overview">
          <div className="navigation-button">Alcohol Dependence/Use Disorder</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Attention Deficit Hyperactivity Disorder</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Bipolar Disorder</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Cancer</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Cardiovascular Disease</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Chronic Obstructive Pulmonary Disease</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Diabetes Mellitus: Type 2</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Generalized Anxiety Disorder</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Hepatitis C</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Human Immunodeficiency Virus (HIV)/ Acquired immunodeficiency syndrome (AIDS)</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Hypercholesterolemia</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Hypertension</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Insomnia</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Irritable Bowel Syndrome</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Major Depressive Disorder</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Metabolic Syndrome</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Nicotine Dependence/Tobacco Use Disorder</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Obesity</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Opioid Dependence/Use Disorder</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Pain Disorder</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Panic Disorder</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Post-Traumatic Stress Disorder</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Schizophrenia</div>
        </Link>
        <Link to="">
          <div className="navigation-button">Stroke</div>
        </Link>
      </div>
    </div>
  );
}

export default DiagnosisNavigation;
