import express from "express";
const { listTeachers, getTeacherById, createTeacher } = require( "../services/teachers" );
const router = express.Router();


/* GET users listing. */
router.get('/', async function ( req, res, next ) {
	const data = await listTeachers();
	res.status( 200 ).json( data.recordset )
});

router.get('/:id', async function ( req, res, next ) {
	const id = req.params.id
	const data = await getTeacherById(id);
	res.status( 200 ).json( data.recordset )
});

router.post('/create', async function ( req, res, next ) {
	const body = req.body
	try {
		await createTeacher(body);
		res.status( 200 ).send( 'Success' )
	} catch (error) {
		res.status( 400 ).json( error )
	}
});

export default router;
