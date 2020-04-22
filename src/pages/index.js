import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            description
            siteUrl
          }
        }
      }
    `
  )

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Guiding Digital",
    "description" : site.siteMetadata.description,
    "url": site.siteMetadata.siteUrl,
    "logo": "https://www.guidingdigital.com/images/logo.png"
  }
  return (
  <Layout>
    <SEO title="Home" schemaMarkup={schema} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
  )
}

export default IndexPage
