import React from "react"
import connect from "./shared/connect"
import { parseDocs } from "./shared/docs"
import SiteContext from "./shared/context"
import Routes from "./shared/routes"

const ReactSiteRenderer = connect()(({ docs, ...others }) => {
  const { homes, headers } = parseDocs(docs)
  return (
    <SiteContext.Provider value={{ docs, ...others, homes, headers }}>
      <Routes />
    </SiteContext.Provider>
  )
})

ReactSiteRenderer.defaultProps = {
  docs: [],
  color: "blue"
}

export default ReactSiteRenderer
