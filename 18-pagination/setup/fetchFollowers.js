const fetchFollowers = async (page) => {
  const url = new URL("https://api.github.com/users/john-smilga/followers");
  const followersPerPage = 10;
  url.searchParams.append("per_page", followersPerPage);

  if (page) {
    url.searchParams.append("page", page);
  }

  const followersJSON = await fetch(url.href);
  const followers = await followersJSON.json();
  return followers;
};

export default fetchFollowers;
