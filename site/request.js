function Request(uid, stringDat)
{
  try
  {
  const xhr = new XMLHttpRequest();
  xhr.open("POST", `https://${serverAddress}:${serverPort}/`, true);
  xhr.setRequestHeader('Content-Type', 'text/plain; charset=UTF-8');
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
                        console.log("Request_Chú ý 01: " + xhr.status);
                    }
                }
            };
            xhr.send(uid + sss + stringDat);
  }
  catch(error)
  {
    console.log("Request_Lỗi 01: " + error.message);
  }
}
