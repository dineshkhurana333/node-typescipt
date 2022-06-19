import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://dinesh:dinesh123@cluster0.sjrp1dp.mongodb.net', {
  dbName: 'NodeType',
  connectTimeoutMS: 100,
}).catch(err => {
  console.log('Error in db connectivity:: ', err);
  process.exit(1)
}).then(() => {
  console.log('db connected!!')
});

export default mongoose;