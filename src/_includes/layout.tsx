import { PageData } from "lume/core.ts";

export default function ({ title, children, meta }: PageData) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={meta.description} />
        <meta name="keywords" content={meta.keywords} />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />

        <title>{title}</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
