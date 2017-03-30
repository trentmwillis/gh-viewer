const DEFAULT_OPTIONS = {
  Accept: 'application/vnd.github.v3+json'
};

export default function fetchFromGithub(path) {
  let request = fetch(`https://api.github.com/${path}`, DEFAULT_OPTIONS);
  return request.then(result => result.json());
}
