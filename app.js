var five = require("johnny-five");
var board = new five.Board();
var firebase = require("firebase");
board.on("ready", function() {

  // Cria um led standard
  // Configura o Led de luz para o pino posição 12 do arduino
  var led = new five.Led(12);
  var rele = new five.Relay(8);

  //Passa os dados para o arduino
  
  this.repl.inject({
      led:led,
      rele:rele
  });
  
  //Configurando com o banco de dados firebase
  //Procure seus dados no banco de dados firebase que você criar 
  var firebaseConfig = {
    apiKey: "API-KEY",
    authDomain: "AUTH-DOMAIN",
    databaseURL: "URL",
    projectId: "ID",
    storageBucket: "BUCKET",
    messagingSenderId: "Message",
    appId: "APP-ID",
    measurementId: "MEASURE"
  };
  // Inicializa a Firebase
  firebase.initializeApp(firebaseConfig);
  
  var postId= '3iagsv8N8kgToW8OOs2i' ;
 
 var starCountRef = firebase.database().ref('lampada');

  

  starCountRef.on('value',function(snapshot)
  {
    let lampada = snapshot.val();
    console.log(lampada);
    if(lampada =="on")
    {
        console.log("Aqui");
        led.on();
    }else{
        console.log("Off");
        led.off();
    }
  });


});
