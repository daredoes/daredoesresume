import React from "react"

import Layout from "@components/NewLayout"
import SEO from "@components/SEO"

import Section from "@components/Section"
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
