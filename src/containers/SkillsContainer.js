import React from "react";
import SkillsIcon from "../components/SkillsIcon";

import "../css/SkillsContainer.css";

import htmlIcon from "../assets/testicon.PNG";

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
                <SkillsIcon src={htmlIcon} alt="html-icon" />
              </th>
              <th>
                <SkillsIcon src={htmlIcon} alt="html-icon" />
              </th>
              <th>
                <SkillsIcon src={htmlIcon} alt="html-icon" />
              </th>
            </div>
          </tr>
          <tr>
            <div className="table-row-mid">
              <td>
                <SkillsIcon src={htmlIcon} alt="html-icon" />
              </td>
              <td>
                <SkillsIcon src={htmlIcon} alt="html-icon" />
              </td>
              <td>
                <SkillsIcon src={htmlIcon} alt="html-icon" />
              </td>
              <td>
                <SkillsIcon src={htmlIcon} alt="html-icon" />
              </td>
            </div>
          </tr>
          <tr>
            <div className="table-row">
              <td>
                <SkillsIcon src={htmlIcon} alt="html-icon" />
              </td>
              <td>
                <SkillsIcon src={htmlIcon} alt="html-icon" />
              </td>
              <td>
                <SkillsIcon src={htmlIcon} alt="html-icon" />
              </td>
            </div>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default SkillsContainer;
