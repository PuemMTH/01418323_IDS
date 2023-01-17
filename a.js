const fs = require("fs");
// fetch("https://discord.com/api/v9/channels/826256110918172672/messages&limit=99", {

const fetch_discord_message = async (before) => {
  fetch(
    `https://discord.com/api/v9/channels/826256110918172672/messages?before=${before}&limit=99`,
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        authorization:
          "",
        "sec-ch-ua":
          '"Not_A Brand";v="99", "Microsoft Edge";v="109", "Chromium";v="109"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Windows"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "x-debug-options": "bugReporterEnabled",
        "x-discord-locale": "th",
        "x-super-properties":
          "",
        cookie:
          "__dcfduid=5e3e14d091ad11ed9c5d61ef99811da7; __sdcfduid=5e3e14d191ad11ed9c5d61ef99811da7e04418b951c810baf204fdf7f8ff1e57c0b003e632380a609742da5f5593c58e; __cfruid=65fcd705004360d67d61318b469c161677f81cb7-1673936957; _gcl_au=1.1.1880051577.1673936960; OptanonConsent=isIABGlobal=false&datestamp=Tue+Jan+17+2023+13%3A29%3A20+GMT%2B0700+(Indochina+Time)&version=6.33.0&hosts=&landingPath=https%3A%2F%2Fdiscord.com%2F&groups=C0001%3A1%2CC0002%3A1%2CC0003%3A1; locale=th; __cf_bm=WtpIETCK8I6TJLB3Yu4N1rx5mUco.hh.qw1xGETu2qc-1673948783-0-AWqO5oNp09O6xEXlTSryfYevPH/DJUx5/X1tuoOepv4dBdmNjKtOh3bVxp5d4ilw6Fz0lR9Mx4wySFBkCJ4/f74i6HBv9eYQ8LGMS/JP+cM25FCBZclCkm7lczS022cxhys8fy7gqzQc2RHlaj81Lo0=",
        Referer:
          "https://discord.com/channels/826099393694400574/826256110918172672",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: null,
      method: "GET",
    }
  )
    .then((res) => res.json())
    .then((data) => {
      const da = data.map((d) => {
        return {
          id: d.id,
          name: d.author.username,
          content: d.content,
          timestamp: d.timestamp,
        };
      });
      fs.appendFileSync(
        "data.csv",
        da
          .map((d) => {
            return `${d.id},${d.name},${d.content},${d.timestamp}`;
          })
          .join("\n")
      );
    });
};

// fetch_discord_message("1064126079356383301");


let date = "1064126079356383301"

for (let i = 0; i < 100; i++) {
  fetch_discord_message(date);
  date = date - 1;
}