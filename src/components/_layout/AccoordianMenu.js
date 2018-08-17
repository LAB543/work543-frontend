import React from 'react';
import {Link} from 'react-router-dom';

import Category from '../category/category.json';
const category = JSON.parse(JSON.stringify(Category)).category;

const AccoordianMenu = (props) => {
  const categorize = [];

  for (var z = 0; z < category.length; z++) {
    const cateMap = (category) => {
      const init = Array.isArray(category) ? category : [1];
      for (var i = 0; i < init.length; i++) {
        if (category.header) {
          categorize.push((
            <li className="nav-item-header" key={category.title}>
              <div className="text-uppercase font-size-xs line-height-xs"> {category.title}</div>
              <i className="icon-menu" title={category.title}></i>
            </li>
          ));

          if (category.children !== null) {
            return cateMap(category.children);
          }
        }

        if (category[i].subHeader && category[i].link) {
          categorize.push((
            <li className="nav-item nav-no-submenu" key={category[i].title}>
              <Link to={category[i].link} className={`nav-link ${props.currentLocation === category[i].title && 'active'}`}>
                <i className={category[i].icon}></i>
                <span>{category[i].title}</span>
              </Link>
            </li>
          ));
        } else {
          if (category[i].children.length >= 1) {
            categorize.push((
              <li className={`nav-item nav-submenu ${props.currentLocation === category[i].title && 'nav-item-open'}`} key={category[i].title} data-nav-spy={`submenu${i}`}>
                <a className="nav-link">
                  <i className={category[i].icon}></i>
                  <span>{category[i].title}</span>
                </a>
                <ul className="nav nav-group-sub" style={props.currentLocation === category[i].title ? {display: 'block'} : {}} >
                  {category[i].children.map((child, idx) => {
                    return (
                      <li className="nav-item" key={idx}>
                        <Link to={child.link} className="nav-link">
                          {child.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
            ));
          }
        }
      };
    }
    cateMap(category[z]);
  }


  return (
    <div className="sidebar sidebar-dark sidebar-main sidebar-expand-md">
      <div className="sidebar-content">
        <div className="card card-sidebar-mobile">
          <ul className="nav nav-sidebar" data-nav-type="accordion">
            {categorize}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AccoordianMenu;
