Meteor.publish('recipes', function (){
	return Recipes.find({author: this.userId});
});

Meteor.publish('singleRecipe', function (id){
	check(id, String);
	return Recipes.find({_id: id});
});

Meteor.publish('sharedRecipes', function (id){
	return Recipes.find({public: true});
});