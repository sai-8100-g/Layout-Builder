import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value
      const mainUlClassName = showContent ? '' : 'display'
      return (
        <ul className={`mainUl ${mainUlClassName}`}>
          {showLeftNavbar && (
            <li className="firstLi">
              <h1 className="heading">Left Navbar Menu</h1>
              <ul className="firstLiInnerUl">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
              </ul>
            </li>
          )}
          {showContent && (
            <li className="secondLi">
              <h1 className="heading">Content</h1>
              <p>
                Lorem ipsum All components you implement should go in the All
                components you implement should go in the All components you
                implement should go in the All components you implement should
                go in the
              </p>
            </li>
          )}
          {showRightNavbar && (
            <li className="thirdLi">
              <h1 className="heading">Right Navbar</h1>
              <div className="adContainers">
                <h1>Ad 1</h1>
              </div>
              <div className="adContainers">
                <h1>Ad 2</h1>
              </div>
            </li>
          )}
        </ul>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
