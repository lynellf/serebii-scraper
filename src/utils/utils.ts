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

export async function duffsScraper(
  arr: string[],
  cb: (item: string) => Promise<void>
) {
  let iterations = Math.floor(arr.length / 8);
  let startAt = arr.length % 8;
  let i = 0;

  do {
    switch (startAt) {
      case 0:
        await cb(arr[i++]);
      case 7:
        await cb(arr[i++]);
      case 6:
        await cb(arr[i++]);
      case 5:
        await cb(arr[i++]);
      case 4:
        await cb(arr[i++]);
      case 3:
        await cb(arr[i++]);
      case 2:
        await cb(arr[i++]);
      case 1:
        await cb(arr[i++]);
    }
    startAt = 0;
  } while (--iterations);
}

const first: <T>(xs: T[]) => T = xs => xs[0];
const rest: <T>(xs: T[]) => T[] = xs => xs.slice(1);

export function getChildNode(element: Element, path: number[]) {
  const children = Array.from(element.children);
  const hasParams = children.length > 0 && path.length > 0;
  const output: Element = hasParams
    ? getChildNode(children[first(path)], rest(path))
    : element;
  return output;
}
