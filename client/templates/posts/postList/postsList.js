Template.postList.helpers({
  posts: function() {
    return Posts.find();
  }
});

Template.postList.events({
  'click .breadcrumb': function(){
    var currentCrumb = $(event.target).closest('li#ol-flex-right');
    currentCrumb.addClass("slide-right");
    console.log(currentCrumb);

    $( ".ol-flex-right" ).toggleClass("slide-right");
  }

})
