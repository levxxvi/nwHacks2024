from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")  # this sets the route to this page
def home():
	return render_template('home.html')
if __name__ == "__main__":
    app.run(host='localhost', port=9874)