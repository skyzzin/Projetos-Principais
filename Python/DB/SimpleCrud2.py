import pymysql

def CreateTableDB():
    banco = pymysql.connect(host='localhost', user='root', password='', database='banco')
    cursor = banco.cursor()
    cursor.execute('''
        CREATE TABLE usuarios(
        id INT(10) PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(30),
        email VARCHAR(30),
        senha VARCHAR(20)
        )
    ''')
    banco.commit()
    banco.close()

def InsertValuesDB(nome,email,senha):
    banco = pymysql.connect(host='localhost', user='root', password='', database='banco')
    cursor = banco.cursor()
    cursor.execute('INSERT INTO usuarios(nome,email,senha) VALUES(%s,%s,%s)', (nome, email, senha))
    banco.commit()
    banco.close()

def UpdateValuesDB(email,senha,newsenha):
    banco = pymysql.connect(host='localhost', user='root', password='', database='banco')
    cursor = banco.cursor()
    cursor.execute('SELECT * FROM usuarios WHERE email=%s AND senha=%s',(email,senha))
    id = cursor.fetchone()[0]
    cursor.execute('UPDATE usuarios set senha=%s WHERE id=%s',(newsenha,id))
    banco.commit()
    banco.close()


def DeleteValuesDB(email,senha):
    banco = pymysql.connect(host='localhost', user='root', password='', database='banco')
    cursor = banco.cursor()
    cursor.execute('SELECT * FROM usuarios WHERE email=%s AND senha=%s',(email,senha))
    id = cursor.fetchone()[0]
    cursor.execute('DELETE FROM usuarios WHERE id=%s', (id))
    banco.commit()
    banco.close()

#CreateTableDB()
#InsertValuesDB('douglas','douglaspe982@gmail.com','1509')
#DeleteValuesDB('douglaspe982@gmail.com','1509')
#UpdateValuesDB('douglaspe982@gmail.com','3121','1509')