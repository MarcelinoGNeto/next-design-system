import Head from "next/head";
import type { TemplateConfig } from "./withTemplateConfig";
import { TemplateConfigProvider } from "./TemplateConfigContext";

interface TemplatePageHOCProps {
  title?: string;
}

export default function templatePageHOC (
  Componet: (props: any) => JSX.Element,
  templatePageHOCProps: TemplatePageHOCProps = {},
) {
  return function WrappedComponent(props: {templateConfig: TemplateConfig}) {
    return (
      <>
        <Head>
          <title>
            {
              templatePageHOCProps?.title
              ? `${templatePageHOCProps?.title} | ${props.templateConfig?.site?.title}`
              : props.templateConfig.site.title 
            }
          </title>
        </Head>
        <TemplateConfigProvider value={props.templateConfig}>
          <Componet />
        </TemplateConfigProvider>
      </>
    )
  }
}