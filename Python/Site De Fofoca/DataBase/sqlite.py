import sqlite3

def InitDataBase():
    db = sqlite3.connect('./DataBase/banco.db')
    cursor = db.cursor()
    cursor.execute('''CREATE TABLE IF NOT EXISTS users(
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome TEXT,
        email TEXT,
        senha TEXT
    )''')
    cursor.execute('CREATE TABLE IF NOT EXISTS comentarios(nome TEXT,msg TEXT)')

def InsertDBUser(nome,email,senha):
    db = sqlite3.connect('./DataBase/banco.db')
    cursor = db.cursor()
    cursor.execute('INSERT INTO users(nome,email,senha) VALUES(?,?,?)',(nome,email,senha))
    db.commit()
    db.close()

def InsertDBComentarios(nome,msg):
    db = sqlite3.connect('./DataBase/banco.db')
    cursor = db.cursor()
    cursor.execute('INSERT INTO comentarios(nome,msg) VALUES(?,?)',(nome,msg))
    db.commit()
    db.close()

def SelectUser(nome,senha):
    db = sqlite3.connect('./DataBase/banco.db')
    cursor = db.cursor()
    cursor.execute('SELECT * FROM users WHERE nome=? AND senha=?',(nome,senha)) 
    result = cursor.fetchone()
    return result

def SelectComentario():
    db = sqlite3.connect('./DataBase/banco.db')
    cursor = db.cursor()
    cursor.execute('SELECT * FROM comentarios')
    msg = cursor.fetchall()
    return msg









InitDataBase()