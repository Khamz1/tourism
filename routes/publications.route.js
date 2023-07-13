const Router  = require ('express');
const {publicationController} = require('../controllers/publications.controller');
const authMiddleware  = require('../models/middlewares/auth.middleware.js');
const imgMW = require('../models/middlewares/multer.middleware')

const router  = Router();
router.get('/publications', publicationController.getPublcation );
router.get('/publicationsById/:id',authMiddleware, publicationController.getPublicationById)
router.post('/addPublications', imgMW.array("img", 5), publicationController.postPublications);
router.patch('/changePublications/:id',imgMW.single('img'), authMiddleware, publicationController.patchPublications);
router.delete('/deletePublications/:id', authMiddleware, publicationController.deletePublication);

module.exports  = router