const returnString = "";

function Request(uid, stringDat)
{
  const serverAddress = "127.0.0.1";
  const serverPort = 2111;

  onst xhr = new XMLHttpRequest();
  xhr.open("POST", `http://127.0.0.1:8111/, true);
  xhr.setRequestHeader('Content-Type', 'text/plain');
  xhr.onreadystatechange = function() 
            {
                if (xhr.readyState === XMLHttpRequest.DONE) 
                {
                    if (xhr.status === 200) 
                    {
                        returnString = xhr.responseText;
                    } else 
                    {
                        alert(xhr.status);
                    }
                }
            };
            xhr.send(message);
}
