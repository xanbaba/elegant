from http.server import SimpleHTTPRequestHandler, HTTPServer

class SPARequestHandler(SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path != "/" and not self.path.startswith("/resources"):  # Adjust static folder if needed
            self.path = "/index.html"  # Redirect everything to index.html
        return super().do_GET()

port = 8080
server = HTTPServer(('localhost', port), SPARequestHandler)
print(f"Serving on http://localhost:{port}")
server.serve_forever()
