/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { FaCodepen, FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa"

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
    <div className="bg-gray-400 flex w-screen justify-start bio items-center">
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-col md:flex-row lg:flex-row justify-around mt-16 md:mt-0 lg:mt-0 items-center w-full">
          <StaticImage
            className="justify-around rounded-full mb-16 md:mb-0 lg:mb-0"
            layout="fixed"
            formats={["auto", "webp", "avif"]}
            src="../images/profile_fabrice.jpg"
            width={250}
            height={250}
            quality={100}
            alt="Profile picture"
          />
          {author?.name && (
            <div className="-ml-30 bg-opacity-80 bg-gray-900 shadow-md text-white p-4 rounded-lg lg:w-6/12">
              <p>
                Hi! I am <strong>{author.name}</strong> <br /> <br />{" "}
                {author?.summary || null}
                {` `}
                <br />
                <div className="my-10 flex justify-evenly">
                  <a
                    className="text-yellow-100 hover:text-yellow-800"
                    href={`https://linkedin.com/in/${social?.linkedin || ``}`}
                  >
                    <strong className="text-3xl">
                      <FaLinkedin />
                    </strong>
                  </a>
                  <a
                    className="text-yellow-100 hover:text-yellow-800"
                    href={`https://facebook.com/${social?.facebook || ``}`}
                  >
                    <strong className="text-3xl">
                      <FaFacebook />
                    </strong>
                  </a>
                  <a
                    className="text-yellow-100 hover:text-yellow-800"
                    href={`https://github.com/${social?.github || ``}`}
                  >
                    <strong className="text-3xl">
                      <FaGithub />
                    </strong>
                  </a>
                  <a
                    className="text-yellow-100 hover:text-yellow-800"
                    href={`https://codepen.io/${social?.codepen || ``}`}
                  >
                    <strong className="text-3xl">
                      <FaCodepen />
                    </strong>
                  </a>
                </div>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Bio
