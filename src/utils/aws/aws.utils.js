export const putPhoto = (photoName) =>
  `https://m2wgesh58f.execute-api.us-east-1.amazonaws.com/dev/csufconnect-images-bucket/${photoName}`;

export const getPhoto = (photoName) =>
  `https://csufconnect-images-bucket.s3.amazonaws.com/${photoName}`;
