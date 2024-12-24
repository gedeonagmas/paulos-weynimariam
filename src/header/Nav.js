import React from "react";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const path = useLocation()?.pathname;

  return (
    <div>
      <div className="header-nav main-nav-one">
        <nav>
          <ul className="parent-nav">
            <li className="">
              <Link
                style={{ color: path === "/" ? "red" : "" }}
                className="nav-link"
                to="/"
              >
                <span className="rolling-text">
                  <div
                    style={{ fontWeight: "500", fontSize: "15px" }}
                    className="block"
                  >
                    <span className="letter">H</span>
                    <span className="letter">O</span>
                    <span className="letter">M</span>
                    <span className="letter">E</span>
                  </div>
                  <div
                    style={{ fontWeight: "500", fontSize: "15px" }}
                    className="block"
                  >
                    <span className="letter">H</span>
                    <span className="letter">O</span>
                    <span className="letter">M</span>
                    <span className="letter">E</span>
                  </div>
                </span>
              </Link>
            </li>
            <li>
              <Link
                style={{ color: path === "/About" ? "red" : "" }}
                className="nav-link"
                to="/About"
              >
                <span className="rolling-text">
                  <div
                    style={{ fontWeight: "500", fontSize: "15px" }}
                    className="block"
                  >
                    <span className="letter">A</span>
                    <span className="letter">B</span>
                    <span className="letter">O</span>
                    <span className="letter">U</span>
                    <span className="letter">T</span>
                  </div>
                  <div
                    style={{ fontWeight: "500", fontSize: "15px" }}
                    className="block"
                  >
                    <span className="letter">A</span>
                    <span className="letter">B</span>
                    <span className="letter">O</span>
                    <span className="letter">U</span>
                    <span className="letter">T</span>
                  </div>
                </span>
              </Link>
            </li>
            <li>
              <Link
                style={{
                  color:
                    path === "/Service" ||
                    path?.split("?")[0] === "/ServiceDetails"
                      ? "red"
                      : "",
                }}
                className="nav-link"
                to="/Service"
              >
                <span className="rolling-text">
                  <div
                    style={{ fontWeight: "500", fontSize: "15px" }}
                    className="block"
                  >
                    <span className="letter">S</span>
                    <span className="letter">E</span>
                    <span className="letter">R</span>
                    <span className="letter">V</span>
                    <span className="letter">I</span>
                    <span className="letter">C</span>
                    <span className="letter">E</span>
                  </div>
                  <div
                    style={{ fontWeight: "500", fontSize: "15px" }}
                    className="block"
                  >
                    <span className="letter">S</span>
                    <span className="letter">E</span>
                    <span className="letter">R</span>
                    <span className="letter">V</span>
                    <span className="letter">I</span>
                    <span className="letter">C</span>
                    <span className="letter">E</span>
                  </div>
                </span>
              </Link>
            </li>

            <li>
              <Link
                style={{
                  color:
                    path === "/Product" ||
                    path?.split("?")[0] === "/ProductDetails"
                      ? "red"
                      : "",
                }}
                className="nav-link"
                to="/Product"
              >
                <span className="rolling-text">
                  <div
                    style={{ fontWeight: "500", fontSize: "15px" }}
                    className="block"
                  >
                    <span className="letter">P</span>
                    <span className="letter">R</span>
                    <span className="letter">O</span>
                    <span className="letter">D</span>
                    <span className="letter">U</span>
                    <span className="letter">C</span>
                    <span className="letter">T</span>
                  </div>
                  <div
                    style={{ fontWeight: "500", fontSize: "15px" }}
                    className="block"
                  >
                    <span className="letter">P</span>
                    <span className="letter">R</span>
                    <span className="letter">O</span>
                    <span className="letter">D</span>
                    <span className="letter">U</span>
                    <span className="letter">C</span>
                    <span className="letter">T</span>
                  </div>
                </span>
              </Link>
            </li>

            <li>
              <Link
                style={{
                  color:
                    path === "/Blog" || path?.split("?")[0] === "/BlogDetails"
                      ? "red"
                      : "",
                }}
                className="nav-link"
                to="/Blog"
              >
                <span className="rolling-text">
                  <div
                    style={{ fontWeight: "500", fontSize: "15px" }}
                    className="block"
                  >
                    <span className="letter">N</span>
                    <span className="letter">E</span>
                    <span className="letter">W</span>
                    <span className="letter">S</span>
                    <span style={{ marginLeft: "4px" }} className="letter">
                      &
                    </span>
                    <span style={{ marginLeft: "4px" }} className="letter">
                      E
                    </span>
                    <span className="letter">V</span>
                    <span className="letter">E</span>
                    <span className="letter">N</span>
                    <span className="letter">T</span>
                  </div>
                  <div
                    style={{ fontWeight: "500", fontSize: "15px" }}
                    className="block"
                  >
                    <span className="letter">N</span>
                    <span className="letter">E</span>
                    <span className="letter">W</span>
                    <span className="letter">S</span>
                    <span className="letter"></span>
                    <span className="letter">&</span>
                    <span className="letter">E</span>
                    <span className="letter">V</span>
                    <span className="letter">E</span>
                    <span className="letter">N</span>
                    <span className="letter">T</span>
                  </div>
                </span>
              </Link>
            </li>
            <li>
              <Link
                style={{ color: path === "/Contact" ? "red" : "" }}
                className="nav-link"
                to="/Contact"
              >
                <span className="rolling-text">
                  <div
                    style={{ fontWeight: "500", fontSize: "15px" }}
                    className="block"
                  >
                    <span className="letter">C</span>
                    <span className="letter">O</span>
                    <span className="letter">N</span>
                    <span className="letter">T</span>
                    <span className="letter">A</span>
                    <span className="letter">C</span>
                    <span className="letter">T</span>
                  </div>
                  <div
                    style={{ fontWeight: "500", fontSize: "15px" }}
                    className="block"
                  >
                    <span className="letter">C</span>
                    <span className="letter">O</span>
                    <span className="letter">N</span>
                    <span className="letter">T</span>
                    <span className="letter">A</span>
                    <span className="letter">C</span>
                    <span className="letter">T</span>
                  </div>
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
