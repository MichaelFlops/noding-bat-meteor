Template.sidebar.helpers({
	//var item = Router.route('/posts/:_id', {name: '.show'})
	post:function(){
		var name = Router.current().params._name;
		var post = Posts.findOne({name:name});
		return post;
	},
  postForum: function(){
    return Session.get('postForum');
  },
  solForum: function(){
  	return Session.get('forum');
  },
	success: function(){
		return Session.get('success');
	},
	failure: function(){
		return Session.get('failure')
	}
});
