/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaCodepen, FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';



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
            codepen
            facebook
            github
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
    <div className="bg-gray-400">
      <div className="flex flex-col items-center">
        <StaticImage
          className="w-40 h-40 rounded-full"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../images/profile_fabrice.jpg"
          width={200}
          height={200}
          quality={100}
          alt="Profile picture"
        />
        {author?.name && (
          <div className="bg-red-500 w-1/2">
            <p>
              Hi! I am <strong>{author.name}</strong> <br/> {author?.summary || null}
              {` `}
              <br/>
            <div className="text-gray-700 flex justify-evenly">
              <a href={`https://linkedin.com/in/${social?.linkedin || ``}`}>
                <strong className="text-3xl"><FaLinkedin /></strong>
              </a>
              <a href={`https://facebook.com/${social?.facebook || ``}`}>
                <strong className="text-3xl"><FaFacebook /></strong>
              </a>
              <a href={`https://github.com/${social?.github || ``}`}>
                <strong className="text-3xl"><FaGithub /></strong>
              </a>
              <a href={`https://codepen.io/${social?.codepen || ``}`}>
                <strong className="text-3xl"><FaCodepen /></strong>
              </a>
            </div>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Bio
