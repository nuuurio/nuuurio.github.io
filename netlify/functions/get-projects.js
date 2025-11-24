import { Client } from "@notionhq/client";

const notion = new Client({ auth: process.env.NOTION_KEY });
const databaseId = process.env.NOTION_PAGE_ID;

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "https://nuuurio.github.io",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const handler = async (event, context) => {
    if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: CORS_HEADERS,
      body: "",
    };
  }

  try {
    const resp = await notion.databases.retrieve({
      database_id: databaseId,
    });

    const datasourceId = resp.data_sources.map(({id}) => {
      return id;
    });

    const dataSources = await notion.dataSources.query({
      data_source_id: datasourceId[0],
    });

    const pages = dataSources.results.map(({id}) => {
      return {
        id
      };
    });

    const projects = await Promise.all(
        pages.map(p =>
            notion.pages.retrieve({ page_id: p.id })
        )
    );

    return {
      statusCode: 200,
      headers: { 
        "content-type": "application/json",
        ...CORS_HEADERS,
    },
      body: JSON.stringify({ projects }),
    };
  } catch (error) {
    console.error("Notion error:", error);
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: "Error fetching Notion data" }),
    };
  }
};
