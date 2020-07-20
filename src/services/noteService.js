const domain = '127.0.0.1';

class NoteService {
	fetchNotes() {
		return new Promise((resolve, reject) => {
			wx.request({
				url: `http://${domain}:3000/notes`,
				dataType: 'json',
				success(response) {
					if (response.statusCode === 200) {
						const notes = response.data;
						resolve({ notes: notes });
					} else {
						reject(response);
					}
				},
				fail() {
					// eslint-disable-next-line prefer-promise-reject-errors
					reject();
				}
			});
		});
	}

	fetchNote(id) {
		return new Promise((resolve) => {
			wx.request({
				url: `http://${domain}:3000/notes/${id}`,
				dataType: 'json',
				success(response) {
					const note = response.data;
					resolve({ note: note });
				},
				fail() {}
			});
		});
	}

	createNote(note) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: `http://${domain}:3000/notes`,
				method: 'POST',
				data: JSON.stringify(note),
				success() {
					resolve();
				},
				fail() {
					// eslint-disable-next-line prefer-promise-reject-errors
					reject();
				}
			});
		});
	}

	updateNote(note) {
		return new Promise((resolve, reject) => {
			wx.request({
				url: `http://${domain}:3000/notes/${note.id}`,
				method: 'PUT',
				data: JSON.stringify(note),
				success() {
					resolve();
				},
				fail() {
					// eslint-disable-next-line prefer-promise-reject-errors
					reject();
				}
			});
		});
	}

	deleteNotes(ids) {
		return Promise.all(
			ids.map((id) => {
				return new Promise((resolve) => {
					wx.request({
						url: `http://${domain}:3000/notes/${id}`,
						method: 'DELETE',
						success({ statusCode }) {
							if (statusCode === 200) {
								resolve();
							}
						}
					});
				});
			})
		);
	}
}

const noteService = new NoteService();
export { noteService };
