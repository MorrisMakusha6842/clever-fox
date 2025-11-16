import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import {exec} from "child_process";

admin.initializeApp();

export const runNmapScan = functions.https.onRequest(async (request, response) =>
{
  const {commandId, target} = request.body;

  if (!commandId || !target) {
    response.status(400).send("Missing 'commandId' or 'target' in request body.");
    return;
  }

  try {
    const commandDoc = await admin.firestore()
        .collection("nmap_commands").doc(commandId).get();
    if (!commandDoc.exists) {
      response.status(404).send(`Command with ID '${commandId}' not found.`);
      return;
    }

    const commandTemplate = commandDoc.data()?.command;
    if (!commandTemplate) {
      response.status(500)
          .send("Command template is missing in the database document.");
      return;
    }

    const nmapCommand = `${commandTemplate} ${target}`;

    exec(nmapCommand, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        // Send a server error response
        response.status(500).send(`Error executing Nmap: ${stderr}`);
        return;
      }

      // If successful, send the command's output back to the frontend
      console.log(`stdout: ${stdout}`);
      response.status(200).send(stdout);
    });
  } catch (dbError) {
    console.error("Database error:", dbError);
    response.status(500)
        .send("Failed to retrieve Nmap command from Firestore.");
  }
});
