
# pip3 install spotipy Flask Flask-Session
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from flask import Flask
import os

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(64)
app.config['SESSION_TYPE'] 
app.config['SESSION_FILE_DIR'] 


@app.route('/')
def index():

@app.route('/login')
def login():
    scope