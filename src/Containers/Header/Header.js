import React from "react";
import { Link, useParams } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../../redux/actions";

import { Slide } from "react-awesome-reveal";
import HeaderWrapper from "./HeaderWrapper";

import { List, ListItem } from "@material-ui/core";
import Button from "@restart/ui/esm/Button";
import {
  faBars,
  faHome,
  faImages,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const menus = [
  { to: "", title: "Umumiy", icon: faHome },
  { to: "Rasm", title: "Rasm", icon: faImages },
  { to: "Video", title: "Video ", icon: faVideo },
  { to: "Jarayon", title: "Jarayon", icon: faImages },
];

const Dashboard = ({ children }) => {
  const dispatch = useDispatch();
  const { menu } = useParams();

  const show = useSelector((state) => state.isSidebarShow);

  return (
    <HeaderWrapper>
      <div className={`sidebar ${(show && "show") || ""}`}>
        <h1 className="text-white">3D MAX</h1>

        <List component="nav">
          {menus.map((v, i) => (
            <li>
              <Slide delay={i * 30}>
                <Link
                  key={v.to}
                  to={`${v.to}`}
                  className={`${menu === v.to ? "active" : ""}`}
                >
                  <ListItem button>
                    <FontAwesomeIcon icon={v.icon} className="me-2" /> {v.title}
                  </ListItem>
                </Link>
              </Slide>
            </li>
          ))}
        </List>
      </div>
      <div className="rightside">
        <header className="shadow">
          <Button
            onClick={() => toggleMenu(dispatch)}
            variant="contained"
            disableElevation
          >
            <FontAwesomeIcon icon={faBars} />
          </Button>
          <img src="logo.jpg" className="logo" alt="" />
        </header>
        <div className="content">{children}</div>
      </div>
    </HeaderWrapper>
  );
};

export default Dashboard;
