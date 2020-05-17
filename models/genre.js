var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GenreSchema = new Schema(
    {
        name: {type: String, minlength:3, maxlength:100}
    }
)

GenreSchema
.virtual('url')
.get(function () {
    return '/catalog/genre/' + this_id;
});

module.exports = mongoose.model('Genre', GenreSchema);