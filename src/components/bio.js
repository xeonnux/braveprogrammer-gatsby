/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            linkedin
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile_fabrice.jpg"
        width={100}
        height={100}
        quality={100}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          Hi! I am <strong>{author.name}</strong> <br/> {author?.summary || null}
          {` `}
          <br/>
          <a href={`https://linkedin.com/in/${social?.linkedin || ``}`}>
            Follow me on <FontAwesomeIcon icon={["fas", "linkedin"]} />
          </a>
        </p>
      )}
    </div>
  )
}

export default Bio
