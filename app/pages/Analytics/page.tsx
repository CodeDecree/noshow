"use client"
import { PowerBIEmbed } from "powerbi-client-react";
import { models, Report } from "powerbi-client"

export default function Analytics() {
    return <>
        {/* <PowerBIEmbed
        embedConfig={{
          type: 'report',   // Supported types: report, dashboard, tile, visual, qna, paginated report and create
          id: '55edc025-1bbc-478e-bf99-7eb18ca6445f',
          embedUrl: 'https://app.powerbi.com/reportEmbed?reportId=04929e6c-0068-4aba-ad7d-7d2e0e682545&groupId=55edc025-1bbc-478e-bf99-7eb18ca6445f&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLUlORElBLUNFTlRSQUwtQS1QUklNQVJZLXJlZGlyZWN0LmFuYWx5c2lzLndpbmRvd3MubmV0IiwiZW1iZWRGZWF0dXJlcyI6eyJ1c2FnZU1ldHJpY3NWTmV4dCI6dHJ1ZX19',
          accessToken: '55edc025-1bbc-478e-bf99-7eb18ca6445f',
          tokenType: models.TokenType.Embed, // Use models.TokenType.Aad for SaaS embed
          settings: {
            panes: {
              filters: {
                expanded: false,
                visible: false
              }
            },
            background: models.BackgroundType.Transparent,
          }
        }}

        eventHandlers={
          new Map([
            ['loaded', function () { console.log('Report loaded'); }],
            ['rendered', function () { console.log('Report rendered'); }],
            ['error', function (event) { console.log(event); }],
            ['visualClicked', () => console.log('visual clicked')],
            ['pageChanged', (event) => console.log(event)],
          ])
        }

        cssClassName={"reportClass"}

        getEmbeddedComponent={(embeddedReport) => {
          //@ts-ignore
          window.Report = embeddedReport as Report;
        }}
      /> */}
    </>
}