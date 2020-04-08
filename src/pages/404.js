import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Section from "../components/section"
import RobotDare from "../images/icons/robot.png"

const NotFoundPage = () => (
  <Layout className="print-safe not-found-page">
    <SEO title="404: Not found" />
    <Section
      title="NOT FOUND"
      elements={<img className="max-w-100" src={RobotDare} />}
    />
  </Layout>
)

export default NotFoundPage
