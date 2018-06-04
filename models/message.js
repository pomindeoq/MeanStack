const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    content: {type: String, required: true},
    user:  {type:mongoose.Schema.Types.ObjectId, ref: 'User'}   
});

module.exports = mongoose.model('Message', messageSchema);