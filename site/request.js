function Request(uid, stringDat)
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
            xhr.send(uid + "/" + stringDat);
}
