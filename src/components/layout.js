import * as React from "react"
import { Link } from "gatsby"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="text-4xl text-gray-300 my-0 py-3 px-4 bg-gray-600">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <main>{children}</main>
      <footer class="flex flex-col items-center justify-center">
        <div class="flex justify-center align-middle">
          © Fabrice Madré {new Date().getFullYear()}, Built with{` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a>
        </div>
        <a href="mailto:fabrice@braveprogrammer.tech">contact: Fabrice</a>
      </footer>
    </div>
  )
}

export default Layout
