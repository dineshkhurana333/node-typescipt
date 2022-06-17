import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/nodetype', {
  connectTimeoutMS: 100,
}).catch(err => {
  console.log('Error in db connectivity:: ', err);
  process.exit(1)
}).then(()=>{
  console.log('db connected!!')
});

export default mongoose;