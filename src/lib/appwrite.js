import { Client, Account } from "appwrite";
export const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("65d787f5bfea8336b679");

export const account = new Account(client);
export { ID } from "appwrite";
