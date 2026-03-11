from flask import Flask, render_template, request, redirect, url_for, session
import json

app = Flask(__name__)
app.secret_key = "birthdaysecret"   # required for session

with open('users.json') as f:
    users = json.load(f)


@app.route('/')
def home():
    return render_template('index.html')


@app.route('/login')
def login():
    return render_template('login.html')


@app.route('/dashboard', methods=['POST'])
def dashboard():
    name = request.form['name']
    dob = request.form['dob']
    password = request.form['password']

    for user in users:
        if user['name'] == name and user['dob'] == dob and user['password'] == password:
            session['user'] = user['name']   # store user in session
            return render_template('dashboard.html', user=user)

    return "❌ Invalid login details"


@app.route('/profile')
def profile():
    if 'user' in session:
        return render_template('profile1.2.html')
    return redirect(url_for('login'))


@app.route('/logout')
def logout():
    session.pop('user', None)
    return redirect(url_for('home'))


if __name__ == '__main__':
    app.run(debug=True)