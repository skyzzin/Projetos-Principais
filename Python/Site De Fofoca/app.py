from flask import redirect,request,render_template,session,Flask,url_for,jsonify
from DataBase.sqlite import * 
import os 

app = Flask(__name__)
app.secret_key = '1212112'


@app.route('/')
def index():
     if 'nome' in session and session['nome'] is not None:
        return redirect(url_for('user',nome=session['nome']))
     else:
        return render_template('index.html')
   

@app.route('/login',methods=["POST","GET"])
def login():
    nome = request.form.get('nome')
    senha = request.form.get('senha')
    if nome is not None and len(nome) >= 3:
        if senha is not None and len(senha) >= 3:
            if SelectUser(nome,senha) is not None:
                print(SelectUser(nome,senha))
                session['nome'] = nome
                return redirect(url_for('user',nome=session['nome']))
            else:
                return redirect(url_for('login'))
            
    return render_template('login.html')

@app.route('/cadastro',methods=["POST","GET"])
def cadastro():
    nome = request.form.get('nome')
    email = request.form.get('email')
    senha = request.form.get('senha2')

    if nome is not None and len(nome) >= 3:
        if email is not None and len(email) >=5:
           if senha is not None and len(senha) >=5:
               InsertDBUser(nome,email,senha)
               return redirect(url_for('login'))
    
    return render_template('cad.html')

@app.route('/user/<nome>',methods=["POST","GET"])
def user(nome):
    if nome == session['nome']:
        return render_template('user.html',nome=nome)
    else:
        return render_template('login.html')

@app.route('/user/<nome>/config',methods=["POST","GET"])
def config(nome):
    if nome == session['nome']:
        return render_template('config.html')
    else:
        return redirect(url_for('login'))
    
@app.route('/avatar',methods=['POST','POST'])
def avatar():
    if request.method == 'POST':
        fname = session['nome']
        f = request.files['file']
        f.save('./static/img/avatar/'+fname+'.png')

    return redirect(url_for('index'))
    
@app.route('/img',methods=['GET',"POST"])
def img():
    for img in os.listdir('./static/img/avatar'):
        if img == session['nome']+'.png':
         print(img)
         return jsonify(img)
    
@app.route('/send',methods=['POST',"GET"])
def send():
        nome = session['nome']
        msg = request.form.get('msg')
        if msg is not  None and len(msg) >=1:
         InsertDBComentarios(nome,msg)
        
        return f'Comentario Enviado '

@app.route('/msg',methods=['POST','GET'])
def msg():
    msg = SelectComentario()
    return jsonify(msg)

@app.route('/chat',methods=['POST',"GET"])
def chat():
    if 'nome' in session and session['nome'] is not None:
        return render_template('chat.html')
    else:
        return redirect(url_for('login'))
   

  

if __name__ == '__main__':
    app.run(debug=True)