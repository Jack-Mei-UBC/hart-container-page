from flask import Flask, render_template, url_for

app = Flask(__name__)
@app.route('/')
def home():
    return render_template('embed.html')

if __name__ == '__main__':
    app.run(port=7000) #debug=True,
    url_for('static', filename='style.css')