Template.SharedRecipes.onCreated(function() {
	var self = this;
	self.autorun(function() {
		self.subscribe('sharedRecipes');
	});
});

Template.SharedRecipes.helpers({
	recipes: ()=> {
		return Recipes.find({public: true});
	}
});