"use strict";

const fs = require("fs");
const getInicialData = () => {
  const rawdata = fs.readFileSync("repos.json");
  const data = JSON.parse(rawdata);
  let newdata = [];
  data.map((dat) => {
    const temp = {
      title: dat.name,
      titlelink: dat.html_url,
      description: dat.description,
      stars: dat.stargazers_count,
      updated: null,
    };
    const time1 = new Date().getTime();
    const time2 = new Date(dat.updated_at).getTime();
    const day = 1000 * 60 * 60 * 24;
    temp.updated = Math.floor((time1 - time2) / day);
    newdata.push(temp);
  });
  return newdata;
};

console.log(getInicialData());
