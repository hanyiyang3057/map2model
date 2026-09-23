#!/usr/bin/env python3
"""Serve the recovered Map2Model static app with SPA route fallback."""

from http.server import HTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
from socketserver import ThreadingMixIn
import sys


ROOT = Path(__file__).resolve().parent


class Map2ModelHandler(SimpleHTTPRequestHandler):
    def translate_path(self, path):
        request_path = path.split("?", 1)[0].split("#", 1)[0]
        translated = Path(super().translate_path(path))

        if translated.exists():
            return str(translated)

        suffix = Path(request_path).suffix
        if suffix:
            return str(translated)

        return str(ROOT / "index.html")


class ThreadingHTTPServer(ThreadingMixIn, HTTPServer):
    daemon_threads = True


def main():
    port = 8080
    if len(sys.argv) > 1:
        port = int(sys.argv[1])

    server = ThreadingHTTPServer(("127.0.0.1", port), Map2ModelHandler)
    print("Serving Map2Model local reconstruction at http://127.0.0.1:%d/" % port)
    print("Press Ctrl+C to stop.")
    server.serve_forever()


if __name__ == "__main__":
    main()
