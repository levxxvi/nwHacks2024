
# pip3 install spotipy Flask Flask-Session
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from flask import Flask ,redirect,request, render_template
import os
from datetime import datetime, timedelta


app = Flask(__name__)
app.secret_key = 'sdaefascsasv'
app.config['CLIENT_ID'] = '9f8720c821a34ee7b1b881bea3257a50'
app.config['CLIENT_SECRET'] = 'da562de7e4394d559b22fa455bd7e005'
app.config['REDIRECT_URI'] = 'http://localhost:5000/callback'
app.config['AUTH_URL'] = 'https://accounts.spotify.com/authorize'
app.config['TOKEN_URL'] = 'https://accounts.spotify.com/api/token'
app.config['API_BASE_URL'] = 'https://api.spotify.com/v1'

auth_manager = spotipy.oauth2.SpotifyOAuth(app.config['CLIENT_ID'],
                                               app.config['CLIENT_SECRET'],
                                               app.config['REDIRECT_URI'],
                                               scope='user-read-currently-playing playlist-modify-private',
                                               show_dialog=True)

@app.route('/')
def index():
    return render_template('home.html')

@app.route('/login')
def login():
    url_args = auth_manager.get_authorize_url()

    return redirect(url_args)

@app.route('/callback')
def callback():

    if request.args.get("code"):
        
        auth_manager.get_access_token(request.args.get("code"))
        spotify = spotipy.Spotify(auth_manager=auth_manager)

        return "hehe<a href='/login'>asdasd</a>"
    
    return render_template('home.html')

@app.route('/recentlyplayed')
def recentlyplayed():
    recently_played = auth_manager.current_user_recently_played(limit=500)

    past_day_timestamp = (datetime.now() - timedelta(days=1)).timestamp()

    recently_played_in_past_day = [track for track in recently_played['items'] if track['played_at'] > past_day_timestamp]
    return()

if __name__ == "__main__":
    app.run()
    