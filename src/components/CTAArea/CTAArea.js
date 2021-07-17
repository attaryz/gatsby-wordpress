import React from "react"
import CTA from "../CTA/CTA"
import { useCTAAreaQuery } from "../../hooks/useCTAAreaQuery"
import { Wrapper } from "./CTAArea.styles"
import { element } from "prop-types"

const CTAArea = () => {
  const { cta } = useCTAAreaQuery()

  return (
    <Wrapper>
      {/*    create an empty array then fill with empty strings then map through it  */}
      {new Array(3).fill("").map((element, i) => (
        <CTA
          key={i}
          image={
            /* [] to grab image number */
            cta.ACF_HomePage[`cta${i + 1}Image`].localFile.childImageSharp
              .gatsbyImageData
          }
          link={cta.ACF_HomePage[`cta${i + 1}Link`]}
          text={cta.ACF_HomePage[`cta${i + 1}Text`]}
        />
      ))}
    </Wrapper>
  )
}
export default CTAArea
