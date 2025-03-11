async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/marcostwelve/personal-portfolio/refs/heads/main/src/data/profile.json';
    const fetching = await fetch(url);
    return await fetching.json();
}