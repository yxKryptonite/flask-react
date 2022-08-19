import time
from flask import Flask, request
from flask_cors import CORS

server = Flask(__name__) #创建一个flask对象
CORS(server)

@server.route('/') #设置路由
def index():
    return "<h1>Hello World!</h1>"

@server.route('/time')
def get_current_time():
    return {'time': time.time()}

@server.route('/data')
def get_data(idx):
    import pandas as pd
    df = pd.read_csv('assets/data.csv')
    data = df.iloc[idx]
    return data