import React from "react"
import { Link } from "gatsby"
import Navigation from "../Navigation/Navigation"
import { useMenuQuery } from "../../hooks/useMenuQuery"
import { Wrapper, Content } from "./Header.styles"
import Logo from "../../images/logo.svg"

const Header = () => {
  const { site, wpMenu } = useMenuQuery()

  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <img src={Logo} alt={site.siteMetadata.title}></img>
        </Link>
        <Navigation menu={wpMenu.menuItems.nodes} />
      </Content>
    </Wrapper>
  )
}
export default Header
