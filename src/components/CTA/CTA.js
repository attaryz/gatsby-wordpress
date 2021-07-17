import React from "react"
import { Link } from "gatsby"
import {
  StyledImg,
  CTAImage,
  CTAImageTextWrapper,
  CTAImageText,
} from "./CTA.styles"

const CTA = ({ text, image, link }) => (
  <CTAImage>
    <StyledImg image={image} alt="cta image" />
    <Link to={link}>
      <CTAImageTextWrapper>
        <CTAImageText>{text}</CTAImageText>
      </CTAImageTextWrapper>
    </Link>
  </CTAImage>
)

export default CTA
