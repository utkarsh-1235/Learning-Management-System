const {Router} = require('express');
const courseRoute = Router();

const {getAllCourses, getLecturesById, createCourse, updateCourse, removeCourse} = require('../Controllers/courseController');
const { isLoggedIn, authorizeSubscriber, authorizedRoles } = require('../Middleware/auth.middleware');
const upload = require('../Middleware/multer.middleware');

courseRoute.route('/')
           .get(getAllCourses)
           .post(isLoggedIn,
                    authorizedRoles('ADMIN'),
                    upload.single('thumbnail'),
                    createCourse);
courseRoute.route('/:id')
           .get(isLoggedIn, 
                authorizeSubscriber, 
                getLecturesById)
           .put(isLoggedIn,
                authorizedRoles('ADMIN'),
                updateCourse)
           .delete(isLoggedIn,
                   authorizedRoles('ADMIN'),
                   removeCourse
            )
           .post(isLoggedIn,
                 authorizedRoles('ADMIN'),
                 upload.single('lecture'),

               );


module.exports = courseRoute;
