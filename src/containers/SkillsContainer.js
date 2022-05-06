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
      <div className="skills-heading">
        <h1>Skills</h1>
      </div>
      <div className="skill-list-container">
        <table>
          <tr>
            <div className="table-row">
              <th>
                <SkillsIcon src={htmlIcon} alt="html-icon" name="html" />
              </th>
              <th>
                <SkillsIcon src={cssIcon} alt="css-icon" name="css" />
              </th>
              <th>
                <SkillsIcon src={sassIcon} alt="sass-icon" name="sass" />
              </th>
            </div>
          </tr>
          <tr>
            <div className="table-row-mid">
              <td>
                <SkillsIcon
                  src={javsScriptIcon}
                  alt="JavaScript-icon"
                  name="javaScript"
                />
              </td>
              <td>
                <SkillsIcon src={reactIcon} alt="react-icon" name="react" />
              </td>
              <td>
                <SkillsIcon src={reduxIcon} alt="redux-icon" name="redux" />
              </td>
              <td>
                <SkillsIcon
                  src={bootstrapIcon}
                  alt="bootstrap-icon"
                  name="bootstrap"
                />
              </td>
            </div>
          </tr>
          <tr>
            <div className="table-row">
              <td>
                <SkillsIcon
                  src={graphQLIcon}
                  alt="graphQL-icon"
                  name="graphql"
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
            </div>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default SkillsContainer;
