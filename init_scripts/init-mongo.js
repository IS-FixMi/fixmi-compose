// Example
//db.createCollection("users");
//db.users.insertMany([
//  { name: "John", age: 30 },
//  { name: "Jane", age: 25 }
//]);

db = db.getSiblingDB('Tasks');

db.createCollection("tasks");
db.tasks.insertMany([
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
