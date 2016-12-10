import React from 'react';
import Collapsible from 'react-collapsible';
import { browserHistory }from 'react-router';
import './terminology.scss';
import SideBar from '../SideBar';

function Header () {
  return(
    <div className="header">
      <div className="back-arrow-parent">
        <button onClick={browserHistory.goBack}>
          <img className="back-arrow" src="/assets/back-arrow.png" alt="" />
        </button>
      </div>
      <div className="header__title">Terminology</div>
      <div className="search-icon">
        <i className="fa fa-search fa-2x" aria-hidden="true"></i>
      </div>
    </div>
  );
}

function MainBody () {
  return(
    <div className="main__body">
      <div className="box">
        <div className="box__title">Care Management</div>
        <div className="box__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque a cursus libero. Etiam gravida elit eget ex dignissim,
          tempor tincidunt mi dapibus. Proin ac lobortis eros, id volutpat dui.
          Nam ultricies, ex sed finibus convallis, quam ex aliquam nibh,
          vitae lacinia massa elit et nunc. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </div>
      </div>
      <div className="box">
        <div className="box__title">Case Management</div>
        <div className="box__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque a cursus libero. Etiam gravida elit eget ex dignissim,
          tempor tincidunt mi dapibus. Proin ac lobortis eros, id volutpat dui.
          Nam ultricies, ex sed finibus convallis, quam ex aliquam nibh,
          vitae lacinia massa elit et nunc. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </div>
      </div>
      <div className="box">
        <div className="box__title">Stepped Care</div>
        <div className="box__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Pellentesque a cursus libero. Etiam gravida elit eget ex dignissim,
          tempor tincidunt mi dapibus. Proin ac lobortis eros, id volutpat dui.
          Nam ultricies, ex sed finibus convallis, quam ex aliquam nibh,
          vitae lacinia massa elit et nunc. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </div>
      </div>
      <div className="box">
        <div className="box__title">Warm Hand-Off</div>
        <div className="box__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Pellentesque a cursus libero. Etiam gravida elit eget ex dignissim,
          tempor tincidunt mi dapibus. Proin ac lobortis eros, id volutpat dui.
          Nam ultricies, ex sed finibus convallis, quam ex aliquam nibh,
          vitae lacinia massa elit et nunc. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </div>
      </div>
    </div>
  );
}


function Terminology() {
  return (
    <div className="">
      <Header />
      <SideBar />
      <MainBody />
    </div>
  );
}

export default Terminology
