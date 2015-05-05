Template.postItem.helpers({
    editorOptions: function() {
        return {
            lineNumbers: true,
            mode: "javascript"
        }
    },
    editorCode: function() {
        return "Code to show in editor";
    }
});

Template.postItem.rendered = function () {
  Session.set('success', null);
  Session.set('failure', null);
  Session.set('postForum', null);

  Session.set("varName", this.data.setup);
}


Template.postItem.events({
  "getEditorText": function() {
      return Session.get("varName"); // "varName" is variable name you provided to reactiveVar
  },
  'keypress #code-mirror': function(e) {
    if(e.keyCode != 13)
      return;
    run(this);
  },
  'click #run': function(){
    run(this);
  },
  'click #help': function(){
    Session.set("postForum", this._id);
  }
});

var enclose = function(functionString){
  return eval(functionString);
}

var run = function(self){

  try{
    var obj = eval(Session.get("varName"));
  }
  catch(e){
    console.log("it crashed!")
    console.log(e);
  }
  var userSolutionArr = [];
  var solutionArray = [];
  var colorArr = [];
  var solutionIndex = 1;
  var index = 1;

  $(".rotate").toggleClass("down");

  _.forEach(self.inputs, function(input){

    // var parameters = input.parameters;
    // console.log(parameters)
    var userOutput = eval(self.name + input);
    var output = eval("solutions." + self.name + input);
    // output.attr('style', 'color: #222222"')
    if(output == userOutput){
      var currentDiv = $("div.colors:nth-child("+index+")");
      currentDiv.css("background-color", "green");
      solutionIndex++;

      currentDiv.html(self.parameters+"<i class='fa fa-long-arrow-right'></i>"+ output +"  <i class='fa fa-smile-o'></i> "+ userOutput );

    }
    else{
      var currentDiv = $("div.colors:nth-child("+index+")");
      currentDiv.css("background-color", "red");

      currentDiv.html(self.parameters+"<i class='fa fa-long-arrow-right'></i>"+ output +" <i class='fa fa-frown-o'></i> "+ userOutput );

      // curentDiv.html(a+b+c)
    }
    index=index+1
  });
  console.log(index);
  console.log(solutionIndex);

  if (solutionIndex == index){
    Session.set('failure', null);
    Session.set('success', this._id);
  }else{
    Session.set('success', null);
    Session.set('failure', this._id);
  }


}
