import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

import { imgNhanDu } from "../assets/img/index";
// sidebar nav config
import navigation from "./_nav";

const TheSidebar = () => {
  const dispatch = useDispatch();
  const show = useSelector((state) => state.loadingReducer.sidebarShow);
  return (
    <CSidebar
      show={show}
      onShowChange={(val) => {
        dispatch({ type: "set", sidebarShow: val });
      }}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          // name="logo-negative"
          src={imgNhanDu.logoNhanDuLargeW}
          height={55}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          // name="sygnet"
          src={imgNhanDu.logoNhanDuEqualW}
          height={55}
        />
      </CSidebarBrand>
      <CSidebarNav>
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle,
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none" />
    </CSidebar>
  );
};

export default React.memo(TheSidebar);
