import React from "react";
import SkillsIcon from "../components/SkillsIcon";

import "../css/SkillsContainer.css";

import htmlIcon from "../assets/icons/html.webp";
import cssIcon from "../assets/icons/css.webp";
import javsScriptIcon from "../assets/icons/javaScript.webp";
import reactIcon from "../assets/icons/react.webp";
import reduxIcon from "../assets/icons/redux.webp";
import sassIcon from "../assets/icons/sass.webp";
import bootstrapIcon from "../assets/icons/bootstrap.webp";
import graphQLIcon from "../assets/icons/graphQL.webp";
import firebaseIcon from "../assets/icons/firebase.webp";
import gitIcon from "../assets/icons/git.webp";

function SkillsContainer() {
  return (
    <div className="skills-container">
      <div className="section-heading">
        <h1 className="heading">Skills</h1>
      </div>
      <div data-aos="fade-up" className="skill-list-container">
        <table>
          <div className="table-row">
            <tr>
              <th>
                <SkillsIcon src={htmlIcon} alt="html-icon" name="html" />
              </th>
              <th>
                <SkillsIcon src={cssIcon} alt="css-icon" name="css" />
              </th>
              <th>
                <SkillsIcon
                  src={javsScriptIcon}
                  alt="JavaScript-icon"
                  name="javaScript"
                />
              </th>
            </tr>
          </div>
          <div className="table-row-mid">
            <tr>
              <td>
                <SkillsIcon src={reactIcon} alt="react-icon" name="react" />
              </td>
              <td>
                <SkillsIcon src={reduxIcon} alt="redux-icon" name="redux" />
              </td>
              <td>
                <SkillsIcon
                  src={graphQLIcon}
                  alt="graphQL-icon"
                  name="graphql"
                />
              </td>
              <td>
                <SkillsIcon src={sassIcon} alt="sass-icon" name="sass" />
              </td>
            </tr>
          </div>
          <div className="table-row">
            <tr>
              <td>
                <SkillsIcon
                  src={bootstrapIcon}
                  alt="bootstrap-icon"
                  name="bootstrap"
                />
              </td>
              <td>
                <SkillsIcon
                  src={firebaseIcon}
                  alt="firebase-icon"
                  name="firebase"
                />
              </td>
              <td>
                <SkillsIcon src={gitIcon} alt="git-icon" name="git" />
              </td>
            </tr>
          </div>
        </table>
      </div>
    </div>
  );
}

export default SkillsContainer;
