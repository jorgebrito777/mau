//https://www.eclipse.org/paho/clients/js/

function Suma() {
	var x, y;
	x="5000";
	y="3000";
	message = new Paho.MQTT.Message("S"+" "+ x +" "+ y );
    message.destinationName = "jorgebito777@gmail.com/RASP";
    client.send(message);
	
}
function Resta(){	
	var x, y;
	x="5000";
	y="3000";
	message = new Paho.MQTT.Message("R"+" "+ x +" "+ y );
    message.destinationName = "jorgebito777@gmail.com/RASP";
    client.send(message);
	
}

// Create a client instance
  //client = new Paho.MQTT.Client("postman.cloudmqtt.com", 14970);
  
  client = new Paho.MQTT.Client("maqiatto.com", 8883, "web_" + parseInt(Math.random() * 100, 10));

  // set callback handlers
  client.onConnectionLost = onConnectionLost;
  client.onMessageArrived = onMessageArrived;
  var options = {
   useSSL: false,
    userName: "jorgebito777@gmail.com",
    password: "proevolution10",
    onSuccess:onConnect,
    onFailure:doFail
  }

  // connect the client
  client.connect(options);
   
  // called when the client connects
  function onConnect() {
    // Once a connection has been made, make a subscription and send a message.
    console.log("Conectado...");
	
    client.subscribe("jorgebito777@gmail.com/WEB");
    message = new Paho.MQTT.Message("hola desde la web");
    message.destinationName = "jorgebito777@gmail.com/RASP";
    client.send(message);
	
  }

  function doFail(e){
    console.log(e);
	
  }

  // called when the client loses its connection
  function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
      console.log("onConnectionLost:"+responseObject.errorMessage);
    }
  }

  // called when a message arrives
  function onMessageArrived(message) {
     text=(message.payloadString);
	 console.log(text)
	 document.getElementById("respuesta").innerHTML = text;
  }
  
