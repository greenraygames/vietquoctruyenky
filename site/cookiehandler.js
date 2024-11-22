function SetTempCookie(cookieID, cookieValue) 
{
  document.cookie = `${cookieID}=${cookieValue}; path=/`;
}

function GetCookieValue(cookieID) 
{
  const cookies = document.cookie.split('; ');
  for (const cookie of cookies) 
  {
    const [key, value] = cookie.split('=');
    if (key === cookieID)
    {
      return value;
    }
  }
  return null; // Return null if the cookie is not found
}
