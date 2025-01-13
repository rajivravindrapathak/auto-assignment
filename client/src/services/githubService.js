export const fetchUserDetails = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) throw new Error('User not found');
    return response.json();
  };
  
  export const fetchUserRepos = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    if (!response.ok) throw new Error('Repositories not found');
    return response.json();
  };
  
  export const fetchUserFollowers = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}/followers`);
    if (!response.ok) throw new Error('Followers not found');
    return response.json();
  };
  