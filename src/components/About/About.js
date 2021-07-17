import React from "react"
import { Link } from "gatsby"
import { useAboutQuery } from "../../hooks/useAboutQuery"
import { AboutWrapper, AboutImage } from "./About.styles"

const About = () => {
  const data = useAboutQuery()
  const imageData = data.wpPage.featuredImage.node.localFile.publicURL
  return (
    <AboutWrapper>
      <AboutImage image={imageData} />
      <div className="about-text">
        <div dangerouslySetInnerHTML={{ __html: data.wpPage.content }}></div>
      </div>
    </AboutWrapper>
  )
}
export default About
