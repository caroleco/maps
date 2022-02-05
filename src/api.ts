const ACCESS_TOKEN_MAP_BOX =
"pk.eyJ1IjoiY2Fyb2xpbmVmZXJpZ2F0byIsImEiOiJja3o4ejczc2gxcGJiMm9temMxYjc1aXd5In0.UO0xaiDDMgZfwjQuWOZ1Lw";

export const fetchLocalMapBox = (local: string) =>
fetch(
  `https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?${ACCESS_TOKEN_MAP_BOX}`
).then(response => response.json()).then(data => data);

export const fetchUserGithub = (login: string) =>
fetch(`https://api.github.com/users/${login}`).then(response => response.json()).then(data => data);