function Request(uid, stringDat)
{
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "http://127.0.0.1:8111/", true);
  xhr.setRequestHeader('Content-Type', 'text/plain');
  xhr.onreadystatechange = function() 
            {
                if (xhr.readyState === XMLHttpRequest.DONE) 
                {
                    if (xhr.status === 200) 
                    {
                        respondStringA1 = xhr.responseText;
                    } else 
                    {
                        alert(xhr.status);
                    }
                }
            };
            xhr.send(uid + "/" + stringDat);
}
