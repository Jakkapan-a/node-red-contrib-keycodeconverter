module.exports = function (RED) {
  const keyCodeToChar = require("../utils/keyCodeToChar").keyCodeToChar;
  const keyCodeToCharShift =
    require("../utils/keyCodeToChar").keyCodeToCharShift;
  let isShift = false;
  // let islCapsLock = false;
  // let isNumLock = false;
  let scannerData = "";
  let timeoutId = null;
  function KeycodeConverter(config) {
    RED.nodes.createNode(this, config);
    this.name = config.name;
    var node = this; // this refers to the node instance
    const timeoutDuration = config.timeoutDuration || 500;
    function resetTimeout() {
      if (timeoutId !== null) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        if (scannerData.length > 0) {
          console.log("Timeout reached, scanner data:", scannerData);
          node.send({ payload: { text: scannerData, status: "timeout" } }); // Uncomment if using in Node-RED
          scannerData = ""; // Reset scanner data after processing
          node.status({ fill: "red", shape: "ring", text: "time out" });
        }
      }, timeoutDuration);
    }

    node.on("input", function (msg) {
      // this.log(`Received key event: ${msg.payload.action} ${msg.payload.code}`);
      this.status({ fill: "green", shape: "dot", text: "Received key event" }); // Uncomment if using in Node-RED

      // msg.playload= {"keyCode":{"topic":"pi/key","payload":"[Circular ~]","action":"down","_msgid":"a5406a69e176d984"},"type":"keyboard","playload":20,"code":20,"action":"down"}

      const { code, action } = msg.payload;
      if (typeof code === "undefined" || typeof action === "undefined") {
        node.log(`Received invalid key event: ${action} ${code}`);
        this.status({
          fill: "red",
          shape: "dot",
          text: "Received invalid key event",
        }); // Uncomment if using in Node-RED
        return;
      }

      const event = {
        code: typeof code === "number" ? code : parseInt(code),
        action: action,
      };

      node.log(`Received key event: ${typeof action} ${typeof event.code}`);
      // key down
      if (action === "down") {
        resetTimeout();
        if (event.code === 42 || event.code === 54) {
          isShift = true;
        }
        let char = "";
        if (isShift) {
          char = keyCodeToCharShift[event.code];
        } else {
          char = keyCodeToChar[ event.code];
        }

        if (event.code === 28 ||  event.code === 96) {
          if (timeoutId !== null) {
            clearTimeout(timeoutId);
          }
          node.send({ payload: { text: scannerData, status: "success" } }); // Uncomment if using in Node-RED
          scannerData = ""; // Reset scanner data after processing
          this.status({
            fill: "green",
            shape: "dot",
            text: "Received key event",
          }); // Uncomment if using in Node-RED
          return;
        }
        if (!char) {
          return;
        }
        scannerData += char;
      } else if (action === "up") {
        if (event.code  === 42 || event.code  === 54) {
          isShift = false;
        }
      }
    });
  }
  RED.nodes.registerType("key-code-converter", KeycodeConverter);
};
