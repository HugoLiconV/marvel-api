import md5 from 'blueimp-md5'
import sizes from './imagesSizes';

export function getApiParams() {
  const PRIV_KEY = process.env.REACT_APP_PRIVATE_KEY;
  const PUBLIC_KEY = process.env.REACT_APP_PUBLIC_KEY;
  const ts = new Date().getTime();
  const hash = md5(ts + PRIV_KEY + PUBLIC_KEY).toString();
  return {
    apikey: PUBLIC_KEY,
    ts,
    hash
  }
}

export const isObjectEmpty = (obj) => Object.keys(obj).length === 0;

export const getImageUrl = (url, extension, size = sizes.portrait.xlarge) => `${url}/${size}.${extension}`