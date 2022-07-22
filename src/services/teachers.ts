import sql from "mssql";
import {Teacher} from "../types";

const config = {
	user: 'develop',
	password: 'iaVeePkyCkhq8TZ9FHF8',
	server: 'open-school-server.database.windows.net',
	database: 'open-school-db'
};

const listTeachers = async () => {
	try {
		await sql.connect(config)
		return await sql.query`SELECT *
							   FROM [open-school-schema].[teachers]`
	} catch (error) {
		return error;
	}
}

const getTeacherById = async (id:number) =>{
	try {
		await sql.connect(config)
		return await sql.query`SELECT * FROM [open-school-schema].[teachers] where id = ${id}`
	}
	catch ( error ){
		return error;
	}
}

const createTeacher = async ({name, lastname, institute}:Teacher) =>{
	try {
		await sql.connect(config)
		return await sql.query`insert into [open-school-schema].[teachers] (name, lastname, institute) values (${name},${lastname},${institute})`
	}
	catch ( error ){
		return error;
	}
}


export {listTeachers, getTeacherById, createTeacher};
