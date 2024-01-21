
# pip3 install spotipy Flask Flask-Session
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from flask import Flask ,request
from flask_session import Session
import os
import redirect, auth_manager

app = Flask(__name__)
app.config['SECRET_KEY'] = os.urandom(64)
app.config['SESSION_SECRET'] =
app.config['SESSION_TYPE'] =
app.config['SESSION_FILE_DIR'] 
Session(app)

@app.route('/')
def index():
#html redirect to login page
    return
@app.route('/login')
def login():

    auth_manager = spotipy.oauth2.SpotifyOAuth(scope='user-read-currently-playing playlist-modify-private',
                                               redirect_uri='',
                                               show_dialog=True)
    
    auth_url = auth_manager.get_authorize_url()

    return redirect(auth_url)

@app.route('/callback')
def callback():

    if request.args.get("code"):
        auth_manager.get_access_token(request.args.get("code"))


        spotify = spotipy.Spotify(auth_manager=auth_manager)

        return redirect('')

    