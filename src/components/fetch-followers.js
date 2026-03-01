const followersApiUrl = "https://api.github.com/users/modster/followers";

async function fetchFollowers() {
  const response = await fetch(followersApiUrl);
  const followers = await response.json();
  return followers.map((follower) => follower.login);
}

export { fetchFollowers };