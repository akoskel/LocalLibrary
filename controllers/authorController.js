var Author = require('../models/author');

// Näytä lista authoreista
exports.author_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Author list');
};

// Näytä authorin tiedot
exports.author_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Näytä authorin luomis formi
exports.author_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET');
};

// Authorin luomis formin lähettäminen
exports.author_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST');
};

// Näytä authorin poisto formi
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET');
};

// Authorin poisto formin lähettäminen
exports.author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST');
};

// Näytä authorin päivittämis formi
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET');
};

// Authorin päivittämis formin lähettäminen
exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST');
};