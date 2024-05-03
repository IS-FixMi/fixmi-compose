// Example
//db.createCollection("users");
//db.users.insertMany([
//  { name: "John", age: 30 },
//  { name: "Jane", age: 25 }
//]);

db_tasks = db.getSiblingDB('Tasks');
db_users = db.getSiblingDB('Users');
db_tasks.createCollection("tasks");
db_users.createCollection("users");

db_tasks.tasks.insertMany([
{
  taskid: ObjectId(),
  name: 'Task1',
  description: 'Description1',
  taskTag: 'Riparazione',
  taskStatus: 'Da Eseguire',
  nomeRichiedente: 'Mario',
  cognomeRichiedente: 'Rossi',
  emailRichiedente: 'email@email.com',
  phoneNumber: '3334445566',
  assignedTo: '663159d0ec263e41dc9d9f96`
},
{
  taskid: ObjectId(),
  name: 'Task2',
  description: 'Description2',
  taskTag: 'Assistenza',
  taskStatus: 'In Lavorazione',
  emailRichiedente: 'email@email.com'
  assignedTo: '663159d0ec263e41dc9d9f96`
},
{
  taskid: ObjectId(),
  name: 'Task3',
  description: 'Description3',
  taskTag: 'Feedback',
  taskStatus: 'Completata',
  ideePerMigliorare: 'Idea',
  disponibilitaAzienda: 'disponibilissimo',
  velocitaRiparazione: 'velocissimo',
  soddisfazioneRiparazione: 'soddisfattissimo',
  soddisfazioneSitoWeb: 'soddisfattissimo',
  assignedTo: '663159d0ec263e41dc9d9f96`
},
{
  taskid: ObjectId(),
  name: 'Task4',
  description: 'Description4',
  taskTag: 'Negozio',
  taskStatus: 'In Lavorazione',
  assignedTo: 'e@e.com`
},
{
  taskid: ObjectId(),
  name: 'Task5',
  description: 'Description5',
  taskTag: 'Magazzino',
  taskStatus: 'Completata',
  assignedTo: '663159d0ec263e41dc9d9f96`
},

{
  taskid: ObjectId(),
  name: 'Task6',
  description: 'Description6',
  taskTag: 'Magazzino',
  taskStatus: 'In Pausa',
  assignedTo: '663159d0ec263e41dc9d9f96`
},
{
  taskid: ObjectId(),
  name: 'Task7',
  description: 'Description7',
  taskTag: 'Magazzino',
  taskStatus: 'Da Eseguire',
  assignedTo: '663159d0ec263e41dc9d9f96`
]);

db_users.users.insertMany([
{
  id: ObjectId(),
  email: "test@test.com",
  password_hash: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08", //spoiler: it's 'test'
  permissionLevel: "Manager",
  nome: "Pietro",
  cognome: "Smusi",
  dataDiNascita: new Date("1980-01-01"),
  giornoDiAssunzione: Date(),
  workTags: ["Negozio", "Riparazione", "Magazzino", "Assistenza", "Feedback"],


},
{
  id: ObjectId(),
  email: "e@e.com",
  password_hash: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08", //spoiler: it's 'test'
  permissionLevel: "Dipendente",
  nome: "Enrico",
  cognome: "Vasaio",
  dataDiNascita: new Date("1999-06-06"),
  giornoDiAssunzione: Date(),
  workTags: ["Negozio", "Magazzino", "Assistenza"],
},
{
  id: ObjectId(),
  email: "cliente@hotmail.com",
  password_hash: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08", //spoiler: it's 'test'
  permissionLevel: "Cliente",
}

);
