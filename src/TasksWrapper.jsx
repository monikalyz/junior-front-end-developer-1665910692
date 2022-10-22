import mark from "./img/mark.svg";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import ApplicationSetup from "./ApplicationSetup";
import StaticBooksList from "./StaticBooksList";
import AdministrationPanel from "./AdministrationPanel";
import ConnectAdminWithFrontend from "./ConnectAdminWithFrontend";
import BookReviewFeature from "./BookReviewFeature";
import arrow from "./img/arrow.svg";
import check from "./img/check.svg";
import lock from "./img/lock.svg";
import { useState } from "react";

const TasksWrapper = () => {
  const [visited, setVisited] = useState([]);

  const onClick = (elementVisited) => {
    setVisited((current) => [...current, elementVisited]);
  };

  return (
    <div className="wrapper">
      <Router>
        <div className="your-tasks">
          <h2>YOUR TASKS</h2>
          <div className="all-tasks">
            <Link
              to="/application-setup"
              onClick={() => onClick("application-setup")}
            >
              <div className="task-title">
                <img
                  src={visited.includes("application-setup") ? arrow : check}
                  alt="arrow-icon"
                />

                <h3 className="status-complited">Application Setup</h3>
              </div>
            </Link>
            <Link
              to="/static-books-list"
              onClick={() => onClick("static-books-list")}
            >
              <div className="task-title">
                <img
                  src={visited.includes("static-books-list") ? arrow : check}
                  alt="arrow-icon"
                />

                <h3>Static Books List</h3>
              </div>
            </Link>
            <Link
              to="/administration-panel"
              onClick={() => onClick("administration-panel")}
            >
              <div className="task-title">
                <img
                  src={visited.includes("administration-panel") ? arrow : check}
                  alt="arrow-icon"
                />

                <h3>Administration Panel</h3>
              </div>
            </Link>
            <Link
              to="/connect-admin-with-frontend"
              onClick={() => onClick("connect-admin-with-frontend")}
            >
              <div className="task-title">
                <img
                  src={
                    visited.includes("connect-admin-with-frontend")
                      ? arrow
                      : check
                  }
                  alt="arrow-icon"
                />

                <h3>Connect Admin with Frontend</h3>
              </div>
            </Link>
            <Link to="/book-review-feature">
              <div className="task-title">
                <img src={lock} alt="arrow-icon" />

                <h3>Book Review Feature</h3>
              </div>
            </Link>
          </div>
        </div>
        <div className="business-context">
          <div className="context-header">
            <div className="title-part">
              <img src={mark} alt="mark-icon" />
              <h2>BUSINESS CONTEXT</h2>
            </div>
          </div>
          <Routes>
            <Route
              path="/application-setup"
              exact={"exact"}
              element={<ApplicationSetup />}
            />
            <Route path="/static-books-list" element={<StaticBooksList />} />
            <Route
              path="/administration-panel"
              element={<AdministrationPanel />}
            />
            <Route
              path="/connect-admin-with-frontend"
              element={<ConnectAdminWithFrontend />}
            />
            <Route
              path="/book-review-feature"
              element={<BookReviewFeature />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default TasksWrapper;
