import * as React from "react"
import { Link, graphql } from "gatsby"

import { FaCodepen, FaFacebook, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const social = data.site.siteMetadata?.social
  return (
    <Layout location={location} title={siteTitle}>
      <Seo
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <div className="flex justify-center align-middle">
        <article
          className="blog-post bg-red-600 w-3/4"
          itemScope
          itemType="http://schema.org/Article"
        >
          <header>
            <h1 itemProp="headline">{post.frontmatter.title}</h1>
            <p>{post.frontmatter.date}</p>
          </header>
          <section
            dangerouslySetInnerHTML={{ __html: post.html }}
            itemProp="articleBody"
          />
          <hr />

          <footer>
            <div className="socials flex justify-evenly align-middle">
              <a href={`https://linkedin.com/in/${social?.linkedin || ``}`}>
                <strong className="social"><FaLinkedin /></strong>
              </a>
              <a href={`https://facebook.com/${social?.facebook || ``}`}>
                <strong className="social"><FaFacebook /></strong>
              </a>
              <a href={`https://github.com/${social?.github || ``}`}>
                <strong className="social"><FaGithubSquare /></strong>
              </a>
              <a href={`https://codepen.io/${social?.codepen || ``}`}>
                <strong className="social"><FaCodepen /></strong>
              </a>
            </div>
          </footer>
        </article>
      </div>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
        social {
          linkedin
          facebook
          github
          codepen
        }
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
