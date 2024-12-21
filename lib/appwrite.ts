import { Client, Databases } from "appwrite";

const client = new Client()
  .setEndpoint(`${process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!}`) // Your API Endpoint
  .setProject(`${process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!}`); // Your project ID



const databases = new Databases(client);

export async function fetchRecipeList() {
  try {
    const result = await databases.listDocuments(
      `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!}`, // databaseId
      `${process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!}`, // collectionId
      [] // queries (optional)
    );
    return result.documents;
  } catch (error) {
    console.error("Failed to fetch recipe list:", error);
    throw error;
  }
}

export async function fetchRecipeById(documentId: string) {
  try {
    const result = await databases.getDocument(
      `${process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID!}`, // databaseId
      `${process.env.NEXT_PUBLIC_APPWRITE_COLLECTION_ID!}`, // collectionId
      documentId // documentId
    );
    return result;
  } catch (error) {
    console.error("Failed to fetch recipe by ID:", error);
    throw error;
  }
}
