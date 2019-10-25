import React from "react"

import Layout from "../components/layout"
import { Title } from "components"

import { StaticQuery, graphql } from "gatsby";

const IndexPage = () => (
  <Layout>
    <StaticQuery
    query={
    graphql`
      query MyQuery {
        contentfulProduct {
          name
        }
      }
    `}
    render={({
      contentfulProduct: {
        name,
      }
    }) => (
      <>
        <Title title={name}/>
      </>
    )}
  />
  </Layout>
)

export default IndexPage
