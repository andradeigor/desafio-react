const getInicialData = (rawdata) => {
  const data = rawdata;
  let newdata = [];
  data.forEach((dat) => {
    const temp = {
      id: dat.id,
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
  newdata.sort((a, b) => {
    return b.stars - a.stars;
  });

  return newdata;
};

export default getInicialData;
