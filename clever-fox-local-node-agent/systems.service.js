const { doc, getDoc, setDoc } = require('firebase/firestore');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs').promises;
const path = require('path');

const machineIdPath = path.join(__dirname, '.machine-id');

async function getOrCreateMachineId(db) {
  try {
    const machineId = await fs.readFile(machineIdPath, 'utf-8');
    return machineId.trim();
  } catch (error) {
    const newMachineId = uuidv4();
    await fs.writeFile(machineIdPath, newMachineId);
    
    // Also save to Firestore to ensure it's tracked
    const machineRef = doc(db, 'systems', newMachineId);
    await setDoc(machineRef, { createdAt: new Date() }, { merge: true });
    
    return newMachineId;
  }
}

module.exports = { getOrCreateMachineId };