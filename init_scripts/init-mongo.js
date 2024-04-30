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
  taskid: 1,
  name: 'Task1',
  description: 'Description1',
  taskTag: 'Riparazione',
  taskStatus: 'Da Eseguire',
  nomeRichiedente: 'Mario',
  cognomeRichiedente: 'Rossi',
  emailRichiedente: 'email@email.com',
  phoneNumber: '3334445566'
},
{
  taskid: 2,
  name: 'Task2',
  description: 'Description2',
  taskTag: 'Assistenza',
  taskStatus: 'In lavorazione',
  emailRichiedente: 'email@email.com'
},
{
  taskid: 3,
  name: 'Task3',
  description: 'Description3',
  taskTag: 'Feedback',
  taskStatus: 'Completata',
  ideePerMigliorare: 'Idea',
  disponibilitaAzienda: 'disponibilissimo',
  velocitaRiparazione: 'velocissimo',
  soddisfazioneRiparazione: 'soddisfattissimo',
  soddisfazioneSitoWeb: 'soddisfattissimo'
},
{
  taskid: 4,
  name: 'Task4',
  description: 'Description4',
  taskTag: 'Negozio',
  taskStatus: 'In lavorazione'
},
{
  taskid: 5,
  name: 'Task5',
  description: 'Description5',
  taskTag: 'Magazzino',
  taskStatus: 'Completata'
}
]);

db_users.users.insertOne({
  id: ObjectId(),
  email: "test@test.com",
  password_hash: "9f86d081884c7d659a2feaa0c55ad015a3bf4f1b2b0b822cd15d6c15b0f00a08", //spoiler: it's 'test'
  permissionLevel: "Manager",
  nome: "Pietro",
  cognome: "Smusi",
  dataDiNascita: new Date("1980-01-01"),
  giornoDiAssunzione: Date(),
  workTags: ["Negozio", "Riparazione", "Magazzino", "Assistenza", "Feedback"],


})