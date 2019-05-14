import React from "react"
import connect from "./shared/connect"
import { parseDocs } from "./shared/docs"
import SiteContext from "./shared/context"
import Routes from "./shared/routes"
import { LocationProvider, createHistory } from "@reach/router"
import createHashSource from "hash-source"

let source = createHashSource()
let history = createHistory(source)

window.addEventListener(
  "message",
  e => {
    if (e.data.type == "click") {
      history.navigate(e.data.url)
    }
  },
  false
)

const ReactSiteRenderer = connect()(({ docs, ...others }) => {
  const { homes, headers } = parseDocs(docs)
  return (
    <LocationProvider history={history}>
      <SiteContext.Provider value={{ docs, ...others, homes, headers }}>
        <Routes />
      </SiteContext.Provider>
    </LocationProvider>
  )
})

ReactSiteRenderer.defaultProps = {
  docs: [],
  color: "blue"
}

export default ReactSiteRenderer
