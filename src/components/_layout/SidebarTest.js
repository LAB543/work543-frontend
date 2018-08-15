import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const DATA = [
  {
    header: true,
    title: 'Main',
    link: null,
    icon:'icon-menu',
    children: [
      {
        subHeader: true,
        title: 'Dashboard',
        link: '/dashboard',
        icon:'icon-home4',
        children: null
      }
    ]
  },
  {
    header: true,
    title: 'Tools',
    link: null,
    icon: '',
    children: [
      {
        subHeader: true,
        title: 'Facebook',
        link: null,
        icon: 'icon-facebook2',
        children: [
          {
            title: '댓글 수집기',
            link: '/facebook/comment-collector',
          },
        ]
      },
      {
        subHeader: true,
        title: 'Instagram',
        link: null,
        icon: 'icon-instagram',
        children: [
          {
            title: '포스팅 수집기',
            link: '/instagram/post-collector',
          },
          {
            title: '태그 수집기',
            link: '/instagram/tag-collector',
          },
        ]
      },
      {
        subHeader: true,
        title: 'Youtube',
        link: null,
        icon: 'icon-youtube',
        children: [
          {
            title: '댓글 수집기',
            link: '/youtube/comment-collector',
          }
        ]
      },
      {
        subHeader: true,
        title: 'E.T.C',
        link: null,
        icon: 'icon-hammer-wrench',
        children: [
          {
            title: '개인정보 마스킹',
            link: '/etc/privacy-masking',
          }
        ]
      }
    ]
  }
];

const AccoordianMenu = ({category, toggleRef, onToggleClick}) => {
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
            <li className="nav-item" key={category[i].title}>
              <Link to={category[i].link} className="nav-link">
                <i className={category[i].icon}></i>
                <span>{category[i].title}</span>
              </Link>
            </li>
          ));
        } else {
          if (category[i].children.length >= 1) {
            categorize.push((
              <li className="nav-item nav-submenu" key={category[i].title}>
                <a className="nav-link" onClick={onToggleClick}>
                  <i className={category[i].icon}></i>
                  <span>{category[i].title}</span>
                </a>

                <ul className="nav nav-group-sub">
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
    <ul className="nav nav-sidebar" ref={toggleRef}>
      {categorize}
    </ul>
  );
};

class Sidebar extends Component {
  constructor(props) {
    super(props);

    this.toggleMenu = React.createRef();
  }

  onToggleClick(e) {
    e.preventDefault();

    const toggleParents = this.toggleMenu.current.children;
    const toggleTarget = e.currentTarget.parentElement;

    const toggleItemOpen = 'nav-item-open';
    const toggleSubOpen = 'nav-sub-open';
    const toggleVisible = 'nav-sub-visible';

    const filterToggleMenu = Array.prototype.filter.call(toggleParents, (children) => {
      if (children.classList.contains('nav-submenu')) {
        return children;
      }
    });

    filterToggleMenu.forEach((children) => {
      if (children.classList.contains(toggleItemOpen)) {
        children.classList.remove(toggleItemOpen);
      }
    });

    for (var i = 0; i < filterToggleMenu.length; i++) {
      filterToggleMenu[i].classList.remove(toggleItemOpen);
      filterToggleMenu[i].children[1].classList.remove(toggleVisible);
      filterToggleMenu[i].children[1].classList.remove(toggleSubOpen);
    }

    toggleTarget.classList.add(toggleItemOpen);
    toggleTarget.children[1].classList.add(toggleVisible);

    setTimeout(() => {
      toggleTarget.children[1].classList.add(toggleItemOpen);
    }, 300);
  }

  render() {
    return (
      <div className="sidebar sidebar-dark sidebar-main sidebar-expand-md">
        {/* Sidebar-content */}
        <div className="sidebar-content">
          {/* Card */}
          <div className="card card-sidebar-mobile">
            <AccoordianMenu toggleRef={this.toggleMenu} category={DATA} onToggleClick={ (e) => this.onToggleClick(e)} />
          </div>
          {/* /Card */}
        </div>
        {/* /Sidebar-content */}
      </div>
    );
  };
};

export default Sidebar;
