$port = 8080
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Prefixes.Add("http://127.0.0.1:$port/")
$listener.Start()
Write-Host "Server started successfully on http://localhost:$port/"

$root = "d:\Tss Web 2"

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = [System.Web.HttpUtility]::UrlDecode($request.Url.LocalPath)
        if ($urlPath -eq "/" -or $urlPath -eq "") { 
            $urlPath = "/index.html" 
        }

        $localPath = Join-Path $root ($urlPath.TrimStart('/').Replace('/', '\'))

        if (Test-Path $localPath -PathType Leaf) {
            $bytes = [System.IO.File]::ReadAllBytes($localPath)
            
            if ($localPath.EndsWith(".html")) { 
                $response.ContentType = "text/html; charset=utf-8" 
            } elseif ($localPath.EndsWith(".css")) { 
                $response.ContentType = "text/css; charset=utf-8" 
            } elseif ($localPath.EndsWith(".js")) { 
                $response.ContentType = "application/javascript; charset=utf-8" 
            } elseif ($localPath.EndsWith(".png")) { 
                $response.ContentType = "image/png" 
            } elseif ($localPath.EndsWith(".jpg") -or $localPath.EndsWith(".jpeg")) { 
                $response.ContentType = "image/jpeg" 
            } elseif ($localPath.EndsWith(".svg")) { 
                $response.ContentType = "image/svg+xml" 
            } else { 
                $response.ContentType = "text/plain; charset=utf-8" 
            }

            $response.ContentLength64 = $bytes.Length
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $buffer = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found")
            $response.ContentLength64 = $buffer.Length
            $response.OutputStream.Write($buffer, 0, $buffer.Length)
        }
        $response.Close()
    } catch {
        # ignore context errors and keep listening
    }
}
