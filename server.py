#!/usr/bin/env python3
"""
Shindanshi Study App Server (中小企業診断士 1次試験 攻略学習OS)
Lightweight HTTP Server for PC & Mobile devices.
"""
import http.server
import socketserver
import os
import socket

PORT = 8766
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
PUBLIC_DIR = os.path.join(BASE_DIR, "public")

def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('10.255.255.255', 1))
        IP = s.getsockname()[0]
    except Exception:
        IP = '127.0.0.1'
    finally:
        s.close()
    return IP

class CustomHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=PUBLIC_DIR, **kwargs)

    def end_headers(self):
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

if __name__ == '__main__':
    local_ip = get_local_ip()
    print("=" * 65)
    print("🎓 中小企業診断士 学習アプリ (Shindanshi Study OS) 起動中...")
    print(f"💻 PC URL:      http://localhost:{PORT}")
    print(f"📱 スマホ URL:  http://{local_ip}:{PORT}")
    print("=" * 65)
    
    server = socketserver.ThreadingTCPServer(('0.0.0.0', PORT), CustomHandler)
    server.allow_reuse_address = True
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nStopping...")
        server.server_close()
