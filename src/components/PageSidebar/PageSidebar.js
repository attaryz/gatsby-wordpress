import React from "react"
import { Link } from "gatsby"
import SidebarMessage from "../SidebarMessage/SidebarMessage"
import PageIcon from "../../images/page-icon.svg"
import { Wrapper, Menu } from "./PageSidebar.styles"

const PageSidebar = ({ children, parentChildren, currentPage, parent }) => {
  const getParentContent = () => (
    // page with children show menu
    <>
      <li className="sidebar-menu-header">
        <img src={PageIcon} alt="page-icon" />
        <span dangerouslySetInnerHTML={{ __html: currentPage.title }} />
      </li>
      {children.nodes.map(child => (
        <li key={child.id}>
          <Link to={child.uri}>
            <span dangerouslySetInnerHTML={{ __html: child.title }} />
          </Link>
        </li>
      ))}
    </>
  )
  const getChildContent = () => (
    <>
      <li className="sidebar-menu-header">
        <img src={PageIcon} alt="page-icon" />
        <span dangerouslySetInnerHTML={{ __html: parent }} />
      </li>
      {parentChildren.map(child => (
        <li key={child.id}>
          <link to={child.uri} activeClassName="sidebar-highlighted">
            <span dangerouslySetInnerHTML={{ __html: child.title }} />
          </link>
        </li>
      ))}
    </>
  )
  return (
    <Wrapper>
      {children.nodes.length === 0 && !parent ? (
        <SidebarMessage />
      ) : (
        <Menu> {parent ? getChildContent() : getParentContent()}</Menu>
      )}
    </Wrapper>
  )
}

export default PageSidebar
