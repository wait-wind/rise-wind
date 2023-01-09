import config from "../../../lib/config.mjs";

export default async function webfinger(req, res) {
  let origin = req.headers.host;
  origin = origin.includes("localhost")
    ? "http://" + origin
    : "https://" + origin;
  res.statusCode = 200;
  res.setHeader("Content-Type", `application/jrd+json`);
  res.end(`{  
    "subject": "${config.apAccountName}",
    "aliases": [],
    "links": [
      {
        "rel": "http://webfinger.net/rel/profile-page",
        "type": "text/html",
        "href": "${origin}/about"
      },
      {
        "rel": "self",
        "type": "application/activity+json",
        "href": "${origin}/api/activitypub/actor"
      }
    ]
  }`);
}