const { initializeApp } = require('firebase/app');
const { getFirestore, doc, setDoc } = require('firebase/firestore');
const { firebaseConfig } = require('./firebase.config');
const { getOrCreateMachineId } = require('./systems.service');
const { exec } = require('child_process');

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let machineId;

async function checkNmap() {
  console.log('Checking for Nmap...');
  return new Promise((resolve) => {
    exec('nmap -v', (error, stdout, stderr) => {
      if (error) {
        console.error('Nmap is not installed or not in PATH.');
        resolve({ name: 'nmap', installed: false, error: stderr });
      } else {
        const versionMatch = stdout.match(/Nmap version ([\d.]+)/);
        const version = versionMatch ? versionMatch[1] : 'unknown';
        console.log(`Nmap is installed. Version: ${version}`);
        resolve({ name: 'nmap', installed: true, version });
      }
    });
  });
}

async function updateDependencyStatus(dependencyStatus) {
  if (!machineId) {
    console.error('Machine ID not set. Cannot update dependency status.');
    return;
  }
  const dependencyRef = doc(db, `systems/${machineId}/dependencies/${dependencyStatus.name}`);
  await setDoc(dependencyRef, dependencyStatus, { merge: true });
  console.log(`Updated ${dependencyStatus.name} status in Firestore.`);
}

async function main() {
  console.log('Starting Clever Fox Local Node Agent...');
  machineId = await getOrCreateMachineId(db);
  console.log(`Agent started with machine ID: ${machineId}`);

  const nmapStatus = await checkNmap();
  await updateDependencyStatus(nmapStatus);

  // The Firestore listener will be added in a future step.
  console.log('Agent is running and listening for commands...');
}

main();