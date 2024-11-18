function Request(uid, stringDat)
{
  try
  {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `http://${serverAddress}:${serverPort}/`, true);
  xhr.setRequestHeader('Content-Type', 'text/plain');
  xhr.onreadystatechange = function() 
            {
                if (xhr.readyState === XMLHttpRequest.DONE) 
                {
                    if (xhr.status === 200) 
                    {
                        Decode(xhr.responseText);
                    } 
                    else 
                    {
                        alert(xhr.status);
                    }
                }
            };
            xhr.send(uid + sss + stringDat);
  }
  catch(error)
  {
    console.log("LỖI: " + error.message);
  }
}
