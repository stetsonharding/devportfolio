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
import docker from "../assets/icons/docker.png";
import tailwind from "../assets/icons/tailwind.png";
import nextjs from "../assets/icons/nextjs.png";

function SkillsContainer() {
  return (
    <div className="skills-container">
      <div className="section-heading">
        <h1 className="heading">Some Highlighted Skills & Tools</h1>
      </div>
      <div data-aos="fade-up" className="skill-list-container">
        <table>
          <tbody> {/* Added tbody here */}
            <tr className="table-row">
              <td>
                <SkillsIcon src={htmlIcon} alt="html-icon" name="HTML" />
              </td>
              <td>
                <SkillsIcon src={cssIcon} alt="css-icon" name="CSS" />
              </td>
              <td>
                <SkillsIcon
                  src={javsScriptIcon}
                  alt="JavaScript-icon"
                  name="JavaScript"
                />
              </td>
              <td>
                <SkillsIcon src={nextjs} alt="Next.js-icon" name="Next.js" />
              </td>

              <td>
                <SkillsIcon src={reactIcon} alt="React-icon" name="React.js" />
              </td>
              <td>
                <SkillsIcon src={reduxIcon} alt="Redux-icon" name="Redux" />
              </td>
              <td>
                <SkillsIcon
                  src={graphQLIcon}
                  alt="GraphQL-icon"
                  name="Graphql"
                />
              </td>
              <td>
                <SkillsIcon src={sassIcon} alt="Sass-icon" name="Sass" />
              </td>
              <td>
                <SkillsIcon
                  src={tailwind}
                  alt="Tailwind-icon"
                  name="Tailwind"
                />
              </td>
              <td>
                <SkillsIcon
                  src={bootstrapIcon}
                  alt="Bootstrap-icon"
                  name="Bootstrap"
                />
              </td>
              <td>
                <SkillsIcon
                  src={firebaseIcon}
                  alt="Firebase-icon"
                  name="Firebase"
                />
              </td>
              <td>
                <SkillsIcon src={gitIcon} alt="Git-icon" name="Git/Github" />
              </td>
              <td>
                <SkillsIcon src={docker} alt="Docker-icon" name="Docker" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SkillsContainer;
