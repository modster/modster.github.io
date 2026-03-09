const followingApiUrl = "https://api.github.com/users/modster/following"

async function fetchFollowing() {
  const response = await fetch(followingApiUrl)
  const following = await response.json()
  return following.map((user) => user.login)
}

export { fetchFollowing }
