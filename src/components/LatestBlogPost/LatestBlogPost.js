import React from "react"
import { Link } from "gatsby"
import { useLatestBlogPost } from "../../hooks/useLatestBlogPost"
import { Wrapper } from "./LatestBlogPost.styles"

const LatestBlogPost = () => {
  const data = useLatestBlogPost()

  return (
    <Wrapper>
      <h1>Latest Blog Post</h1>
      {/* get the latest blog post */}
      <h4>{data.allWpPost.edges[0].node.title}</h4>
      <div
        dangerouslySetInnerHTML={{
          __html: data.allWpPost.edges[0].node.excerpt,
        }}
      />
      <Link to={`/blog${data.allWpPost.edges[0].node.uri}`}>
        <h5>Read More...</h5>
      </Link>
    </Wrapper>
  )
}
export default LatestBlogPost
