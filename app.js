var five = require("johnny-five");
var board = new five.Board();
var firebase = require("firebase");
board.on("ready", function() {

  // Create a standard `led` component instance
  // Configura o Led de luz para o pino posição 12 do arduino
  var led = new five.Led(12);
  var rele = new five.Relay(8);

  //Passa os dados para o arduino
  this.repl.inject({
      led:led,
      rele:rele
  });
  
  //Configurando com o banco de dados firebase
  var firebaseConfig = {
    apiKey: "AIzaSyDB9BCCL6GbuSVwWELp6hqRGGaIgJ0wg10",
    authDomain: "iot-lampada-66ce3.firebaseapp.com",
    databaseURL: "https://iot-lampada-66ce3.firebaseio.com",
    projectId: "iot-lampada-66ce3",
    storageBucket: "iot-lampada-66ce3.appspot.com",
    messagingSenderId: "687342616810",
    appId: "1:687342616810:web:e319d81bb2650c9fc41793",
    measurementId: "G-T03G0L90ES"
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
