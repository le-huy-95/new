import Sidebar from "./sidebar";
import "./backlog.scss";
import { FaBars } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { FaUser } from "react-icons/fa";

import { useState } from "react";
import TableProject from "./tableProject";

const Admin = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [pageCount, setPageCount] = useState(0);

  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <Sidebar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <FaBars
          className="admin-header-icon"
          onClick={() => setCollapsed(!collapsed)}
        />
        <div className="admin-main">
          <div className="title">
            {" "}
            <div>Projects/Reactjs/Project manage </div>
            <span>
              <FaUser className="icon" /> Hello user
            </span>
          </div>
          <div className="name"> Project backlog</div>
          <button type="button" class="btn btn-success button">
            <AiOutlinePlusCircle /> create New Project
          </button>

          <TableProject />
        </div>
      </div>
    </div>
  );
};

export default Admin;
