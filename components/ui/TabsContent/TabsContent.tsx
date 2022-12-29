import { FC } from "react"
import { TabPanel } from "../";
import { TabsContentProps } from "./model";

export const TabsContent: FC<TabsContentProps> = ({ value, children }) => {
  return (
    <>
      {
        (Array.isArray(children))
          ? (
            children.map((children, index) =>
              <TabPanel key={`simple-tab-content-${index}`} value={value} index={index}>
                {children}
              </TabPanel>
            )
          )
          : (
            <TabPanel value={value} index={0}>
              {children}
            </TabPanel>
          )
      }
    </>
  )
}

