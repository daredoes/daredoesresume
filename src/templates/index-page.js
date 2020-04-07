import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import BlogRoll from '../components/BlogRoll'
import ContactItemTemplate from './resume/contact-item'
import EducationTemplate from './resume/education'
import ExperienceTemplate from './resume/experience'
import HobbyTemplate from './resume/hobby'
import SkillTemplate from './resume/skill'

import PrintableContactItemTemplate from './print/contact-item'
import PrintableEducationTemplate from './print/education'
import PrintableExperienceTemplate from './print/experience'
import PrintableSkillTemplate from './print/skill'

import moment from 'moment'

const IndexPage = ({ data }) => {
  const buildtime = moment(process.env.GATSBY_BUILDTIME);
  const { frontmatter } = data.markdownRemark
  const columns = [
    [ // The Left Column
      [ExperienceTemplate, data.experiences.edges],
      [BlogRoll, null],
    ],
    [ // The Right Column
      [ContactItemTemplate, data.contacts.edges],
      [EducationTemplate, data.educations.edges],
      [SkillTemplate, data.skills.edges],
      [HobbyTemplate, data.hobbies.edges],
    ]
  ];

  const columnSections = columns.map(function(column, i) {
    // For each column, return an Element made from its values
    const columnElements = column.map(function(values, ii) {
      const Type = values[0];
      // For each column's returned element, put a header for the category
      return  (
        <Type key={ii} elements={values[1]} />
      )
    });
    // Return each wrapped column
    return (
      <div key={i} className={`column resume-column is-full ${i % 2 ? 'is-5-desktop is-5-tablet' : 'is-7-desktop is-7-tablet'}`}>
        {columnElements}
      </div>
    )
  }
  );

  const printOrder = [
    [PrintableContactItemTemplate, data.contacts.edges],
    [PrintableExperienceTemplate, data.experiences.edges],
    [PrintableEducationTemplate, data.educations.edges],
    [PrintableSkillTemplate, data.skills.edges],
  ];

  const printColumnSections = printOrder.map(function(values, i) {
    const Type = values[0];
    // For each column's returned element, put a header for the category
    return  (
      <Type key={i} elements={values[1]} />
    )
  });

  return (
    <Layout>
      <div className="print-only">
      <span className="is-size-4 has-text-weight-bold">{frontmatter.first_name} {frontmatter.last_name}</span>
        {printColumnSections}
      </div>
      <div className="no-print">
      
        <div className="full-width has-text-centered">
          <div className="profile-photo">
            <img alt='A drawing of my face' src="/img/uploads/profile_pic.gif"/>
          </div>
          <br/>
          <span className="is-size-2 has-text-weight-semi-bold is-uppercase">Hello,</span>
          <p className="is-size-3 is-uppercase has-text-weight-semi-bold">My name is <span className="has-text-primary">{frontmatter.first_name} {frontmatter.last_name}</span>.<br/>
          <a role="button" tabIndex="0" className="has-text-info is-underlined" onClick={() => {window.print()}}>Print this page</a> to convert my life into my <a role="button" tabIndex="0"  className="has-text-info is-underlined" onClick={() => {window.print()}}>Resumé/CV</a></p>
        </div>
        <div className="columns">
          {columnSections}
        </div>
      </div>
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    experiences: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    educations: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    contacts: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    hobbies: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    skills: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
    projects: PropTypes.shape({
      id: PropTypes.string,
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        first_name
        middle_name
        last_name
        birth_date
      }
    },
    experiences: allMarkdownRemark(filter: {frontmatter: { key:{ eq:"experience"}}}, sort: { fields: [frontmatter___weight, frontmatter___date, frontmatter___title], order: [ASC, DESC, ASC]}) {
      edges{
        node{
          frontmatter {
            title
            date
            weight
            printable
            visible
            external_url
            key
            display_date
            name
          }
          id
          html
        }
      }
    },
    educations: allMarkdownRemark(filter: {frontmatter: { key:{ eq:"education"}}}, sort: { order: [ASC, DESC, ASC], fields: [frontmatter___weight, frontmatter___graduation_date, frontmatter___title]}) {
      edges{
        node{
          frontmatter {
            title
            weight
            printable
            visible
            key
            graduation_date(formatString: "MMMM YYYY")
            display_date
          } 
          id
          html
        }
      }
    },
    contacts: allMarkdownRemark(filter: {frontmatter: { key:{ eq:"contact"}}}, sort: { fields: [frontmatter___weight, frontmatter___title]}) {
      edges{
        node{
          frontmatter {
            title
            weight
            printable
            visible
            external_url
            icon
            key
          }
          id
          html
          excerpt
        }
      }
    },
    hobbies: allMarkdownRemark(filter: {frontmatter: { key:{ eq:"hobby"}}}, sort: { fields: [frontmatter___weight, frontmatter___title]}) {
      edges{
        node{
          frontmatter {
            title
            weight
            printable
            visible
            icon
            key
          } 
          id
          html
        }
      }
    }
    skills: allMarkdownRemark(filter: {frontmatter: { key:{ eq:"skill"}}}, sort: { fields: [frontmatter___weight, frontmatter___title], order: [ASC, ASC]}) {
      edges{
        node{
          frontmatter {
            title
            weight
            printable
            visible
            key
            icon
          } 
          id
          html
        }
      }
    }
    projects: allMarkdownRemark(filter: {frontmatter: { templateKey:{ eq:"blog-post"}}}, sort: { fields: [frontmatter___weight, frontmatter___date, frontmatter___title], order: [ASC, DESC, ASC]}) {
      edges{
        node{
          id
          frontmatter {
            title
            templateKey
            date
            weight
            printable
            visible
            description
          } 
          id
          html
        }
      }
    }
  }
`
