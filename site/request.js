function Request(uid, data)
{
  const xhr = new XMLHttpRequest();
  xhr.open("POST", '127.0.0.1:8111', true); //đổi ip, port ở đây cho hợp với server.
  xhr.setRequestHeader('Content-Type', 'text/plain');

  xhr.onreadystatechange = function() 
  {
    if (xhr.readyState === XMLHttpRequest.DONE)
      {
        if (xhr.status === 200) 
        {
           return xhr.responseText;
        }
        else 
        {
          alert("Error: " + xhr.status);
        }
      }
  };  
  xhr.send(message);
}
