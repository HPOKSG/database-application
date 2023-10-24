// cookieUtils.js

// Retrieve the entire cookie string
function getAllCookies() {
  return document.cookie;
}

// Split the cookie string into individual cookies
function parseCookies(cookieString) {
  return cookieString.split('; ').reduce((cookies, cookie) => {
    const [name, value] = cookie.split('=');
    cookies[name] = decodeURIComponent(value);
    return cookies;
  }, {});
}

// Get the value of a specific cookie by name
function getCookieValue(cookieName) {
  const cookies = parseCookies(getAllCookies());
  return cookies[cookieName] || null;
}
// Function to get the value of the session cookie
function getSessionCookie() {
  try {
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      if (name === 'session') {
        return decodeURIComponent(value);
      }
    }

    return null;
  } catch (error) {
    console.error('Error retrieving session cookie:', error);
    return null;
  }
}
function parseJSONCookie(cookieValue) {
  try {
    // Remove the leading 'j:' prefix if it exists
    const jsonStr = cookieValue.startsWith('j:')
      ? cookieValue.substring(2)
      : cookieValue;

    // Parse the JSON string into a JavaScript object
    const jsonObject = JSON.parse(jsonStr);

    return jsonObject;
  } catch (error) {
    // Handle any parsing errors (e.g., invalid JSON)
    console.error('Error parsing JSON cookie:', error);
    return null;
  }
}

// Export the functions as part of a module
export { getCookieValue, getSessionCookie, parseJSONCookie };
