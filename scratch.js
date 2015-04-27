Projekte = new Mongo.Collection("books");
Projekte.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200,
  },
  jobnumber: {
    type: String,
    label: "JobNumber",
    max: 200
  },
  author: {
    type: String,
    label: "Author"
  },
  amount: {
    type: Number,
    label: "Amount",
  },
  Projektteam: {
        type: [Object]
    },
    "team.$.name": {
        type: String
    },

  akquise: {
        type: [Object]
    },
    "akquise.$.user": {
        type: String
    },
    "akquise.$.percent": {
        type: Number
    },
    
  billable: {
        type: [Object]
    },
    "billable.$.name": {
        type: String
    },
    "billable.$.cost": {
        type: Number
    },
  nonBillable: {
        type: [Object]
    },
    "nonBillable.$.name": {
        type: String
    },
    "nonBillable.$.cost": {
        type: Number
    }
}));


if (Meteor.isClient) {
  // counter starts at 0
  // Session.setDefault('counter', 0);

  Template.testTemplate.helpers({
     'drop': function(){
   return Projekte.find();
 }
  });

  Template.projekte.helpers({
    'project': function(){

        // Retrieve all of the data from the "PlayersList" collection
          // var test =  Projekte.find().fetch();
          // var test_cost = _.uniq(test, false, function(d) {return d.name})
          // var disctinctValues = _.pluck(test_cost, 'name')
          // console.log(disctinctValues);
          // console.log('test');

          // return test_cost;
            return Projekte.find();


    }
  });

  // Template.hello.events({
  //   'click button': function () {
  //     // increment the counter when button is clicked
  //     Session.set('counter', Session.get('counter') + 1);
  //   }
  // });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
