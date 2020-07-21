import Vuex from '@wepy/x';
import mutationHandler from './mutation-handler';

export default new Vuex.Store({
	state: {
		notes: []
	},
	mutations: {
		[mutationHandler.updateNotes]: (state, { updatedNotes }) => {
			state.notes = updatedNotes;
		}
	},
	action: {}
});
