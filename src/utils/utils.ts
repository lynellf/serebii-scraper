import fetch from "isomorphic-fetch";
import { JSDOM } from "jsdom";

export async function getDocument(url: string) {
  const response = await fetch(url);
  const { status } = response;
  const isOk = status === 200;
  if (!isOk) {
    throw new Error(
      `Request Did Not Return 200. Please verify URL and try again. StatusCode: ${status}`
    );
  }
  const pageText = await response.text();
  const DOM = new JSDOM(pageText);
  const {
    window: { document }
  } = DOM;
  return document;
}

