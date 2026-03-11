from flask import Flask, render_template, request
import json

app = Flask(__name__)

with open('users.json') as f:
    users = json.load(f)

@app.route('/')
def login():
    return render_template('login.html')


@app.route('/dashboard', methods=['POST'])
def profile():
    name = request.form['name']
    dob = request.form['dob']
    password = request.form['password']

    for user in users:
        if user['name'] == name and user['dob'] == dob and user['password'] == password:
            return render_template('dashboard.html', user=user)

    return "❌ Please enter valid name, DOB and password"


if __name__ == '__main__':
    app.run(debug=True)

