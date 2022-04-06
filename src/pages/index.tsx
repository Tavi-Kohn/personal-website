import * as React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Style } from "util"

const mainStyle: React.CSSProperties = {
  display: "grid",
  gridTemplateRows: "auto",
  // font
}

const IndexPage = () => {
  return (
    <main style={mainStyle}>
      <h1>Tavi Kohn</h1>
    </main>
  )
}

export default IndexPage
