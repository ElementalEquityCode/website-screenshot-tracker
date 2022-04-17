import React, { useState } from "react";

const WebsiteContext = React.createContext();

const WebsiteContextProvider = (props) => {
  const [currentWebsiteName, setCurrentWebsiteName] = useState("");
  const [websiteHomePage, setWebsiteHomePage] = useState("");

  const setNewWebsiteName = (value) => {
    setCurrentWebsiteName(value);
  };

  const setNewWebsiteHomePage = (value) => {
    setWebsiteHomePage(value);
  };

  const { children } = props;
  return (
    <WebsiteContext.Provider
      value={{
        currentWebsiteName,
        websiteHomePage,
        setNewWebsiteName,
        setNewWebsiteHomePage,
      }}
    >
      {children}
    </WebsiteContext.Provider>
  );
};

const WebsiteContextConsumer = (props) => {
  const { children } = props;
  return <WebsiteContext.Consumer>{props}</WebsiteContext.Consumer>;
};

export default WebsiteContext;
export { WebsiteContextConsumer, WebsiteContextProvider };
