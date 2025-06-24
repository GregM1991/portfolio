import { Client } from "@notionhq/client";

function validateEnvironmentVariables() {
  const requiredEnvVars = {
    NOTION_API_KEY: process.env.NOTION_API_KEY,
  };

  const missingVars = Object.entries(requiredEnvVars)
    .filter(([, value]) => !value)
    .map(([key]) => key);

  if (missingVars.length > 0) {
    throw new Error(
      `Missing required environment variables: ${missingVars.join(", ")}. ` +
      "Please check your .env.local file."
    );
  }

  return requiredEnvVars;
}

const env = validateEnvironmentVariables();

export const notion = new Client({ auth: env.NOTION_API_KEY });
