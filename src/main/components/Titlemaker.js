const Titlemaker = (path) => {
  const linkOptions = ["/read/", "/create/", "/update/"];

  if(path.includes(linkOptions[0])){
    return path.replace(linkOptions[0],"");
  } else if(path.includes(linkOptions[1])){
    return path.replace(linkOptions[1],"");
  } else if (path.includes(linkOptions[2])){
    return path.replace(linkOptions[2],"");
  } else {
    return null;
  }
}

export default Titlemaker;
