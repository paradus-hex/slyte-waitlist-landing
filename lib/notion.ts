import { Client } from '@notionhq/client';

const apiKey = process.env.NOTION_API_KEY;
const databaseId = process.env.NOTION_DATABASE_ID;

const notion = new Client({ auth: apiKey });

async function addNotionPageToDatabase(databaseId: string, pageProperties: {}) {
  const newPage = await notion.pages.create({
    parent: {
      database_id: databaseId,
    },
    properties: pageProperties,
  });
  console.log(newPage);
}

export async function addDataToNotion({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  const propertiesForNewPages = {
    Name: {
      type: 'title',
      title: [{ type: 'text', text: { content: name } }],
    },
    Email: {
      type: 'rich_text',
      rich_text: [
        {
          type: 'text',
          text: {
            content: email,
          },
        },
      ],
    },
  };

  if (!databaseId) return;

  console.log('Adding new pages...');
  await addNotionPageToDatabase(databaseId, propertiesForNewPages);
}
