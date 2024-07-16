import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
        showContent,
        showLeftNavbar,
        showRightNavbar,
      } = value

      const onChangeShowContent = event => {
        onToggleShowContent(event.target.checked)
      }

      const onChangeStatusLeftNavbar = event => {
        onToggleShowLeftNavbar(event.target.checked)
      }

      const onChangeStatusRightNavbar = event => {
        onToggleShowRightNavbar(event.target.checked)
      }

      return (
        <div className="navgationContainer">
          <h1 className="navHeading">Layout</h1>
          <ul className="navUls">
            <li>
              <input
                type="checkbox"
                id="checkbox1"
                checked={showContent}
                onChange={onChangeShowContent}
                className="inputs"
              />
              <label className="inputLabels" htmlFor="checkbox1">
                Content
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkbox2"
                checked={showLeftNavbar}
                onChange={onChangeStatusLeftNavbar}
                className="inputs"
              />
              <label className="inputLabels" htmlFor="checkbox2">
                Left Navbar
              </label>
            </li>
            <li>
              <input
                type="checkbox"
                id="checkbox3"
                checked={showRightNavbar}
                onChange={onChangeStatusRightNavbar}
                className="inputs"
              />
              <label className="inputLabels" htmlFor="checkbox3">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
