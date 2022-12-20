import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      {/* <div className="flex flex-col justify-center items-center bg-gray-400">
        <ol className="flex flex-col justify-center w-4/6" style={{ listStyle: `none` }}>
          {posts.map(post => {
            const title = post.frontmatter.title || post.fields.slug
            const image = getImage(post.frontmatter.picture)
            return (
              <li key={post.fields.slug}>
                <article
                  className="post-list-item bg-gray-600"
                  itemScope
                  itemType="http://schema.org/Article"
                >
                  <header className="bg-red-500">
                    <h2 className="text-xl ">
                      <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{title}</span>
                      </Link>
                    </h2>
                    <small>{post.frontmatter.date}</small>
                  </header>
                  <section className="flex h-96 justify-around items-center p-5">
                    <p
                      dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                      }}
                      itemProp="description"
                    />
                    <GatsbyImage className="rounded-xl" image={image} alt="" />
                  </section>
                </article>
              </li>
            )
          })}
        </ol>
      </div> */}
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          picture {
            childImageSharp {
              gatsbyImageData(
                width: 500
            placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`
