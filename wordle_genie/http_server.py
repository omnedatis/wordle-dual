# -*- coding: utf-8 -*-
"""
Created on Fri May 17 20:34:33 2019

@author: Ting-Hsu Chang
@e-mail: KeroppiMashimaro@gmail.com
"""

import threading
from http import HTTPStatus
from http.server import HTTPServer, SimpleHTTPRequestHandler
from socketserver import ThreadingMixIn


STATUS_OK = 100
STATUS_FAILED = -1

class CMDHTTPRequestHandlerTemplate:
    def create(cmd_handler):
        class CMDHTTPRequestHandler(SimpleHTTPRequestHandler):
            def do_POST(self):
                length = self.headers.get('content-length')
                try:
                    nbytes = int(length)
                except (TypeError, ValueError):
                    nbytes = 0
                if self.command.lower() == "post" and nbytes > 0:
                    cmd_info = self.rfile.read(nbytes)
                else:
                    cmd_info = None
                result = cmd_handler(cmd_info)

                self.send_response(HTTPStatus.OK, "Script output follows")
                self.send_header('Content-type', 'application/json')
                self.end_headers()
                self.log_message("CMD executed OK")
                self.wfile.write(result)
        return CMDHTTPRequestHandler

class ServerFactory:
    class ThreadingMixInTemplate:
        def create(limited_threads_number=0):
            if limited_threads_number > 0:
                class LimitedThreadingMixIn(ThreadingMixIn):
                    MAX_THREAD_NUMBER = limited_threads_number
                    def process_request(self, request, client_address):
                        if threading.activeCount() < self.MAX_THREAD_NUMBER:
                            super(LimitedThreadingMixIn, self).process_request(request, client_address)
                        else:
                            self.handle_error(request, client_address)
                            self.shutdown_request(request)
                return LimitedThreadingMixIn
            else:
                return ThreadingMixIn

    @classmethod
    def create(cls, ip_addr, port_number, cmd_handler, is_multithread=True, limited_threads_number=0):
        request_handler = CMDHTTPRequestHandlerTemplate.create(cmd_handler=cmd_handler)
        if is_multithread == True:
            thread_mix_in = cls.ThreadingMixInTemplate.create(limited_threads_number)
            class ThreadedHTTPServer(thread_mix_in, HTTPServer):
                """Handle requests in a separate thread."""
            return ThreadedHTTPServer((ip_addr, port_number), request_handler)
        else:
            return HTTPServer((ip_addr, port_number), request_handler)

