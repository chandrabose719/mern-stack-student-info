import axios from 'axios';

let baseUrl = "http://localhost:3001";

async function postExec(url, data){
	return await axios.post(baseUrl + url, data)
	.then(res => { 
		// console.log("response: ", res);
		return res.data;
	})
	.catch(err => err.json())
	.catch(err => { 
		console.log("err: ",err) 
		return err;
	})
}

async function getExec(url){
	return await axios.get(baseUrl + url)
	.then(res => { 
		// console.log("response: ", res);
		return res.data;
	})
	.catch(err => err.json())
	.catch(err => { 
		console.log("err: ",err) 
		return err;
	})
}

export async function getAllStudent() {
	return await getExec("/student/all");
}

export async function getOneStudent(id) {
	return await getExec("/student/"+id);
}

export async function createNewStudent(data) {
	return await postExec("/student/new", data);
}

export async function editStudent(data, id) {
	return await postExec("/student/edit/"+id, data);
}
