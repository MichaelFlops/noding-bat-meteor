if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

var myEditor, outEditor;

// The first exercise on the page
warmup1 = function(n) {
  if (n <= 21)
    return 21 - n;
  else
    return (n - 21) * 2;
} 

Template.hello.helpers({
  "editorOptions": function() {
        return {
            lineNumbers: true,
            mode: "javascript"
        }
    }, 

    "editorCode": function() {
        return "Code to show in editor";
    }

});

//Codemirror.fromTextArea(this.find("#output_ex1")).hide();

// This should create the editors
// #some_id for input editor, #some_id2 for hidden output editor
Template.hello.rendered = function() {
    myEditor = CodeMirror.fromTextArea(this.find("#some_id"), {
      lineNumbers: true,
      mode: "javascript"
    });
    outEditor = CodeMirror.fromTextArea(this.find("#some_id2"), {
        lineNumbers: true,
        mode: "javascript" // set any of supported language modes here
    });
}

// Text area appears when btn1 is clicked
$(document).ready(function(){
  $("#out_ex1_div").css('display','none');
  $("#btn1").click(function(){
            $("#out_ex1_div").fadeIn();
  });
});

// Should there be parameters here?
// Want generic functions for pulling data from and pushing data to
// each input and output editor window.
Template.hello.events({

  // getEditorText should get the reactiveVar passed to it
  "getEditorText": function(a) {
      return Session.get(a); // "varName" is variable name you provided to reactiveVar 
  },
 
  // setEditorText should set some variable passed to some string passed
  "setEditorText": function(v,s) {
      return Session.set(v, s);
  },

// On button click, do stuff, notably check output of user written
// program with the answer key. 
// TODO: Make answer text area appear after button press
// TODO: Still trying to interface the answer key with the output text area.
  'click button': function(){
      var obj = eval('{' + myEditor.getEditorText("ex1") + '}');
      for(i = 0; i < 5; i++){
        if(obj(i) == warmup1(i)){
          a = "great success! ( obj: " + obj(i) + "==  diff21: " + warmup1(i) + ")";
        }
        else{
          a = "nice try"; 
        }
        console.log("outEditor.editorCode: ", outEditor.editorCode);
        console.log(Session.get("out_ex1"));
        //editor.getEditorText();
      }
    }
  });
}


if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
