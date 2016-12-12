import React from 'react';
import { browserHistory }from 'react-router';
import './lifestyle-intervention.scss';
import SideBar from '../SideBar';

function Header () {
  return(
    <div className="header">
      <div className="back-arrow-parent">
        <button onClick={browserHistory.goBack}>
          <img className="back-arrow" src="/assets/back-arrow.png" alt="" />
        </button>
      </div>
      <div className="header__title">Lifestyle Intervention</div>
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
        <div className="box__title">Intervention Name</div>
        <div className="box__body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Etiam urna magna, sollicitudin id mattis in, interdum nec lectus.
          Donec egestas finibus sem, vitae commodo velit. Mauris tellus erat,
          ultrices a pharetra sed, dapibus id nulla. Donec auctor bibendum
          tellus. Pellentesque fermentum, turpis a porta posuere,
          leo dui aliquet mauris, at eleifend justo nunc eget ligula.
          Vestibulum luctus molestie quam at consectetur.
        </div>
      </div>
      <div className="box">
        <div className="box__title" style={{marginBottom: "25px"}}>Quick Guides</div>
        <div className="box__bullet-wide">Example of the intevention such as medications</div>
        <div className="box__bullet-wide">Example of the intevention such as food items</div>
        <div className="box__bullet-wide">Example of the intevention such as exercises</div>
        <div className="box__bullet-wide">Example of the intevention such as medications</div>
        <div className="box__bullet-wide">Example of the intevention such as food items</div>
        <div className="box__bullet-wide">Example of the intevention such as exercises</div>
        <div className="box__bullet-wide">Example of the intevention such as medications</div>
      </div>
      <div className="box__title">Effective for the following:</div>
      <div className="ih-button no-inline">Condition 1</div>
      <div className="ih-button no-inline">Condition 2</div>
      <div className="ih-button no-inline">Condition 3</div>
    </div>
  );
}

function LifestyleIntervention() {
  return (
    <div className="">
      <Header />
      <SideBar />
      <MainBody />
    </div>
  );
}

export default LifestyleIntervention;
