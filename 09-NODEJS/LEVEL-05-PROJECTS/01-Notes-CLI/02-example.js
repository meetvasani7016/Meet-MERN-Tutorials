const fs = require('fs');
const path = require('path');

const FILE_PATH = path.join(__dirname, 'notes.json');

// Helper to load notes
const loadNotes = () => {
  try {
    const dataBuffer = fs.readFileSync(FILE_PATH);
    return JSON.parse(dataBuffer.toString());
  } catch (e) {
    return [];
  }
};

// Helper to save notes
const saveNotes = (notes) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(notes, null, 2));
};

const command = process.argv[2];
const args = process.argv.slice(3);

const parseArgs = () => {
  const params = {};
  args.forEach(arg => {
    const [key, val] = arg.replace('--', '').split('=');
    params[key] = val;
  });
  return params;
};

const params = parseArgs();
const notes = loadNotes();

if (command === 'add') {
  if (!params.title || !params.body) {
    console.log("Error: Please provide --title and --body");
  } else {
    notes.push({ title: params.title, body: params.body });
    saveNotes(notes);
    console.log("Note added successfully!");
  }
} else if (command === 'list') {
  console.log("--- My Notes ---");
  notes.forEach((note, index) => {
    console.log(`${index + 1}. ${note.title}: ${note.body}`);
  });
} else if (command === 'delete') {
  if (!params.title) {
    console.log("Error: Please specify note --title to delete");
  } else {
    const filtered = notes.filter(n => n.title !== params.title);
    saveNotes(filtered);
    console.log("Note deleted!");
  }
} else {
  console.log("Commands available: add, list, delete");
}